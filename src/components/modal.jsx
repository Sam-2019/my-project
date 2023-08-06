import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function MyModal({ show, setIsOpen, data, setData }) {
 const closeModal = () => {
  setIsOpen(false);
  //   setData({})
 };

 return (
  <>
   <Transition appear show={show} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={closeModal}>
     <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
     >
      <div className="fixed inset-0 bg-black bg-opacity-90" />
     </Transition.Child>

     <div className="fixed inset-0 p-2">
      <div className="flex justify-end">
       <button
        type="button"
        className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
        onClick={() => closeModal()}
       >
        <span className="sr-only">Close</span>
        <XMarkIcon className="h-10 w-10" aria-hidden="true" />
       </button>
      </div>
      <div className="flex min-h-full items-center justify-center text-center">
       <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
       >
        <Dialog.Panel className="transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
         <div className="relative">
          <div class="overflow-hidden cursor-pointer rounded-xl relative group">
           <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
            <div>
             <div class="transform-gpu space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
              <div class="opacity-100 text-lg px-2">{data.description}</div>
             </div>
            </div>
           </div>
           <div class="h-min rounded-2xl">
            <img src={data.src} alt={data.alt} width={data.width ?? null} />
           </div>
          </div>
         </div>
        </Dialog.Panel>
       </Transition.Child>
      </div>
     </div>
    </Dialog>
   </Transition>
  </>
 );
}
