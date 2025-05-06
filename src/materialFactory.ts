import * as THREE from 'three/webgpu';
import { positionLocal, mx_noise_float,vec3,fract,smoothstep } from 'three/tsl';

/**
 * 動的に色が変化するマテリアルを生成するファクトリメソッド
 * @returns THREE.MeshStandardNodeMaterial
 */
export function createDynamicMaterial(): THREE.MeshStandardNodeMaterial {
  const contourBase=fract(mx_noise_float(positionLocal.xyz).mul(0.5).add(0.5).mul(50));
  const contourA=smoothstep(0,0.1,contourBase);
  const contourB=smoothstep(0.2,0.1,contourBase);
  const contour=contourA.mul(contourB).negate();;
  const myColor=vec3(1,0.5,0.35);

  const material= new THREE.MeshStandardNodeMaterial({
    colorNode: myColor.mul(contour.mul(0.2).add(0.8)),
    roughness:0.4,
    metalness:0.1,
  });

  return material;
}