import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation } from "../utils";

export default function Navigation() {
 return (
  <div className="bg-white shadow-md">
   <Popover as="header" className="relative">
    <div className="bg-warm-gray-50 ">
     <nav
      className="relative flex max-w-auto items-center justify-between px-6 py-3 sm:py-4 xl:px-8 sm:shadow-none shadow-md"
      aria-label="Global"
     >
      <div className="flex flex-1 items-center">
       <div className="flex w-full items-center justify-between lg:w-auto">
        <a href="/">
         <span className="sr-only">Your Company</span>
         <img
          className="h-8 w-auto sm:h-10"
          src="https://tailwindui.com/img/logos/mark.svg?color=teal&shade=500"
          alt=""
         />
        </a>
        <div className="-mr-2 flex items-center lg:hidden">
         <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-warm-gray-50 p-2 text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500">
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
         </Popover.Button>
        </div>
       </div>
      </div>

      <div className="justify-end hidden space-x-10 lg:flex">
       {navigation.map((item) => (
        <a
         key={item.id}
         href={item.path}
         className={`text-base font-medium text-warm-gray-500 hover:text-warm-gray-900" ${
          window.location.pathname === item.path ? "text-amber-900" : null
         }`}
        >
         {item.name}
        </a>
       ))}
      </div>
     </nav>
    </div>

    <Transition
     as={Fragment}
     enter="duration-150 ease-out"
     enterFrom="opacity-0 scale-95"
     enterTo="opacity-100 scale-100"
     leave="duration-100 ease-in"
     leaveFrom="opacity-100 scale-100"
     leaveTo="opacity-0 scale-95"
    >
     <Popover.Panel
      focus
      className="absolute inset-x-0 top-0 z-30 origin-top transform p-2 transition lg:hidden"
     >
      <div className="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
       <div className="flex items-center justify-between px-5 pt-4">
        <div>
         <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=teal&shade=500"
          alt=""
         />
        </div>
        <div className="-mr-2">
         <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
          <span className="sr-only">Close menu</span>
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
         </Popover.Button>
        </div>
       </div>
       <div className="pt-5 pb-6">
        <div className="space-y-1 px-2">
         {navigation.map((item) => (
          <a
           key={item.name}
           href={item.path}
           className={`block rounded-md px-3 py-2 text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50 ${
            window.location.pathname === item.path ? "text-amber-900" : null
           }`}
          >
           {item.name}
          </a>
         ))}
        </div>
       </div>
      </div>
     </Popover.Panel>
    </Transition>
   </Popover>
  </div>
 );
}
