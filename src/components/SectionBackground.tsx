import { CpuChipIcon, GlobeAltIcon, PaintBrushIcon } from '@heroicons/react/24/outline'
import React from 'react'

const SectionBackground = () => {
  return (
    <>
    {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

          {/* Enhanced Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute rounded-full top-1/4 left-10 w-72 h-72 bg-primary/20 mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            <div className="absolute rounded-full top-1/3 right-10 w-72 h-72 bg-secondary/20 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
            <div className="absolute rounded-full -bottom-8 left-20 w-72 h-72 bg-accent/20 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
            {/* New floating elements */}
            <div className="absolute w-16 h-16 top-1/4 2xl:top-[10%] right-1/4 animate-float">
              <CpuChipIcon className="w-full h-full text-primary/20" />
            </div>
            <div className="absolute w-12 h-12 bottom-1/4 left-1/4 animate-float animation-delay-2000">
              <PaintBrushIcon className="w-full h-full text-secondary/30" />
            </div>
            <div className="absolute top-1/2 right-1/3 w-14 h-14 animate-float animation-delay-4000">
              <GlobeAltIcon className="w-full h-full text-accent/30" />
            </div>
          </div>
    </>
  )
}

export default SectionBackground