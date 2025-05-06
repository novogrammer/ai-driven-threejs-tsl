import * as THREE from 'three/webgpu';
import { vec3, sin, positionWorld } from 'three/tsl';

/**
 * 動的に色が変化するマテリアルを生成するファクトリメソッド
 * @returns THREE.MeshStandardNodeMaterial
 */
export function createDynamicMaterial(): THREE.MeshStandardNodeMaterial {
  return new THREE.MeshStandardNodeMaterial({
    colorNode: vec3(
      sin(positionWorld.x.mul(0.5)).mul(0.5).add(0.5), // 赤成分
      sin(positionWorld.y.mul(0.5)).mul(0.5).add(0.5), // 緑成分
      sin(positionWorld.z.mul(0.5)).mul(0.5).add(0.5)  // 青成分
    )
  });
}