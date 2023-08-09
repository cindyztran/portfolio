/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import laptop from "./assets/images/laptop.png";
import js from "./assets/images/js.png";
import ts from "./assets/images/ts.png";
import express from "./assets/images/express.png";
import node from "./assets/images/node.jpeg";
import react from "./assets/images/react.png";
import html from "./assets/images/html.png";
import css from "./assets/images/css.png";
import bootstrap from "./assets/images/bootstrap.png";
import firebase from "./assets/images/firebase.png";
import postgres from "./assets/images/postgres.png";
import rickandmorty from "./assets/images/rickandmorty.png";
import ontap from "./assets/images/ontap.png";
import nike from "./assets/images/nike.png";

export default function Home() {
  return (
    <main className="p-24 font-mono">
      <section className="flex flex-wrap md:justify-between gap-10">
        <div className="text-4xl">
          <span style={{ color: "#4688CC" }}>const</span>
          <span className="px-2" style={{ color: "#42A7FE" }}>
            cindyTran
          </span>
          <span className="text-white">=</span>
          <span className="ps-2" style={{ color: "#FFD00B" }}>
            &#123;
          </span>
          <div className="ps-10">
            <span style={{ color: "#7DBADD" }}>role:</span>
            <span className="ps-2" style={{ color: "#C07D65" }}>
              "Full Stack Developer"
            </span>
            ,
          </div>
          <div className="ps-10">
            <span style={{ color: "#7DBADD" }}>location:</span>
            <span className="ps-2" style={{ color: "#C07D65" }}>
              "Seattle"
            </span>
            ,
          </div>
          <span style={{ color: "#FFD00B" }}>&#125;</span>
          <span className="text-white">;</span>
        </div>
        <Image src={laptop} width={500} height={500} alt="" />
      </section>
      <section className="text-center">
        <h5 className="text-3xl pt-10 pb-5" style={{ color: "#4688CC" }}>
          Contact Me
        </h5>
        <a href="/CindyTran_Resume.pdf" download>
          <i
            className="text-xl fa-regular fa-download px-2"
            style={{ color: "#7DBADD" }}
          ></i>
        </a>
        <a href="mailto:cindyztran@gmail.com">
          <i
            className="text-xl fa-regular fa-envelope px-2"
            style={{ color: "#7DBADD" }}
          ></i>
        </a>
        <a
          href="https://github.com/cindyztran"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="text-xl fa-brands fa-square-github px-2"
            style={{ color: "#7DBADD" }}
          ></i>
        </a>
        <a
          href="https://www.linkedin.com/in/cindyztran/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="text-xl fa-brands fa-linkedin px-2"
            style={{ color: "#7DBADD" }}
          ></i>
        </a>
      </section>
      <section className="text-center">
        <h5 className="text-3xl pt-10 pb-5" style={{ color: "#4688CC" }}>
          Technologies and Tools
        </h5>
        <div className="flex flex-wrap justify-center md:flex-row gap-2">
          <Image className="rounded" src={js} width={50} height={50} alt="" />
          <Image className="rounded" src={ts} width={50} height={50} alt="" />
          <Image
            className="rounded"
            src={react}
            width={50}
            height={50}
            alt=""
          />
          <Image
            className="rounded bg-white"
            src={express}
            width={50}
            height={50}
            alt=""
          />
          <Image className="rounded" src={node} width={50} height={50} alt="" />
          <Image
            className="rounded bg-white"
            src={html}
            width={50}
            height={50}
            alt=""
          />
          <Image
            className="rounded bg-white"
            src={css}
            width={50}
            height={50}
            alt=""
          />
          <Image
            className="rounded"
            src={bootstrap}
            width={50}
            height={50}
            alt=""
          />
          <Image
            className="rounded"
            src={firebase}
            width={50}
            height={50}
            alt=""
          />
          <Image
            className="rounded"
            src={postgres}
            width={50}
            height={50}
            alt=""
          />
        </div>
      </section>
      <section>
        <h5
          className="text-3xl text-center pt-10 pb-5"
          style={{ color: "#4688CC" }}
        >
          Projects
        </h5>
        <div className="flex justify-center flex-col md:flex-row gap-x-12 gap-y-6">
          <div>
            <h5 className="text-center" style={{ color: "#7DBADD" }}>
              Nike Scraper
            </h5>
            <a
              href="https://github.com/cindyztran/nike-stock-scraper"
              target="_blank"
            >
              <Image src={nike} width={300} alt="" />
            </a>
            <div className="text-center py-2">
              <span>
                <a
                  className="text-white"
                  href="https://github.com/cindyztran/nike-stock-scraper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </span>
            </div>
          </div>
          <div>
            <h5 className="text-center" style={{ color: "#7DBADD" }}>
              Rick and Morty
            </h5>
            <a
              className="text-white"
              href="https://cindyztran.github.io/rick-and-morty/"
              target="_blank"
            >
              <Image src={rickandmorty} width={300} alt="" />
            </a>
            <div className="text-center py-2">
              <span>
                <a
                  className="text-white"
                  href="https://github.com/cindyztran/rick-and-morty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </span>
            </div>
          </div>
          <div>
            <h5 className="text-center" style={{ color: "#7DBADD" }}>
              On Tap
            </h5>
            <a href="https://on-tap.onrender.com" target="_blank">
              <Image src={ontap} width={300} alt="" />
            </a>
            <div className="text-center py-2">
              <span>
                <a
                  className="text-white"
                  href="https://github.com/cindyztran/on-tap-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
