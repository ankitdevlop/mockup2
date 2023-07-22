import React from 'react'
import Profile from './Profile'
import Retirment2 from './Retirment2'
// Initialization for ES Users


function Rtirement() {
    return (
        <>
        
            <div className="flex flex-row" id='main'>


               <Profile/>
                <div className="flex flex-col max-w-7xl w-full md:w-[65%]  m-0 " id='data'>
                                    <div className="text-sm font-semibold mr-5 text-blue-700 ">Retierment Income Income</div>
                                    <h1 class="mb-4 text-xl font-extrabold leading-none tracking-tight text-black md:text-2xl lg:text-2xl dark:text-white">Starting Year 2056</h1>
                    <div className="flex flex-col lg:flex-row ">
                        {/* my Goal */}
                        <div className= "bg-white shadow-lg rounded-xl flex items-start h-32 w-[90%] lg:w-1/2 justify-center py-4 px-8 mx-4 my-2">
                            <div className="flex items-center justify-start w-full">
                                <div className="flex-col w-[85%]">
                                    <div className="className flex items-center">
                                        <div className="text-3xl font-bold text-black">$2,30,568</div>
                                      
                                    </div>
                                    <div className="w-full h-1 rounded bg-gray-300 my-1">
                                        <div className="w-[100%] h-1 rounded bg-blue-700"></div>
                                    </div>
                                    <div className="text-xs font-medium text-gray-400 ">My Goal</div>
                                </div>
                            </div>
                        </div>
                        {/* Goal Achived */}
                        <div className= "bg-white shadow-lg rounded-xl flex items-start h-32 w-[90%] lg:w-1/2 justify-center py-4 px-8 mx-4 my-2">
                            <div className="flex items-center justify-start w-full">
                                <div className="flex-col w-[85%]">
                                
                                    <div className="className flex items-center">
                                        <div className="text-3xl font-bold text-black">59%</div>
                                       
                                    </div>
                                    <div className="w-full h-1 rounded bg-gray-300 my-1">
                                        <div className="w-[100%] h-1 rounded bg-blue-700"></div>
                                    </div>
                                    <div className="text-xs font-medium text-gray-400 ">Goal Achieved</div>
                                </div>
                            </div>
                        </div>

                        {/*  Est Monthly Income */}
                        <div className= "bg-white shadow-lg rounded-xl flex items-start h-32 w-[90%] lg:w-1/2 justify-center py-4 px-8 mx-4  my-2">
                            <div className="flex items-center justify-start w-full">
                                <div className="flex-col w-[85%]">
                                    <div className="text-sm font-medium text-blue-600 my-2"></div>
                                    <div className="className flex items-center">
                                        <div className="text-3xl font-bold text-black">$300</div>
                                   
                                    </div>
                                    <div className="w-full h-1 rounded bg-gray-300 my-1">
                                        <div className="w-[100%] h-1 rounded bg-blue-700"></div>
                                    </div>
                                    <div className="text-xs font-medium text-gray-400 ">Est.Monthly Income</div>
                                </div>
                            </div>
                        </div>

                    </div>


                    {/*  Graph */}
                  {/* baki hai bhai karlena */}
              
    <div class="flex flex-col items-center justify-center  max-w-7xl w-full md:w-[99%]">


<div class="flex flex-col items-center w-full max-w-screen-md p-6 pb-6 bg-white rounded-lg shadow-xl sm:p-8">
    <h2 class="text-xl font-bold">Contnributions Overtime</h2>

    <div class="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-3">
        <div class="relative flex flex-col items-center flex-grow pb-5 group">
            
            <div class="relative flex justify-center w-full h-8 bg-blue-500"></div>
            <div class="relative flex justify-center w-full h-6 bg-blue-800"></div>
            <div class="relative flex justify-center w-full h-16 bg-blue-900"></div>
            <span class="absolute bottom-0 text-xs font-bold">20</span>
        </div>

         <div class="relative flex flex-col items-center flex-grow pb-5 group">
            
            <div class="relative flex justify-center w-full h-8 bg-blue-500"></div>
            <div class="relative flex justify-center w-full h-6 bg-blue-800"></div>
            <div class="relative flex justify-center w-full h-16 bg-blue-900"></div>
        </div>
        <div class="relative flex flex-col items-center flex-grow pb-5 group">
            <div class="relative flex justify-center w-full h-10 bg-blue-500"></div>
            <div class="relative flex justify-center w-full h-6 bg-blue-800"></div>
            <div class="relative flex justify-center w-full h-20 bg-blue-900"></div>
            <span class="absolute bottom-0 text-xs font-bold">25</span>
        </div>
         <div class="relative flex flex-col items-center flex-grow pb-5 group">
            
            <div class="relative flex justify-center w-full h-8 bg-blue-500"></div>
            <div class="relative flex justify-center w-full h-6 bg-blue-800"></div>
            <div class="relative flex justify-center w-full h-16 bg-blue-900"></div>
        </div>
        <div class="relative flex flex-col items-center flex-grow pb-5 group">
            <div class="relative flex justify-center w-full h-10 bg-blue-500"></div>
            <div class="relative flex justify-center w-full h-8 bg-blue-800"></div>
            <div class="relative flex justify-center w-full h-20 bg-blue-900"></div>
            <span class="absolute bottom-0 text-xs font-bold">30</span>
        </div>
         <div class="relative flex flex-col items-center flex-grow pb-5 group">
            
            <div class="relative flex justify-center w-full h-8 bg-blue-500"></div>
            <div class="relative flex justify-center w-full h-6 bg-blue-800"></div>
            <div class="relative flex justify-center w-full h-16 bg-blue-900"></div>
        </div>
        <div class="relative flex flex-col items-center flex-grow pb-5 group">
            <div class="relative flex justify-center w-full h-10 bg-blue-500"></div>
            <div class="relative flex justify-center w-full h-6 bg-blue-800"></div>
            <div class="relative flex justify-center w-full h-24 bg-blue-900"></div>
            <span class="absolute bottom-0 text-xs font-bold">35</span>
        </div>
         <div class="relative flex flex-col items-center flex-grow pb-5 group">
            
            <div class="relative flex justify-center w-full h-8 bg-blue-500"></div>
            <div class="relative flex justify-center w-full h-6 bg-blue-800"></div>
            <div class="relative flex justify-center w-full h-16 bg-blue-900"></div>
        </div>
        <div class="relative flex flex-col items-center flex-grow pb-5 group">
            <div class="relative flex justify-center w-full h-10 bg-blue-500"></div>
            <div class="relative flex justify-center w-full h-8 bg-blue-800"></div>
            <div class="relative flex justify-center w-full h-20 bg-blue-900"></div>
            <span class="absolute bottom-0 text-xs font-bold">40</span>
        </div>
         <div class="relative flex flex-col items-center flex-grow pb-5 group">
            
            <div class="relative flex justify-center w-full h-8 bg-blue-500"></div>
            <div class="relative flex justify-center w-full h-6 bg-blue-800"></div>
            <div class="relative flex justify-center w-full h-16 bg-blue-900"></div>
        </div>
        <div class="relative flex flex-col items-center flex-grow pb-5 group">
            <div class="relative flex justify-center w-full h-12 bg-blue-500"></div>
            <div class="relative flex justify-center w-full h-8 bg-blue-800"></div>
            <div class="relative flex justify-center w-full h-24 bg-blue-900"></div>
            <span class="absolute bottom-0 text-xs font-bold">45</span>
        </div>
         <div class="relative flex flex-col items-center flex-grow pb-5 group">
            
            <div class="relative flex justify-center w-full h-8 bg-blue-500"></div>
            <div class="relative flex justify-center w-full h-6 bg-blue-800"></div>
            <div class="relative flex justify-center w-full h-16 bg-blue-900"></div>
        </div>
      
    </div>
    <div class="flex w-full mt-3">
        <div class="flex items-center ml-auto">
            <span class="block w-4 h-4 bg-blue-400"></span>
            <span class="ml-1 text-xs font-medium">Employer :K 73,500</span>
        </div>
        <div class="flex items-center ml-4">
            <span class="block w-4 h-4 bg-blue-800"></span>
            <span class="ml-1 text-xs font-medium">Employe:K 72,500</span>
        </div>
        <div class="flex items-center ml-4">
            <span class="block w-4 h-4 bg-blue-500"></span>
            <span class="ml-1 text-xs font-medium">Total Intrest: K 44,43232</span>
        </div>
    </div>
</div>


</div>
<div className="stat">

    <h1 className=' mt-40 mb-2 text-xl font-extrabold leading-none tracking-tight text-black md:text-2xl lg:text-2xl dark:text-white"'>How do I campare My peers?</h1>
    <br />
    <p className='text-xs font-medium text-gray-400'>This numbers Represent Current Goal Aachived</p>


<div class="flex flex-row space-x-6 mt-3 items-center justify-center  max-w-2xl w-full md:w-[99%]">
<div className=" flex flex-col font-bold ml-12 " id='circe'>
Age: Under 30<span class="material-symbols-outlined font-bold">
keyboard_arrow_down
</span> <br />
    Salary: K20 -K30<span class="material-symbols-outlined font-bold">
keyboard_arrow_down
</span><br />
Gender: Male<span class="material-symbols-outlined font-bold">
keyboard_arrow_down
</span>
</div>
<div className="kuch   flex flex-row mb-40" id='gola'>

<div className="outer space-x-5  justify-center align-middle">
    <div className="inner justify-center align-middle"><p>78%</p></div>
    Averege
</div>
<div className="outer ">
    <div className="inner justify-center align-middle"><p>89%</p></div>
    top
</div>
<div className="outer">
    <div className="inner justify-center align-middle"><p>70%</p></div>
    me
</div>
</div>
</div>


</div>
                </div>


<Retirment2/>

            </div>
        </>
    )
}

export default Rtirement
