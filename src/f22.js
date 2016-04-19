// f22.js

var container;
var camera, scene, renderer;
var mouseX = 0, mouseY = 0;

camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
camera.position.z = 250;
// scene
scene = new THREE.Scene();
var ambient = new THREE.AmbientLight( 0xc5c5f5 );
scene.add( ambient );
var directionalLight = new THREE.DirectionalLight( 0xffeedd );
directionalLight.position.set( 0, 0, 20 );
scene.add( directionalLight );

var container = document.getElementById('threejs-container');

renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth/2 , window.innerHeight /2);
container.appendChild( renderer.domElement );

var geometry = new THREE.BufferGeometry();
var vertexPositions = [	[0.0, 0.0, 0.0],	//dummy vertex
								[0.706150, -0.296850, 0.382132],
								[1.329392, 0.120854, 0.239861],
								[1.795090, -0.254054, 0.000000],
								[-4.799031, -0.047188, 1.547908],
								[-5.340624, -0.047012, 0.000000],
								[0.706150, 0.061679, 0.466528],
								[-4.799031, 0.053725, 1.547908],
								[-3.911251, -0.018050, 3.492996],
								[-3.291020, -0.000480, 3.487931],
								[-1.167457, 0.061679, 1.119782],
								[-3.560644, 0.120854, 0.000000],
								[-1.167457, -0.062639, 1.119782],
								[-3.562797, -0.339830, 0.006825],
								[0.171368, 0.142285, 0.226871],
								[0.254979, 0.061679, 0.969707],
								[0.254979, -0.062639, 0.969707],
								[0.186851, -0.340634, 0.000000],
								[-5.621762, 0.003268, 2.341256],
								[-6.307508, -0.057942, 1.417959],
								[-4.684887, 1.629915, 0.022402],
								[-5.104208, 1.611666, 0.028421],
								[0.706150, -0.296850, -0.382132],
								[1.329392, 0.120854, -0.239861],
								[3.025733, -0.024491, 0.000000],
								[-4.799031, -0.047188, -1.547908],
								[-5.356107, 0.042713, 0.000000],
								[0.706150, 0.061679, -0.466528],
								[-4.799031, 0.053725, -1.547908],
								[-3.911251, -0.018050, -3.492996],
								[-3.291020, -0.000480, -3.487931],
								[-1.167457, 0.061679, -1.119782],
								[-1.167457, -0.062639, -1.119782],
								[0.171368, 0.142285, -0.226871],
								[0.254979, 0.061679, -0.969707],
								[0.254979, -0.062639, -0.969707],
								[-5.621762, 0.003268 -2.341256],
								[-6.307508, -0.057942, -1.417959],
								[-4.684887, 1.629915, -0.022402],
								[-5.104208, 1.611666, -0.028421],
								[0.171368, 0.157206, 0.000000],
								[1.929333, 0.120854, 0.000000],
								[1.329250, 0.271185, 0.000000] ];
var vertices = new Float32Array( vertexPositions.length * 3 );
for ( var i = 0; i < vertexPositions.length; i++ ) { 
	vertices[ i*3 + 0 ] = vertexPositions[i][0];
	vertices[ i*3 + 1 ] = vertexPositions[i][1]; 
	vertices[ i*3 + 2 ] = vertexPositions[i][2]; 
}
var index = [6, 2, 24, 1, 3, 24, 13, 12, 5, 1, 24, 6, 26, 7, 11, 4, 12, 9, 11, 10, 7, 12, 10, 9, 7, 10, 9, 7, 4, 8, 14, 11, 15, 15, 10, 12, 16, 12, 13, 2, 14, 6, 6, 15, 1, 1, 16, 17, 12, 4, 5, 8, 4, 9, 8, 7, 9, 11, 10, 15, 16, 15, 12, 17, 16, 13, 14, 15, 6, 15, 16, 1, 3, 1, 17, 4, 18, 19, 18, 7, 19, 7, 26, 19, 5, 4, 19, 4, 7, 18, 26, 11, 20, 27, 24, 23, 17, 13, 35, 26, 21, 39, 22, 27, 24, 25, 30, 32, 32, 30, 31, 28, 30, 31, 28, 29, 25, 34, 32, 31, 23, 27, 33, 27, 22, 34, 13, 5, 32, 20, 39, 21, 29, 30, 25, 29, 30, 28, 35, 13, 32, 35, 32, 34, 3, 17, 22, 33, 27, 34, 34, 22, 35, 22, 24, 3, 25, 37, 36, 36, 37, 28, 28, 37, 26, 20, 38, 39, 25, 36, 28, 32, 5, 25, 5, 37, 25, 22, 17, 35, 26, 11, 28, 11, 28, 31, 33, 34, 11, 11, 34, 31, 26, 39, 38, 11, 38, 20, 14, 40, 11, 33, 11, 40, 14, 2, 40, 33, 40, 23, 42, 2, 40, 41, 2, 42, 2, 41, 24, 23, 24, 41, 41, 42, 23, 42, 40, 23, 21, 26, 20, 11, 26, 38];

geometry.setIndex(new THREE.BufferAttribute(new Uint16Array(index), 1));
geometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3)); 
var material = new THREE.MeshLambertMaterial({ color: 0xffffff, wireframe: true }); 
var mesh = new THREE.Mesh(geometry, material);
geometry.scale(10, 10, 10);
scene.add(mesh);

var render = function(){
	requestAnimationFrame( render );

	mesh.rotation.x += 0.005;
	mesh.rotation.y += 0.01;

	renderer.render( scene, camera );
}
render();

