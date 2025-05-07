import * as THREE from "three/webgpu";
import { If, mix,vec3,float,Fn } from "three/tsl";

// THREE.TSL.ShaderNodeObject<T>


export const lerp2 = Fn(([a_immutable,b_immutable, apos_immutable, bpos_immutable, pos_immutable]:[THREE.Node,THREE.Node,THREE.Node,THREE.Node,THREE.Node]):THREE.TSL.ShaderNodeObject<THREE.VarNode> => {  
  const result=vec3().toVar();
  const a=vec3(a_immutable);
  const b=vec3(b_immutable);
  const apos=float(apos_immutable);
  const bpos=float(bpos_immutable);
  const pos=float(pos_immutable);

  If(pos.lessThanEqual(apos),()=>{
    result.assign(a);
  }).ElseIf(pos.greaterThanEqual(bpos),()=>{
    result.assign(b);
  }).Else(()=>{
    // aposとbposの間で正規化された補間係数を計算  
    const t = pos.sub(apos).div(bpos.sub(apos));
    
    // 線形補間を実行  
    result.assign(mix(a, b, t));
  });

  return result;
});

export const lerp3 = Fn(([a_immutable,b_immutable,c_immutable, apos_immutable, bpos_immutable,cpos_immutable, pos_immutable]:[THREE.Node,THREE.Node,THREE.Node,THREE.Node,THREE.Node,THREE.Node,THREE.Node]):THREE.TSL.ShaderNodeObject<THREE.VarNode> => {  

  const result=vec3().toVar();
  const a=vec3(a_immutable);
  const b=vec3(b_immutable);
  const c=vec3(c_immutable);
  const apos=float(apos_immutable);
  const bpos=float(bpos_immutable);
  const cpos=float(cpos_immutable);
  const pos=float(pos_immutable);

  If(pos.lessThanEqual(apos),()=>{
    result.assign(a);
  }).ElseIf(pos.greaterThanEqual(cpos),()=>{
    result.assign(c);
  }).ElseIf(pos.lessThan(bpos),()=>{
    const t = pos.sub(apos).div(bpos.sub(apos));
    result.assign(mix(a, b, t));
  }).Else(()=>{
    const t = pos.sub(bpos).div(cpos.sub(bpos));

    result.assign(mix(b, c, t));
  });

  return result;
});
