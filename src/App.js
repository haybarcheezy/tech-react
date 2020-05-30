import React, { Component } from "react";
import "./styles/tailwind.css";
import "./styles/main.css";
import HeroImg from "./img/heroimg.jpg";
import Navbar from "./components/navbar.jsx";
import Articles from "./components/articles";
import Footer from "./components/footer";
import HomeContent from "./components/homecontent";
import Contact from "./components/contact";
import Services from "./components/services"
import Banner from "./components/banner";

export default class App extends Component {
  state = {
    active: false,
  };
  render() {
    return (
      <>
        <div className="w-full">
          <Navbar />
          <div className="flex bg-white h-700">
            <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
              <div>
                <h2 className="text-6xl lg:text-6xl font-bold leading-tight text-left">
                  Simplify the Complex.
                </h2>
                <div className="w-20 h-2 bg-blue-600 my-4"></div>
                <p className="mt-6 text-sm text-gray-500 md:text-base text-left">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiis commodi cum cupiditate ducimus, fugit harum id
                  necessitatibus odio quam quasi, quibusdam rem tempora
                  voluptates. Cumque debitis dignissimos id quam vel!
                </p>
                <div className="flex justify-start mt-6">
                  <a
                    href={"/"}
                    className="px-4 py-3 bg-gray-900 text-gray-200 text-s font-semibold rounded hover:bg-gray-800"
                  >
                    Get Started
                  </a>
                  <a
                    href={"/"}
                    className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-s font-semibold rounded hover:bg-gray-400"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:w-1/2 polygon">
              <div
                className="h-full object-cover"
                style={{
                  backgroundImage: `url(${HeroImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="h-full bg-black opacity-25"></div>
              </div>
            </div>
          </div>
        </div>
        <Banner />
        <Services />
        <HomeContent />
        <Articles />
        <Contact />
        <Footer />
      </>
    );
  }
}
