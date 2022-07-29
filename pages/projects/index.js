// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaLinux,
  FaDocker,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiJavascript,
  SiCplusplus,
  SiMicrosoftsqlserver,
  SiTailwindcss,
  SiExpress,
  SiAzuredevops,
  SiPostman,
  SiVim,
  SiArduino,
} from "react-icons/si";

import Link from "next/link";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center h-96 sm:h-[475px]">
      <div className=" h-full w-full flex flex-col justify-center items-center">
        <div className="w-full h-full">
          <Swiper navigation={true} modules={[Navigation]} className="h-full">
            <SwiperSlide className="flex justify-center items-center">
              <a
                href="https://github.com/jdrco/Courseberta"
                target="_blank"
                rel="noopener"
                className="rounded-[14px] bg-gradient-to-tr from-teal-600 to-blue-800 h-[45%] sm:h-[50%] md:h-[55%] w-[80%] p-3 shadow-md"
              >
                <div className="h-full w-full flex flex-col">
                  <div className="w-full h-auto flex flex-row justify-between mb-2">
                    <div className="flex flex-col text-white text-sm sm:text-[20px]">
                      <div className="leading-3 sm:leading-6">Courseberta</div>
                      <div className="text-[10px] sm:text-[12px]">
                        Hackathon Project
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 text-white text-3xl sm:text-5xl">
                      <FaJsSquare />
                      <FaBootstrap className="text-[32px] sm:text-[50px]" />
                      <FaPython />
                    </div>
                  </div>
                  <div className="bg-black h-full rounded-lg p-3 overflow-auto scroll scrollbar text-xs sm:text-sm text-white">
                    Co-developed a web app with a team of 5 that allows students
                    to exchange thoughts on university courses. <br />
                    <br />
                    Designed and built the frontend using Figma, HTML/CSS,
                    JavaScript, and Bootstrap to create a responsive UI with
                    CRUD functionality.
                    <br />
                    <br />
                    Finished in the top 8 of the 2022 HackED Hackathon.
                  </div>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center">
              <a
                href="https://github.com/jdrco/TileDrag"
                target="_blank"
                rel="noopener"
                className="rounded-[14px] bg-gradient-to-tr from-yellow-600 to-orange-800 h-[45%] sm:h-[50%] md:h-[55%] w-[80%] p-3 shadow-md"
              >
                <div className="h-full w-full flex flex-col">
                  <div className="w-full h-auto flex flex-row justify-between mb-2">
                    <div className="flex flex-col text-white text-sm sm:text-[20px]">
                      <div className="leading-3 sm:leading-6">Tile Drag</div>
                      <div className="text-[10px] sm:text-[12px]">
                        Frontend Web Arcade Game
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 text-white text-3xl sm:text-5xl">
                      <FaJsSquare />
                    </div>
                  </div>
                  <div className="bg-black h-full rounded-lg p-3 overflow-auto scroll scrollbar text-xs sm:text-sm text-white">
                    Built a web arcade game with Vanilla JavaScript that
                    emulates real-time online chess gameplay.
                    <br />
                    <br />
                    Implemented drag and drop functionality with grid snapping
                    logic resulting in an interactive UX.
                  </div>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center">
              <a
                href="https://www.uafc.ca/projects"
                target="_blank"
                rel="noopener"
                className="rounded-[14px] bg-gradient-to-tr from-violet-600 to-rose-800 h-[45%] sm:h-[50%] md:h-[55%] w-[80%] p-3 shadow-md"
              >
                <div className="h-full w-full flex flex-col">
                  <div className="w-full h-auto flex flex-row justify-between mb-2">
                    <div className="flex flex-col text-white text-sm sm:text-[20px]">
                      <div className="leading-3 sm:leading-6">
                        Miniature Robotic Arm
                      </div>
                      <div className="text-[10px] sm:text-[12px]">
                        Hardware Design Project
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 text-white text-3xl sm:text-5xl">
                      <FaJsSquare />
                    </div>
                  </div>
                  <div className="bg-black h-full rounded-lg p-3 overflow-auto scroll scrollbar text-xs sm:text-sm text-white">
                    Assembled a robotic arm with three degrees of movement using
                    C/C++ programming and an Arduino.
                    <br />
                    <br />
                    Documented the arm’s assembly process and the breadboarding
                    of servo motors to the Arduino board.
                  </div>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center">
              <a
                href="https://github.com/jdrco/Goobers"
                target="_blank"
                rel="noopener"
                className="rounded-[14px] bg-gradient-to-tr from-yellow-600 to-blue-800 h-[45%] sm:h-[50%] md:h-[55%] w-[80%] p-3 shadow-md"
              >
                <div className="h-full w-full flex flex-col">
                  <div className="w-full h-auto flex flex-row justify-between mb-2">
                    <div className="flex flex-col text-white text-sm sm:text-[20px]">
                      <div className="leading-3 sm:leading-6">
                        Stock Analyzer
                      </div>
                      <div className="text-[10px] sm:text-[12px]">
                        HackED Beta Hackathon Project
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 text-white text-3xl sm:text-5xl">
                      <FaJsSquare />
                    </div>
                  </div>
                  <div className="bg-black h-full rounded-lg p-3 overflow-auto scroll scrollbar text-xs sm:text-sm text-white">
                    Developeped a stock analyzer using Python for data analysis
                    and the Yahoo Finance API to fetch live data.
                    <br />
                    <br />
                    Graphically displayed a stock's moving average using NumPy
                    and Matplotlib.
                  </div>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Projects;
