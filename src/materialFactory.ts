import * as THREE from 'three/webgpu';
import { positionLocal, mx_noise_float,vec3,fract,smoothstep,float,mix,mx_worley_noise_float } from 'three/tsl';
import { lerp2 } from './tsl-utils';


export function createSkinMaterial(): THREE.MeshStandardNodeMaterial {

  const colorBase=vec3(1,0.6,0.35);
  const colorDeep=vec3(0.8,0.3,0.3);
  const colorBlue=vec3(0.5,0.5,0.5);
  const colorRed=vec3(0.8,0.3,0.3);

  const rednessBase=mx_noise_float(positionLocal.xyz.mul(2)).mul(0.5).add(0.5);

  const colorRedness=lerp2(colorBase,colorRed,float(0),float(1),rednessBase);

  const vesselBase=mx_worley_noise_float(positionLocal.xyz.mul(2)).mul(mx_noise_float(positionLocal.xyz).mul(0.5).add(0.5).mul(0.5));
  const colorNodeVessel=lerp2(colorRedness,colorBlue,float(0),float(0.5),vesselBase);

  const contourBase=fract(mx_noise_float(positionLocal.xyz).mul(0.5).add(0.5).mul(50));
  const contourA=smoothstep(0,0.1,contourBase);
  const contourB=smoothstep(0.2,0.1,contourBase);
  const contour=contourA.mul(contourB).negate();;
  
  const colorNode=lerp2(colorNodeVessel,colorDeep,float(0),float(1),contour.negate());



  const material= new THREE.MeshStandardNodeMaterial({
    colorNode,
    metalness:0,
  });
  material.roughnessNode=mix(0.6,1,contour.negate());

  return material;
}