import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import type { Product } from '@/data/mockProducts';

interface ProductGridProps {
  products: Product[];
  title?: string;
  perPage?: number;
}

const ProductGrid = ({ products, title, perPage = 6 }: ProductGridProps) => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(products.length / perPage);
  const visible = products.slice(page * perPage, (page + 1) * perPage);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {title && (
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6 text-center">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 mt-6">
          <button
            onClick={() => setPage(Math.max(0, page - 1))}
            disabled={page === 0}
            className="p-2 border-2 border-foreground bg-card hover:bg-secondary transition-colors pixel-shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-display text-sm">
            {page + 1} / {totalPages}
          </span>
          <button
            onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
            disabled={page === totalPages - 1}
            className="p-2 border-2 border-foreground bg-card hover:bg-secondary transition-colors pixel-shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
