import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Link from "next/link";

// Service Left Side Content

export const ServiceIndexHeading = ({ children, className }) => (
  <div className="flex w-full items-center gap-3 mb-3 md:mb-5">
    <div
      className={cn(
        "uppercase font-semibold font-geist text-[14px] md:text-[20px] leading-[20px] md:leading-[28px] text-gray-700",
        className
      )}
    >
      {children}
    </div>

    <div className="h-[1.5px] w-20 bg-neutral-600 rounded-full" />
  </div>
);

export const SectionHeadingTwo = ({ as: Tag = "h2", children, className }) => (
  <Tag
    className={cn(
      "text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1]",
      className
    )}
  >
    {children}
  </Tag>
);

export const ServiceImage = ({ src, alt, title, className }) => (
  <img
    src={src}
    alt={alt}
    title={title}
    className={cn("max-w-full h-auto rounded-lg shadow-md", className)}
  />
);

export const SectionHeadingThree = ({
  as: Tag = "h3",
  children,
  className,
}) => (
  <Tag
    className={cn(
      "font-semibold font-geist text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] text-[#131316]",
      className
    )}
  >
    {children}
  </Tag>
);

export const ServiceParagraph = ({ children, className }) => (
  <p
    className={cn(
      "font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-[22px] md:leading-[28px]",
      className
    )}
  >
    {children}
  </p>
);

export const ServiceSeparator = ({ className }) => (
  <div className={cn("h-px w-full bg-neutral-200", className)} />
);

export const ServiceCallout = ({ about, linkText, href, className }) => (
  <div
    className={cn(
      "rounded-md bg-blue-50 px-4 py-4 border-l-4 border-blue-600",
      className
    )}
  >
    <div className="font-inter text-sm md:text-base text-neutral-800 flex flex-col gap-1">
      <span>Get complete details about {about}</span>

      <Link
        href={href}
        className="font-inter text-sm md:text-base text-blue-900 hover:text-blue-800 underline underline-offset-4"
      >
        {linkText}
      </Link>
    </div>
  </div>
);

export const ServiceList = ({ as: Tag = "p", points, className }) => (
  <ul className={cn("flex flex-col gap-5", className)}>
    {points.map((point, index) => {
      const { text, href } =
        typeof point === "string" ? { text: point } : point;

      return (
        <li key={index} className="flex items-start gap-3">
          <div className="bg-neutral-100  p-1.5 rounded-full flex-shrink-0 flex items-center justify-center min-w-6 min-h-6 mt-0.5">
            <Check size={12} className="text-neutral-800" />
          </div>
          {href ? (
            <Link
              href={href}
              className={cn(
                "font-inter text-sm md:text-base text-blue-900 hover:text-blue-800 underline underline-offset-4 text-left max-w-full flex-1 "
              )}
            >
              {text}
            </Link>
          ) : (
            <Tag className="font-geist text-sm md:text-lg text-[#42434d] tracking-[0.01em] text-left max-w-full leading-[22px] md:leading-[28px] flex-1">
              {text}
            </Tag>
          )}
        </li>
      );
    })}
  </ul>
);

export const ServiceTable = ({
  headers,
  rows,
  emphasizeAllColumns = false,
  className,
  tableClassName,
  headerRowClassName,
  headerCellClassName,
  bodyRowClassName,
  bodyCellClassName,
}) => (
  <div className={cn("overflow-x-auto", className)}>
    <Table
      className={cn(
        "min-w-full border border-gray-200 rounded-lg overflow-hidden",
        tableClassName
      )}
    >
      <TableHeader>
        <TableRow
          className={cn(
            "bg-[#F9F7F2] hover:bg-[#F9F7F2]/80",
            headerRowClassName
          )}
        >
          {headers.map((header, index) => (
            <TableHead
              key={index}
              className={cn(
                "font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]",
                index < headers.length - 1 && "border-r border-gray-300",
                headerCellClassName
              )}
            >
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, rowIndex) => (
          <TableRow
            key={rowIndex}
            className={cn(
              "hover:bg-gray-50 transition-colors",
              bodyRowClassName
            )}
          >
            {row.map((cell, cellIndex) => {
              const isLastColumn = cellIndex === row.length - 1;
              const isEmphasized = emphasizeAllColumns || !isLastColumn;
              return (
                <TableCell
                  key={cellIndex}
                  className={cn(
                    "font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]",
                    isEmphasized && "font-medium",
                    isEmphasized && !isLastColumn && "border-r border-gray-200",
                    bodyCellClassName
                  )}
                >
                  {cell}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

// Service Right Side Content

export const ServiceRightSideCard = ({ children, className }) => (
  <div
    className={cn(
      "w-full md:w-[360px] rounded-lg shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125] font-inter",
      className
    )}
  >
    {children}
  </div>
);

export const ServiceRightSideHeading = ({
  icon: Icon,
  children,
  className,
  iconClassName,
  titleClassName,
}) => (
  <div className={cn("flex gap-2 items-center", className)}>
    <Icon className={cn("text-neutral-800 size-5", iconClassName)} />
    <div
      className={cn(
        "text-base font-medium text-neutral-800 font-inter",
        titleClassName
      )}
    >
      {children}
    </div>
  </div>
);

export const ServiceRightSideButton = ({
  children,
  className,
  icon: Icon,
  iconClassName,
  type = "button",
  ...props
}) => (
  <Button
    type={type}
    className={cn(
      "w-full bg-neutral-800 text-white group relative overflow-hidden font-inter",
      className
    )}
    {...props}
  >
    <span className="relative z-10 flex items-center font-inter">
      {children}
      {Icon && (
        <Icon
          className={cn(
            "ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 font-inter",
            iconClassName
          )}
        />
      )}
    </span>
    <span className="absolute top-0 left-0 w-0 h-full bg-blue-600 transition-all duration-300 group-hover:w-full font-inter" />
  </Button>
);
