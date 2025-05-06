import './style.css'; // Import the CSS file
import * as THREE from 'three/webgpu';

// シーンを作成
const scene = new THREE.Scene();

// カメラを作成
const camera = new THREE.PerspectiveCamera(
  75, // 視野角
  window.innerWidth / window.innerHeight, // アスペクト比
  0.1, // 近くのクリップ面
  1000 // 遠くのクリップ面
);

// レンダラーを作成
const renderer = new THREE.WebGPURenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 1); // Set background color to black
document.body.appendChild(renderer.domElement);

// ボックスジオメトリとマテリアルを作成
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

// シーンに追加
scene.add(cube);

// カメラの位置を設定
camera.position.z = 5;

// アニメーションループ
function animate() {
  requestAnimationFrame(animate);

  // 回転アニメーション
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();
