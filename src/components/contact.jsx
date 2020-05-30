import React from 'react';

const Contact = () => {
    const iframe = '<iframe style="filter: grayscale(1) contrast(1.2) Opacity(0.6);" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428075.4880496308!2d-95.4953707286542!3d29.798525729931622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1589250587724!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';
    function Iframe(props) {
        return (<div className="absolute inset-0 bg-gray-300" dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
      }
    return(
        <section className="text-gray-700 body-font relative">
                <Iframe iframe={iframe} />
            <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-lg border-gray-200 border">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Single subtitle line</p>
                    <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-blue-500 text-base px-4 py-2 mb-4" placeholder="Name" type="name"/>
                    <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-blue-500 text-base px-4 py-2 mb-4" placeholder="Email" type="email"/>
                    <textarea className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-blue-500 text-base px-4 py-2 mb-4 resize-none" placeholder="Message"></textarea>
                    <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button>
                    <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                </div>
        </div>
    </section>
    )
}

export default Contact