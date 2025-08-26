import { useFrame } from "@react-three/fiber";
import { useMotionValue, useSpring } from "motion/react";
import { RefObject, useEffect } from "react";
import { Group } from "three";

const useFallingAnimation = (
  groupRef: RefObject<Group | null>,
  from: number,
  to: number,
  damping: number,
) => {
  const y = useSpring(useMotionValue(from), { damping });

  useEffect(() => {
    y.set(to);
  }, [y, to]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.y = y.get();
    }
  });
};

export default useFallingAnimation;
