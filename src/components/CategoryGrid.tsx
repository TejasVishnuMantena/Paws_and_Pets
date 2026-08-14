import { Link } from 'react-router-dom';
import { categories } from '@/data/mockProducts';
import iconPups from '@/assets/icon-pups.png';
import iconFood from '@/assets/icon-food.png';
import iconAccessories from '@/assets/icon-accessories.png';
import iconBed from '@/assets/icon-bed.png';
import iconToys from '@/assets/icon-toys.png';
import iconGrooming from '@/assets/icon-grooming.png';
import iconHomeservice from '@/assets/icon-homeservice.png';
import iconPreowned from '@/assets/icon-preowned.png';

const iconMap: Record<string, string> = {
  pups: iconPups,
  food: iconFood,
  accessories: iconAccessories,
  bed: iconBed,
  toys: iconToys,
  grooming: iconGrooming,
  homeservice: iconHomeservice,
  preowned: iconPreowned,
};

const CategoryGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8 text-center">
        SHOP BY CATEGORY
      </h2>
      <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/browse?category=${cat.id}`}
            className="group border-2 border-foreground bg-card p-4 flex flex-col items-center gap-3 pixel-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-100 cursor-pointer"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <img
                src={iconMap[cat.icon]}
                alt={cat.name}
                className="w-14 h-14 object-contain"
                loading="lazy"
              />
            </div>
            <span className="font-display text-lg text-foreground group-hover:text-accent transition-colors text-center">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
