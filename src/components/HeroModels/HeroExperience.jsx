import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import {Model} from "./RoboticArm.jsx";


const HeroExperience = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
    const degToRad = (deg) => (deg * Math.PI) / 180;

    return (
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>

            {/* deep blue ambient */}
            <ambientLight intensity={0.2} color="#1a1a40" />
            <directionalLight position={[5, 5, 5]} intensity={5} />
            {/* Configure OrbitControls to disable panning and control zoom based on device type */}
            <OrbitControls
                target={[90, -2, 0]}   // focus slightly below the center
                enablePan={false} // Prevents panning of the scene
                enableZoom={!isTablet} // Disables zoom on tablets
                maxDistance={900} // Maximum distance for zooming out
                minDistance={700} // Minimum distance for zooming in
                minPolarAngle={Math.PI / 2 - degToRad(35)}
                maxPolarAngle={Math.PI / 2 + degToRad(15)}
                minAzimuthAngle={degToRad(145)}
                maxAzimuthAngle={degToRad(181)}
                autoRotate={true}
                autoRotateSpeed={1.5}
                enableDamping={true}
                dampingFactor={0.05}
            />

            <Model position={[100, -150, 0]} />

        </Canvas>
    );
};

export default HeroExperience;