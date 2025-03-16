import React from 'react';

const NewsSection = () => {
  return (
    <section id="news" className="w-full py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-6 uppercase border-b border-white inline-block">
          news
        </h2>

        {/* News Article */}
        <div className="border-t border-white pt-6 flex flex-col md:flex-row items-start md:items-center">
          {/* Date */}
          <div className="text-gray-400 text-sm md:w-1/4 md:pr-6 mb-4 md:mb-0">
            APR 08, 2025
          </div>

          {/* News Content */}
          <div className="md:w-3/4">
            <h3 className="text-xl font-bold mb-4">H&HC EP 1 OUT NOW!</h3>
            <p className="text-gray-300 mb-6">
              It’s here – His & Her Circumstances EP 1 is now live on Spotify.
              It’s been a slow burn, but we’re really proud to have these songs
              out in the world. There’s something about putting it out there
              that makes it all feel a little more real, a little more ours.
              Each track feels like a moment we’ve been waiting to share,
              something in between the lines, the spaces.
            </p>
            <p className="text-gray-300 mb-6">
              This EP is a snapshot of where we are right now, a collection of
              songs that reflect the way we’re feeling and the things we’re
              thinking. We’ve tried to capture the rawness of those moments –
              nothing too polished, just the honesty of what we’re creating
              together. It’s music that’s as imperfect as it is genuine.
            </p>
            <p className="text-gray-300 mb-6">
              You can find it on Spotify, Apple Music, and wherever you listen.
              As always, thanks for being along for the ride.
            </p>

            {/* Read More Button */}
            <button className="border border-white px-6 py-2 text-white hover:bg-white hover:text-black transition">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
