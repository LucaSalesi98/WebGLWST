import ReactDOM from 'react-dom'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import {Sphere, OrbitControls,MeshDistortMaterial} from 'drei'
import './style.css';
import * as THREE from 'three'

function Scene(){
    return(
<Canvas>
        <OrbitControls></OrbitControls>
        <directionalLight
        intensity={10}
        position={[5, 5, 5]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow
      />      
        <Sphere args={[1,128,128]} position={[0,1,0]}>
        <MeshDistortMaterial
           attach="material"
           color={[1,1,1]}
           transparent={true}
           side={THREE.DoubleSide}
           opacity={0.5}
           distort={1} // Strength, 0 disables the effect (default=1)
           speed={2} // Speed (default=1)
  />        </Sphere>     
</Canvas>
    )
}

export default Scene