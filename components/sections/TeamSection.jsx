import React from 'react';
import Button from '../ui/Button';

const TeamSection = () => {
  return (
    <div className="relative bg-beige w-full">
          <div className="grid grid-cols-2 py-40 max-w-6xl mx-auto">
            <div className="text-5xl font-MontBold max-w-xs leading-normal">
              Agile Team On Demand
            </div>
            <div className="flex flex-col gap-4 max-w-sm ">
              <p className="text-gray font-MontSemiBold text-base">
                By hiring and managing talented people with skills specific to
                your project, we build you a team that’s accomplished, agile and
                scalable in both directions.
              </p>
              <Button>See how it works</Button>
            </div>
          </div>
          <div className="absolute bottom-0 pt-32 right-0 m-auto h-80 w-80 ">
            <img src="/assets/image (13).png" />
          </div>
        </div>
  )
}

export default TeamSection