
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

interface ConfettiContainerProps {
  enabled: boolean;
}

const ConfettiContainer = ({ enabled }: ConfettiContainerProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  if (!enabled) return null;

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 1,
        },
        particles: {
          number: {
            value: 100,
          },
          color: {
            value: [
              "#8B5CF6", // purple
              "#3B82F6", // blue
              "#10B981", // green
              "#F97316", // orange
              "#EC4899", // pink
              "#EF4444", // red
            ],
          },
          shape: {
            type: ["circle", "square", "triangle"],
          },
          opacity: {
            value: { min: 0.3, max: 0.8 },
          },
          size: {
            value: { min: 1, max: 6 },
          },
          move: {
            enable: true,
            direction: "bottom",
            outModes: {
              default: "out",
            },
            speed: 10,
            gravity: {
              enable: true,
              acceleration: 0.5,
            },
            random: true,
            straight: false,
          },
          rotate: {
            value: {
              min: 0,
              max: 360,
            },
            direction: "random",
            animation: {
              enable: true,
              speed: 15,
            },
          },
          tilt: {
            enable: true,
            value: {
              min: 0,
              max: 360,
            },
            direction: "random",
            animation: {
              enable: true,
              speed: 15,
            },
          },
          roll: {
            enable: true,
            speed: {
              min: 5,
              max: 15,
            },
          },
        },
        detectRetina: true,
        duration: 3000,
        pauseOnOutsideViewport: true,
        emitters: {
          direction: "top",
          rate: {
            delay: 0.1,
            quantity: 2,
          },
          position: {
            x: 50,
            y: 100,
          },
          size: {
            width: 100,
            height: 0,
          },
        },
      }}
    />
  );
};

export default ConfettiContainer;
