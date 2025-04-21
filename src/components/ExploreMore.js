import React, { useState } from 'react';

const ExploreMore = () => {
  const videos = [
    "https://www.youtube.com/embed/V0E_wyHMlso",
    "https://www.youtube.com/embed/SDfQE70NrCY",
    "https://www.youtube.com/embed/mrHXRBsPtkM",
    "https://www.youtube.com/embed/tuN0Cs2XiEc",
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  const handlePrevVideo = () => {
    setCurrentVideo((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNextVideo = () => {
    setCurrentVideo((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="exploreMore">
      <h2>Explore More</h2>
      <div className="video-carousel">
        <button className="carousel-arrow left" onClick={handlePrevVideo} aria-label="Previous video">
          &#8592;
        </button>
        <div className="carousel-track">
          <div className="carousel-slide">
            <div className="video-wrapper">
              <iframe
                loading="lazy"
                src={videos[currentVideo]}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <button className="carousel-arrow right" onClick={handleNextVideo} aria-label="Next video">
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default ExploreMore;
