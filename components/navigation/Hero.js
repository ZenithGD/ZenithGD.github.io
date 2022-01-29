import * as THREE from 'three'
import ReactDOM from 'react-dom'
import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import PointCloud from '../graphics/PointCloud'

function CamRotate() {
    // Rotate camera each frame
    useFrame(({ clock, camera }) => {
      camera.rotation.z = clock.getElapsedTime() / 10
      camera.rotation.y = Math.sin(clock.getElapsedTime() / 4 + Math.PI / 2)
      camera.rotation.x = Math.sin(clock.getElapsedTime() / 2)
    })
    return null
  }

function Hero() {
    PointCloud({density: 4, radius: 1})
    return (
        <div className='h-screen w-full'>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <PointCloud density={25} radius={30} pointSize={3} pointColor='#FFFFFF' />
                <CamRotate />
            </Canvas>
        </div>
    )
}

export default Hero
