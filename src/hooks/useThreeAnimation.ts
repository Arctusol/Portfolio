import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeAnimationOptions {
  color?: number;
  wireframe?: boolean;
  rotationSpeed?: number;
}

const useThreeAnimation = (options: ThreeAnimationOptions = {}) => {
  const {
    color = 0x00ffb9,
    wireframe = true,
    rotationSpeed = 0.001
  } = options;

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

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(color, 2);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Geometry
    const geometry = new THREE.SphereGeometry(2.1, 64, 64);
    const material = new THREE.MeshPhongMaterial({
      color,
      wireframe,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += rotationSpeed;
      sphere.rotation.y += rotationSpeed;
      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      scene.remove(sphere);
      renderer.dispose();
    };
  }, [color, wireframe, rotationSpeed]);

  return canvasRef;
};

export default useThreeAnimation;