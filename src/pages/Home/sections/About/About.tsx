import { FC, useRef } from "react";
import { cn } from "../../../../utils/helpers";
import { FloatingCard, CopyButton, Technologies, Globe } from "../../../../components";
import { CARDS } from "./constants";
import { EMAIL, FIRST_NAME, LAST_NAME, NAV_ITEMS } from "../../../../utils/constants";

type Props = {
  className?: string;
};

const About: FC<Props> = ({ className }) => {
  const grid2ContainerRef = useRef(null);

  return (
    <section
      className={cn(className, "x-indent section-gap")}
      id={NAV_ITEMS.about.id}
    >
      <h2 className="heading-2">About Me</h2>
      <div className="mt-12 grid grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-6">
        {/* Grid 1 */}
        <div className="bg-gradient-primary hover-lift relative row-span-2 flex h-60 items-end overflow-hidden rounded-2xl  p-6 md:col-span-3 md:h-full">
          <img
            src="assets/images/coding-pov.webp"
            className="absolute -right-20 -top-4 scale-[1.75] md:inset-y-10 md:left-[200px] md:scale-[3] lg:scale-[2.5]"
            alt="background"
          />
          <div className="z-10">
            <p className="my-2 text-xl">
              Hi, I'm {FIRST_NAME} {LAST_NAME}{" "}
            </p>
            <p className="text-secondary sm:hidden">
              Frontend Developer experienced in building scalable web applications. Strong knowledge
              of responsive, cross-browser layouts and client-side architecture. Focused on code
              quality, maintainability, and efficient teamwork, quickly adapting to deliver optimal
              solutions.
            </p>
            <p className="text-secondary hidden sm:block">
              Frontend Developer with experience in building scalable and reliable web applications.
              Proficient in JavaScript, TypeScript, React, and Next.js, with a strong understanding
              of responsive, cross-browser layout and client-side application architecture. Focused
              on code quality and maintainability. Quickly adapt to new technologies, work
              efficiently in a team, and help find optimal solutions for the product.
            </p>
          </div>
          <div className="pointer-events-none absolute inset-x-0 -bottom-4 h-1/2 bg-gradient-to-t from-indigo-800 sm:h-1/3" />
        </div>
        {/* Grid 2 */}
        <div className="bg-gradient-primary hover-lift relative row-span-1 h-60 overflow-hidden rounded-2xl p-6 md:col-span-3 md:h-full">
          <div
            className="flex size-full items-center justify-center"
            ref={grid2ContainerRef}
          >
            <p className="select-none text-center text-5xl text-gray-500">CODE IS CRAFT</p>
            {CARDS.map((card, index) => (
              <FloatingCard
                key={index}
                {...card}
                containerRef={grid2ContainerRef}
              />
            ))}
          </div>
        </div>
        {/* Grid 3 */}
        <div className="bg-gradient-dark hover-lift relative row-span-1 h-60 overflow-hidden rounded-2xl p-6 md:col-span-3 md:h-full">
          <div className="w-1/2">
            <p className="my-2 text-xl">Time Zone</p>
            <p className="text-secondary">
              I'm based in Minsk and open to office, hybrid or remote work worldwide.
            </p>
          </div>
          <div className="absolute left-[30%] top-[10%]">
            <Globe className="max-w-[600px]" />
          </div>
        </div>
        {/* Grid 4 */}
        <div className="bg-gradient-accent hover-lift relative row-span-1 h-60 overflow-hidden rounded-2xl p-6 md:col-span-2 md:h-full">
          <div className="flex size-full flex-col items-center justify-center gap-4">
            <p className="my-2 text-center text-xl">Do you want to start a project together?</p>
            <CopyButton
              textToCopy={EMAIL}
              label="Copy email address"
              successMessage="Email has copied"
            />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="bg-gradient-primary hover-lift relative row-span-1 h-60 overflow-hidden rounded-2xl p-6 md:col-span-4 md:h-full">
          <div className="w-1/2">
            <p className="my-2 text-xl">Tech Stack</p>
            <p className="text-secondary">
              I specialize in a variety of languages, frameworks, and tools that allow me to build
              robust and scalable applications.
            </p>
          </div>
          <div className="absolute inset-y-0 start-[50%] size-full md:inset-y-9 md:scale-125">
            <Technologies className="h-60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
