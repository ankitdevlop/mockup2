import React from 'react'

function Navbar() {
    return (
        <>

            <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-9 h-96 transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div class="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-blue-800">
                    <ul class="space-y-5 font-medium">
                        <li className='mb-9'>
                            <a href="/" classNameass="flex items-center  p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ">
                                <img src="https://cdn-icons-png.flaticon.com/128/13/13148.png" alt="" npm runn />
                            </a>
                        </li>
                        <li className='mb-9'>
                            <a href="/" classNameass="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                                <span class="material-symbols-outlined  font-medium text-gray-400'">
                                    search
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="/" classNameass="flex  items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ">

                                <span class="material-symbols-outlined  font-medium text-gray-400'">
                                    home
                                </span>


                            </a>
                        </li>
                        <li>
                            <a href="/" classNameass="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                                <span class="material-symbols-outlined  font-medium text-gray-400'">
                                    news
                                </span>


                            </a>
                        </li>
                        <li>
                            <a href="/" classNameass="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                                <span class="material-symbols-outlined  font-medium text-gray-400'">
                                    list
                                </span>


                            </a>
                        </li>
                        <li>
                            <a href="/" classNameass="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                                <span class="material-symbols-outlined  font-medium text-gray-400'">
                                    person
                                </span>


                            </a>
                        </li>
                        <li>
                            <a href="/" classNameass="flex items-center p-2 text-gray-900 rounded-lg  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span class="material-symbols-outlined ">
                                    logout
                                </span>


                            </a>
                        </li>

                    </ul>
                </div>
            </aside>


            <div class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t   dark:bg-gray-200 dark:border-gray-200" id='bottom'>
                <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                    <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-blue-800 group dark:border-gray-600">
                        <span class="material-symbols-outlined  font-medium text-gray-400'">
                            home
                        </span>
                    </button>
                    <button type="button" class="inline-flex flex-col items-center justify-center px-5  border-gray-200 hover:bg-gray-50 dark:hover:bg-blue-800 group dark:border-gray-600">

                        <span class="material-symbols-outlined  font-medium text-gray-400'">
                            news
                        </span>

                    </button>
                    <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-blue-800 group">
                        <span class="material-symbols-outlined  font-medium text-gray-400'">
                            list
                        </span>
                    </button>
                    <button type="button" class="inline-flex flex-col items-center justify-center px-5 0 hover:bg-gray-50 dark:hover:bg-blue-800 group  dark:border-gray-600">
                        <span class="material-symbols-outlined  font-medium text-gray-400'">
                            person
                        </span>
                    </button>
                </div>
            </div>



        </>
    )
}

export default Navbar
