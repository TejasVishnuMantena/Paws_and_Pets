import logoImage from '@/assets/logo-paw.png';

interface BrandLogoProps {
  size?: 'sm' | 'lg';
  showText?: boolean;
}

const BrandLogo = ({ size = 'sm', showText = true }: BrandLogoProps) => {
  const isSmall = size === 'sm';

  return (
    <div className="flex items-center gap-2">
      <img
        src={logoImage}
        alt="Paws & Pets"
        className={isSmall ? 'h-9 w-9' : 'h-14 w-14'}
        width={512}
        height={512}
      />
      {showText && (
        <span className={`font-display font-bold text-foreground select-none leading-tight ${isSmall ? 'text-base' : 'text-xl'}`}>
          PAWS <span className="text-accent">&</span> PETS
        </span>
      )}
    </div>
  );
};

export default BrandLogo;
