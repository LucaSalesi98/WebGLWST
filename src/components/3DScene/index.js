import ReactDOM from 'react-dom';
import React, {useRef, useState} from 'react';
import {Canvas, useFrame} from 'react-three-fiber';
import {Sphere, OrbitControls, MeshDistortMaterial} from 'drei';
import './style.css';
import * as THREE from 'three';
import {connect} from 'react-redux';

function Scene(props) {
  return (
    <Canvas>
      <OrbitControls></OrbitControls>
      <pointLight position={[0, -1, 0]} intensity={1}></pointLight>
      <ambientLight></ambientLight>
      <Sphere args={[1, 128, 128]} position={[0, 1, 0]}>
        <MeshDistortMaterial
          attach="material"
          color={props.correctLetter}
          transparent
          opacity={0.5}
          distort={0.5} // Strength, 0 disables the effect (default=1)
          speed={1} // Speed (default=1)
        />{' '}
      </Sphere>
    </Canvas>
  );
}

const mapStateToProps = (state) => ({
  correctLetter: state.correctLetter,
});

const connectedScene = connect(mapStateToProps)(Scene);
export default connectedScene;
