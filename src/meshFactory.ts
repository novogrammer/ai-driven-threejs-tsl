import * as THREE from 'three/webgpu';
import { TeapotGeometry } from 'three/addons/geometries/TeapotGeometry.js';
import { createDynamicMaterial } from './materialFactory'; // マテリアルファクトリをインポート

/**
 * ティーポットを生成するファクトリメソッド
 * @returns THREE.Mesh
 */
export function createTeapot(): THREE.Mesh {
  const geometry = new TeapotGeometry(1, 10); // サイズ1、分割数10
  const material = createDynamicMaterial(); // 分離したマテリアルを使用
  return new THREE.Mesh(geometry, material);
}