import { FC } from "react";
import { Home } from "./pages";
import { useCleanupInitialLoader } from "./utils/hooks";

const App: FC = () => {
  useCleanupInitialLoader();

  return <Home />;
};

export default App;
