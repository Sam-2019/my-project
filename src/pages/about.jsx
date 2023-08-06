import React from "react";
import PageHeader from "../components/page_header";
import { aboutStats, pageImages } from "../utils";

export default function About() {
 return (
  <div>
   <PageHeader
    title="ABOUT US"
    content="We provide multi-disciplinary solutions to the industries we serve."
    image={pageImages[0].src}
   />

   <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
    {/* Content area */}
    <div className="pt-12 sm:pt-16 lg:pt-20">
     {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
       Company Overview
      </h2> */}
     <div className="mt-6 space-y-6 text-gray-500">
      <p className="text-lg leading-7">
       CHRISCOMIK COMPANY LTD. is a registered Limited Liability Company that
       specializes in providing services such as Welding/Fabrication, Mechanical
       Engineering, Supplies, Service Providers and General Contractors,
       particularly in the Marine and Oil Fields. Our aim is to provide our
       clients with a complete range of services related to electrical and
       mechanical engineering, as well as the supply of electrical and
       earth-moving equipment. We have built a solid reputation in the oil and
       gas industry and have grown rapidly into a global service company.
      </p>
      <p className="text-base leading-7">
       Our qualified staff enables us to provide multi-disciplinary solutions to
       the industries we serve. By choosing CHRISCOMIK COMPANY LTD as your
       service provider, you can expect a full range of services through a
       single point of contact, which reduces administrative costs and saves
       valuable time. Our team is committed to focusing on your requirements and
       providing you with total quality service and solutions.
      </p>
      <p className="text-base leading-7">
       At CHRISCOMIK COMPANY LTD, we understand that your needs require constant
       attention, and we are committed to delivering high-quality and reliable
       solutions to meet those needs. As a professional firm, we adhere to
       relevant and widely accepted international codes and practices such as
       Engineering ASME, AWS, APL, IEE INSB, ABS & BV CLASS Welders. We strive
       to meet customer specifications and requirements, which sets us apart
       from other service providers.
      </p>

      <p>
       <span className="block text-3xl font-bold tracking-tight text-gray-900 mb-3">
        Subsidiaries
       </span>

       <span className="block text-base leading-7">
        Our family of subsidiaries includes{" "}
        <span className="text-3xl font-bold tracking-tight text-gray-900 text-base leading-7">
         Sasmarin Company Limited
        </span>
        , which specializes in aluminum and argon welding, as well as the supply
        of plates and stainless materials, and electrical engineering services.
        We also have{" "}
        <span className="text-3xl font-bold tracking-tight text-gray-900 text-base leading-7">
         Davmas Company Limited
        </span>
        , which provides tank cleaning, sandblasting, and diving support
        systems. Together, these companies offer a comprehensive range of
        solutions to meet your engineering needs.
       </span>
      </p>
     </div>
    </div>

    {/* Stats section */}
    <div className="mt-10">
     <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
      {aboutStats.map((stat) => (
       <div key={stat.id} className="border-t-2 border-gray-100 pt-6">
        <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
        <dd className="text-3xl font-bold tracking-tight text-gray-900">
         {stat.value}
        </dd>
       </div>
      ))}
     </dl>
     <div className="mt-10" />
    </div>
   </div>
  </div>
 );
}