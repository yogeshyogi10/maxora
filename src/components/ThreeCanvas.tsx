"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 6.2;

    // 3. Renderer Setup (transparent background, antialiased)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 4. Main Group to hold the reactor assembly
    const reactorGroup = new THREE.Group();
    scene.add(reactorGroup);

    // 5. Central Reactor Core Sphere
    const coreGeometry = new THREE.SphereGeometry(0.85, 32, 32);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xB03DFF,          // Purple
      emissive: 0x1f003d,       // Glowing core
      roughness: 0.05,
      metalness: 0.95,
      transmission: 0.75,       // Glass transmission
      thickness: 1.5,
      transparent: true,
      opacity: 0.95,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    reactorGroup.add(coreMesh);

    // Subtle Core Wireframe Overlay to add technical detail
    const coreWireGeometry = new THREE.SphereGeometry(0.86, 16, 16);
    const coreWireMaterial = new THREE.MeshBasicMaterial({
      color: 0xD9B3FF,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const coreWireMesh = new THREE.Mesh(coreWireGeometry, coreWireMaterial);
    reactorGroup.add(coreWireMesh);

    // 6. Ring Group 1 (Inner Torus + Cyan Node) - Lies in X-Z plane
    const ringGroup1 = new THREE.Group();
    reactorGroup.add(ringGroup1);

    const torusGeometry1 = new THREE.TorusGeometry(1.4, 0.035, 16, 100);
    const torusMaterial1 = new THREE.MeshStandardMaterial({
      color: 0x00F2FE,          // Neon Cyan
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0x004050,
    });
    const torusMesh1 = new THREE.Mesh(torusGeometry1, torusMaterial1);
    torusMesh1.rotation.x = Math.PI / 2; // Orient horizontally (X-Z)
    ringGroup1.add(torusMesh1);

    const nodeGeometry1 = new THREE.SphereGeometry(0.08, 16, 16);
    const nodeMaterial1 = new THREE.MeshStandardMaterial({
      color: 0x00F2FE,
      emissive: 0x00F2FE,
      roughness: 0.1,
      metalness: 0.8,
    });
    const nodeMesh1 = new THREE.Mesh(nodeGeometry1, nodeMaterial1);
    ringGroup1.add(nodeMesh1);

    // 7. Ring Group 2 (Middle Torus + Purple Node) - Lies in Y-Z plane
    const ringGroup2 = new THREE.Group();
    reactorGroup.add(ringGroup2);

    const torusGeometry2 = new THREE.TorusGeometry(1.75, 0.028, 16, 100);
    const torusMaterial2 = new THREE.MeshStandardMaterial({
      color: 0xB03DFF,          // Brand Purple
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0x330055,
    });
    const torusMesh2 = new THREE.Mesh(torusGeometry2, torusMaterial2);
    torusMesh2.rotation.y = Math.PI / 2; // Orient vertically (Y-Z)
    ringGroup2.add(torusMesh2);

    const nodeGeometry2 = new THREE.SphereGeometry(0.07, 16, 16);
    const nodeMaterial2 = new THREE.MeshStandardMaterial({
      color: 0xB03DFF,
      emissive: 0xB03DFF,
      roughness: 0.1,
      metalness: 0.8,
    });
    const nodeMesh2 = new THREE.Mesh(nodeGeometry2, nodeMaterial2);
    ringGroup2.add(nodeMesh2);

    // 8. Ring Group 3 (Outer Torus + White/Lavender Node) - Lies in X-Y plane
    const ringGroup3 = new THREE.Group();
    reactorGroup.add(ringGroup3);

    const torusGeometry3 = new THREE.TorusGeometry(2.1, 0.02, 16, 100);
    const torusMaterial3 = new THREE.MeshStandardMaterial({
      color: 0xD9B3FF,          // Accent Lavender
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0x442255,
    });
    const torusMesh3 = new THREE.Mesh(torusGeometry3, torusMaterial3);
    // Already in X-Y plane (no rotation needed)
    ringGroup3.add(torusMesh3);

    const nodeGeometry3 = new THREE.SphereGeometry(0.065, 16, 16);
    const nodeMaterial3 = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xD9B3FF,
      roughness: 0.1,
      metalness: 0.8,
    });
    const nodeMesh3 = new THREE.Mesh(nodeGeometry3, nodeMaterial3);
    ringGroup3.add(nodeMesh3);

    // 9. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00F2FE, 3.5, 30); // Neon Cyan Light
    pointLight1.position.set(4, 4, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xB03DFF, 3.5, 30); // Neon Purple Light
    pointLight2.position.set(-4, -4, 3);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x660F56, 1.5, 35); // Deep Back Glow
    pointLight3.position.set(0, 4, -4);
    scene.add(pointLight3);

    // 10. Scroll interaction hook
    let scrollProgress = 0;
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        scrollProgress = window.scrollY / scrollHeight;
      }
    };
    window.addEventListener("scroll", handleScroll);

    // 11. Handle Resize
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    });
    resizeObserver.observe(container);

    // 12. Animation Tick Loop
    let animationFrameId: number;
    const tick = () => {
      const time = Date.now() * 0.0012; // Time variable

      // Adjust rotation speed based on scroll (faster scroll = faster spin)
      const scrollBoost = 1.0 + scrollProgress * 5.0;

      // Rotate central core
      coreMesh.rotation.y = time * 0.18;
      coreMesh.rotation.x = time * 0.12;
      coreWireMesh.rotation.y = -time * 0.05;

      // Emit more light on core if scroll boost is high
      coreMaterial.emissiveIntensity = 1.0 + Math.sin(time * 3) * 0.2 + scrollProgress * 1.5;

      // Orbiting Gyroscope Rings (Independent axes + scroll boost speeds)
      ringGroup1.rotation.y = time * 0.45 * scrollBoost;
      ringGroup1.rotation.x = time * 0.15;

      ringGroup2.rotation.x = -time * 0.35 * scrollBoost;
      ringGroup2.rotation.z = time * 0.22;

      ringGroup3.rotation.z = time * 0.28 * scrollBoost;
      ringGroup3.rotation.y = -time * 0.18;

      // Animate energy nodes traversing along their respective rings locally
      // Node 1 (Inner X-Z Torus, radius 1.4)
      nodeMesh1.position.x = Math.cos(time * 2.5) * 1.4;
      nodeMesh1.position.z = Math.sin(time * 2.5) * 1.4;
      nodeMesh1.position.y = 0;

      // Node 2 (Middle Y-Z Torus, radius 1.75)
      nodeMesh2.position.y = Math.cos(time * 1.8) * 1.75;
      nodeMesh2.position.z = Math.sin(time * 1.8) * 1.75;
      nodeMesh2.position.x = 0;

      // Node 3 (Outer X-Y Torus, radius 2.1)
      nodeMesh3.position.x = Math.cos(time * 1.2) * 2.1;
      nodeMesh3.position.y = Math.sin(time * 1.2) * 2.1;
      nodeMesh3.position.z = 0;

      // Main assembly breathing pulse (pulsing the container group)
      const pulse = Math.sin(time * 0.8) * 0.035 + 1.0;
      reactorGroup.scale.set(pulse, pulse, pulse);

      // Render
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(tick);
    };
    tick();

    // 13. Clean up listeners & WebGL context
    return () => {
      window.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose geometries
      coreGeometry.dispose();
      coreWireGeometry.dispose();
      torusGeometry1.dispose();
      nodeGeometry1.dispose();
      torusGeometry2.dispose();
      nodeGeometry2.dispose();
      torusGeometry3.dispose();
      nodeGeometry3.dispose();

      // Dispose materials
      coreMaterial.dispose();
      coreWireMaterial.dispose();
      torusMaterial1.dispose();
      nodeMaterial1.dispose();
      torusMaterial2.dispose();
      nodeMaterial2.dispose();
      torusMaterial3.dispose();
      nodeMaterial3.dispose();

      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full min-h-[350px] md:min-h-[440px] relative z-10 select-none pointer-events-none" 
    />
  );
}
