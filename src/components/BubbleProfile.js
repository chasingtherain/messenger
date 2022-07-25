import React from 'react'

function BubbleProfile({initial, name, bubbleWidth, nameTextSize, status}) {
  return (
    <div className='flex justify-between'>
        <div className='flex'>
            <button className={`avatar ${status} placeholder`}>
                <div className={`bg-neutral-focus text-neutral-content rounded-full ${bubbleWidth}`}>
                    <span className="text-xl">{initial}</span>
                </div>
            </button> 
            <p className={`${nameTextSize} mt-4 ml-4 w-48`}>{name}</p>
        </div>
    </div>
  )
}

export default BubbleProfile