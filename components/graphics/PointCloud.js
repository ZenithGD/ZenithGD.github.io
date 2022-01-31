import React, { Component, useRef, useMemo } from 'react'
import * as THREE from 'three'

function PointCloud({density, radius, pointSize, pointColor}) {

    // No useMemo needed if density and radius are assumed to be constant
    const genVertices = (d, r, rand) => {
        
        // Create point buffer geometry
        const points = []
        for (var i = 0; i < d; i++) {
            points.push(new THREE.Vector3().setFromSphericalCoords(
                r + Math.random() * rand - rand / 2,
                Math.random() * 4 * Math.PI,
                Math.random() * 4 * Math.PI
            ))
        }

        var a = points.map(p => [p.x, p.y, p.z]).flat()

        console.log(a)

        return a
    }

    var vertices = genVertices(density, radius, 100)

    return (
        <points>
            <bufferGeometry attach="geometry">
                <bufferAttribute
                    attachObject={['attributes', 'position']}
                    count={vertices.length / 3}
                    // this renders the dots fine
                    array={new Float32Array(vertices)}
                    // but I can't get the interpolated values to work
                    // might be because bufferAttribute must accept a typed array?
                    // array={new Float32Array(factor)}
                    itemSize={3}
                    onUpdate={self => {
                        self.needsUpdate = true
                        self.verticesNeedUpdate = true
                    }}
                />
            </bufferGeometry>
            <pointsMaterial sizeAttenuation attach="material" color={pointColor} depthWrite={false} size={pointSize} />
        </points>
    )
}

export default PointCloud
