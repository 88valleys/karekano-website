import React from 'react';

const HeroBanner = ({ backgroundImage }) => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Band Name */}
      <h1 className="text-6xl font-bold font-handwriting">
        his&her circumstances.
      </h1>

      {/* Navigation Links */}
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2 space-y-2 text-lg">
        <a href="#videos" className="block hover:underline">
          videos
        </a>
        <a href="#news" className="block hover:underline">
          news
        </a>
        <a href="#lives" className="block hover:underline">
          lives
        </a>
        <a href="#who" className="block hover:underline">
          who
        </a>
        <a href="#merch" className="block hover:underline">
          merch
        </a>
      </div>

      {/* Social Links */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 space-y-2 text-lg">
        <a href="https://instagram.com" className="block hover:underline">
          instagram
        </a>
        <a href="https://facebook.com" className="block hover:underline">
          facebook
        </a>
        <a href="https://spotify.com" className="block hover:underline">
          spotify
        </a>
      </div>
    </div>
  );
};

export default HeroBanner;
