import React from "react";
import BlogsCard from "./BlogsCard";

const BlogsSection = () => {
  let topics = [
    {
      img: "/assets/Freelance_VS.webp",
      span: "sales",
      names: "Ma...2022-10-13.6min",
      title: "Differences in Hiring an Agency vs. Freelancers 2.0",
    },
    {
      img: "/assets/Flutter_Template.webp",
      span: "development",
      names: "Samantha Holstead .2022-10-03.3min",
      title: "Cinnamon Flutter Template Overview",
    },
    {
      img: "/assets/Tinder_blog.webp",
      span: "design",
      names: "Jan Marin.2022-09-15.10min",
      title: "How Tinder Swindled User Experience",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-6xl font-MontBold leading-base text-primary py-12 max-w-lg">Stay in the loop on tech topics</div>
    <div className="flex gap-8 ">
      {topics.map((topic) => {
        return (
          <BlogsCard
            img={topic.img}
            span={topic.span}
            names={topic.names}
            title={topic.title}
          ></BlogsCard>
        );
      })}
      </div>
      <div className="flex py-12 space-x-2 ">
          <img src="/assets/arrowRight.6bd387a0.svg" alt="" />
          <h1 className="uppercase text-blue border-b-2 border-blue font-MontBold">
            view case blogs
          </h1>
        </div>
    </div>
  );
};

export default BlogsSection;
