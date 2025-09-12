import simon from "./assets/sounds/sprite.mp3";
import "./App.css";
import useSound from "use-sound";
import { useState, useEffect, useRef } from "react";

function App() {
  const blueRef = useRef(null);
  const yellowRef = useRef(null);
  const greenRef = useRef(null);
  const redRef = useRef(null);

  const [play] = useSound(simon, {
    sprite: {
      one: [0, 500],
      two: [1000, 500],
      three: [2000, 500],
      four: [3000, 500],
      error: [4000, 1000],
    },
  });

  const colors = [
    {
      color: "#FAF303",
      ref: yellowRef,
      sound: "one",
    },
    {
      color: "#030AFA",
      ref: blueRef,
      sound: "two",
    },
    {
      color: "#FA0E03",
      ref: redRef,
      sound: "three",
    },
    {
      color: "#0AFA03",
      ref: greenRef,
      sound: "four",
    },
  ];
}

export default App;
