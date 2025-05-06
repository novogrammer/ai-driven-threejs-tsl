import * as THREE from 'three/webgpu';  
import { vec3, sin, time } from 'three/tsl';  
  
export function createCube(): THREE.Mesh {  
  const geometry = new THREE.BoxGeometry();  
    
  // 時間経過で色が変化するマテリアル  
  const material = new THREE.MeshStandardNodeMaterial({  
    // 時間に基づいて色を動的に変更  
    colorNode: vec3(  
      sin(time.mul(0.5)).mul(0.5).add(0.5), // 赤成分  
      sin(time.mul(0.3)).mul(0.5).add(0.5), // 緑成分  
      sin(time.mul(0.2)).mul(0.5).add(0.5)  // 青成分  
    )  
  });  
  
  return new THREE.Mesh(geometry, material);  
}

/**
 * ティーポットを生成するファクトリメソッド
 * @returns THREE.Mesh
 */
export function createTeapot(): THREE.Mesh {
  // ティーポットジオメトリを作成
  const geometry = new THREE.TeapotGeometry(1, 10); // サイズ1、分割数10

  // 時間経過で色が変化するマテリアル
  const material = new THREE.MeshStandardNodeMaterial({
    // 時間に基づいて色を動的に変更
    colorNode: vec3(
      sin(time.mul(0.5)).mul(0.5).add(0.5), // 赤成分
      sin(time.mul(0.3)).mul(0.5).add(0.5), // 緑成分
      sin(time.mul(0.2)).mul(0.5).add(0.5)  // 青成分
    )
  });

  return new THREE.Mesh(geometry, material);
}