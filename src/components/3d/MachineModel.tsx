"use client";

import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function MachineModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  
  // Clone scene so we can reuse models without side effects
  const clonedScene = useMemo(() => {
    const clone = scene.clone();
    
    // Ensure all meshes cast and receive shadows
    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        
        // Optional: Enhance materials for a premium look
        if (child.material) {
          // Clone material to avoid sharing state if mutated
          child.material = child.material.clone();
          
          if (child.material.metalness !== undefined) {
            // Boost metalness slightly for an industrial look
            child.material.metalness = Math.min(child.material.metalness + 0.2, 1);
            child.material.roughness = Math.max(child.material.roughness - 0.1, 0.1);
          }
        }
      }
    });
    
    return clone;
  }, [scene]);

  return <primitive object={clonedScene} />;
}

// Preload standard models to avoid stuttering
useGLTF.preload("/mobile_plant_3dmodel/track-mounted-mobile-project.glb");
useGLTF.preload("/mobile_plant_3dmodel/track-mounted-mobile-projects-1.glb");
useGLTF.preload("/mobile_plant_3dmodel/wheel_mounted-mobile-project.glb");
