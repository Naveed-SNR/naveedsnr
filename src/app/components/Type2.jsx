//https://www.npmjs.com/package/typewriter-effect //docs
"use client"
import Typewriter from "typewriter-effect";

export default function Type() {
  return (
<Typewriter
  onInit={
    (typewriter) => 
    {
        typewriter.typeString("I'm a driven computer science student with a passion for software development. Currently pursuing a Bachelor's degree in Computer Science, I specialize in web technologies including HTML, CSS, JavaScript, React, and Next.js. Proficient in Photoshop for digital media and photo editing. Outside of my studies, I enjoy gaming and football.")
      .callFunction(() => {
        stop();
      })
      .start();
    }} 
    options={{
        cursor: '',  
        delay: 3
    }}
/>
  );
}


