import { Canvas } from "@react-three/fiber";
import { FC, Suspense } from "react";
import { cn } from "../../../utils/helpers";
import { Astronaut, CameraRig, HeroText, ParallaxBackground } from "../../../components";
import { useMediaQuery } from "react-responsive";
import { Float } from "@react-three/drei";

type Props = {
  className?: string;
};

const Hero: FC<Props> = ({ className }) => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const cameraPositionZ = 3;

  return (
    <section className={cn(className, "x-indent min-h-screen overflow-hidden")}>
      <HeroText className="relative z-10 mt-20 md:mt-40" />
      <ParallaxBackground />
      <div className="absolute inset-0 h-screen w-screen">
        <Canvas camera={{ position: [0, 1, cameraPositionZ] }}>
          <Suspense fallback={null}>
            <Float>
              <Astronaut
                scale={isMobile ? 0.23 : undefined}
                position={isMobile ? [0, -1.5, 0] : undefined}
              />
            </Float>
            <CameraRig
              cameraPositionZ={cameraPositionZ}
              smoothTime={0.5}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
