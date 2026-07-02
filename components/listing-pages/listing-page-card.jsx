import Link from "next/link";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const ListingPageCard = ({ item }) => {
  const { color, date, title, description, pdfUrl, href } = item;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] h-full flex flex-col">
      <div className="h-3 md:h-4" style={{ backgroundColor: color }} />

      <div className="p-5 md:p-8 flex flex-col flex-grow">
        {date && (
          <div className="flex items-center justify-start mb-5">
            <span className="text-gray-500 font-geist flex gap-2 items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[#1A8781]" />
              {date}
            </span>
          </div>
        )}

        <Link href={href}>
          <h3 className="font-playfair text-2xl font-bold text-[#1E1E1E] mb-3 min-h-[4rem] flex items-start cursor-pointer hover:text-blue-600 transition-colors duration-200">
            {title}
          </h3>
        </Link>

        <p className="font-geist text-gray-600 mb-6 line-clamp-3 flex-grow">
          {description}
        </p>

        <div
          className={`flex items-center pt-4 border-t-2 border-gray-300 mt-auto ${
            pdfUrl ? "justify-between" : "justify-end"
          }`}
        >
          {pdfUrl && (
            <a
              href={pdfUrl}
              download={pdfUrl.split("/").pop()}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <FileText size={18} style={{ color: color }} />
              <span className="text-base font-geist font-medium underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors group-hover:decoration-gray-950 text-gray-600">
                Official Document
              </span>
            </a>
          )}
          <Link href={href} className="relative">
            <Button
              variant="outline"
              className="transition-all duration-200"
              style={{
                borderColor: color,
                color: color,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = color;
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = color;
              }}
            >
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListingPageCard;
