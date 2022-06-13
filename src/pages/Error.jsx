import React from 'react'
import MainLayout from '../components/Layout/MainLayout'
import { useNavigate } from 'react-router-dom';


export default function Error() {
  const navigate = useNavigate();

  return (
    <MainLayout>
    <div className="max-w-screen-lg bg-orange-300 dark:bg-slate-600 hover:shadow-2xl rounded-lg mx-auto text-center py-12 my-40">
        <h2 className="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10">
           ERROR 404
        </h2>
        <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md bg-white shadow">
                <button className="text-gray-700 font-bold py-2 px-6" onClick={() => navigate(-1)}>
                  Back
                </button>
            </div>
        </div>
    </div>
    </MainLayout>
  )
}
