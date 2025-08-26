import { useEffect } from "react";
import { AnimationAction, AnimationClip } from "three";

type Actions = {
  [x: string]: AnimationAction | null;
};

const useGLTFAnimationPlay = (
  animations: AnimationClip[],
  actions: Actions,
  animationIndex: number,
) => {
  useEffect(() => {
    if (!animations.length) return;

    actions[animations[animationIndex].name]?.play();
  }, [actions, animations, animationIndex]);
};

export default useGLTFAnimationPlay;
