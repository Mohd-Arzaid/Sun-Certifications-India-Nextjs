import { ChevronLeft, ChevronRight } from "lucide-react";

const getVisiblePages = (current, total) => {
  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages = new Set([1, total, current, current - 1, current + 1]);
  const sorted = [...pages]
    .filter((p) => p >= 1 && p <= total)
    .sort((a, b) => a - b);

  return sorted.reduce((acc, page, i) => {
    if (i > 0 && page - sorted[i - 1] > 1) acc.push("...");
    acc.push(page);
    return acc;
  }, []);
};

const navButtonClass =
  "flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 text-gray-700 hover:border-[#1A8781] hover:text-[#1A8781] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

const ListingPagePagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pages = getVisiblePages(currentPage, totalPages);

  return (
    <div className="pt-8 pb-12 md:pt-12 md:pb-16 px-4 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={navButtonClass}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {pages.map((page, index) => {
            if (page === "...") {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="flex items-center justify-center h-10 w-10 text-gray-400 font-medium text-base"
                >
                  ...
                </span>
              );
            }

            return (
              <button
                key={page}
                type="button"
                onClick={() => onPageChange(page)}
                className={`h-10 w-10 rounded-full flex items-center justify-center font-geist font-medium transition-all ${
                  currentPage === page
                    ? "bg-[#1A8781] text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={navButtonClass}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="text-center">
          <span className="text-sm text-gray-500 font-geist font-medium">
            Page {currentPage} of {totalPages}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ListingPagePagination;
