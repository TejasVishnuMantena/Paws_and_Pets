import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    const q = query.trim();
    if (q) {
      navigate(`/browse?search=${encodeURIComponent(q)}`);
      setQuery('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="flex-1 mx-6 max-w-xl relative">
      <div className="relative w-full">
        <input
          ref={ref}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search pets, food, toys..."
          className="w-full border-2 border-foreground bg-background px-3 py-1.5 pr-16 font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-8 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
        <button onClick={handleSearch} className="absolute right-2.5 top-1/2 -translate-y-1/2">
          <Search className="w-4 h-4 text-muted-foreground hover:text-foreground" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
