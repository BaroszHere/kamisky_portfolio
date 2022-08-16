import React, { Suspense } from "react";
import "./header.css";
import Blob1 from '../../assets/Blob1.png';
import {Canvas} from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";


const Header = () => {
  return (
    <div className="Header_hero section__padding" id="home">
      <div className="Header_hero-content">
          <h3>Hi, my name is</h3>
          <h1>Bartosz Kamiński.</h1>
        <div className="Header_hero-content-atext">
          <h2>I&nbsp;</h2>
          <h2 id="change">Build&nbsp;</h2>
          <h2>things for</h2>
        </div>
           <h2>web business.</h2>
           <p>Do you want to shine on the web?</p>
           <button type="button">Lets Talk</button>

      </div>
      <div className="Header_Canvas">

            <Canvas>
            <Suspense fallback={null}>
            <ambientLight intensity={0.5}/>
              <directionalLight position={[-2,5,2]} intensity={1}/>
              <Sphere visible args={[1, 100,200]} scale={2}>
                <MeshDistortMaterial 
                color="#8352FD" attach="material" distort={0.7}
                speed={1}
                roughness={1}
                />
                <OrbitControls enablePan={false} enableZoom={false}/>
              </Sphere>
            </Suspense>

              
            </Canvas>
      </div>
    </div>
  );
};

export default Header;
