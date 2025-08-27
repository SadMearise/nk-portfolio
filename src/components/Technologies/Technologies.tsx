import { cn } from "../../utils/helpers";
import { FC } from "react";
import OrbitingCircles from "../OrbitingCircles";
import RoundedIcon from "../RoundedIcon";
import { TECHNOLOGIES } from "./constants";

type Props = {
  className?: string;
};

const Technologies: FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, "relative flex w-full flex-col items-center justify-center")}>
      <OrbitingCircles iconSize={40}>
        {TECHNOLOGIES.map((technology, index) => (
          <RoundedIcon
            key={index}
            src={technology.link}
          />
        ))}
      </OrbitingCircles>
      <OrbitingCircles
        iconSize={25}
        radius={100}
        reverse
        speed={2}
      >
        {TECHNOLOGIES.reverse().map((technology, index) => (
          <RoundedIcon
            key={index}
            src={technology.link}
          />
        ))}
      </OrbitingCircles>
    </div>
  );
};

export default Technologies;
