/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import laptop from "./assets/images/laptop.png";
export default function Home() {
  return (
    <main className="flex justify-between p-24">
      <div
        className="text-4xl"
        style={{ fontFamily: "Menlo, Monaco, Courier New, monospace" }}
      >
        <span style={{ color: "#4688CC" }}>const</span>
        <span className="px-2" style={{ color: "#42A7FE" }}>
          cindyTran
        </span>
        =
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
        <span style={{ color: "#FFD00B" }}>&#125;</span>;
      </div>
      <Image
        src={laptop}
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </main>
  );
}
