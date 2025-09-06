import { FC } from "react";
import { Header } from "../../layouts";
import { Hero, About, Projects, Experiences } from "./sections";
import { ModalProvider } from "../../context/modal";

const Home: FC = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Header className="fixed inset-x-0 top-0 z-50" />
      <main>
        <Hero />
        <About />
        <ModalProvider>
          <Projects />
        </ModalProvider>
        <Experiences />
      </main>
    </div>
  );
};

export default Home;
