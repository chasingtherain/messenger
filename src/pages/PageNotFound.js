import React from 'react'
import { Link } from 'react-router-dom'
import notFoundImg from "../img/not_found.png"

function PageNotFound() {
    return (
        <div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-8 lg: mt-24">
            <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className='flex flex-col'>
                    <h1 class="my-8 text-gray-800 font-bold text-2xl">
                        Looks like you've found the
                        doorway to the great nothing
                    </h1>
                    <button class="sm:w-full lg:w-[16rem] my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                        <Link to="/">Take me back home!</Link>
                    </button>
                </div>
            </div>
            <div>
                <img style={{width: "20rem"}} src={notFoundImg} alt="not found" />
            </div>
        </div>
    )
}

export default PageNotFound