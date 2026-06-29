import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { SlashIcon } from "lucide-react";

export const CommonBreadcrumb = ({ label, items }) => {
  const crumbs = items ?? [{ label }];

  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-full overflow-x-auto scrollbar-hide font-inter">
          <div className="w-fit min-w-full">
            <Breadcrumb>
                <BreadcrumbList className="flex-nowrap">
                  <BreadcrumbItem className="flex-shrink-0">
                    <BreadcrumbLink asChild>
                      <Link href="/">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>

                  {crumbs.map((crumb, index) => (
                    <Fragment key={index}>
                      <BreadcrumbSeparator className="flex-shrink-0">
                        <SlashIcon />
                      </BreadcrumbSeparator>

                      <BreadcrumbItem className="flex-shrink-0">
                        {crumb.href ? (
                          <BreadcrumbLink asChild>
                            <Link href={crumb.href}>{crumb.label}</Link>
                          </BreadcrumbLink>
                        ) : (
                          <BreadcrumbPage className="whitespace-nowrap">
                            {crumb.label}
                          </BreadcrumbPage>
                        )}
                      </BreadcrumbItem>
                    </Fragment>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonBreadcrumb;
