import React from "react";
import {
  AcademicCapIcon,
  BeakerIcon,
  BuildingOfficeIcon,
  CpuChipIcon,
  GlobeAltIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import AnimatedWave from "@/components/Wave";

const WhyChooseUsSection = () => {
  return (
    <>
    <section className="relative section bg-beige pb-0">
        
      <div className="container relative z-10 space-y-16">
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 font-heading md:text-5xl">
            Why Choose TechTots?
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            A unique blend of world-class education and cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: AcademicCapIcon,
              title: "Cambridge + Reggio Emilia",
              image:
                "https://images.pexels.com/photos/414422/pexels-photo-414422.jpeg?auto=compress&w=400&h=300&fit=crop", // children learning, books
              description:
                "World-class curriculum combining academic excellence with creative exploration.",
            },
            {
              icon: CpuChipIcon,
              title: "AI-Powered Learning",
              image:
                "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=400&h=300&fit=crop", // child with tablet/tech
              description:
                "First preschool in Ghana to integrate artificial intelligence in early learning.",
            },
            {
              icon: PaintBrushIcon,
              title: "Child-Centered Approach",
              image:
                "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&w=400&h=300&fit=crop", // kids painting
              description:
                "Play-based learning that nurtures creativity and individual growth.",
            },
            {
              icon: GlobeAltIcon,
              title: "Digital Communication",
              image:
                "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=400&h=300&fit=crop", // parent and child video call
              description:
                "Advanced parent communication tools for seamless updates and engagement.",
            },
            {
              icon: BuildingOfficeIcon,
              title: "Purpose-Built Campus",
              image:
                "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&w=400&h=300&fit=crop", // modern school building
              description:
                "State-of-the-art facilities in suburban Accra designed for optimal learning.",
            },
            {
              icon: BeakerIcon,
              title: "STEM Focus",
              image:
                "https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&w=400&h=300&fit=crop", // kids science experiment
              description:
                "Early exposure to science, technology, engineering, and mathematics.",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="p-2 transition-transform border rounded-lg bg-white backdrop-blur-sm border-accent/20 hover:scale-105"
            >
                <Image src={feature.image} alt={feature.title} width={100} height={100} className="rounded-md h-48 w-full aspect-square object-cover object-center" />
              <CardHeader>
                {/* <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div> */}
                <CardTitle className="mb-2 text-xl font-bold text-center text-gray-900">
                  {feature.title}
                </CardTitle>
                <CardDescription>
                    <p className="text-center text-gray-600">{feature.description}</p>
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
