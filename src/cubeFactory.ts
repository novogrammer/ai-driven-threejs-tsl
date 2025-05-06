import * as THREE from 'three/webgpu';


export function createCube(): THREE.Mesh {
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardNodeMaterial({ color: 0x00ff00 });

  return new THREE.Mesh(geometry, material);
}