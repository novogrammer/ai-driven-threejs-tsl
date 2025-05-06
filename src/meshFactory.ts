import * as THREE from 'three/webgpu';    
import { vec3, sin, positionWorld } from 'three/tsl';    
import { TeapotGeometry } from 'three/addons/geometries/TeapotGeometry.js';  
    
export function createTeapot(): THREE.Mesh {  
  const geometry = new TeapotGeometry(1, 10); // サイズ1、分割数10  
  
  // グローバル位置に基づいて色が変化するマテリアル  
  const material = new THREE.MeshStandardNodeMaterial({  
    // グローバル位置に基づいて色を動的に変更  
    colorNode: vec3(  
      sin(positionWorld.x.mul(0.5)).mul(0.5).add(0.5), // 赤成分  
      sin(positionWorld.y.mul(0.5)).mul(0.5).add(0.5), // 緑成分  
      sin(positionWorld.z.mul(0.5)).mul(0.5).add(0.5)  // 青成分  
    )  
  });  
  
  return new THREE.Mesh(geometry, material);  
}