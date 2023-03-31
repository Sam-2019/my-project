import React from "react";
import Layout from "../components/layout";
import PageHeader from "../components/page_header";
import { aboutStats, pageImages } from "../utils";

export default function About() {
 return (
  <div>
   <PageHeader
    title="ABOUT US"
    content="We provide multi-disciplinary solutions to the industries we serve."
    image={pageImages[1].source}
   />
   <Layout>
    <div className="relative sm:py-16 lg:py-0">
     <div
      aria-hidden="true"
      className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
     >
      <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
      <svg
       className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
       width={404}
       height={392}
       fill="none"
       viewBox="0 0 404 392"
      >
       <defs>
        <pattern
         id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
         x={0}
         y={0}
         width={20}
         height={20}
         patternUnits="userSpaceOnUse"
        >
         <rect
          x={0}
          y={0}
          width={4}
          height={4}
          className="text-gray-200"
          fill="currentColor"
         />
        </pattern>
       </defs>
       <rect
        width={404}
        height={392}
        fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
       />
      </svg>
     </div>
     <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
      {/* Testimonial card*/}
      <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
       <img
        className="absolute inset-0 h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
        alt=""
       />
       <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
       <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90" />
       <div className="relative px-8">
        <div>
         <img
          className="h-12"
          src="https://tailwindui.com/img/logos/workcation.svg?color=white"
          alt="Workcation"
         />
        </div>
        <blockquote className="mt-8">
         <div className="relative text-lg font-medium text-white md:flex-grow">
          <svg
           className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-400"
           fill="currentColor"
           viewBox="0 0 32 32"
           aria-hidden="true"
          >
           <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="relative">
           Tincidunt integer commodo, cursus etiam aliquam neque, et.
           Consectetur pretium in volutpat, diam. Montes, magna cursus nulla
           feugiat dignissim id lobortis amet.
          </p>
         </div>

         <footer className="mt-4">
          <p className="text-base font-semibold text-indigo-200">
           Sarah Williams, CEO at Workcation
          </p>
         </footer>
        </blockquote>
       </div>
      </div>
     </div>
    </div>

    <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
     {/* Content area */}
     <div className="pt-12 sm:pt-16 lg:pt-20">
      {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
       Company Overview
      </h2> */}
      <div className="mt-6 space-y-6 text-gray-500">
       <p className="text-lg">
        CHRISCOMIK COMPANY LTD. is a registered Limited Liability Company that
        specializes in providing services such as Welding/Fabrication,
        Mechanical Engineering, Supplies, Service Providers and General
        Contractors, particularly in the Marine and Oil Fields. Our aim is to
        provide our clients with a complete range of services related to
        electrical and mechanical engineering, as well as the supply of
        electrical and earth-moving equipment. We have built a solid reputation
        in the oil and gas industry and have grown rapidly into a global service
        company.
       </p>
       <p className="text-base leading-7">
        Our qualified staff enables us to provide multi-disciplinary solutions
        to the industries we serve. By choosing CHRISCOMIK COMPANY LTD as your
        service provider, you can expect a full range of services through a
        single point of contact, which reduces administrative costs and saves
        valuable time. Our team is committed to focusing on your requirements
        and providing you with total quality service and solutions.
       </p>
       <p className="text-base leading-7">
        At CHRISCOMIK COMPANY LTD, we understand that your needs require
        constant attention, and we are committed to delivering high-quality and
        reliable solutions to meet those needs. As a professional firm, we
        adhere to relevant and widely accepted international codes and practices
        such as Engineering ASME, AWS, APL, IEE INSB, ABS & BV CLASS Welders. We strive to meet
        customer specifications and requirements, which sets us apart from other
        service providers.
       </p>
      </div>
     </div>

     {/* Stats section */}
     <div className="mt-10">
      <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
       {aboutStats.map((stat) => (
        <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
         <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
         <dd className="text-3xl font-bold tracking-tight text-gray-900">
          {stat.value}
         </dd>
        </div>
       ))}
      </dl>
      <div className="mt-10"/>
     </div>
    </div>
   </Layout>
  </div>
 );
}
