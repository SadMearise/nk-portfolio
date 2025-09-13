import { FC, lazy } from "react";
import { Footer, Header } from "../../layouts";
import { Hero } from "./sections";
import { ModalProvider } from "../../context/modal";

const About = lazy(() => import("./sections").then((m) => ({ default: m.About })));
const Projects = lazy(() => import("./sections").then((m) => ({ default: m.Projects })));
const Experiences = lazy(() => import("./sections").then((m) => ({ default: m.Experiences })));
const Contact = lazy(() => import("./sections").then((m) => ({ default: m.Contact })));

const Home: FC = () => {
  return (
    <>
      <Header className="fixed inset-x-0 top-0 z-50" />
      <main>
        <div className="container mx-auto max-w-7xl">
          <Hero />
          <About />
          <ModalProvider>
            <Projects />
          </ModalProvider>
          <Experiences />
        </div>
        <Contact />
      </main>
      <Footer className="section-gap container mx-auto max-w-7xl" />
    </>
  );
};

export default Home;
