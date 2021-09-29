import { Scene, OrbitControls, PerspectiveCamera, AmbientLight, DirectionalLight, WebGLRenderer } from "three"

const scene = new Scene()
const renderer = new WebGLRenderer()
const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000)
const ambient = new AmbientLight(0xf5f5c5)
const directionalLight = new DirectionalLight(0xffeedd)
const controls = new OrbitControls()

camera.position.z = 250
directionalLight.position.set(0, 0, 20)

scene.add(ambient)
scene.add(directionalLight)

renderer.setClearColor(0xddeeff)
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2)

geometry.setIndex(new THREE.BufferAttribute(new Uint16Array(index), 1))
geometry.addAttribute("position", new THREE.BufferAttribute(vertices, 3))
var material = new THREE.MeshLambertMaterial({ color: 0x000000, wireframe: true })
var mesh = new THREE.Mesh(geometry, material)
geometry.scale(10, 10, 10)
scene.add(mesh)

container.appendChild(renderer.domElement)

var render = function () {
  requestAnimationFrame(render)

  mesh.rotation.x += 0.005
  mesh.rotation.y += 0.01

  renderer.render(scene, camera)
}
render()
