import * as THREE from 'three';

/**
 * 立方体を生成するファクトリメソッド
 * @param color - 立方体の色
 * @returns THREE.Mesh
 */
export function createCube(color: number = 0x00ff00): THREE.Mesh {
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial({ color });
  return new THREE.Mesh(geometry, material);
}