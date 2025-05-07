import './style.css'; // Import the CSS file
import * as THREE from 'three/webgpu';
import { createTeapot } from './meshFactory'; // 修正後のパス

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

// ファクトリメソッドでティーポットを生成
const teapot = createTeapot();

// シーンに追加
scene.add(teapot);

// ライトを作成
const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // 白色の平行光源
directionalLight.position.set(5, 5, 5); // ライトの位置を設定
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // 環境光
scene.add(ambientLight);

// カメラの位置を設定
camera.position.z = 3;

// ウィンドウリサイズ時の処理
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight; // カメラのアスペクト比を更新
  camera.updateProjectionMatrix(); // プロジェクションマトリックスを更新
  renderer.setSize(window.innerWidth, window.innerHeight); // レンダラーのサイズを更新
});

// アニメーションループ
function animate() {
  requestAnimationFrame(animate);

  // 回転アニメーション
  teapot.rotation.x += 0.001;
  teapot.rotation.y += 0.001;

  renderer.render(scene, camera);
}
animate();
