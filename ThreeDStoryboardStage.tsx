import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Camera, Layers, Sun, RefreshCw, Eye, Sparkles } from 'lucide-react';

interface ThreeDStoryboardStageProps {
  onInteract?: () => void;
}

export const ThreeDStoryboardStage: React.FC<ThreeDStoryboardStageProps> = ({ onInteract }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Scene state
  const [focalLength, setFocalLength] = useState<'24mm' | '50mm' | '85mm'>('50mm');
  const [renderStyle, setRenderStyle] = useState<'sketch' | 'wireframe' | 'noir'>('sketch');
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [aspectRatioMask, setAspectRatioMask] = useState<'16:9' | '2.39:1'>('16:9');
  const [flashActive, setFlashActive] = useState<boolean>(false);

  // Three.js object references
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const materialsRef = useRef<THREE.Material[]>([]);
  const meshGroupRef = useRef<THREE.Group | null>(null);
  const frustumConeRef = useRef<THREE.LineSegments | null>(null);
  const keyLightRef = useRef<THREE.DirectionalLight | null>(null);

  // Mouse interaction state
  const isDraggingRef = useRef<boolean>(false);
  const previousMousePositionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight || 420;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0xF5EFEB); // Warm sketchbook ivory
    scene.fog = new THREE.FogExp2(0xF5EFEB, 0.025);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(7, 4.5, 8.5);
    camera.lookAt(0, 1.2, 0);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    // 4. Lights (Cinematic 3-Point lighting rig)
    const ambientLight = new THREE.AmbientLight(0xfffaed, 0.85);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffeedd, 1.4);
    keyLight.position.set(5, 8, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);
    keyLightRef.current = keyLight;

    const rimLight = new THREE.DirectionalLight(0x90b0e0, 0.7);
    rimLight.position.set(-5, 4, -4);
    scene.add(rimLight);

    // 5. Build 3D Pre-vis Models inside meshGroup
    const group = new THREE.Group();
    meshGroupRef.current = group;
    scene.add(group);

    // Ground Grid with Sketch Paper aesthetic
    const gridHelper = new THREE.GridHelper(16, 24, 0x4a453e, 0xc4b9a8);
    gridHelper.position.y = 0;
    group.add(gridHelper);

    // Materials
    const inkCharcoalMat = new THREE.MeshStandardMaterial({
      color: 0x2c2825,
      roughness: 0.7,
      metalness: 0.1
    });
    const terracottaMat = new THREE.MeshStandardMaterial({
      color: 0xc8523b,
      roughness: 0.5,
      metalness: 0.1
    });
    const mustardMat = new THREE.MeshStandardMaterial({
      color: 0xd49a3d,
      roughness: 0.6,
      metalness: 0.1
    });
    const ivoryMat = new THREE.MeshStandardMaterial({
      color: 0xfdfaf5,
      roughness: 0.9
    });
    materialsRef.current.push(inkCharcoalMat, terracottaMat, mustardMat, ivoryMat);

    // Model A: Cinema Camera on Tripod
    const cameraBody = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.6, 1.1), inkCharcoalMat);
    cameraBody.position.set(-2.5, 2.2, 1.5);
    cameraBody.rotation.y = 0.6;
    cameraBody.castShadow = true;
    group.add(cameraBody);

    const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.28, 0.5, 16), terracottaMat);
    lens.rotation.x = Math.PI / 2;
    lens.position.set(0, 0, 0.7);
    cameraBody.add(lens);

    // Tripod legs
    const legGeo = new THREE.CylinderGeometry(0.04, 0.04, 2.4, 8);
    for (let i = 0; i < 3; i++) {
      const angle = (i * Math.PI * 2) / 3;
      const leg = new THREE.Mesh(legGeo, inkCharcoalMat);
      leg.position.set(-2.5, 1.1, 1.5);
      leg.rotation.z = Math.sin(angle) * 0.35;
      leg.rotation.x = Math.cos(angle) * 0.35;
      group.add(leg);
    }

    // Camera Frustum Line Cone (Pre-vis Field of View guide)
    const frustumGeo = new THREE.ConeGeometry(1.6, 3.5, 4, 1, true);
    frustumGeo.rotateX(Math.PI / 2);
    const frustumWire = new THREE.WireframeGeometry(frustumGeo);
    const frustumLines = new THREE.LineSegments(
      frustumWire,
      new THREE.LineBasicMaterial({ color: 0xc8523b, transparent: true, opacity: 0.6 })
    );
    frustumLines.position.set(0, 0, 2.3);
    cameraBody.add(frustumLines);
    frustumConeRef.current = frustumLines;

    // Model B: Storyboard Mannequin / Character Silhouette
    const characterGroup = new THREE.Group();
    characterGroup.position.set(0.6, 0, -0.4);
    group.add(characterGroup);

    // Torso & Head
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.28, 1.2, 12), ivoryMat);
    torso.position.y = 1.6;
    torso.castShadow = true;
    characterGroup.add(torso);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), mustardMat);
    head.position.y = 2.45;
    head.castShadow = true;
    characterGroup.add(head);

    // Arms in directing / holding script pose
    const armGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.8, 8);
    const leftArm = new THREE.Mesh(armGeo, ivoryMat);
    leftArm.position.set(-0.45, 1.7, 0.2);
    leftArm.rotation.x = -0.5;
    leftArm.rotation.z = 0.3;
    characterGroup.add(leftArm);

    const rightArm = new THREE.Mesh(armGeo, ivoryMat);
    rightArm.position.set(0.45, 1.7, 0.2);
    rightArm.rotation.x = -0.5;
    rightArm.rotation.z = -0.3;
    characterGroup.add(rightArm);

    // Script / Storyboard Clipboard
    const clipboard = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.8, 0.05), terracottaMat);
    clipboard.position.set(0, 1.5, 0.5);
    clipboard.rotation.x = -0.4;
    characterGroup.add(clipboard);

    // Pedestal floor for character
    const stageCircle = new THREE.Mesh(
      new THREE.CylinderGeometry(1.6, 1.7, 0.1, 32),
      new THREE.MeshStandardMaterial({ color: 0xe4dbce, roughness: 0.8 })
    );
    stageCircle.position.set(0.6, 0.05, -0.4);
    stageCircle.receiveShadow = true;
    group.add(stageCircle);

    // Model C: Film Slate / Director Clapperboard in 3D
    const slateGroup = new THREE.Group();
    slateGroup.position.set(2.8, 1.2, 1.8);
    slateGroup.rotation.y = -0.8;
    group.add(slateGroup);

    const slateBase = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.0, 0.08), inkCharcoalMat);
    slateGroup.add(slateBase);

    const slateStick = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.22, 0.09), mustardMat);
    slateStick.position.set(0, 0.55, 0);
    slateStick.rotation.z = -0.18; // opened clapper
    slateGroup.add(slateStick);

    // Model D: Arri Studio Light Rig with Barn doors
    const lightStand = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 3.2, 8), inkCharcoalMat);
    lightStand.position.set(-1.8, 1.6, -2.5);
    group.add(lightStand);

    const lightHead = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.7, 0.9), terracottaMat);
    lightHead.position.set(-1.8, 3.2, -2.5);
    lightHead.rotation.x = 0.4;
    lightHead.rotation.y = 0.8;
    group.add(lightHead);

    // Floating 3D Storyboard Panels
    const panelGeo = new THREE.PlaneGeometry(1.2, 0.75);
    const panelBorderMat = new THREE.MeshBasicMaterial({ color: 0x1c1917, wireframe: true });
    for (let i = 0; i < 4; i++) {
      const panel = new THREE.Mesh(panelGeo, ivoryMat);
      const angle = (i * Math.PI) / 2 + 0.3;
      const radius = 3.6;
      panel.position.set(Math.cos(angle) * radius, 2.6 + (i % 2) * 0.4, Math.sin(angle) * radius);
      panel.rotation.y = -angle + Math.PI / 2;
      group.add(panel);

      const border = new THREE.Mesh(panelGeo, panelBorderMat);
      panel.add(border);
    }

    // 6. Animation Loop
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.01;

      if (autoRotate && group && !isDraggingRef.current) {
        group.rotation.y += 0.0035;
      }

      // Gentle floating motion for storyboards
      slateGroup.position.y = 1.2 + Math.sin(time * 1.5) * 0.04;
      head.rotation.y = Math.sin(time * 0.8) * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    // 7. Resize Handler
    const handleResize = () => {
      if (!containerRef.current || !renderer || !camera) return;
      const newW = containerRef.current.clientWidth;
      const newH = containerRef.current.clientHeight || 420;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    // 8. Mouse / Touch Orbit Controls
    const canvasEl = canvasRef.current;

    const handlePointerDown = (e: PointerEvent) => {
      isDraggingRef.current = true;
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
      onInteract?.();
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDraggingRef.current || !group) return;
      const deltaX = e.clientX - previousMousePositionRef.current.x;
      const deltaY = e.clientY - previousMousePositionRef.current.y;

      group.rotation.y += deltaX * 0.008;

      if (cameraRef.current) {
        cameraRef.current.position.y = Math.max(1.8, Math.min(7.5, cameraRef.current.position.y - deltaY * 0.01));
        cameraRef.current.lookAt(0, 1.2, 0);
      }

      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
      isDraggingRef.current = false;
    };

    canvasEl.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvasEl.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      cancelAnimationFrame(animationFrameId);

      renderer.dispose();
      materialsRef.current.forEach(m => m.dispose());
    };
  }, []);

  // Effect: Update Focal Length (FOV)
  useEffect(() => {
    if (!cameraRef.current) return;
    const fovMap = {
      '24mm': 65,
      '50mm': 42,
      '85mm': 26
    };
    cameraRef.current.fov = fovMap[focalLength];
    cameraRef.current.updateProjectionMatrix();

    if (frustumConeRef.current) {
      const scaleMap = { '24mm': 1.6, '50mm': 1.0, '85mm': 0.65 };
      frustumConeRef.current.scale.set(scaleMap[focalLength], scaleMap[focalLength], 1);
    }
  }, [focalLength]);

  // Effect: Update Material / Render Style
  useEffect(() => {
    if (!sceneRef.current) return;
    const isWire = renderStyle === 'wireframe';
    const isNoir = renderStyle === 'noir';

    materialsRef.current.forEach(mat => {
      if ('wireframe' in mat) {
        (mat as THREE.MeshStandardMaterial).wireframe = isWire;
      }
    });

    if (sceneRef.current) {
      if (isNoir) {
        sceneRef.current.background = new THREE.Color(0x1a1918);
        if (sceneRef.current.fog) sceneRef.current.fog.color = new THREE.Color(0x1a1918);
      } else {
        sceneRef.current.background = new THREE.Color(0xF5EFEB);
        if (sceneRef.current.fog) sceneRef.current.fog.color = new THREE.Color(0xF5EFEB);
      }
    }
  }, [renderStyle]);

  const handleSnapshot = () => {
    setFlashActive(true);
    setTimeout(() => setFlashActive(false), 240);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[460px] md:h-[500px] rounded-2xl overflow-hidden border-2 border-[#383431] bg-[#F5EFEB] shadow-md select-none group"
    >
      {/* 3D Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing block"
      />

      {/* Snapshot Flash Overlay */}
      {flashActive && (
        <div className="absolute inset-0 bg-white/80 z-30 pointer-events-none transition-opacity duration-200" />
      )}

      {/* Camera Viewfinder Overlay (Director's Grid & Crosshair) */}
      <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between z-10">
        {/* Top bar */}
        <div className="flex items-center justify-between text-xs font-mono font-semibold tracking-wider text-[#383431]">
          <div className="flex items-center gap-2 bg-[#FAF6EE]/90 px-3 py-1 rounded-full border border-[#423E3A]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C8523B] animate-pulse" />
            <span>REC · 24.00 FPS</span>
            <span className="text-[#8C8275]">|</span>
            <span>SHUTTER 180°</span>
          </div>
          <div className="bg-[#FAF6EE]/90 px-3 py-1 rounded-full border border-[#423E3A]">
            <span>LENS: {focalLength.toUpperCase()}</span>
            <span className="text-[#8C8275] mx-1.5">/</span>
            <span>RATIO: {aspectRatioMask}</span>
          </div>
        </div>

        {/* Viewfinder Aspect Ratio Crop Mask */}
        <div className="absolute inset-x-8 top-14 bottom-14 border border-dashed border-[#57534E]/40 pointer-events-none flex items-center justify-center">
          {/* Rule of Thirds Guide lines */}
          <div className="w-full h-full grid grid-cols-3 grid-rows-3 opacity-30">
            <div className="border-r border-b border-[#383431]" />
            <div className="border-r border-b border-[#383431]" />
            <div className="border-b border-[#383431]" />
            <div className="border-r border-b border-[#383431]" />
            <div className="border-r border-b border-[#383431]" />
            <div className="border-b border-[#383431]" />
            <div className="border-r border-[#383431]" />
            <div className="border-r border-[#383431]" />
            <div />
          </div>
          {/* Center Crosshair */}
          <div className="absolute w-4 h-4 flex items-center justify-center">
            <div className="w-4 h-[1.5px] bg-[#C8523B]" />
            <div className="h-4 w-[1.5px] bg-[#C8523B] absolute" />
          </div>
        </div>

        {/* Bottom Bar: Drag Hint */}
        <div className="flex items-center justify-between text-xs font-mono text-[#57534E]">
          <span className="bg-[#FAF6EE]/80 px-2.5 py-0.5 rounded border border-[#C4B9A8]">
            3D PRE-VISUALIZATION VIEWPORT
          </span>
          <span className="bg-[#FAF6EE]/80 px-2.5 py-0.5 rounded border border-[#C4B9A8]">
            DRAG TO ORBIT / ROTATE
          </span>
        </div>
      </div>

      {/* Floating Interactive Control Panel */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2 p-2.5 bg-[#FAF6EE]/95 backdrop-blur-md rounded-xl border border-[#383431] shadow-lg">
        {/* Focal Length switcher */}
        <div className="flex items-center gap-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B655B] mr-1 hidden sm:inline">
            Lens:
          </span>
          {(['24mm', '50mm', '85mm'] as const).map(fl => (
            <button
              key={fl}
              type="button"
              onClick={() => setFocalLength(fl)}
              className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all border ${
                focalLength === fl
                  ? 'bg-[#C8523B] text-white border-[#C8523B] shadow-sm'
                  : 'bg-white text-[#383431] border-[#D4C9BA] hover:bg-[#F2ECE1]'
              }`}
            >
              {fl}
            </button>
          ))}
        </div>

        {/* Shading Style switcher */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setRenderStyle(renderStyle === 'sketch' ? 'wireframe' : renderStyle === 'wireframe' ? 'noir' : 'sketch')}
            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white border border-[#D4C9BA] text-[#383431] hover:bg-[#F2ECE1] flex items-center gap-1"
            title="Toggle View Mode"
          >
            <Layers className="w-3.5 h-3.5 text-[#C8523B]" />
            <span className="capitalize">{renderStyle}</span>
          </button>

          {/* Auto rotate toggle */}
          <button
            type="button"
            onClick={() => setAutoRotate(!autoRotate)}
            className={`p-1.5 rounded-lg border transition-colors ${
              autoRotate
                ? 'bg-[#E5DBCB] border-[#B3A694] text-[#2B2724]'
                : 'bg-white border-[#D4C9BA] text-[#8C8275]'
            }`}
            title={autoRotate ? 'Pause Rotation' : 'Auto Rotate'}
          >
            <RefreshCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
          </button>

          {/* Snapshot Shutter button */}
          <button
            type="button"
            onClick={handleSnapshot}
            className="px-3 py-1 text-xs font-bold rounded-lg bg-[#2E2B28] text-white hover:bg-[#45413D] transition-colors flex items-center gap-1.5 shadow-sm active:scale-95"
          >
            <Camera className="w-3.5 h-3.5 text-[#D49A3D]" />
            <span>Snap</span>
          </button>
        </div>
      </div>
    </div>
  );
};
