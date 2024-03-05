import React from "react";
import { useOutletContext } from "react-router-dom";

const Unversities = () => {
  const [dark] = useOutletContext();
  console.log(dark);
  return (
    <>
      <section
        className={
          dark
            ? "text-center mt-40 mb-20 p-20 dark: bg-black"
            : "text-center mt-40 mb-20 p-20 bg-[#f5f5f5]"
        }
      >
        <h1 className="mb-16 font-rob font-semibold text-5xl">Universities</h1>
        <div className="grid grid-rows-2 grid-cols-3 justify-evenly gap-x-0 gap-y-16 px-8">
          <div className="w-max mx-auto text-center">
            {" "}
            <img
              className="h-[150px] w-[170px] mx-auto hover:cursor-pointer"
              src="../../../logo1.png"
              alt=""
            />
            <h1 className="font-medium mt-3 text-xl">
              Guru Gobind Singh Indraprastha <br /> University
            </h1>
            <h5>(GGSIPU)</h5>
          </div>
          <div className="w-max mx-auto text-center">
            {" "}
            <img
              className="h-[150px] w-[170px] mx-auto rounded-full hover:cursor-pointer"
              src="../../../logo2.png"
              alt=""
            />
            <h1 className="font-medium mt-3 text-xl">
              Indira Gandhi Delhi Technical University for <br />
              Women
            </h1>
            <h5>(IGDTUW)</h5>
          </div>
          <div className="w-max mx-auto text-center">
            {" "}
            <img
              className="h-[150px] w-[170px] mx-auto hover:cursor-pointer"
              src="../../../logo3.png"
              alt=""
            />
            <h1 className="font-medium mt-3 text-xl">
              Dr.A.P.J Abdul Kalam Technical <br /> University
            </h1>
            <h5>(AKTU aka UPTU)</h5>
          </div>
          <div className="w-max mx-auto text-center">
            {" "}
            <img
              className="h-[150px] w-[170px] mx-auto hover:cursor-pointer"
              src="../../../logo4.png"
              alt=""
            />
            <h1 className="font-medium mt-3 text-xl">University of Delhi</h1>
            <h5>(DU)</h5>
          </div>
          <div className="w-max mx-auto text-center">
            {" "}
            <img
              className="h-[150px] w-[170px] mx-auto hover:cursor-pointer"
              src="../../../logo5.png"
              alt=""
            />
            <h1 className="font-medium mt-3 text-xl">Sharda University</h1>
            <h5>(SU)</h5>
          </div>
          <div className="w-max mx-auto text-center">
            {" "}
            <img
              className="h-[150px] w-[170px] mx-auto hover:cursor-pointer"
              src="../../../logo6.png"
              alt=""
            />
            <h1 className="font-medium mt-3 text-xl">
              Jaypee Institute of Information Technology
            </h1>
            <h5>(JIIT)</h5>
          </div>
        </div>
      </section>
    </>
  );
};

export default Unversities;
