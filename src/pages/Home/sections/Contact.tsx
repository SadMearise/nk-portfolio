import { FC } from "react";
import { cn } from "../../../utils/helpers";

import { ContactForm, Particles } from "../../../components";

type Props = {
  className?: string;
};

const Contact: FC<Props> = ({ className }) => {
  return (
    <section className={cn(className, "section-gap relative")}>
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color="#fff"
        refresh
      />

      <div className="x-indent relative flex min-h-screen items-center">
        <ContactForm className="max-w-md" />
      </div>
    </section>
  );
};

export default Contact;
