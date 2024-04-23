"use client";

import { useEffect, useRef } from "react";

import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import gsap from "gsap";

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
      const tl1 = gsap.timeline()
      const tl2 = gsap.timeline()

      tl1.fromTo(".name-animation",{
        y: 130, 
      },
      {
        y: 0, 
        delay: 0.2,
        duration: 0.5,
        ease: "power1.out",
        stagger: {
          each: 0.04,
        }
      })

      tl2.fromTo(".job-title1",{
        opacity: 0,
        y: -80,
        rotateX: 90,
      },
      {
        opacity: 100,
        y: 0,
        rotateX: 0,
        stagger: {
          each: 0.02,
        }
      })
      tl2.fromTo(".job-title1",{ //exit animation
      },
      {
        opacity: 0,
        y: 80,
        rotateX: -90,
        stagger: {
          each: 0.02,
        }
      })

    }, component)
    return () => ctx.revert();
  }, [])

  const renderLetters = (name:KeyTextField, key:string, animation:string) => {
    if (!name) return;
    return name.split().map((letter, index) => (
      <span key={index} className={`${animation} ${animation}-${key} inline-block`}>
        {letter}
      </span>
    ))
  }

  return (
    <section
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
            <span className="block clip-rectangle text-slate-700">
              {renderLetters(slice.primary.first_name, "first", "name-animation")}
            </span>
            <span className="-mt-[.2em] block clip-rectangle text-slate-700">
              {renderLetters(slice.primary.last_name, "last", "name-animation")}
            </span>
          </h1>
          <div className="basis">
            <p className="block sit-on-top text-slate-700 text-2xl font-bold uppercase tracking-[.2em] opacity-0 md:text-4xl">
              {renderLetters(slice.primary.job_title_1, 'title1', "job-title1")}
            </p>
            <p className="block sit-on-top text-slate-700 text-2xl font-bold uppercase tracking-[.2em] opacity-0 md:text-4xl">
              {renderLetters(slice.primary.job_title_2, 'title2', "job-title2")}
            </p>
            <p className="block sit-on-top text-slate-700 text-2xl font-bold uppercase tracking-[.2em] opacity-0 md:text-4xl">
              {renderLetters(slice.primary.job_title_3, 'title3', "job-title3")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
