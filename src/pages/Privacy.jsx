import React from "react";
import MainLayout from "../components/Layout/MainLayout";

export default function Privacy() {
  const privacyPolicy = [
    {
      question: "Will your Data be shared or is it compromised ?",
      answer:
        "First of all this app don't require user login and have no access to your personal data including your geolocation",
    },
    {
      question: "Then What Persistent Data it Stores ?",
      answer:
        "It stores the persistence data in LocalStorage Only for effective user interaction such as theme and for handling screen responsiveness",
    },
    {
      question: "Does this website have any payment section ?",
      answer: "No, as of now it don't have any payment service",
    },
    {
      question: "Does this website have any advertisment ?",
      answer: "No, as of now it don't have any ads",
    },
    {
      question: "Does this website contain Links to other sites ?",
      answer:
        "Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party’s site",
    },
    {
      question: "What 3rd party links does it contains ?",
      answer: "Facebook, Twitter, LinkedIn, Youtube and Buymeacoffee Only",
    },
    {
      question: "What about Children’s Privacy? Is it safe for them?",
      answer: "Yes. This app is useful for people for every age from age 6+",
    },
    {
      question: "What is your Service Providers?",
      answer:
        "We may employ third party companies and individuals to facilitate our Service. As of now we employ gh-pages to deploy the code base in Github as it is simple client-side rendering single page application",
    },
  ];
  return (
    <>
      <MainLayout>
        <h1 className="py-6 text-4xl text-gray-700 dark:text-white">Privacy Policy</h1>
        <div className="bg-white dark:bg-slate-700 p-4">
        <ol class="relative border-l border-gray-200 dark:border-gray-400">

          { 
            privacyPolicy.map(({question, answer}, index) => {
              return <li class="mb-10 ml-4 " key={index}>
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {`# Question ${index+1}`}
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                {question}
              </h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {answer}
              </p>
            </li>
            })
          }
        </ol>
        </div>

      </MainLayout>
    </>
  );
}
