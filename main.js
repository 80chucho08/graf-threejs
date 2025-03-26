import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Crear la escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// Crear geometría común para los cubos
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Crear materiales para los cubos con diferentes colores
const material1 = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const material2 = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const material3 = new THREE.MeshStandardMaterial({ color: 0xff0000 });

// Crear los cubos con diferentes colores
const cube1 = new THREE.Mesh(geometry, material1);
cube1.position.x = -2; // Posicionar el primer cubo
scene.add(cube1);

const cube2 = new THREE.Mesh(geometry, material2);
scene.add(cube2);

const cube3 = new THREE.Mesh(geometry, material3);
cube3.position.x = 2; // Posicionar el tercer cubo
scene.add(cube3);

// Agregar una luz direccional y ajustar su posición
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Posicionar la cámara
camera.position.z = 6;

// Definir las velocidades de rotación para cada cubo
let rotationSpeed1 = 0.01; // Velocidad de rotación para el cubo 1
let rotationSpeed2 = 0.03; // Velocidad de rotación para el cubo 2
let rotationSpeed3 = 0.04; // Velocidad de rotación para el cubo 3

// Función de animación con rotación y renderizado
function animate() {
    cube1.rotation.x += rotationSpeed1; // Rotación en eje X para cubo 1
    cube1.rotation.y += rotationSpeed1; // Rotación en eje Y para cubo 1

    cube2.rotation.x += rotationSpeed2; // Rotación en eje X para cubo 2
    cube2.rotation.y += rotationSpeed2; // Rotación en eje Y para cubo 2

    cube3.rotation.x += rotationSpeed3; // Rotación en eje X para cubo 3
    cube3.rotation.y += rotationSpeed3; // Rotación en eje Y para cubo 3

    renderer.render(scene, camera);
}

// Iniciar la animación
renderer.setAnimationLoop(animate);
