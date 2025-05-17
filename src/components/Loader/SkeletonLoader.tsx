// SkeletonCardLoader.tsx
import React from "react";

const SkeletonCardLoader = ({ count = 2 }) => {
  return (
    <div className="space-y-8 animate-pulse">
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className="space-y-4">
          {/* Title */}
          <div className="h-6 w-3/4 rounded bg-gray-300" />
          {/* Subtitle */}
          <div className="h-4 w-1/2 rounded bg-gray-200" />

          {/* Paragraphs */}
          <div className="space-y-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-3 w-full rounded bg-gray-200" />
            ))}
          </div>

          {/* Code Block */}
          <div className="rounded-md bg-gray-100 p-4 space-y-2">
            <div className="h-3 w-5/6 bg-gray-300 rounded" />
            <div className="h-3 w-2/3 bg-gray-300 rounded" />
            <div className="h-3 w-1/2 bg-gray-300 rounded" />
          </div>

          {/* More paragraphs */}
          <div className="space-y-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-3 w-full rounded bg-gray-200" />
            ))}
          </div>

          {/* List Items */}
          <div className="space-y-2 pl-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-3 w-3/4 bg-gray-300 rounded" />
            ))}
          </div>

          {/* Final Paragraph */}
          <div className="space-y-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-3 w-full bg-gray-200 rounded" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonCardLoader;
