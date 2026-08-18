import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import { mockProducts, categories } from '@/data/mockProducts';

// Simple Levenshtein for typo correction
function levenshtein(a: string, b: string): number {
  const m = a.length, n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
  return dp[m][n];
}

const allKeywords = Array.from(
  new Set(
    mockProducts.flatMap((p) => [
      p.title.toLowerCase(),
      p.category.toLowerCase(),
      ...p.title.toLowerCase().split(/\s+/),
    ])
  )
);

const Browse = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';
  const searchQuery = searchParams.get('search') || '';
  const [sortBy, setSortBy] = useState<'newest' | 'price-low' | 'price-high' | 'nearest'>('newest');
  const [condition, setCondition] = useState<'all' | 'new' | 'used'>('all');
  const [showFilters, setShowFilters] = useState(false);

  const { filtered, suggestion } = useMemo(() => {
    let result = [...mockProducts];
    let suggestion = '';
    const q = searchQuery.trim().toLowerCase();

    if (q) {
      const matches = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );

      if (matches.length > 0) {
        result = matches;
      } else {
        // Typo correction
        let bestWord = '';
        let bestDist = Infinity;
        for (const kw of allKeywords) {
          const d = levenshtein(q, kw);
          if (d < bestDist && d <= Math.max(2, Math.floor(kw.length / 3))) {
            bestDist = d;
            bestWord = kw;
          }
        }
        if (bestWord) {
          suggestion = bestWord;
          result = result.filter(
            (p) =>
              p.title.toLowerCase().includes(bestWord) ||
              p.category.toLowerCase().includes(bestWord) ||
              p.description.toLowerCase().includes(bestWord)
          );
        } else {
          result = [];
        }
      }
    }

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (condition !== 'all') {
      result = result.filter((p) => p.condition === condition);
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'nearest':
        result.sort((a, b) => a.distance - b.distance);
        break;
      default:
        break;
    }

    return { filtered: result, suggestion };
  }, [activeCategory, sortBy, condition, searchQuery]);

  const handleSuggestionClick = (word: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('search', word);
    setSearchParams(params);
  };

  const clearSearch = () => {
    const params = new URLSearchParams(searchParams);
    params.delete('search');
    setSearchParams(params);
  };

  const pageTitle = searchQuery
    ? `RESULTS FOR "${searchQuery.toUpperCase()}"`
    : activeCategory === 'all'
      ? 'ALL PRODUCTS'
      : categories.find((c) => c.id === activeCategory)?.name || 'PRODUCTS';

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
          {pageTitle}
        </h1>

        {searchQuery && (
          <button
            onClick={clearSearch}
            className="pixel-btn bg-secondary text-foreground text-sm mb-4"
          >
            ✕ CLEAR SEARCH
          </button>
        )}

        {suggestion && (
          <div className="mb-4 px-4 py-3 border-2 border-accent bg-accent/10 font-body text-sm">
            Did you mean:{' '}
            <button
              onClick={() => handleSuggestionClick(suggestion)}
              className="font-bold text-accent underline hover:no-underline"
            >
              {suggestion}
            </button>
            ?
          </div>
        )}

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => { const p = new URLSearchParams(searchParams); p.delete('category'); setSearchParams(p); }}
            className={`pixel-btn text-base ${activeCategory === 'all' ? 'bg-accent text-accent-foreground' : 'bg-card text-foreground'}`}
          >
            ALL
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { const p = new URLSearchParams(searchParams); p.set('category', cat.id); setSearchParams(p); }}
              className={`pixel-btn text-base ${activeCategory === cat.id ? 'bg-accent text-accent-foreground' : 'bg-card text-foreground'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="pixel-btn bg-card text-foreground text-sm flex items-center gap-2 md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            FILTERS
          </button>

          <div className={`${showFilters ? 'flex' : 'hidden'} md:flex flex-wrap items-center gap-3 w-full md:w-auto`}>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="border-2 border-foreground bg-card px-3 py-2 font-display text-base focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer"
            >
              <option value="newest">NEWEST</option>
              <option value="nearest">NEAREST</option>
              <option value="price-low">PRICE: LOW → HIGH</option>
              <option value="price-high">PRICE: HIGH → LOW</option>
            </select>

            <select
              value={condition}
              onChange={(e) => setCondition(e.target.value as typeof condition)}
              className="border-2 border-foreground bg-card px-3 py-2 font-display text-base focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer"
            >
              <option value="all">ALL CONDITIONS</option>
              <option value="new">NEW ONLY</option>
              <option value="used">USED ONLY</option>
            </select>
          </div>

          <span className="font-body text-sm text-muted-foreground ml-auto">
            {filtered.length} product{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Products */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-display text-3xl text-muted-foreground">NO PRODUCTS FOUND</p>
            <p className="font-body text-sm text-muted-foreground mt-2">Try a different search term or category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;
