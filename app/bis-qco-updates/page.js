"use client";

import { useState } from "react";
import Link from "next/link";
import CommonBreadcrumb from "@/components/common/common-breadcrumb";
import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { ChevronLeft, ChevronRight, FileText, Phone, Send } from "lucide-react";
import { BIS_QCO_UPDATES_LIST } from "./bis-qco-updates-data";

const generatePageNumbers = (currentPage, totalPages) => {
  const maxVisiblePages = 5;
  const delta = Math.floor(maxVisiblePages / 2);

  let startPage = Math.max(1, currentPage - delta);
  let endPage = Math.min(totalPages, currentPage + delta);

  if (endPage - startPage + 1 < maxVisiblePages) {
    if (startPage === 1) {
      endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    } else {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
  }

  const pages = [];

  if (startPage > 1) {
    pages.push(1);
    if (startPage > 2) {
      pages.push("...");
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      pages.push("...");
    }
    pages.push(totalPages);
  }

  return pages;
};

const BIS_QCO_Updates = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const filtered = BIS_QCO_UPDATES_LIST.filter((notification) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      notification.title.toLowerCase().includes(searchLower) ||
      notification.description.toLowerCase().includes(searchLower) ||
      notification.tagType.toLowerCase().includes(searchLower)
    );
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filtered.slice(startIndex, startIndex + itemsPerPage);
  const pageNumbers =
    totalPages > 1 ? generatePageNumbers(currentPage, totalPages) : [];

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <CommonBreadcrumb label="DRAFT QCO Notifications" />
      <div className="bg-[#f9f7f2]">
        <div className="max-w-[88rem] mx-auto px-4 py-12 md:px-12 md:py-12">
          <div className="text-center mb-6 md:mb-10">
            <h1 className="font-playfair text-2xl md:text-5xl font-bold text-[#1e1e1e] mb-3 md:mb-4">
              QCO Notifications
            </h1>
            <p className="text-base md:text-lg font-geist text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest Quality Control Order notifications
              and certification requirements
            </p>
          </div>

          <div className="mb-12 md:mb-20 max-w-2xl mx-auto">
            <div className="relative">
              <label htmlFor="search" className="sr-only">
                Search notifications
              </label>
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <input
                id="search"
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search for Government Notification/QCO Updates"
                className="w-full pl-11 md:pl-12 placeholder:font-geist  placeholder:text-[17px] sm:placeholder:text-[18px] pr-4 py-3 md:py-4 rounded-full shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] border-2 border-transparent bg-white focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100 transition-all duration-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {filtered.length > 0 ? (
              currentItems.map((notification) => (
                <div
                  key={notification.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] h-full flex flex-col"
                  style={{ "--card-color": notification.color }}
                >
                  <div
                    className="h-3 md:h-4"
                    style={{ backgroundColor: notification.color }}
                  />
                  <div className="p-5 md:p-8 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className="px-4 py-1.5 font-geist font-medium text-sm rounded-full"
                        style={{
                          backgroundColor: `${notification.color}10`,
                          color: notification.color,
                        }}
                      >
                        {notification.tagType}
                      </span>
                      <span className="text-gray-500 font-geist text-sm flex gap-2 items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-[#1A8781]" />
                        {notification.date}
                      </span>
                    </div>

                    <Link href={notification.detailUrl}>
                      <h3 className="font-playfair text-2xl font-bold text-[#1E1E1E] mb-3 min-h-[4rem] flex items-start cursor-pointer hover:text-blue-600 transition-colors duration-200">
                        {notification.title}
                      </h3>
                    </Link>

                    <p className="font-geist text-gray-600 mb-6 line-clamp-3 flex-grow">
                      {notification.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t-2 border-gray-300 mt-auto">
                      <a
                        href={notification.pdfUrl}
                        download={notification.pdfUrl.split("/").pop()}
                        className="flex items-center gap-2 cursor-pointer group"
                      >
                        <FileText
                          size={18}
                          style={{ color: notification.color }}
                        />
                        <span className="text-base font-geist font-medium underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors group-hover:decoration-gray-950 text-gray-600">
                          Official Document
                        </span>
                      </a>

                      <Link
                        href={notification.detailUrl}
                        className="relative group/readmore"
                      >
                        <Button
                          variant="outline"
                          className="transition-all duration-200 group-hover/readmore:bg-[var(--card-color)] group-hover/readmore:text-white"
                          style={{
                            borderColor: notification.color,
                            color: notification.color,
                          }}
                        >
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 text-center">
                <div className="max-w-2xl mx-auto">
                  <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border-2 border-gray-400">
                    <p className="text-gray-600 font-geist text-base sm:text-lg">
                      No notifications found matching your Search Criteria.
                    </p>
                    <p className="text-gray-600 font-geist text-base sm:text-lg">
                      Don&apos;t worry! We&apos;re here to help you find what
                      you&apos;re looking for.
                    </p>

                    <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                      <Button
                        asChild
                        variant="outline"
                        className="w-full sm:w-auto text-sm sm:text-base font-geist font-medium rounded-full px-4 sm:px-5 py-3 sm:py-5 border-2 border-violet-500 text-violet-600 hover:bg-violet-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Link href="/contact">
                          <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>Contact Us</span>
                        </Link>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        className="w-full sm:w-auto text-sm sm:text-base font-geist font-medium rounded-full px-4 sm:px-5 py-3 sm:py-5 border-2 border-[#25D366] text-green-600 hover:bg-[#25D366] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <a
                          href="https://wa.me/918766262463"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          <span>WhatsApp</span>
                        </a>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        className="w-full sm:w-auto text-sm sm:text-base font-geist font-medium rounded-full px-4 sm:px-5 py-3 sm:py-5 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <a href="tel:+918010505057">
                          <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>Call Us</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {totalPages > 1 && (
          <div className="pt-8 pb-12 md:pt-12 md:pb-16 px-4 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 text-gray-700 hover:border-[#1A8781] hover:text-[#1A8781] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {pageNumbers.map((pageNum, index) => {
                  if (pageNum === "...") {
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
                      key={pageNum}
                      type="button"
                      onClick={() => handlePageChange(pageNum)}
                      className={`h-10 w-10 rounded-full flex items-center justify-center font-geist font-medium transition-all ${
                        currentPage === pageNum
                          ? "bg-[#1A8781] text-white"
                          : "text-gray-700 hover:bg-gray-200"
                      }`}
                      aria-label={`Page ${pageNum}`}
                      aria-current={
                        currentPage === pageNum ? "page" : undefined
                      }
                    >
                      {pageNum}
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 text-gray-700 hover:border-[#1A8781] hover:text-[#1A8781] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next page"
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
        )}
      </div>
    </>
  );
};

export default BIS_QCO_Updates;
