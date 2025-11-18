import { serviceList } from "@/src/api/services";
import ServiceCard from "@/src/card/ServiceCard";
import PageHeaderSection from "@/src/utilits/PageHeaderSection";
import React from "react";

const page = () => {
  return (
    <div>
      <PageHeaderSection
        title="Services That Scale Your Success"
        pageName="Our Services"
      />

      <div className="mt-20 pb-20 Container">
        <div className="grid lg:grid-cols-3 gap-6">
          {serviceList.slice(0, 4).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
