import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const useCameraRig = (cameraPositionZ: number, smoothTime: number) => {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, cameraPositionZ],
      smoothTime,
      delta,
    );
  });
};

export default useCameraRig;
