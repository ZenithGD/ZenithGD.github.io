import * as THREE from 'three'
import ReactDOM from 'react-dom'
import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import PointCloud from '../graphics/PointCloud'

function CamRotate() {
    // Rotate camera each frame
    useFrame(({ clock, camera }) => {
      camera.rotation.z = clock.getElapsedTime() / 16
      camera.rotation.y = Math.sin(clock.getElapsedTime() / 4 + Math.PI / 2)
      camera.rotation.x = Math.sin(clock.getElapsedTime() / 2)
    })
    return null
  }

function Hero() {
    
    return (
        <div className='h-screen w-full bg-gray-850'>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <PointCloud density={500} radius={100} pointSize={1} pointColor='#FFFFFF' />
                <PointCloud />
                <CamRotate />
            </Canvas>
        </div>
    )
}

export default Hero
