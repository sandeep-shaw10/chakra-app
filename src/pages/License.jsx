import React from "react";
import MainLayout from "../components/Layout/MainLayout";

export default function License() {
  const license = [
    {
      question: "Vector Graphic",
      answer:
        "Undraw and Freepik",
    },
    {
      question: "Audio",
      answer:
        "Youtube Channel: Cozy Cycles",
    },
    {
      question: "Data",
      answer: "Most of the data is collected from Wikipedia",
    },
    {
      question: "App Design",
      answer: "The control flow, concept and design for the entire application is developed by me",
    },
    {
      question: "LICENSE",
      answer:
        "MIT License",
      link: "https://github.com/sandeep-shaw10/chakra-app/blob/master/LICENSE"
    },
  ];

  return (
    <>
      <MainLayout>
        <h1 className="py-6 text-4xl text-gray-700 dark:text-white">License</h1>
        <div className="bg-white dark:bg-slate-700 p-4">
        <ol className="relative border-l border-gray-200 dark:border-gray-400">

          { 
            license.map(({question, answer, link}, index) => {
              return <li className="mb-10 ml-4 " key={index}>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {`# ${index+1}`}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {question}
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {answer}
              </p>
              { link ? 
              <a target="_blank" rel="noreferrer" href={link} className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                Visit Github 
                <svg 
                  className="ml-2 w-3 h-3" 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fillRule="evenodd" 
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 
                    1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 
                    1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                    clipRule="evenodd"></path>
                  </svg>
                </a>
              : '' }
            </li>
            })
          }
        </ol>
        </div>

      </MainLayout>
    </>
  );
}
