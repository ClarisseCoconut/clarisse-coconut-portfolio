"use client";

import * as THREE from "three"
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, Environment } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap"

export function Shapes(){
    return (
        <div className="row-span-1 row-start-1 -mt-9 aspect-square md:col-span-1 md:col-start-2 md:mt-0">
            <Canvas className="z-0" shadows gl={{antialias:false}} dpr={[1, 1.5]} camera={{position: [0, 0, 25],
            fov:30, near:1, far:40}}>
                <Suspense fallback={null}>

                </Suspense>
            </Canvas>
        </div>
    )
}