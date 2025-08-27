import { FC } from "react";
import { Header } from "../../layouts";
import { Hero, About } from "./sections";

const Home: FC = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Header className="fixed z-20" />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
};

export default Home;
