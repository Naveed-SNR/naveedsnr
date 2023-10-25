import React from 'react'
import Image from 'next/image'
import dispersion from "../../../public/images/dispersion.jpg";
export default function Projects() {
  return (
    <div className="projects">
      <div className="text-center p-11">
        <div className="text-primary-100 text-4xl font-bold">Projects</div>
        <div className="p-4 text-secondary-100 text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, corporis voluptas?</div>
      </div>
      <div className="mt-4 w-full flex flex-wrap justify-center items-center gap-11">
        <div className="w-96 rounded-md bg-slate-950">
            <div>
              <Image 
                src={dispersion}
                objectFit="cover"
                className="w-full rounded-t-md"
              />
            </div>
            <div className="p-4">
              <div className="font-semibold text-2xl">Dispersion</div>
              <div className="mt-3 font-medium text-md text-secondary-100">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dolor necessitatibus.</div>
            </div>
        </div>
        <div className="w-96 rounded-md bg-slate-950">
            <div>
              <Image 
                src={dispersion}
                objectFit="cover"
                className="w-full rounded-t-md"
              />
            </div>
            <div className="p-4">
              <div className="font-semibold text-2xl">Dispersion</div>
              <div className="mt-3 font-medium text-md text-secondary-100">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dolor necessitatibus.</div>
            </div>
        </div>
        <div className="w-96 rounded-md bg-slate-950">
            <div>
              <Image 
                src={dispersion}
                objectFit="cover"
                className="w-full rounded-t-md"
              />
            </div>
            <div className="p-4">
              <div className="font-semibold text-2xl">Dispersion</div>
              <div className="mt-3 font-medium text-md text-secondary-100">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dolor necessitatibus.</div>
            </div>
        </div>

      </div>
    </div>

  )
}
