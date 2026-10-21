// The octagonal lead lantern roof from the job photo (lead-lantern-ball-finial), built in three.js.
// Plays once when half on screen (~3s), pauses off screen, Replay re-runs it. Parts link to the numbered list.
import * as THREE from 'three';
import { gsap } from 'gsap';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

type Opts = { section: HTMLElement; stage: HTMLElement; list: HTMLElement; replay: HTMLButtonElement; onReady?: () => void };

function leadTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d')!;
  g.fillStyle = '#9a9c9e';
  g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 900; i++) {
    const x = Math.random() * 256, y = Math.random() * 256, r = 2 + Math.random() * 10;
    const l = 105 + Math.random() * 45;
    g.fillStyle = `rgba(${l + 20},${l + 22},${l + 26},${0.05 + Math.random() * 0.08})`;
    g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

export async function mountLantern({ section, stage, list, replay, onReady }: Opts) {
  const canvasHost = stage.querySelector<HTMLElement>('[data-ln-canvas]')!;
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  canvasHost.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.55;
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
  camera.position.set(0, 2.6, 5.6);
  camera.lookAt(0, 1.25, 0);

  scene.add(new THREE.HemisphereLight(0xeef1f4, 0x3a3836, 0.8));
  const key = new THREE.DirectionalLight(0xfff1de, 2.6); key.position.set(3.5, 6, 4); scene.add(key);
  const rim = new THREE.DirectionalLight(0xc4a68a, 0.9); rim.position.set(-4, 3, -3); scene.add(rim);
  const fill = new THREE.DirectionalLight(0xdfe6ee, 0.5); fill.position.set(-3, 1, 4); scene.add(fill);

  const tex = leadTexture();
  const mLead = () => new THREE.MeshStandardMaterial({ color: 0x9c9ea1, map: tex, roughness: 0.5, metalness: 0.55, side: THREE.DoubleSide });
  const mats = {
    base: new THREE.MeshStandardMaterial({ color: 0xe8e2d8, roughness: 0.92, metalness: 0 }),
    apron: mLead(), bays: mLead(),
    rolls: new THREE.MeshStandardMaterial({ color: 0xaaacaf, map: tex, roughness: 0.42, metalness: 0.6 }),
    finial: new THREE.MeshStandardMaterial({ color: 0xa2a4a7, map: tex, roughness: 0.38, metalness: 0.62 }),
  };

  const root = new THREE.Group();
  scene.add(root);
  const N = 8, R = 1.12, Y0 = 0.8, APEX = 1.78;
  const ang = (i: number) => (i / N) * Math.PI * 2;
  const vtx = (i: number, r = R, y = Y0) => new THREE.Vector3(r * Math.sin(ang(i)), y, r * Math.cos(ang(i)));
  const apex = new THREE.Vector3(0, APEX, 0);

  // 01 base + apron
  const base = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.0, 0.5, N), mats.base); body.position.y = 0.53; base.add(body);
  const apron = new THREE.Mesh(new THREE.CylinderGeometry(1.06, 1.08, 0.14, N), mats.apron); apron.position.y = 0.74; base.add(apron);
  const board = new THREE.Mesh(new THREE.CylinderGeometry(R + 0.02, R + 0.02, 0.04, N), mats.apron); board.position.y = Y0 - 0.02; base.add(board);
  root.add(base);

  // 02 bays — one triangular sheet per face
  const bays: THREE.Mesh[] = [];
  for (let i = 0; i < N; i++) {
    const a = vtx(i), b = vtx(i + 1);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute([a.x, a.y, a.z, b.x, b.y, b.z, apex.x, apex.y, apex.z], 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 1, 0, 0.5, 1], 2));
    g.computeVertexNormals();
    const m = new THREE.Mesh(g, mats.bays);
    const pivot = new THREE.Group(); pivot.add(m); root.add(pivot);
    bays.push(m);
  }

  // 03 hip rolls
  const rolls: THREE.Mesh[] = [];
  for (let i = 0; i < N; i++) {
    const a = vtx(i, R + 0.015, Y0 + 0.01), dir = apex.clone().sub(a);
    const len = dir.length();
    const geo = new THREE.CylinderGeometry(0.038, 0.038, len, 12); geo.translate(0, len / 2, 0);
    const m = new THREE.Mesh(geo, mats.rolls);
    m.position.copy(a);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
    root.add(m); rolls.push(m);
  }

  // 04 finial — collar, neck, ball, cap
  const finial = new THREE.Group();
  const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.19, 0.14, 16), mats.finial); collar.position.y = APEX + 0.03;
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.11, 0.16, 20), mats.finial); neck.position.y = APEX + 0.17;
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.025, 10, 28), mats.finial); ring.rotation.x = Math.PI / 2; ring.position.y = APEX + 0.25;
  const ball = new THREE.Mesh(new THREE.SphereGeometry(0.26, 40, 28), mats.finial); ball.position.y = APEX + 0.5;
  const cap = new THREE.Mesh(new THREE.SphereGeometry(0.05, 16, 12), mats.finial); cap.position.y = APEX + 0.78;
  finial.add(collar, neck, ring, ball, cap);
  root.add(finial);

  const groups: Record<string, THREE.Material[]> = { base: [mats.base, mats.apron], bays: [mats.bays], rolls: [mats.rolls], finial: [mats.finial] };

  // sizing
  const resize = () => {
    const w = canvasHost.clientWidth, h = canvasHost.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  resize();
  new ResizeObserver(resize).observe(canvasHost);

  // drag to turn
  let spin = 0.16, drag = false, lastX = 0, vel = 0;
  const el = renderer.domElement;
  el.addEventListener('pointerdown', (e) => { drag = true; lastX = e.clientX; el.setPointerCapture(e.pointerId); });
  el.addEventListener('pointermove', (e) => { if (!drag) return; const dx = e.clientX - lastX; lastX = e.clientX; root.rotation.y += dx * 0.008; vel = dx * 0.008; });
  el.addEventListener('pointerup', () => { drag = false; });

  // timeline
  const tl = gsap.timeline({ paused: true });
  const build = () => {
    tl.clear();
    tl.set(base.position, { y: -0.9 }).set(base.scale, { x: 0.9, y: 0.9, z: 0.9 })
      .set(bays.map((b) => b.parent!.position), { y: 1.6 })
      .set(bays.map((b) => b.parent!.rotation), { y: -0.6 })
      .set(bays.map((b) => b.material), { opacity: 1 })
      .set(rolls.map((r) => r.scale), { x: 0.001, y: 0.001, z: 0.001 })
      .set(finial.position, { y: 1.4 }).set(finial.scale, { x: 0.6, y: 0.6, z: 0.6 })
      .set(root.rotation, { y: -0.5 });
    bays.forEach((b) => { b.visible = false; });
    finial.visible = false;
    tl.to(base.position, { y: 0, duration: 0.7, ease: 'power3.out' }, 0)
      .to(base.scale, { x: 1, y: 1, z: 1, duration: 0.7, ease: 'power3.out' }, 0)
      .to(root.rotation, { y: 0.35, duration: 3.1, ease: 'power2.inOut' }, 0);
    bays.forEach((b, i) => {
      const t = 0.55 + i * 0.12;
      tl.call(() => { b.visible = true; }, [], t)
        .to(b.parent!.position, { y: 0, duration: 0.55, ease: 'power3.out' }, t)
        .to(b.parent!.rotation, { y: 0, duration: 0.55, ease: 'power3.out' }, t);
    });
    rolls.forEach((r, i) => tl.to(r.scale, { x: 1, y: 1, z: 1, duration: 0.4, ease: 'power2.out' }, 1.65 + i * 0.07));
    tl.call(() => { finial.visible = true; }, [], 2.35)
      .to(finial.position, { y: 0, duration: 0.6, ease: 'back.out(1.6)' }, 2.35)
      .to(finial.scale, { x: 1, y: 1, z: 1, duration: 0.6, ease: 'back.out(1.6)' }, 2.35)
      .call(() => { list.classList.add('is-on'); replay.hidden = false; requestAnimationFrame(() => replay.classList.add('is-on')); }, [], 2.9);
  };
  build();
  tl.progress(0).pause();

  // highlight from list
  const links = Array.from(list.querySelectorAll<HTMLElement>('[data-part]'));
  const hl = (k: string | null) => {
    Object.entries(groups).forEach(([g, ms]) => ms.forEach((m) => {
      const s = m as THREE.MeshStandardMaterial;
      s.emissive.setHex(g === k ? 0x7a5a3a : 0x000000);
      s.emissiveIntensity = g === k ? 0.55 : 0;
    }));
    links.forEach((l) => l.classList.toggle('is-hl', l.dataset.part === k));
  };
  links.forEach((l) => {
    l.addEventListener('mouseenter', () => hl(l.dataset.part!));
    l.addEventListener('focus', () => hl(l.dataset.part!));
    l.addEventListener('mouseleave', () => hl(null));
    l.addEventListener('blur', () => hl(null));
    l.addEventListener('click', (e) => { e.preventDefault(); hl(l.dataset.part!); });
  });

  // render loop — only while on screen
  let visible = false, played = false, raf = 0, last = performance.now();
  const loop = (t: number) => {
    raf = requestAnimationFrame(loop);
    const dt = Math.min(0.05, (t - last) / 1000); last = t;
    if (!tl.isActive() && !drag) { vel *= 0.92; root.rotation.y += spin * dt + vel * 0.2; }
    renderer.render(scene, camera);
  };
  const start = () => { if (!raf) { last = performance.now(); raf = requestAnimationFrame(loop); } };
  const stop = () => { cancelAnimationFrame(raf); raf = 0; };

  const io = new IntersectionObserver((es) => {
    es.forEach((e) => {
      visible = e.isIntersecting;
      if (visible) {
        start();
        if (!played) { played = true; tl.play(0); } else if (tl.progress() < 1) tl.resume();
      } else { stop(); tl.pause(); }
    });
  }, { threshold: 0.5 });
  io.observe(stage);

  replay.addEventListener('click', () => {
    hl(null);
    list.classList.remove('is-on');
    replay.classList.remove('is-on');
    build();
    tl.play(0);
    start();
  });

  renderer.render(scene, camera);
  section.classList.add('has-gl');
  section.classList.remove('gl-pending');
  onReady?.();
  (window as any).__lantern = { tl, root };
}
