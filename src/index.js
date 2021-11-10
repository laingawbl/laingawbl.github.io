import {
  AmbientLight,
  DirectionalLight,
  Mesh,
  PerspectiveCamera,
  Scene,
  SphereGeometry,
  WebGLRenderer,
  MeshStandardMaterial,
  TextureLoader,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

let camera, scene, renderer;
let mesh;

function init() {
  renderer = new WebGLRenderer();
  renderer.setClearColor(0xddeeff);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

  camera = new PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    2000
  );
  const ambient = new AmbientLight(0xf5f5c5);
  const directionalLight = new DirectionalLight(0xffeedd);

  camera.position.z = 250;
  directionalLight.position.set(0, 0, 20);

  scene = new Scene();
  scene.add(ambient);
  scene.add(directionalLight);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 75;
  controls.maxDistance = 200;
  controls.enablePan = false;

  const texture = new TextureLoader().load("img/fireboat.jpeg");
  const material = new MeshStandardMaterial({ map: texture });
  mesh = new Mesh(new SphereGeometry(30, 32, 24), material);
  scene.add(mesh);

  document.getElementById("three-container").appendChild(renderer.domElement);

  window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
}

function render() {
  requestAnimationFrame(render);

  mesh.rotation.x += 0.005;
  mesh.rotation.y += 0.01;

  renderer.render(scene, camera);
}

init();
render();
