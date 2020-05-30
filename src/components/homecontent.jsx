import React from 'react';

const HomeContent = () => {
    return(
        <section className="text-gray-700 body-font border-t border-gray-200">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                    <img alt="feature" className="object-cover object-center h-full w-full" src="https://dummyimage.com/600x400/edf2f7/a5afbd"/>
                </div>
                <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12">
                    <div className="flex flex-wrap w-full mb-4 flex-col text-left">
                        <h2 className="text-4xl lg:text-4xl font-bold title-font leading-tight text-gray-900 mb-4">Heading Filler</h2>
                        <div className="w-20 h-2 bg-blue-500 my-4"></div>
                    </div>
                    <div>
                        <p className="mt-3 text-base leading-6 text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="flex justify-center lg:justify-start mt-6">
                        <button className="px-4 py-3 bg-gray-300 text-gray-900 text-s font-semibold rounded hover:bg-gray-400" href="#">Learn More</button>
                    </div>
            </div>
        </div>
        </section>

    )
}
 
export default HomeContent