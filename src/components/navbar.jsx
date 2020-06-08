import React from 'react';
import Burger from '@animated-burgers/burger-squeeze' 
import '@animated-burgers/burger-squeeze/dist/styles.css' 

const Navbar = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav className="z-50 w-full bg-white navbar-expand-lg bg-white fixed animated">
        <div className="w-full md:flex items-center justify-between px-8 md:px-12 border-b border-gray-200">
          <div className="flex justify-between items-center  lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
              href="#pablo"
            >
              <svg
                width="34"
                height="40"
                viewBox="0 0 34 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.88588 0.212062C0.690908 0.638102 0.0781189 1.56094 0.17933 2.78174C0.257701 3.72667 0.799883 4.50113 1.72138 4.98464C2.30312 5.28976 2.48344 5.2941 16.0124 5.33321C25.3745 5.36038 29.8071 5.3232 30.0073 5.21602C30.9006 5.21602 30.3863 4.24646 29.6069 3.48902C27.8515 1.78292 25.8657 0.872766 22.6237 0.288341C21.113 0.0159078 20.3106 -0.005289 11.7263 0.000831416C4.26897 0.00605616 2.34775 0.0472583 1.88588 0.212062ZM1.71347 11.2524C-0.62946 12.2982 -0.508244 16.0268 1.89902 16.9599C2.56704 17.2189 3.40927 17.238 16.1188 17.2809C25.4143 17.3122 29.7998 17.2767 30.1773 17.1665C30.8692 16.965 31.4124 16.3274 32.0261 14.9967C32.5427 13.7336 32.3934 12.9872 32.3934 11.793C32.3934 10.748 30.6021 11.0467 17.0185 11.0467C4.93788 11.0515 2.07756 11.09 1.71347 11.2524ZM2.08816 22.881C0.928262 23.2503 -0.00771454 24.6758 4.79364e-05 26.0607C0.00631763 27.1598 0.855414 28.4254 1.83513 28.7954C2.12219 28.904 7.14362 28.9543 17.6758 28.9543H33.0963H33.8377C33.8862 28.6615 33.9193 28.2691 33.8377 27.2486C33.6835 25.3193 32.7508 23.2678 31.8583 22.8949C31.4362 22.7186 29.0334 22.687 16.982 22.6998C6.89164 22.7106 2.45389 22.7644 2.08816 22.881ZM2.0165 34.8648C0.864071 35.2867 0.146042 36.2555 0.146042 37.3885C0.146042 38.5523 0.901541 39.525 2.05397 39.845C2.40821 39.9434 5.96193 39.9995 11.8754 40C21.8829 40.0009 22.6935 39.9522 25.6727 39.1693C27.9402 38.5735 29.4964 37.7505 30.8601 36.4261C31.5759 35.7309 32.5395 34.7814 31.2058 34.7814C31.0122 34.6778 26.2541 34.6303 16.7631 34.6373C4.77353 34.6463 2.51852 34.681 2.0165 34.8648Z"
                  fill="#3490DC"
                />
              </svg>
            </a>
            <Burger className="lg:hidden px-3 py-3 text-gray-900 text-xs bg-blue-500" onClick={() => setNavbarOpen(!navbarOpen)} />
          </div>
          <div
            className={
              "lg:flex items-center" + (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto my-4 w-full md:auto float-right md:my-0">
              <li className="nav-item md:my-0 my-2 text-center">
                <a
                  className="inline-block font-medium text-gray-700 rounded no-underline hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
                  href="#pablo"
                >
                  Home
                </a>
              </li>
              <li className="nav-item md:my-0 my-2 text-center">
                <a
                  className="inline-block font-medium text-gray-700 rounded no-underline hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
                  href="#pablo"
                >
                  About
                </a>
              </li>
              <li className="nav-item md:my-0 my-2 text-center">
                <a
                  className="inline-block font-medium text-gray-700  rounded no-underline hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
                  href="#pablo"
                >
                  Services
                </a>
              </li>
              <li className="nav-item md:my-0 my-2 text-center">
                <a
                  className="inline-block font-medium text-gray-700 rounded no-underline hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
                  href="#pablo"
                >
                  Resources
                </a>
              </li>
              <li className="nav-item md:border-l md:border-gray-200 md:mr-2 md:my-0 my-2 text-center">
                <a
                  className="md:ml-4 inline-flex font-medium text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded"
                  href="#pablo"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
