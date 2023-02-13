import React from "react";
import { useLocation } from "react-router-dom";
import { teams, renderHeaderTitle } from "../utils";
import PageHeader from "../components/page_header";

export default function Teams() {
 let location = useLocation();
 return (
  <div>
   <PageHeader
    title={renderHeaderTitle(location)}
    content="We’re a dynamic group of individuals who are passionate about what we do
      and dedicated to delivering the best results for our clients"
   />
   <div className="bg-white py-0 sm:py-0">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
     <ul
      role="list"
      className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
     >
      {teams.map((team) => (
       <li key={team.name}>
        <img
         className="aspect-[3/2] w-full rounded-2xl object-cover"
         src={team.imageUrl}
         alt=""
        />
        <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
         {team.name}
        </h3>
        <p className="text-base leading-7 text-gray-600">{team.role}</p>
        <ul role="list" className="mt-6 flex gap-x-6">
         <li>
          <a
           href={team.linkedinUrl}
           className="text-gray-400 hover:text-gray-500"
          >
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
          </a>
         </li>
        </ul>
       </li>
      ))}
     </ul>
    </div>
   </div>
  </div>
 );
}
