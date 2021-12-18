import React, { Component, useRef, useMemo } from 'react'
import * as THREE from 'three'
import { a } from '@react-spring/three'

function PointCloud({density, radius, pointSize, pointColor}) {

    // No useMemo needed if density and radius are assumed to be constant
    const genVertices = (d, r, rand) => {
        // Create point buffer geometry
        const geometry = new THREE.SphereBufferGeometry(
            r, // sphere radius
            d, // width subdivisions
            d // height subdivisions
            // full sphere
        )

        return geometry.attributes.position.array.map(e => e *= ((Math.random() * r * rand) + r * rand) )
    }

    var vertices = genVertices(density, radius, 0.2)

    return (
        <points>
            <bufferGeometry attach="geometry">
                <a.bufferAttribute
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
