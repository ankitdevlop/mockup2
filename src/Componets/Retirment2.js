import React from 'react'

function Retirment2() {
  return (
    <>
    <div className="flex flex-col bg-gray-100  rounded-3xl" id='third'>

        <h1 class="mb-4 text-xl font-extrabold leading-none tracking-tight text-black md:text-2xl lg:text-2xl ">Retirement Startegy</h1>

        <h3 className='text-gery-200  font-bold text-base mt-8'>Employee Contribution</h3>
        

<h1 className='font-extrabold'>12%</h1>
<input id="minmax-range" type="range" min="0" max="100" value="12" class="w-20 h-2 bg-blue-400 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>

        <h3 className='text-gery-200  font-bold text-base mt-8'>Retirement Age</h3>
        

<h1 className='font-extrabold'>65</h1>
<input id="minmax-range" type="range" min="0" max="100" value="65" class="w-20 h-2 bg-blue-400 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
<hr />

<h4>Employer Contribution </h4>
<p className='font-extrabold'>8.4%</p>
<h4>Intreat Rate </h4>
<p className='font-extrabold'>5% </p>
<button class="btn justify-center align-middle bg-blue-900 rounded-xl text-white h-9 mt-10"id='update'>
  Update
</button>



<div className="useless">


<p className='text-blue-600 text-base'> 
view help docs <span class="material-symbols-outlined">
keyboard_arrow_right
</span>

</p>

<div className="more mt-11">
<p>Are You Considering a</p>
  <p className='font-extrabold'>Housing Advance? </p>
  <p className='font-normal text-gray-700'>Limited Time tex reduce intrest</p>
  <p className='text-blue-700 mt-3'>Learn More  <span class="material-symbols-outlined">
keyboard_arrow_right
</span></p>
  </div>
</div>
    </div>
    </>
  )
}

export default Retirment2
