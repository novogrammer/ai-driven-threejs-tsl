import * as THREE from 'three/webgpu';
import { positionLocal, mx_noise_float,vec3,fract,smoothstep,float,mix } from 'three/tsl';
import { lerp2 } from './tsl-utils';

/**
 * 動的に色が変化するマテリアルを生成するファクトリメソッド
 * @returns THREE.MeshStandardNodeMaterial
 */
export function createDynamicMaterial(): THREE.MeshStandardNodeMaterial {
  const contourBase=fract(mx_noise_float(positionLocal.xyz).mul(0.5).add(0.5).mul(50));
  const contourA=smoothstep(0,0.1,contourBase);
  const contourB=smoothstep(0.2,0.1,contourBase);
  const contour=contourA.mul(contourB).negate();;
  const colorBase=vec3(1,0.5,0.35);
  const colorDeep=vec3(0.8,0.2,0.2);
  const colorNode=lerp2(colorBase,colorDeep,float(0),float(1),contour.negate());

  const material= new THREE.MeshStandardNodeMaterial({
    colorNode,
    metalness:0,
  });
  material.roughnessNode=mix(0.4,1,contour.negate());

  return material;
}