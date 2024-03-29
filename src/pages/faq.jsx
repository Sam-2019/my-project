import React from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import PageHeader from "../components/page_header";
import { faqs, pageImages } from "../utils";

export default function FAQ() {
 return (
  <div>
   <PageHeader
    title="FAQs"
    content="Welcome to our FAQ page, where we've compiled answers to some of the most common questions our clients ask."
    image={pageImages[6].src}
   />
   <div className="bg-white py-0 sm:py-0">
    <div className="mx-auto max-w-7xl px-6 lg:py-10 py-9 lg:px-8">
     <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
      <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
       Frequently asked questions
      </h2>
      <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
       {faqs.map((faq) => (
        <Disclosure as="div" key={faq.question} className="pt-6">
         {({ open }) => (
          <>
           <dt>
            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
             <span className="text-base font-semibold leading-7">
              {faq.question}
             </span>
             <span className="ml-6 flex h-7 items-center">
              {open ? (
               <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
               <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
              )}
             </span>
            </Disclosure.Button>
           </dt>
           <Disclosure.Panel as="dd" className="mt-2 pr-12">
            <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
           </Disclosure.Panel>
          </>
         )}
        </Disclosure>
       ))}
      </dl>
     </div>
    </div>
   </div>
  </div>
 );
}
