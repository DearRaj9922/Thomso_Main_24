import React from 'react';
import {Canvas} from '@react-three/fiber';
import {useGLTF} from '@react-three/drei';
import {OrbitControls} from '@react-three/drei';
import './Pevents.css'
import * as THREE from "three";

function Model() {
    const {scene} = useGLTF('./mainwebsite.glb');
    const scaleFactor = 1.5
    const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1,  
 2, 3);
scene.add(directionalLight);
const pointLight = new THREE.PointLight(0xffffff, 0.2);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

    return <primitive object={scene} scale={[scaleFactor, scaleFactor, scaleFactor]}/>;
}

function Pevents() {
    return (
        <div className="canvascontainer">
        <Canvas camera={{position: [0, 2, 5]}} height={800}>
            <ambientLight  intensity={0.5} />
            <directionalLight intensity={2} position={[0,50,0]} castShadow />
            {/*<directionalLight intensity={1} position={[1, 2, 3]} castShadow />*/}
            <spotLight intensity={1} position={[0, 10, 0]} angle={0.5} penumbra={1} castShadow />
            <pointLight position={[10, 10, 10]}/>
            {/*<primitive object={scene} scale={0.5} castShadow />*/}
            <Model/>
            <OrbitControls makeDefault />
            {/*<GridHelper args={[10, 10]} /> /!* Adds a grid helper *!/*/}
        </Canvas>
            </div>
    );
}

export default Pevents;



// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import * as three from "three/examples/jsm/loaders/GLTFLoader";
// // import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
//
// function Pevents() {
//   const canvasRef = useRef(null);
//
//   useEffect(() => {
//     // Create a scene and a camera
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;
//
//     // Create a renderer
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     canvasRef.current.appendChild(renderer.domElement);
//
//     // Enable depth textures for Cycles rendering
//     renderer.context.webglRenderingContext.getExtension('WEBGL_depth_texture');
//
//
//     const ambientLight = new THREE.AmbientLight(0x404040);
//     scene.add(ambientLight);
//
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
//     directionalLight.position.set(1,
//  2, 3);
//     scene.add(directionalLight);
//
//     // Load your model and apply a Cycles material
//     const loader = new three.GLTFLoader();
//     loader.load('/mainwebsite.glb', (gltf) => {
//       const model = gltf.scene;
//       model.traverse((obj) => {
//         if (obj.isMesh) {
//           obj.material = new THREE.MeshPhysicalMaterial({
//             color: 0xffffff,
//             roughness: 0.5,
//             metalness: 0.5,
//             clearcoat: 0,
//             clearcoatRoughness: 0
//           });
//         }
//       });
//       scene.add(model);
//
//       // Render the scene
//       const animate = () => {
//         requestAnimationFrame(animate);
//         renderer.render(scene, camera);
//       };
//       animate();
//     });
//
//     // Cleanup on component unmount
//     return () => {
//       renderer.dispose();
//     };
//   }, []);
//
//   return <canvas ref={canvasRef} />;
// }
//
// export default Pevents;
