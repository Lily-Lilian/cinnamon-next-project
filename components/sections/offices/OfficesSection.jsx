import React from "react";
import OfficesItem from "./OfficesItem";

const OfficesSection = () => {
  let cities = [
    {
      img: "/assets/belgrade.webp",
      title: "Zagreb",
      subtitle: "Slavonska avenija 6, 10000, Zagreb, Croatia",
    },
    {
      img: "/assets/new-york.webp",
      title: "New York",
      subtitle: "500 7th Ave, New York, NY 10018, United States",
    },
    {
      img: "/assets/zagreb.webp",
      title: "Zagreb",
      subtitle: "Bulevar vojvode Mišića 37 11000, Belgrade, Serbia",
    },
  ];

  return (
    <div className="my-24 overflow-hidden max-w-6xl mx-auto">
        <div className="text-6xl font-MontBold items-center py-12 ">Our Offices</div>
      <div className="flex flex-row gap-8 ">
        {cities.map((city) => {
          return (
            <OfficesItem
              img={city.img}
              title={city.title}
              subtitle={city.subtitle}
            ></OfficesItem>
          );
        })}
      </div>
      <div className="flex space-x-8 w-12 py-12">
          <img src="/assets/arrow-left.webp" alt="" />
          <img src="/assets/arrow-right.webp" alt="" />
        </div>
    </div>
  );
};

export default OfficesSection;
