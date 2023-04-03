import React, { Fragment } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import PageHeader from "../components/page_header";
import { offices, contactPhone, contactEmail, pageImages } from "../utils";
import Notify from "../components/notify";

export default function Contact() {
 const [modal, setModal] = React.useState(false);
 const {
  register,
  handleSubmit,
  formState: { errors },
  reset
 } = useForm();

 const onSubmit = (data) => {
  setModal(true);
  reset()

 };

 return (
  <Fragment>
   <main className="overflow-hidden">
    <PageHeader
     title="CONTACT"
     content="We look forward to hearing from you and helping you meet your needs"
     image={pageImages[4].source}
    />
    <div className="bg-warm-gray-50">
     <div className="py-20 sm:py-20">
      <div className="relative z-10 mx-auto max-w-7xl pl-4 pr-8 sm:px-6 lg:px-8">
       <h1 className="text-4xl font-bold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl">
        Get in touch
       </h1>
       <p className="mt-6 max-w-3xl text-xl text-warm-gray-500">
        Don't hesitate to reach out to us via the contact information provided
        below - our team is ready to provide the information and support you
        need to make informed decisions about your business."
       </p>
      </div>
     </div>
    </div>

    {/* Contact section */}
    <section className="relative bg-white" aria-labelledby="contact-heading">
     <div
      className="absolute h-1/2 w-full bg-warm-gray-50"
      aria-hidden="true"
     />
     {/* Decorative dot pattern */}
     <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
      <svg
       className="absolute top-0 right-0 z-0 -translate-y-16 translate-x-1/2 transform sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
       width={404}
       height={384}
       fill="none"
       viewBox="0 0 404 384"
       aria-hidden="true"
      >
       <defs>
        <pattern
         id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
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
          className="text-warm-gray-200"
          fill="currentColor"
         />
        </pattern>
       </defs>
       <rect
        width={404}
        height={384}
        fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
       />
      </svg>
     </div>
     <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="relative bg-white shadow-xl">
       <h2 id="contact-heading" className="sr-only">
        Contact us
       </h2>

       <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Contact information */}
        <div className="relative overflow-hidden bg-gradient-to-b from-teal-500 to-teal-600 py-10 px-6 sm:px-10 xl:p-12">
         {/* Decorative angle backgrounds */}
         <div
          className="pointer-events-none absolute inset-0 sm:hidden"
          aria-hidden="true"
         >
          <svg
           className="absolute inset-0 h-full w-full"
           width={343}
           height={388}
           viewBox="0 0 343 388"
           fill="none"
           preserveAspectRatio="xMidYMid slice"
          >
           <path
            d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
            fill="url(#linear1)"
            fillOpacity=".1"
           />
           <defs>
            <linearGradient
             id="linear1"
             x1="254.553"
             y1="107.554"
             x2="961.66"
             y2="814.66"
             gradientUnits="userSpaceOnUse"
            >
             <stop stopColor="#fff" />
             <stop offset={1} stopColor="#fff" stopOpacity={0} />
            </linearGradient>
           </defs>
          </svg>
         </div>
         <div
          className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
          aria-hidden="true"
         >
          <svg
           className="absolute inset-0 h-full w-full"
           width={359}
           height={339}
           viewBox="0 0 359 339"
           fill="none"
           preserveAspectRatio="xMidYMid slice"
          >
           <path
            d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
            fill="url(#linear2)"
            fillOpacity=".1"
           />
           <defs>
            <linearGradient
             id="linear2"
             x1="192.553"
             y1="28.553"
             x2="899.66"
             y2="735.66"
             gradientUnits="userSpaceOnUse"
            >
             <stop stopColor="#fff" />
             <stop offset={1} stopColor="#fff" stopOpacity={0} />
            </linearGradient>
           </defs>
          </svg>
         </div>
         <div
          className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
          aria-hidden="true"
         >
          <svg
           className="absolute inset-0 h-full w-full"
           width={160}
           height={678}
           viewBox="0 0 160 678"
           fill="none"
           preserveAspectRatio="xMidYMid slice"
          >
           <path
            d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
            fill="url(#linear3)"
            fillOpacity=".1"
           />
           <defs>
            <linearGradient
             id="linear3"
             x1="192.553"
             y1="325.553"
             x2="899.66"
             y2="1032.66"
             gradientUnits="userSpaceOnUse"
            >
             <stop stopColor="#fff" />
             <stop offset={1} stopColor="#fff" stopOpacity={0} />
            </linearGradient>
           </defs>
          </svg>
         </div>
         <h3 className="text-lg font-medium text-white">Contact information</h3>
         <p className="mt-6 max-w-3xl text-base text-teal-50">
          Call us for all your engineering solutions.
         </p>

         <ul role="list" className="divide-y divide-gray-200">
          <li className="py-4">
           <div className="flex space-x-3">
            <PhoneIcon
             className="h-6 w-6 flex-shrink-0 text-teal-200"
             aria-hidden="true"
            />
            <div className="flex-1 space-y-1">
             <div className="text-white">
              {contactPhone.map((contact) => (
               <div key={contact.id} className={contact.css}>
                <Link to={contact.link}>{contact.value}</Link>
               </div>
              ))}
             </div>
            </div>
           </div>
           <div className="flex space-x-3 mt-5">
            <EnvelopeIcon
             className="h-6 w-6 flex-shrink-0 text-teal-200"
             aria-hidden="true"
            />
            <div className="flex-1 space-y-1">
             <div className="text-white">
              {contactEmail.map((contact) => (
               <div key={contact.id} className={contact.css}>
                <Link to={contact.link}>{contact.value}</Link>
               </div>
              ))}
             </div>
            </div>
           </div>

           {/* <div className="flex space-x-3 mt-5">
           <span className="text-teal-200">
            <span className="sr-only">LinkedIn</span>
            <svg
             className="h-5 w-5"
             aria-hidden="true"
             fill="currentColor"
             viewBox="0 0 20 20"
            >
             <path
              fillRule="evenodd"
              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
              clipRule="evenodd"
             />
            </svg>
           </span>
           <div className="flex-1 space-y-1">
            <div className="text-white">
             <Link to="#">linkedIn</Link>
            </div>
           </div>
          </div> */}
          </li>
         </ul>
        </div>

        {/* Contact form */}
        <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
         <h3 className="text-lg font-medium text-warm-gray-900">
          Send us a message
         </h3>
         <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
         >
          {/* register your input into the hook by invoking the "register" function */}

          <div>
           <label
            htmlFor="first-name"
            className="block text-sm font-medium text-warm-gray-900"
           >
            First name
           </label>
           <div className="mt-1">
            <input
             type="text"
             name="first-name"
             id="first-name"
             autoComplete="given-name"
             className="block w-full rounded-md
   border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm
   focus:border-teal-500 focus:ring-teal-500"
             defaultValue=""
             {...register("firstName", { required: true })}
            />
            {errors.firstName && <RequiredError />}
           </div>
          </div>

          <div>
           <label
            htmlFor="last-name"
            className="block text-sm font-medium text-warm-gray-900"
           >
            Last name
           </label>
           <div className="mt-1">
            <input
             type="text"
             name="last-name"
             id="last-name"
             autoComplete="family-name"
             className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
             {...register("lastName", { required: true })}
            />
            {errors.lastName && <RequiredError />}
           </div>
          </div>

          <div>
           <label
            htmlFor="email"
            className="block text-sm font-medium text-warm-gray-900"
           >
            Email
           </label>
           <div className="mt-1">
            <input
             id="email"
             name="email"
             type="email"
             autoComplete="email"
             className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
             {...register("email", { required: true })}
            />
            {errors.email && <RequiredError />}
           </div>
          </div>

          <div>
           <div className="flex justify-between">
            <label
             htmlFor="phone"
             className="block text-sm font-medium text-warm-gray-900"
            >
             Phone
            </label>
           </div>
           <div className="mt-1">
            <input
             type="text"
             name="phone"
             id="phone"
             autoComplete="tel"
             className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
             aria-describedby="phone-optional"
             {...register("phone")}
            />
           </div>
          </div>

          <div className="sm:col-span-2">
           <label
            htmlFor="subject"
            className="block text-sm font-medium text-warm-gray-900"
           >
            Subject
           </label>
           <div className="mt-1">
            <input
             type="text"
             name="subject"
             id="subject"
             className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
             {...register("subject", { required: true })}
            />
            {errors.subject && <RequiredError />}
           </div>
          </div>

          <div className="sm:col-span-2">
           <div className="flex justify-between">
            <label
             htmlFor="message"
             className="block text-sm font-medium text-warm-gray-900"
            >
             Message
            </label>
            <span id="message-max" className="text-sm text-warm-gray-500">
             Max. 500 characters
            </span>
           </div>
           <div className="mt-1">
            <textarea
             id="message"
             name="message"
             rows={4}
             className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
             aria-describedby="message-max"
             defaultValue={""}
             {...register("message", { required: true })}
            />
            {errors.message && <RequiredError />}
           </div>
          </div>

          <div className="sm:col-span-2 sm:flex sm:justify-end">
           <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-teal-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto"
           >
            Submit
           </button>
          </div>

          {/* <!-- <input type="submit" /> --> */}
         </form>
        </div>
       </div>
      </div>
     </div>
    </section>

    {/* Contact grid */}
    <section aria-labelledby="offices-heading">
     <div className="mx-auto max-w-7xl py-24 px-6 sm:py-0 lg:px-8 mt-10">
      <h2
       id="offices-heading"
       className="text-3xl font-bold tracking-tight text-warm-gray-900"
      >
       Our offices
      </h2>
      <p className="mt-6 max-w-3xl text-lg text-warm-gray-500">
       We would be delighted to welcome you to our office, please feel free to
       drop by at any time.
      </p>
      <div className="mt-5 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
       {offices.map((office) => (
        <div key={office.id}>
         <h3 className="text-lg font-medium text-warm-gray-900">
          {office.city}
         </h3>
         <p className="mt-2 text-base text-warm-gray-500">
          {office.address.map((line) => (
           <span key={line} className="block">
            {line}
           </span>
          ))}
         </p>
        </div>
       ))}
      </div>
     </div>
    </section>
   </main>

   {modal && <Notify modal={modal} setModal={setModal} />}
  </Fragment>
 );
}

const RequiredError = () => {
 return <span className="text-sm text-red-600">This field is required</span>;
};
