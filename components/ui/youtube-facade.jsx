"use client";

import { useState, useEffect, useRef } from "react";
import { Play, AlertCircle } from "lucide-react";

const YouTubeFacade = ({
  videoId,
  title = "YouTube Video",
  isDuplicate = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoadThumbnail, setShouldLoadThumbnail] = useState(!isDuplicate);
  const [thumbnailError, setThumbnailError] = useState(false);
  const thumbnailRef = useRef(null);
  const observerRef = useRef(null);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const thumbnailAlt = `${title} - YouTube Video Thumbnail - Sun Certifications India`;
  const thumbnailTitle = `Watch ${title} on YouTube`;

  useEffect(() => {
    if (!isDuplicate) return;

    const element = thumbnailRef.current;
    if (!element) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setShouldLoadThumbnail(true);
          if (observerRef.current) {
            observerRef.current.disconnect();
            observerRef.current = null;
          }
        }
      },
      {
        rootMargin: "50px",
        threshold: 0.01,
      }
    );

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [isDuplicate]);

  const handleLoadVideo = () => {
    setIsLoaded(true);
  };

  const handleThumbnailError = () => {
    setThumbnailError(true);
  };

  if (isLoaded) {
    return (
      <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          className="absolute inset-0 w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div
      ref={thumbnailRef}
      className="relative aspect-video overflow-hidden rounded-xl group cursor-pointer bg-gray-200"
      onClick={handleLoadVideo}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleLoadVideo();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Play ${title} video`}
    >
      {thumbnailError ? (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-600">
          <AlertCircle className="w-12 h-12 mb-2 text-gray-400" />
          <p className="text-sm font-medium">Thumbnail unavailable</p>
          <p className="text-xs text-gray-500 mt-1">Click to play video</p>
        </div>
      ) : isDuplicate ? (
        <div
          className="w-full h-full group-hover:scale-105 transition-transform duration-300"
          style={
            shouldLoadThumbnail
              ? {
                  backgroundImage: `url(${thumbnailUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }
              : {
                  backgroundColor: "#e5e7eb",
                }
          }
          role="img"
          aria-label={thumbnailAlt}
        >
          {shouldLoadThumbnail && (
            <img
              src={thumbnailUrl}
              alt=""
              title=""
              className="hidden"
              onError={handleThumbnailError}
              aria-hidden="true"
            />
          )}
        </div>
      ) : (
        <div className="w-full h-full overflow-hidden group-hover:scale-105 transition-transform duration-300 [&_img]:w-full [&_img]:h-full [&_img]:object-cover">
          <img src={thumbnailUrl} alt={thumbnailAlt} title={thumbnailTitle} />
          <img
            src={thumbnailUrl}
            alt=""
            title=""
            className="hidden"
            onError={handleThumbnailError}
            aria-hidden="true"
          />
        </div>
      )}

      <div
        className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-200"
        aria-hidden="true"
      />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full shadow-xl transition-all duration-200 group-hover:scale-110 group-hover:bg-red-700 flex items-center justify-center">
          <Play
            className="w-7 h-7 sm:w-9 sm:h-9 text-white ml-1"
            fill="currentColor"
            aria-hidden="true"
          />
        </div>
      </div>

      <span className="sr-only">Click to play {title}</span>
    </div>
  );
};

export default YouTubeFacade;
