"use client";

import { useEffect, useState } from "react";
import type { CardData } from "../../types/Card";

const useImageLoader = (src?: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!src) return;
    const img = new Image();

    img.src = src;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setHasError(true);
  }, [src]);

  return { isLoaded, hasError };
};

const CardImage = ({
  src,
  alt,
  title,
}: {
  src?: string;
  alt: string;
  title: string;
}) => {
  const { isLoaded, hasError } = useImageLoader(src);

  if (!src || hasError) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-400/20 to-blue-600/20">
        <div className="p-4 text-center">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20">
            <svg
              className="h-6 w-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <span className="text-sm font-semibold text-blue-900">{title}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full bg-gray-100">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover object-top transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export const Card = ({
  data,
  className = "",
}: {
  data: CardData;
  className?: string;
}) => {
  const { title, subtitle, description, tags, image, link, awardBadge } = data;

  return (
    <article
      className={`group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between ${className}`}
    >
      <div>
        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <CardImage src={image} alt={title} title={title} />

          {awardBadge && (
            <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
              {awardBadge}
            </span>
          )}

          {/* Desktop Hover Overlay (Only renders if link exists) */}
          {link && (
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600"
              >
                View Live
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
            {title}
          </h3>

          {subtitle && (
            <h4 className="mt-1 text-sm font-semibold text-blue-600">
              {subtitle}
            </h4>
          )}

          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {description}
          </p>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Mobile Link Button (Only renders if link exists) */}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800 md:hidden"
            >
              Visit Project
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
