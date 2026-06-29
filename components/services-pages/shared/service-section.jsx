import { ServiceIndexHeading } from "./service-content";

const ServiceSection = ({ id, label, children }) => (
  <div id={id} className="flex flex-col scroll-mt-36">
    <ServiceIndexHeading>{label}</ServiceIndexHeading>
    {children}
  </div>
);

export default ServiceSection;
