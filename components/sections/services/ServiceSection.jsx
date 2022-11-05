import React from 'react';
import ServicesItem from './ServicesItem';
import Button from '../../ui/Button';

const ServiceSection = () => {
  return (
    <div className="services-section bg-primary w-full mt-32">
          <div className="py-32 grid grid-cols-12 max-w-6xl mx-auto gap-8">
            <div className="text-white col-start-1 col-end-5 text-5xl font-MontBold ">
              Our services
            </div>
            <div className="grid grid-cols-2 gap-8 col-start-6 col-end-13">
              <ServicesItem
                img={"/assets/image (9).png"}
                title="Product design"
                paragraph="Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that’s easy on the eyes."
              ></ServicesItem>
              <ServicesItem
                img={"/assets/image (10).png"}
                title="Product design"
                paragraph="Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that’s easy on the eyes."
              ></ServicesItem>
              <ServicesItem
                img={"/assets/image (11).png"}
                title="Product design"
                paragraph="Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that’s easy on the eyes."
              ></ServicesItem>
              <ServicesItem
                img={"/assets/image (12).png"}
                title="Product design"
                paragraph="Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that’s easy on the eyes."
              ></ServicesItem>
              <Button>See Our Services</Button>
            </div>
          </div>
        </div>
  )
}

export default ServiceSection