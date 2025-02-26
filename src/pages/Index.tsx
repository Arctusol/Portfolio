
import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import * as THREE from "three";

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
    </div>
  );
};

export default Index;
