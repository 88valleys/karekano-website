import React from 'react';

const VideosSection = () => {
  return (
    <section id="videos" className="w-full py-12 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-6 uppercase border-b border-white inline-block">
          videos
        </h2>

        {/* Main Video */}
        <div className="flex justify-center mb-8">
          <iframe
            className="w-full max-w-4xl h-96"
            src="https://www.youtube.com/embed/GJGEoQiuPu4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button className="absolute left-0 z-10 text-white text-3xl px-4">
            &#8249;
          </button>

          {/* Video Thumbnails */}
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide px-10">
            <div className="w-40 h-24 bg-gray-800 flex items-center justify-center text-xs">
              EXAMPLE 1
            </div>
            <div className="w-40 h-24 bg-gray-800 flex items-center justify-center text-xs">
              EXAMPLE 2
            </div>
            <div className="w-40 h-24 bg-gray-800 flex items-center justify-center text-xs">
              EXAMPLE 3
            </div>
            <div className="w-40 h-24 bg-gray-800 flex items-center justify-center text-xs">
              EXAMPLE 4
            </div>
          </div>

          {/* Right Arrow */}
          <button className="absolute right-0 z-10 text-white text-3xl px-4">
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
