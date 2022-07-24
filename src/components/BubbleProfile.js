import React from 'react'

function BubbleProfile() {
  return (
    <div className='flex justify-between'>
        <div className='flex'>
            <div class="avatar online placeholder">
                <div class="bg-neutral-focus text-neutral-content rounded-full w-16">
                    <span class="text-xl">JP</span>
                </div>
            </div> 
            <p className='text-2xl mt-4 ml-4'>Jerome Powell</p>
        </div>
    </div>
  )
}

export default BubbleProfile