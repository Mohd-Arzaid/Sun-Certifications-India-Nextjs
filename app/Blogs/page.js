import ListingPageLayout from "@/components/listing-pages/listing-page-layout";
import { BLOGS_LIST } from "./blogs-data";

const hero = {
  heading: "Latest Blogs",
  description:
    "Stay updated with the latest blogs and articles from our experts",
};

const search_bar = {
  placeholder: "Search for Latest Blogs",
};

const BlogsPage = () => {
  return (
    <ListingPageLayout
      breadcrumbLabel="Latest Blogs"
      hero={hero}
      search_bar={search_bar}
      items={BLOGS_LIST}
    />
  );
};

export default BlogsPage;
