import "./App.css";
import Navigation from "./components/Navigation";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Home from "./components/Home";
import { type HTMLMotionProps, AnimatePresence } from "motion/react";
import { type ReactNode } from "react";

export type RouteTransitionProps = HTMLMotionProps<"div">;

function App() {
  const location = useLocation();
  console.log("location", location);

  const routeVariants: RouteTransitionProps = {
    initial: {
      y: "20vh",
      opacity: 0,
    },
    animate: {
      y: "0vh",
      opacity: 1,
      transition: {
        type: "spring",
        mass: 0.4,
      },
    },
    exit: {
      y: "0vh",
    },
  };

  return (
    <AnimatePresence>
      <div className="app">
        <Navigation />
        <Routes location={location} key={location.key}>
          <Route
            path="/"
            element={
              <Home
                initial={routeVariants.initial}
                animate={routeVariants.animate}
                exit={routeVariants.exit}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                initial={routeVariants.initial}
                animate={routeVariants.animate}
                exit={routeVariants.exit}
              />
            }
          />
          <Route
            path="/projects"
            element={
              <Projects
                initial={routeVariants.initial}
                animate={routeVariants.animate}
                exit={routeVariants.exit}
              />
            }
          />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default App;
