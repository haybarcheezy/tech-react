import React from "react";

const Articles = () => {
  return (
    <>
      <section className="bg-gray-100">
        <div className="body-font container px-5 py-24 mx-auto flex flex-wrap border-t border-gray-200">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <div className="text-4xl lg:text-4xl font-bold title-font mb-2 text-gray-900">
              Recent Articles
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-base text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            <div className="flex flex-col rounded-lg border shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm leading-5 font-medium text-blue-500">
                    <a href="#link" className="hover:underline">
                      Blog
                    </a>
                  </p>
                  <a href="#link" className="block">
                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      How big oil can maintain it's rally
                    </h3>
                    <p className="mt-3 text-base leading-6 text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit facilis asperiores porro quaerat doloribus, eveniet
                      dolore. Adipisci tempora aut inventore optio animi.,
                      tempore temporibus quo laudantium.
                    </p>
                  </a>
                </div>
                <div className="py-6">
                  <button className="inline-block bg-transparent border border-gray-300 rounded px-3 py-1 text-sm font-normal text-gray-600 mr-2">
                    Exxon
                  </button>
                  <button className="inline-block bg-transparent border border-gray-300 rounded px-3 py-1 text-sm font-normal text-gray-600 mr-2">
                    Pipeline
                  </button>
                  <button className="inline-block bg-transparent border border-gray-300 rounded px-3 py-1 text-sm font-normal text-gray-600 mr-2">
                    Development
                  </button>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="#link">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm leading-5 font-medium text-gray-900">
                      <a href="#link" className="hover:underline">
                        Roel Aufderhar
                      </a>
                    </p>
                    <div className="flex text-sm leading-5 text-gray-500">
                      <time dateTime="2020-03-16">Mar 16, 2020</time>
                      <span className="mx-1">&middot;</span>
                      <span>6 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg border shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm leading-5 font-medium text-blue-500">
                    <a href="#link" className="hover:underline">
                      Blog
                    </a>
                  </p>
                  <a href="#link" className="block">
                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      2020 Technology trends
                    </h3>
                    <p className="mt-3 text-base leading-6 text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit facilis asperiores porro quaerat doloribus, eveniet
                      dolore. Adipisci tempora aut inventore optio animi.,
                      tempore temporibus quo laudantium.
                    </p>
                  </a>
                </div>
                <div className="py-6">
                  <button className="inline-block bg-transparent border border-gray-300 rounded px-3 py-1 text-sm font-normal text-gray-600 mr-2">
                    Technology
                  </button>
                  <button className="inline-block bg-transparent border border-gray-300 rounded px-3 py-1 text-sm font-normal text-gray-600 mr-2">
                    Strategy
                  </button>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="#link">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm leading-5 font-medium text-gray-900">
                      <a href="#link" className="hover:underline">
                        Brenna Goyette
                      </a>
                    </p>
                    <div className="flex text-sm leading-5 text-gray-500">
                      <time dateTime="2020-03-16">Mar 16, 2020</time>
                      <span className="mx-1">&middot;</span>
                      <span>6 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg border shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm leading-5 font-medium text-blue-500">
                    <a href="#link" className="hover:underline">
                      {" "}
                      Case Study
                    </a>
                  </p>
                  <a href="#link" className="block">
                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      Q4: Predictions
                    </h3>
                    <p className="mt-3 text-base leading-6 text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit facilis asperiores porro quaerat doloribus, eveniet
                      dolore. Adipisci tempora aut inventore optio animi.,
                      tempore temporibus quo laudantium.
                    </p>
                  </a>
                </div>
                <div className="py-6">
                  <button className="inline-block bg-transparent border border-gray-300 rounded px-3 py-1 text-sm font-normal text-gray-600 mr-2">
                    Case Study
                  </button>
                  <button className="inline-block bg-transparent border border-gray-300 rounded px-3 py-1 text-sm font-normal text-gray-600 mr-2">
                    Reporting
                  </button>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="#link">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm leading-5 font-medium text-gray-900">
                      <a href="#link" className="hover:underline">
                        Daniela Metz
                      </a>
                    </p>
                    <div className="flex text-sm leading-5 text-gray-500">
                      <time dateTime="2020-03-16">Mar 16, 2020</time>
                      <span className="mx-1">&middot;</span>
                      <span>6 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Articles;
