import { MotionConfig } from "framer-motion";
import Layout from "./layout/Layout";
import Home from "./pages/Home";

function App() {
  return (
    // Respect the OS "reduce motion" setting for every framer-motion animation.
    <MotionConfig reducedMotion="user">
      <Layout>
        <Home />
      </Layout>
    </MotionConfig>
  );
}

export default App;
