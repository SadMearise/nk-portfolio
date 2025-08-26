import { FC } from "react";
import { useCameraRig } from "../utils/hooks";

type Props = {
  cameraPositionZ: number;
  smoothTime: number;
};
const CameraRig: FC<Props> = ({ cameraPositionZ, smoothTime }) => {
  useCameraRig(cameraPositionZ, smoothTime);

  return null;
};

export default CameraRig;
