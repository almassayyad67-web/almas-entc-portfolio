import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { burstPaws } from '../utils/confetti';
import { catAudio } from '../utils/sound';
import { Sparkles, Heart } from 'lucide-react';

const COATS = [
  { id: 'ginger', name: 'Ginger Tabby', bodyColor: 0xFB923C, secondary: 0xFFEDD5, eyeColor: 0x22C55E, hex: '#FB923C' },
  { id: 'tuxedo', name: 'Midnight Tuxedo', bodyColor: 0x242426, secondary: 0xFFFFFF, eyeColor: 0x4ADE80, hex: '#242426' },
  { id: 'calico', name: 'Sweet Calico', bodyColor: 0xF97316, secondary: 0x242426, eyeColor: 0x38BDF8, hex: '#F97316' },
  { id: 'snow', name: 'Snow Fluff', bodyColor: 0xFAF5FF, secondary: 0xFFC8DA, eyeColor: 0x0EA5E9, hex: '#FAF5FF' },
  { id: 'siamese', name: 'Cocoa Siamese', bodyColor: 0xE6CCB2, secondary: 0x582F0E, eyeColor: 0x38BDF8, hex: '#7F4F24' },
];

export default function CatCanvas() {
  const mountRef = useRef(null);
  const [coatIndex, setCoatIndex] = useState(0);
  const [purrCount, setPurrCount] = useState(0);
  const currentCoat = COATS[coatIndex];

  const catGroupRef = useRef(null);
  const headGroupRef = useRef(null);
  const tailMeshRef = useRef(null);
  const bellMeshRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const isPurringRef = useRef(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.7, 4.3);
    camera.lookAt(0, 0.1, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Soft Studio Lighting for Cozy Fur
    const ambientLight = new THREE.AmbientLight(0xfff7ed, 1.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(3, 4, 3);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffd5dc, 1.1);
    fillLight.position.set(-3, 0, 2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x86efac, 0.8);
    rimLight.position.set(0, 3, -3);
    scene.add(rimLight);

    // Master Cat Group
    const catGroup = new THREE.Group();
    scene.add(catGroup);
    catGroupRef.current = catGroup;

    // Materials
    const furMat = new THREE.MeshStandardMaterial({
      color: currentCoat.bodyColor,
      roughness: 0.85,
      metalness: 0.05
    });

    const chestMat = new THREE.MeshStandardMaterial({
      color: currentCoat.secondary,
      roughness: 0.9,
      metalness: 0.0
    });

    const earInnerMat = new THREE.MeshStandardMaterial({
      color: 0xFFA3BF,
      roughness: 0.7
    });

    const noseMat = new THREE.MeshStandardMaterial({
      color: 0xFF6B8B,
      roughness: 0.4
    });

    const eyeMat = new THREE.MeshStandardMaterial({
      color: currentCoat.eyeColor,
      roughness: 0.15,
      metalness: 0.2
    });

    const pupilMat = new THREE.MeshBasicMaterial({ color: 0x111111 });

    const collarMat = new THREE.MeshStandardMaterial({
      color: 0xEF4444,
      roughness: 0.4
    });

    const bellMat = new THREE.MeshStandardMaterial({
      color: 0xF59E0B,
      metalness: 0.85,
      roughness: 0.2
    });

    const whiskerMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });

    // 1. Cozy Cat Loafing Body
    const bodyGeom = new THREE.SphereGeometry(0.85, 24, 20);
    bodyGeom.scale(1.0, 0.82, 1.25);
    const body = new THREE.Mesh(bodyGeom, furMat);
    body.position.set(0, -0.35, -0.1);
    catGroup.add(body);

    // Chest fluff patch
    const chestGeom = new THREE.SphereGeometry(0.55, 18, 16);
    chestGeom.scale(0.85, 0.85, 0.9);
    const chest = new THREE.Mesh(chestGeom, chestMat);
    chest.position.set(0, -0.22, 0.52);
    catGroup.add(chest);

    // Cute Folded Front Paws
    const pawGeom = new THREE.SphereGeometry(0.22, 16, 12);
    pawGeom.scale(0.85, 0.65, 1.2);
    const leftPaw = new THREE.Mesh(pawGeom, chestMat);
    leftPaw.position.set(-0.35, -0.75, 0.58);
    catGroup.add(leftPaw);

    const rightPaw = new THREE.Mesh(pawGeom, chestMat);
    rightPaw.position.set(0.35, -0.75, 0.58);
    catGroup.add(rightPaw);

    // 2. Head Group (Rotates with mouse)
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.42, 0.35);
    catGroup.add(headGroup);
    headGroupRef.current = headGroup;

    // Cat Skull
    const headGeom = new THREE.SphereGeometry(0.68, 24, 20);
    headGeom.scale(1.1, 0.95, 1.0);
    const head = new THREE.Mesh(headGeom, furMat);
    headGroup.add(head);

    // Cute Pointy Cat Ears (Left & Right)
    const earGeom = new THREE.ConeGeometry(0.28, 0.45, 12);
    const leftEar = new THREE.Mesh(earGeom, furMat);
    leftEar.position.set(-0.46, 0.58, 0.05);
    leftEar.rotation.set(-0.15, 0, 0.35);
    headGroup.add(leftEar);

    const leftEarInner = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.35, 10), earInnerMat);
    leftEarInner.position.set(-0.44, 0.57, 0.12);
    leftEarInner.rotation.set(-0.15, 0, 0.35);
    headGroup.add(leftEarInner);

    const rightEar = new THREE.Mesh(earGeom, furMat);
    rightEar.position.set(0.46, 0.58, 0.05);
    rightEar.rotation.set(-0.15, 0, -0.35);
    headGroup.add(rightEar);

    const rightEarInner = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.35, 10), earInnerMat);
    rightEarInner.position.set(0.44, 0.57, 0.12);
    rightEarInner.rotation.set(-0.15, 0, -0.35);
    headGroup.add(rightEarInner);

    // Cheeks & Muzzle
    const cheekGeom = new THREE.SphereGeometry(0.22, 16, 12);
    const leftCheek = new THREE.Mesh(cheekGeom, chestMat);
    leftCheek.position.set(-0.16, -0.16, 0.62);
    headGroup.add(leftCheek);

    const rightCheek = new THREE.Mesh(cheekGeom, chestMat);
    rightCheek.position.set(0.16, -0.16, 0.62);
    headGroup.add(rightCheek);

    // Cute Tiny Nose
    const noseGeom = new THREE.SphereGeometry(0.08, 12, 10);
    noseGeom.scale(1.2, 0.8, 0.8);
    const nose = new THREE.Mesh(noseGeom, noseMat);
    nose.position.set(0, -0.06, 0.74);
    headGroup.add(nose);

    // Expressive Eyes (Left & Right)
    const eyeGeom = new THREE.SphereGeometry(0.14, 16, 14);
    eyeGeom.scale(0.9, 1.1, 0.7);

    const leftEye = new THREE.Mesh(eyeGeom, eyeMat);
    leftEye.position.set(-0.28, 0.08, 0.58);
    leftEye.rotation.y = -0.15;
    headGroup.add(leftEye);

    const leftPupil = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.14, 8), pupilMat);
    leftPupil.position.set(-0.28, 0.08, 0.67);
    leftPupil.rotation.y = -0.15;
    headGroup.add(leftPupil);

    const rightEye = new THREE.Mesh(eyeGeom, eyeMat);
    rightEye.position.set(0.28, 0.08, 0.58);
    rightEye.rotation.y = 0.15;
    headGroup.add(rightEye);

    const rightPupil = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.14, 8), pupilMat);
    rightPupil.position.set(0.28, 0.08, 0.67);
    rightPupil.rotation.y = 0.15;
    headGroup.add(rightPupil);

    // Whiskers (3 on each side)
    const createWhisker = (angle, yOff) => {
      const geom = new THREE.CylinderGeometry(0.007, 0.007, 0.38, 4);
      const mesh = new THREE.Mesh(geom, whiskerMat);
      mesh.rotation.z = Math.PI / 2 + angle;
      mesh.position.y = yOff;
      return mesh;
    };

    [-0.1, 0, 0.1].forEach((ang, i) => {
      const wL = createWhisker(ang, -0.14 + i * 0.03);
      wL.position.x = -0.42;
      wL.position.z = 0.62;
      headGroup.add(wL);

      const wR = createWhisker(-ang, -0.14 + i * 0.03);
      wR.position.x = 0.42;
      wR.position.z = 0.62;
      headGroup.add(wR);
    });

    // 3. Collar & Golden Bell
    const collar = new THREE.Mesh(new THREE.TorusGeometry(0.48, 0.045, 12, 28), collarMat);
    collar.rotation.x = Math.PI * 0.42;
    collar.position.set(0, -0.06, 0.28);
    catGroup.add(collar);

    const bell = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 12), bellMat);
    bell.position.set(0, -0.22, 0.72);
    catGroup.add(bell);
    bellMeshRef.current = bell;

    // 4. Wiggling Curled Tail
    const tailCurve = new THREE.CubicBezierCurve3(
      new THREE.Vector3(0, -0.45, -0.9),
      new THREE.Vector3(0.3, -0.3, -1.2),
      new THREE.Vector3(0.5, 0.2, -1.05),
      new THREE.Vector3(0.42, 0.55, -0.85)
    );
    const tailGeom = new THREE.TubeGeometry(tailCurve, 20, 0.075, 8, false);
    const tail = new THREE.Mesh(tailGeom, furMat);
    catGroup.add(tail);
    tailMeshRef.current = tail;

    // Mouse movement listener
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mousePos.current.targetX = x * 0.6;
      mousePos.current.targetY = y * 0.4;
    };

    const handleMouseLeave = () => {
      mousePos.current.targetX = 0;
      mousePos.current.targetY = 0;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Resize listener
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smooth mouse follow
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.08;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.08;

      if (catGroup) {
        // Gentle breathing & floating motion
        const breath = Math.sin(t * 2.2) * 0.035;
        catGroup.position.y = breath;

        // Head tracks cursor with curious cat tilt
        if (headGroup) {
          headGroup.rotation.y = mousePos.current.x * 0.75 + Math.sin(t * 1.2) * 0.04;
          headGroup.rotation.x = -mousePos.current.y * 0.45;
          headGroup.rotation.z = -mousePos.current.x * 0.15;
        }

        // Tail wiggles playfully
        if (tail) {
          tail.rotation.y = Math.sin(t * 3.2) * 0.22;
          tail.rotation.z = Math.cos(t * 2.4) * 0.12;
        }

        // Bell jingles gently
        if (bell) {
          bell.rotation.z = Math.sin(t * 4.5) * 0.15;
        }

        // Squish and stretch purr animation
        if (isPurringRef.current) {
          const squish = Math.sin(t * 22) * 0.06;
          catGroup.scale.set(1.08 + squish, 0.92 - squish, 1.08 + squish);
        } else {
          catGroup.scale.set(1, 1, 1);
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      renderer.dispose();
    };
  }, [coatIndex]);

  // Pet the Cat action
  const handlePetCat = () => {
    isPurringRef.current = true;
    catAudio.playPurr();
    setPurrCount((c) => c + 1);

    const rect = mountRef.current.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    burstPaws(x, y);

    setTimeout(() => {
      isPurringRef.current = false;
    }, 600);
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-md mx-auto group">
      {/* Cat Aura Backdrop Glow */}
      <div 
        className="absolute w-72 h-72 rounded-full blur-3xl opacity-45 -z-10 transition-colors duration-700 pointer-events-none"
        style={{ backgroundColor: currentCoat.hex }}
      />

      {/* 3D Cat Canvas Box */}
      <div
        ref={mountRef}
        onClick={handlePetCat}
        title="Click to pet the cat! 🐾"
        className="w-72 h-72 sm:w-88 sm:h-88 cursor-pointer transition-transform duration-300 hover:scale-105 select-none"
      />

      {/* Interactive Fur Coat & Pet Controls */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-2 px-4 py-2 glass-card rounded-full shadow-paw">
        {/* Pet Me Button */}
        <button
          onClick={handlePetCat}
          className="flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold paw-btn text-white"
        >
          <Heart className="w-3.5 h-3.5 fill-white animate-pulse" />
          <span>Pet Me! {purrCount > 0 && `(${purrCount})`}</span>
        </button>

        {/* Coat Palette Selector */}
        <div className="flex items-center gap-1.5 pl-1">
          {COATS.map((c, i) => (
            <button
              key={c.id}
              onClick={() => {
                catAudio.playPop(700 + i * 50);
                setCoatIndex(i);
              }}
              title={`Fur Coat: ${c.name}`}
              className={`w-6 h-6 rounded-full transition-all border-2 ${
                coatIndex === i
                  ? 'border-whisker-700 dark:border-white scale-125 shadow-md'
                  : 'border-white/70 hover:scale-110 opacity-80'
              }`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>

        <span className="text-[11px] font-bold text-whisker-500 dark:text-fur-300 pl-1 hidden sm:inline">
          {currentCoat.name}
        </span>
      </div>

      <p className="text-[11px] text-whisker-400 dark:text-fur-400 mt-2 tracking-wide font-medium">
        🐾 Move mouse to guide whiskers • Click cat to hear purrs & burst paws
      </p>
    </div>
  );
}
