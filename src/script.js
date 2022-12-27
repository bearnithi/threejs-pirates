import "./style.css";
import { Experience } from "./Experience/Experience";

const experience = new Experience(document.querySelector('.webgl'));

// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import * as dat from "lil-gui";

// import waterVertexShader from "./shaders/water/vertex.glsl";
// import waterFragmentShader from "./shaders/water/fragment.glsl";


// let showBlackPearl = false;
// document.addEventListener('click', () => {
//   showBlackPearl = true;
// })

// /**
//  * Base
//  */
// // Debug
// const gui = new dat.GUI({ width: 340 });
// gui.close();
// const debugObject = {};

// // Canvas
// const canvas = document.querySelector("canvas.webgl");

// // Scene
// const scene = new THREE.Scene();

// // const axesHelper = new THREE.AxesHelper();
// // scene.add(axesHelper);

// let blackPearl = null;
// const gltfLoader = new GLTFLoader();
// gltfLoader.load("/models/black-pearl/scene.gltf", (gltf) => {
//   console.log("loaded successfully");
//   console.log(gltf.scene, "gltf");
//   blackPearl = gltf.scene;
//   gltf.scene.scale.set(0.001, 0.001, 0.001);
//   gltf.scene.position.set(-0.5, -2, -2);
//   scene.add(gltf.scene);

//   const blackPearlLight = new THREE.PointLight(
//     new THREE.Color('#000000'),
//     3
//   );
//   blackPearlLight.position.set(0, 5, -2);
//   blackPearlLight.target = gltf.scene;
//   scene.add(blackPearlLight);

//   const cameraHelper = new THREE.PointLightHelper(blackPearlLight);
//   scene.add(cameraHelper);

//   // create an AudioListener and add it to the camera
//   const listener = new THREE.AudioListener();
//   camera.add(listener);
//   const sound = new THREE.Audio(listener);

//   const audioLoader = new THREE.AudioLoader();
//   audioLoader.load(
//     "audio/pirates-black-pearl.mp3",
//     function (buffer) {
//       sound.setBuffer(buffer);
//       sound.setLoop(true);
//       sound.setVolume(0.8);

//       document.addEventListener("click", () => {
//         if (!sound.isPlaying) {
//           setTimeout(() => {
//             sound.play();
//           });
//         }
//       });
//     },
//     function (err) {
//       console.log("progress");
//     },
//     function (err) {
//       console.log("An error happened", err);
//     }
//   );
// });

// const moonGeometry = new THREE.SphereGeometry(2, 20, 20);
// const moonMesh = new THREE.Mesh(
//   moonGeometry,
//   new THREE.MeshStandardMaterial({
//     metalness: 0.01,
//     roughness: 1,
//   })
// );

// moonMesh.position.set(-1, -0.2, -12);
// scene.add(moonMesh);

// debugObject.moonColor = "#1975a3";

// const moonLight = new THREE.DirectionalLight(
//   new THREE.Color(debugObject.moonColor),
//   3
// );
// moonLight.position.set(2, 4, -2);
// moonLight.target = moonMesh;
// moonLight.target.updateMatrixWorld();
// scene.add(moonLight);



// // const cameraHelper = new THREE.DirectionalLightHelper(moonLight);
// // scene.add(cameraHelper);

// /**
//  * Water
//  */
// // Geometry
// const waterGeometry = new THREE.PlaneGeometry(20, 20, 512, 512);

// debugObject.depthColor = "#186691";
// debugObject.surfaceColor = "#001424";

// scene.background = new THREE.Color(debugObject.surfaceColor);

// // Material
// const waterMaterial = new THREE.ShaderMaterial({
//   vertexShader: waterVertexShader,
//   fragmentShader: waterFragmentShader,
//   uniforms: {
//     uBigWavesElevation: {
//       value: 0.2,
//     },
//     uBigWavesFrequency: {
//       value: new THREE.Vector2(1.5, 0.8),
//     },
//     uTime: {
//       value: 0,
//     },
//     uBigWavesSpeed: { value: 0.5 },
//     uDepthColor: {
//       value: new THREE.Color(debugObject.depthColor),
//     },
//     uSurfaceColor: {
//       value: new THREE.Color(debugObject.surfaceColor),
//     },
//     uColorOffset: { value: 0.08 },
//     uColorMultiplier: {
//       value: 5,
//     },
//     uSmallWavesElevation: { value: 0.15 },
//     uSmallWavesFrequency: { value: 3 },
//     uSmallWavesSpeed: { value: 0.2 },
//     uSmallIterations: { value: 4 },
//   },
// });
// waterMaterial.fog = true;

// gui
//   .add(waterMaterial.uniforms.uBigWavesElevation, "value")
//   .min(0)
//   .max(1)
//   .step(0.001)
//   .name("uBigWavesElevation");
// gui
//   .add(waterMaterial.uniforms.uBigWavesFrequency.value, "x")
//   .min(0)
//   .max(10)
//   .step(0.001)
//   .name("uBigWavesFrequencyX");
// gui
//   .add(waterMaterial.uniforms.uBigWavesFrequency.value, "y")
//   .min(0)
//   .max(10)
//   .step(0.001)
//   .name("uBigWavesFrequencyY");
// gui
//   .add(waterMaterial.uniforms.uBigWavesSpeed, "value")
//   .min(0)
//   .max(4)
//   .step(0.001)
//   .name("uBigWavesSpeed");
// gui.addColor(debugObject, "depthColor").onChange(() => {
//   waterMaterial.uniforms.uDepthColor.value.set(debugObject.depthColor);
// });
// gui.addColor(debugObject, "surfaceColor").onChange(() => {
//   waterMaterial.uniforms.uSurfaceColor.value.set(debugObject.surfaceColor);
//   scene.background.set(debugObject.surfaceColor);
// });
// gui
//   .add(waterMaterial.uniforms.uColorOffset, "value")
//   .min(0)
//   .max(1)
//   .step(0.001)
//   .name("uColorOffset");
// gui
//   .add(waterMaterial.uniforms.uColorMultiplier, "value")
//   .min(0)
//   .max(10)
//   .step(0.001)
//   .name("uColorMultiplier");
// gui
//   .add(waterMaterial.uniforms.uSmallWavesElevation, "value")
//   .min(0)
//   .max(1)
//   .step(0.001)
//   .name("uSmallWavesElevation");
// gui
//   .add(waterMaterial.uniforms.uSmallWavesFrequency, "value")
//   .min(0)
//   .max(30)
//   .step(0.001)
//   .name("uSmallWavesFrequency");
// gui
//   .add(waterMaterial.uniforms.uSmallWavesSpeed, "value")
//   .min(0)
//   .max(4)
//   .step(0.001)
//   .name("uSmallWavesSpeed");
// gui
//   .add(waterMaterial.uniforms.uSmallIterations, "value")
//   .min(0)
//   .max(5)
//   .step(1)
//   .name("uSmallIterations");
// gui.addColor(debugObject, "moonColor").onChange(() => {
//   moonLight.color.set(debugObject.moonColor);
// });

// // Mesh
// const water = new THREE.Mesh(waterGeometry, waterMaterial);
// water.rotation.x = -Math.PI * 0.5;
// scene.add(water);

// /**
//  * Sizes
//  */
// const sizes = {
//   width: window.innerWidth,
//   height: window.innerHeight,
// };

// window.addEventListener("resize", () => {
//   // Update sizes
//   sizes.width = window.innerWidth;
//   sizes.height = window.innerHeight;

//   // Update camera
//   camera.aspect = sizes.width / sizes.height;
//   camera.updateProjectionMatrix();

//   // Update renderer
//   renderer.setSize(sizes.width, sizes.height);
//   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// });

// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(
//   75,
//   sizes.width / sizes.height,
//   0.1,
//   100
// );
// camera.position.set(1, 0.4, 2);
// scene.add(camera);

// // Controls
// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;
// controls.minDistance = 1;
// controls.maxDistance = 2;
// controls.maxPolarAngle = 2;

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//   canvas: canvas,
// });
// renderer.setSize(sizes.width, sizes.height);
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// renderer.physicallyCorrectLights = true;




// /**
//  * Animate
//  */
// const clock = new THREE.Clock();
// const tick = () => {
//   const elapsedTime = clock.getElapsedTime();
//   waterMaterial.uniforms.uTime.value = elapsedTime;

//   if (blackPearl && showBlackPearl) {
//     blackPearl.rotation.x = Math.sin(elapsedTime) * 0.1;
//     blackPearl.rotation.y = Math.cos(elapsedTime) * 0.1;
//     blackPearl.position.y = Math.sin(elapsedTime * 0.5) * 0.9;
//     blackPearl.position.x += Math.sin(elapsedTime * 0.5) * 0.01;
//   }

//   // Update controls
//   controls.update();

//   // Render
//   renderer.render(scene, camera);

//   // Call tick again on the next frame
//   window.requestAnimationFrame(tick);
// };

// tick();
