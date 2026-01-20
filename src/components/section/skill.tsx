import Bootstrap from "@/assets/icon/bootstrap";
import Css from "@/assets/icon/css";
import Expressjs from "@/assets/icon/express";
import Figma from "@/assets/icon/figma";
import Html from "@/assets/icon/html";
import Javascript from "@/assets/icon/javascript";
import Laravel from "@/assets/icon/laravel";
import Mongodb from "@/assets/icon/mongodb";
import Mysql from "@/assets/icon/mysql";
import Nextjs from "@/assets/icon/nextjs";
import Nodejs from "@/assets/icon/nodejs";
import Nuxtjs from "@/assets/icon/nuxtjs";
import Php from "@/assets/icon/php";
import React from "@/assets/icon/react";
import Tailwindcss from "@/assets/icon/tailwind";
import Typescript from "@/assets/icon/typescript";
import Vue from "@/assets/icon/vue";

const Skill = () => {
  return (
    <section id="skills" className="w-full my-10">
      <div className="container w-full h-full mx-auto">
        <h2 className="text-slate-200 text-center capitalize text-3xl font-semibold">
          skills
        </h2>
        <div className="mx-5 mt-8 grid grid-cols-5 md:grid-cols-7 justify-items-center-safe gap-2">
          <Html className="w-15 md:w-25 h-15 md:h-25" />
          <Css className="w-15 md:w-25 h-15 md:h-25" />
          <Javascript className="w-15 md:w-25 h-15 md:h-25" />
          <Typescript className="w-15 md:w-25 h-15 md:h-25" />
          <Php className="w-15 md:w-25 h-15 md:h-25" />
          <React className="w-15 md:w-25 h-15 md:h-25" />
          <Nextjs className="w-15 md:w-25 h-15 md:h-25" />
          <Nodejs className="w-15 md:w-25 h-15 md:h-25" />
          <Expressjs className="w-15 md:w-25 h-15 md:h-25" />
          <Laravel className="w-15 md:w-25 h-15 md:h-25" />
          <Mysql className="w-15 md:w-25 h-15 md:h-25" />
          <Mongodb className="w-15 md:w-25 h-15 md:h-25" />
          <Bootstrap className="w-15 md:w-25 h-15 md:h-25" />
          <Tailwindcss className="w-15 md:w-25 h-15 md:h-25" />
          <Figma className="w-15 md:w-25 h-15 md:h-25" />
          <Vue className="w-15 md:w-25 h-15 md:h-25" />
          <Nuxtjs className="w-15 md:w-25 h-15 md:h-25" />
        </div>
      </div>
    </section>
  );
};

export default Skill;
