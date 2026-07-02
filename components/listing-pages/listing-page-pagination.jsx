import { ChevronLeft, ChevronRight } from "lucide-react";

const ELLIPSIS = "...";

const PAGINATION_NAV_BUTTON_CLASS =
  "flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 text-gray-700 hover:border-[#1A8781] hover:text-[#1A8781] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

const ACTIVE_PAGE_NUMBER_CLASS =
  "h-10 w-10 rounded-full flex items-center justify-center font-geist font-medium bg-[#1A8781] text-white";

const PAGE_NUMBER_BUTTON_CLASS =
  "h-10 w-10 rounded-full flex items-center justify-center font-geist font-medium transition-all text-gray-700 hover:bg-gray-200";

const getPaginationPageNumbers = (currentPageNumber, totalPageCount) => {
  if (totalPageCount <= 7) {
    return Array.from({ length: totalPageCount }, (_, index) => index + 1);
  }

  const siblingPageNumbers = [
    currentPageNumber - 1,
    currentPageNumber,
    currentPageNumber + 1,
  ].filter(
    (pageNumber) => pageNumber >= 1 && pageNumber <= totalPageCount
  );

  const sortedPageNumbers = [
    ...new Set([1, totalPageCount, ...siblingPageNumbers]),
  ].sort((firstPage, secondPage) => firstPage - secondPage);

  return sortedPageNumbers.reduce(
    (pageNumbersWithEllipsis, pageNumber, index) => {
      const previousPageNumber = sortedPageNumbers[index - 1];
      const hasGapBeforePage =
        index > 0 && pageNumber - previousPageNumber > 1;

      if (hasGapBeforePage) {
        pageNumbersWithEllipsis.push(ELLIPSIS);
      }

      pageNumbersWithEllipsis.push(pageNumber);
      return pageNumbersWithEllipsis;
    },
    []
  );
};

const ListingPagePagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pageNumbersToShow = getPaginationPageNumbers(currentPage, totalPages);

  const goToPage = (targetPageNumber) => {
    const isValidPage =
      targetPageNumber >= 1 &&
      targetPageNumber <= totalPages &&
      targetPageNumber !== currentPage;

    if (isValidPage) {
      onPageChange(targetPageNumber);
    }
  };

  return (
    <div className="pt-8 pb-12 md:pt-12 md:pb-16 px-4 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={PAGINATION_NAV_BUTTON_CLASS}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {pageNumbersToShow.map((pageOrEllipsis, itemIndex) => {
            const isEllipsis = pageOrEllipsis === ELLIPSIS;

            if (isEllipsis) {
              return (
                <span
                  key={`ellipsis-${itemIndex}`}
                  className="flex items-center justify-center h-10 w-10 text-gray-400 font-medium text-base"
                >
                  {ELLIPSIS}
                </span>
              );
            }

            const isCurrentPage = currentPage === pageOrEllipsis;

            if (isCurrentPage) {
              return (
                <span key={pageOrEllipsis} className={ACTIVE_PAGE_NUMBER_CLASS}>
                  {pageOrEllipsis}
                </span>
              );
            }

            return (
              <button
                key={pageOrEllipsis}
                type="button"
                onClick={() => goToPage(pageOrEllipsis)}
                className={PAGE_NUMBER_BUTTON_CLASS}
              >
                {pageOrEllipsis}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={PAGINATION_NAV_BUTTON_CLASS}
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
