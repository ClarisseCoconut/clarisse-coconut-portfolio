"use client";

import { useEffect, useRef } from "react";

import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { gsap } from "gsap";
import Bounded from "@/components/bounded";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const component = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.fromTo(".name-animation", { 
        x: -100,
        opacity: 0,
        rotate: -10, 
      },
      {
        delay: 0.5,
        x: 0, 
        opacity: 1,
        rotate: 0,
        ease: "elastic.out(1,0.3)",
        duration: 1,
        transformOrigin: "left top",
        stagger: {
          each: 0.1,
          from: "random",
        }
      })

      tl.fromTo(".job-title", {
        y: 130, 
      },
      {
        y: 0, 
        ease: "power1.out",
        stagger: {
          each: 0.02,
        }
      })

    }, component)
    return () => ctx.revert();
  }, [])

  const renderLetters = (name:KeyTextField, key:string, animation:string) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span key={index} className={`${animation} ${animation}-${key} inline-block`}>
        {letter}
      </span>
    ))
  }

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={component}
    >
      <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center">
        <div className="col-start-1 md:row-start-1">
          <h1
            className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter"
            aria-label={
              slice.primary.first_name + " " + slice.primary.last_name
            }
          >
            <span className="block text-slate-700">
              {renderLetters(slice.primary.first_name, "first", "name-animation")}
            </span>
            <span className="-mt-[.2em] block text-slate-700">
              {renderLetters(slice.primary.last_name, "last", "name-animation")}
            </span>
          </h1>
          <span className="block clip-rectangle text-slate-700 text-2xl font-bold uppercase tracking-[.16em] md:text-4xl">
            {renderLetters(slice.primary.job_title, 'title1', "job-title")}
          </span>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
