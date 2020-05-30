import React from 'react';

const Footer = () => {
    return( 
        <>
        <footer className="block py-4 pt-12 mt-16 bg-gray-300 relative">
            <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden footer-alt -mt-20">
                <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                    <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-2xl font-semibold">Barnett Technologies</h4>
                        <h5 className="text-base mt-0 mb-2 text-gray-700">A beautiful extension for TailwindCSS.</h5>
                        <div className="mt-6">
                            <a href="https://linkedin.com/"><i className="fab fa-linkedin  bg-white text-blue-400 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"></i></a>
                            <a href="https://twitter.com/"><i className="fab fa-twitter  bg-white text-blue-400 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"></i></a>
                            <a href="https://facebook.com/"><i className="fab fa-facebook-square bg-white text-blue-600 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"></i></a>
                            <a href="https://github.com/"><i className="fab fa-github bg-white text-gray-900 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"></i></a>
                        </div>
                        <p className="text-sm mt-6 text-gray-600 font-semibold">
                        Currently v1.0.0. Code
                        <a href="#blank" className="text-gray-700"> licensed MIT</a>
                        , docs
                        <a href="#blank" className="text-gray-700"> CC by 4.0</a>
                        .
                        </p>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full md:w-6/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto">
                            <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">Useful Links</span>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#blank" className="text-gray-700 hover:text-gray-900 font-regular block pb-2 text-sm">Home</a>
                                </li>
                                <li>
                                    <a href="#blank" className="text-gray-700 hover:text-gray-900 font-regular block pb-2 text-sm">About</a>
                                </li>
                                <li>
                                    <a href="#blank" className="text-gray-700 hover:text-gray-900 font-regular block pb-2 text-sm">Services</a>
                                </li>
                                <li>
                                    <a href="#blank" className="text-gray-700 hover:text-gray-900 font-regular block pb-2 text-sm">Resources</a>
                                </li>
                                <li>
                                    <a href="#blank" className="text-gray-700 hover:text-gray-900 font-regular block pb-2 text-sm">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-6/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto">
                        <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">Other Resources</span>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#blank" className="text-gray-700 hover:text-gray-900 font-regular block pb-2 text-sm">MIT License</a>
                                </li>
                                <li>
                                    <a href="#blank" className="text-gray-700 hover:text-gray-900 font-regular block pb-2 text-sm">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#blank" className="text-gray-700 hover:text-gray-900 font-regular block pb-2 text-sm">Terms & Conditions</a>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
                <hr className="my-4 border-gray-400"></hr>
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-gray-600 font-semibold py-1">
                            Copyright ©
                            <a href="https://github.com" className="text-gray-600 hover:text-gray-900"> Haybarcheezy</a>
                            .
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer