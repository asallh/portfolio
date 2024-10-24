import { ReactNode } from "react"
import { Vortex } from "./ui/vortex"

interface BackgroundProps {
  children: ReactNode; // Type for children
}


export default function Background({children} : BackgroundProps){
    return (
        <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={400}
        baseHue={1200}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        {children}
      </Vortex>
    </div>
    )
    
}