import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import img from "next/image";
import AnimatedWave from "@/components/Wave";
import { whyTechTotData } from "../../data";

const WhyChooseUsSection = () => {
  return (
    <>
      <div className="bg-white rotate-180">
        <AnimatedWave className="w-full fill-beige" />
      </div>
      <section className="relative section bg-beige pb-0 pt-5">
        <div className="container relative z-10 space-y-16">
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 font-heading md:text-5xl">
              Why Choose TechTots?
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              A unique blend of world-class education and cutting-edge
              technology.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 content-center justify-center">
            {whyTechTotData.map((feature, index) => (
              <Card
                key={index}
                className="relative p-2 transition-all border rounded-lg bg-white backdrop-blur-sm border-accent/20 hover:scale-105"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  width={500}
                  height={500}
                  className="rounded-md h-48 w-full aspect-square object-cover object-center"
                />
                <CardHeader>
                  {/* <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div> */}
                  <CardTitle className="mb-2 text-xl font-bold text-center text-gray-900">
                    {feature.title}
                  </CardTitle>
                  <CardDescription>
                    <p className="text-center text-gray-600">
                      {feature.description}
                    </p>
                  </CardDescription>
                </CardHeader>

                {/* <p className="text-center text-gray-600">{feature.description}</p> */}
              </Card>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-white">
        <AnimatedWave className="w-full fill-beige" />
      </div>
    </>
  );
};

export default WhyChooseUsSection;
