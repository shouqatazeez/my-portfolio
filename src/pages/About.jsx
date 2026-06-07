const About = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        Education
      </h2>

      <div className="space-y-1">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <h3 className="font-semibold text-foreground">
            Kallam Haranadhareddy Institute of Technology
          </h3>
          <span className="text-sm text-muted-foreground shrink-0">2022 – 2026</span>
        </div>
        <p className="text-muted-foreground">
          Bachelor of Technology — Computer Science Engineering
        </p>
        <p className="text-sm text-muted-foreground">
          Andhra Pradesh, India
        </p>
      </div>
    </div>
  );
};

export default About;
