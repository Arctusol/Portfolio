
import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import * as THREE from "three";
import { Send } from "lucide-react";

const projects = [
  {
    title: "Medical Analysis",
    description: "Plateforme d'analyse médicale développée avec Streamlit, facilitant l'interprétation des données médicales pour les professionnels de santé.",
    longDescription: "Une plateforme complète permettant aux professionnels de santé d'analyser et d'interpréter efficacement les données médicales. Intégration de modèles d'IA pour l'aide à la décision et la détection précoce de pathologies.",
    link: "https://medicalanalysis.azurewebsites.net",
    tech: ["Streamlit", "Python", "Azure"],
  },
  {
    title: "Photomad",
    description: "Application web permettant aux utilisateurs de partager et de découvrir des photographies, mettant en avant une communauté de passionnés.",
    longDescription: "Une plateforme sociale dédiée aux passionnés de photographie, offrant des fonctionnalités avancées de partage, de découverte et d'interaction. Intégration d'outils d'édition et d'analyse d'images.",
    link: "https://photomad-web.azurewebsites.net",
    tech: ["React", "Azure", "Node.js"],
  },
  {
    title: "Tracking Budget",
    description: "Outil de gestion budgétaire personnel avec intégration Azure Document pour l'analyse des relevés bancaires et tickets de caisse.",
    longDescription: "Solution innovante de gestion financière personnelle utilisant l'IA pour automatiser la catégorisation des dépenses et générer des insights pertinents sur les habitudes de consommation.",
    link: "https://tracking-budget-ten.vercel.app/auth",
    tech: ["React", "Azure", "Document AI"],
  },
  {
    title: "Mac-P'AI",
    description: "Plateforme proposant des agents autonomes pour automatiser les tâches et optimiser les processus décisionnels en temps réel.",
    longDescription: "Système avancé d'agents autonomes basé sur l'IA, capable d'automatiser des tâches complexes et d'optimiser les processus de prise de décision en temps réel. Intégration de technologies d'IA de pointe.",
    link: "https://mac-pai.com",
    tech: ["Python", "Autogen", "CrewAI"],
  },
];

const skills = [
  {
    category: "Développement",
    items: ["Python", "React", "TypeScript", "FastAPI", "Docker"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Azure", "Google Cloud", "CI/CD", "Kubernetes"],
  },
  {
    category: "IA & Data",
    items: ["Autogen", "CrewAI", "PowerBI", "LookerStudio"],
  },
  {
    category: "Bases de données",
    items: ["Supabase", "MongoDB", "PostgreSQL", "Airtable"],
  },
];

const Index = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0x00ffb9, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Create a sphere geometry
    const geometry = new THREE.SphereGeometry(2, 64, 64);
    const material = new THREE.MeshPhongMaterial({
      color: 0x00ffb9,
      wireframe: true,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.001;
      sphere.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full -z-10"
        />
        <div className="container mx-auto px-6 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in">
            Innovateur Digital
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 fade-in">
            Spécialiste en IA Générative & Analyse de Données
          </p>
          <a
            href="#projects"
            className="inline-block px-8 py-3 text-lg font-semibold rounded-lg bg-neon text-black hover:bg-neon-muted transition-colors duration-300"
          >
            Découvrir mes projets
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center fade-in">
            Projets Récents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-white/5">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center fade-in">
            Compétences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl card-gradient backdrop-blur-sm border border-white/10"
              >
                <h3 className="text-xl font-semibold mb-4 text-neon">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center fade-in">
            Contact
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-neon focus:ring-1 focus:ring-neon outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-neon focus:ring-1 focus:ring-neon outline-none transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-neon focus:ring-1 focus:ring-neon outline-none transition-colors"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-neon text-black hover:bg-neon-muted transition-colors inline-flex items-center gap-2"
              >
                <Send className="h-5 w-5" />
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;
