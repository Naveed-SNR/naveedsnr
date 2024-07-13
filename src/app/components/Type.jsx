//https://www.npmjs.com/package/typewriter-effect //docs
"use client"
import Typewriter from "typewriter-effect";

export default function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI/ML Specialist",
          "Full Stack Developer",
          "UI/UX Designer",
          "Photo Editor",

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 83,
        delay: 83,
      } }
      
    />
  );
}
