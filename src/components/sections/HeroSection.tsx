import useThreeAnimation from '@/hooks/useThreeAnimation';

const HeroSection = () => {
  const canvasRef = useThreeAnimation({
    color: 0x00ffb9,
    wireframe: true,
    rotationSpeed: 0.001
  });

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in">
          Solutions Digitales Innovantes
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 fade-in">
          Expert en Data Science, IA Générative & Automatisation
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#services"
            className="inline-block px-8 py-3 text-lg font-semibold rounded-lg bg-neon text-black hover:bg-neon-muted transition-colors"
          >
            Découvrir mes services
          </a>
          <a
            href="#contact"
            className="inline-block px-8 py-3 text-lg font-semibold rounded-lg border-2 border-neon text-neon hover:bg-neon hover:text-black transition-colors"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;