const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-6">
      <div className="container mx-auto px-4 max-w-3xl flex items-center justify-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Mohammad Shouqat Azeez
        </p>
      </div>
    </footer>
  );
};

export default Footer;
