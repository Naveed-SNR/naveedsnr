//https://www.npmjs.com/package/typewriter-effect //docs
"use client"
import Typewriter from "typewriter-effect";

export default function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Photo Editor",
          "Full Stack Developer",
          "UI/UX Designer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 83,
        delay: 83,
      } }
      
    />
  );
}
