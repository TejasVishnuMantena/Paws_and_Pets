const MarqueeBanner = () => {
  const text = "₹9 PER PRODUCT • UNLOCK DIRECT ACCESS • CONNECT WITH SELLERS • NOT A LIFETIME FEE • PAY PER PRODUCT • ";

  return (
    <div className="bg-foreground text-primary-foreground border-y-2 border-foreground overflow-hidden py-2">
      <div className="marquee whitespace-nowrap font-display text-xl tracking-widest">
        <span>{text}{text}{text}{text}</span>
      </div>
    </div>
  );
};

export default MarqueeBanner;
