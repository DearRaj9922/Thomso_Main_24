import React from 'react'
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import "./Home3d.css";
import Loader from '../Loader/Loader';
const Home3d = () => {
  return (
    <div>
        <section className='main3d'>
            <Canvas className='ccanva'
            camera={{near:0.1,far:1000}}>
                <Suspense fallback={<Loader/>}>
                <directionalLight/>
                <ambientLight/>
                <pointLight/>
                <spotLight/>
                <hemisphereLight/>

                </Suspense>

            </Canvas>
        </section>
      
    </div>
  )
}

export default Home3d
