"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function ProductCarouselNav() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 mb-20">
      <div className="flex items-center justify-between h-10 bg-neutral-900 rounded-md px-4 border border-neutral-800">
        <button className="text-gray-400 hover:text-white transition-colors" aria-label="Previous page">
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <button className="w-8 h-1 bg-primary rounded-full" aria-label="Go to page 1"></button>
          <button className="w-8 h-1 bg-neutral-700 hover:bg-neutral-600 rounded-full transition-colors" aria-label="Go to page 2"></button>
          <button className="w-8 h-1 bg-neutral-700 hover:bg-neutral-600 rounded-full transition-colors" aria-label="Go to page 3"></button>
        </div>
        <button className="text-gray-400 hover:text-white transition-colors" aria-label="Next page">
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
