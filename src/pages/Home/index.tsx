import { FC } from "react";
import { Footer, Header } from "../../layouts";
import { Hero, About, Projects, Experiences, Contact } from "./sections";
import { ModalProvider } from "../../context/modal";

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
