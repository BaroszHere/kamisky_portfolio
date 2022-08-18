import React, { useEffect, useRef, Suspense } from "react";
import "./header.css";
import Blob1 from '../../assets/Blob1.png';
import {Canvas} from "@react-three/fiber";
import {useGLTF, Sphere, MeshDistortMaterial, OrbitControls, GradientTexture } from "@react-three/drei";
import Typed from "typed.js";




function Model(props) {
  const { nodes, materials } = useGLTF('/web6.gltf')
  return (
    <group {...props} dispose={null}  >
      <mesh geometry={nodes.Cube.geometry} material={materials.BG2} />
      <mesh geometry={nodes.Cube001.geometry} material={materials.BG2} position={[-0.09, -0.73, 0]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials.BG2} position={[-0.09, -0.92, 0]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Niebieski.001']} position={[-0.1, 0, 0]} scale={[1.01, 1.02, 1.01]} />
      <mesh geometry={nodes.Cylinder.geometry} material={materials.Material} position={[0.07, 0.52, -0.86]} rotation={[0, 0, -Math.PI / 2]} scale={0.02} />
      <mesh geometry={nodes.Cube004.geometry} material={materials.Niebieski} position={[0.1, 0.03, -0.95]} scale={[1.15, 1.23, 1.15]}>
        <mesh geometry={nodes.Cube005_1.geometry} material={materials['Niebieski.001']} position={[0.02, -0.02, 0.01]} scale={[0.02, 0.02, 0.15]} />
        <mesh geometry={nodes.Cube006.geometry} material={materials['Niebieski.001']} position={[0.02, 0.03, 0]} scale={[0.02, 0.02, 0.16]} />
        <mesh geometry={nodes.Cube007.geometry} material={materials['Niebieski.001']} position={[0.02, -0.07, 0.07]} scale={[0.87, 0.81, 0.87]} />
        <mesh geometry={nodes.Cube008_1.geometry} material={materials.Material} position={[0.03, -0.2, -0.08]} scale={[0.9, 0.84, 0.9]} />
        <mesh geometry={nodes.Cylinder001.geometry} material={materials.Turkus} position={[0.01, 0.15, 0]} scale={[0.87, 0.81, 0.87]} />
      </mesh>
      <mesh geometry={nodes.Cube010.geometry} material={materials.Niebieski} position={[0.1, -0.12, 0.63]} scale={[1.43, 1.53, 1.43]}>
        <mesh geometry={nodes.Cube011.geometry} material={materials['Niebieski.001']} position={[0.03, -0.12, 0.15]} scale={[0.84, 0.78, 0.84]} />
        <mesh geometry={nodes.Cube012.geometry} material={materials['Niebieski.001']} position={[0.03, -0.07, 0.14]} scale={[0.84, 0.78, 0.84]} />
        <mesh geometry={nodes.Cube013.geometry} material={materials['Niebieski.001']} position={[0.03, -0.17, 0.22]} scale={[0.84, 0.78, 0.84]} />
        <mesh geometry={nodes.Cube014.geometry} material={materials.Material} position={[0.03, -0.19, -0.28]} scale={[0.87, 0.81, 0.87]} />
        <mesh geometry={nodes.Cube019.geometry} material={materials.Material} position={[0.03, -0.19, -0.11]} scale={[0.87, 0.81, 0.87]} />
        <mesh geometry={nodes.Cube020.geometry} material={materials.Czerw} position={[0.04, 0.09, 0.15]} scale={[0.84, 0.78, 0.84]} />
        <mesh geometry={nodes.Cylinder003.geometry} material={materials['Niebieski.001']} position={[0.02, 0.05, -0.16]} scale={[0.53, 0.49, 0.53]} />
        <mesh geometry={nodes.Cylinder004.geometry} material={materials.Czerw} position={[0.02, 0.09, -0.3]} scale={[0.53, 0.49, 0.53]} />
        <mesh geometry={nodes.Cylinder005.geometry} material={materials.Turkus} position={[0.02, 0.16, -0.22]} scale={[0.53, 0.49, 0.53]} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Niebieski.001']} position={[0.05, 0.04, 0.2]} scale={[0.79, 0.73, 0.79]} />
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Niebieski.001']} position={[0.05, 0.03, 0.11]} scale={[0.55, 0.51, 0.55]} />
        <mesh geometry={nodes.Cylinder008.geometry} material={materials.Turkus} position={[0.05, 0.15, 0.03]} scale={[0.31, 0.43, 0.46]} />
      </mesh>
      <mesh geometry={nodes.Cylinder002.geometry} material={materials.Czerw} position={[0.14, 0.6, -0.23]} scale={[0.73, 1, 1]}>
        <mesh geometry={nodes.Cube029_1.geometry} material={materials.White} position={[0.05, 0.05, -0.01]} scale={[1.36, 1, 1]} />
        <mesh geometry={nodes.Cube030_1.geometry} material={materials.White} position={[0.05, 0.1, -0.01]} scale={[1.36, 1, 1]} />
        <mesh geometry={nodes.Cube031.geometry} material={materials.White} position={[0.05, 0.05, -0.01]} scale={[1.36, 1, 1]} />
      </mesh>
      <mesh geometry={nodes.Cube015.geometry} material={materials.Niebieski} position={[0.1, -0.24, -0.33]} scale={[1.5, 1.61, 1.5]}>
        <mesh geometry={nodes.Cube016_1.geometry} material={materials.Turkus} position={[-0.07, 0.17, 0.14]} scale={[0.73, 0.68, 0.73]} />
        <mesh geometry={nodes.Cube017.geometry} material={materials.Turkus} position={[-0.07, 0.17, 0.03]} scale={[0.73, 0.68, 0.73]} />
        <mesh geometry={nodes.Cube018.geometry} material={materials.Turkus} position={[-0.07, 0.17, 0.26]} scale={[0.73, 0.68, 0.73]} />
      </mesh>
      <mesh geometry={nodes.Cube021.geometry} material={materials.Niebieski} position={[-0.01, 0, 0]} />
      <mesh geometry={nodes.Cube022.geometry} material={materials.Niebieski} position={[0.61, -0.88, 0]} rotation={[0, 0, -0.16]} scale={0.87}>
        <mesh geometry={nodes.Cube023.geometry} material={materials.Material} position={[-0.01, 0.05, 0.42]} scale={[1, 0.68, 1]} />
        <mesh geometry={nodes.Cube024.geometry} material={materials.Material} position={[0.08, 0.05, 0.42]} scale={[1, 0.68, 1]} />
        <mesh geometry={nodes.Cube025.geometry} material={materials.Material} position={[0.17, 0.05, 0.42]} scale={[1, 0.68, 1]} />
        <mesh geometry={nodes.Cube026.geometry} material={materials.Material} position={[0.25, 0.05, 0.42]} scale={[1, 0.68, 1]} />
        <mesh geometry={nodes.Cube027.geometry} material={materials.Material} position={[0.25, 0.05, 0.14]} scale={[1, 0.68, 1]} />
      </mesh>
      <mesh geometry={nodes.Icosphere.geometry} material={materials.Czerw} position={[0.56, -0.99, -0.81]} rotation={[0, 0.84, 0]} scale={0.12} />
      <mesh geometry={nodes.Cylinder009.geometry} material={materials.Czerw} position={[0.07, 0.52, -0.86]} rotation={[0, 0, -Math.PI / 2]} scale={0.02} />
      <mesh geometry={nodes.Cube028.geometry} material={materials.Niebieski} position={[0.17, 0.6, 1.36]} scale={1.33} />
      <mesh geometry={nodes.Cube009.geometry} material={materials.BG2} position={[0.07, 0.29, 1.36]} />
    </group>
  )
}

useGLTF.preload('/web6.gltf')



const Header = () => {

  

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["build", "design", "develop", "improve", "create"], 
      startDelay: 300,
      typeSpeed: 200,
      backSpeed: 100,
      backDelay: 1500
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  

  return (
    <div className="Header_hero section__padding" id="home">
      <div className="Header_hero-content" data-aos="fade-right">
          <h3>Hi, my name is</h3>
          <h1>Bartosz Kamiński.</h1>
        <div className="Header_hero-content-atext">
          <h2>I&nbsp;</h2>
          <h2 id="change">
          <span ref={el}></span>
          </h2>
          
          <h2>things for</h2>
        </div>
           <h2>web business.</h2>
           <p>Do you want to shine on the web?</p>
           <a href="#contactme">
           <button type="button">Lets Talk</button>
           </a>
      </div>


      <div className="Header_Canvas" data-aos="fade-up">

            <Canvas>
            <Suspense fallback={null}>
            <ambientLight intensity={0.8} />

              <directionalLight position={[-2,5,-6]} intensity={0.3}  castShadow/>
              <Sphere visible args={[1, 100,200]} scale={5} position={[0,0,-8]}>
                <MeshDistortMaterial  attach="material" distort={0.85}
                speed={1}
                roughness={1}>
                <GradientTexture stops={[1, 0.4, 1]} colors={['#924FC6', '#924FC6', '#03F7EB']} size={100} />
                </MeshDistortMaterial>
                <OrbitControls enablePan={false} enableZoom={false} minAzimuthAngle={-0.4} maxAzimuthAngle={0.4}
                minPolarAngle={1.3} maxPolarAngle={1.9}/>

              </Sphere>
              <Model scale={2} rotation={[0,-1.4,0]} position={[0,0.5,0]} ></Model >
            </Suspense>

              
            </Canvas>
      </div>
    </div>
  );
};

export default Header;
