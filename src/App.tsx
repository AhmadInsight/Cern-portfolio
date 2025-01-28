import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { Header } from "./components/Header";
import { useEffect, useState } from "react";
import { initParticlesEngine, Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import Contacts from "./components/Contacts.tsx";
import { Engine } from "@tsparticles/core"; // or from another appropriate source
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';



// Interface to define the structure of the state
interface AppState {
  init: boolean;
}

function App() {
  const [init, setInit] = useState<AppState>({ init: false });

  useEffect(() => {
  initParticlesEngine(async (engine: Engine) => {
    await loadSlim(engine);
  }).then(() => setInit({ init: true }));
}, []);

  return (
    <>
      {init.init && (
        <Particles
          className="particles"
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 144,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },

            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  area: 900,
                },
              },
              color: { value: "#f9ab00" },
              links: {
                enable: true,
                color: "#ffffff",
                opacity: 0.5,
                distance: 150,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                outModes: "bounce",
                random: false,
                straight: false,
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.5,
              },
              size: {
                value: { min: 1, max: 5 },
                random: true,
              },
            },
            detectRetina: true,
          }}
        />
      )}
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Testimonials />
      <Contacts />
      <Footer />
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;
