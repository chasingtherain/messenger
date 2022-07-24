import React from 'react'

function ContactRow({name,profileName}) {
  return (
    <div class="card-compact full-w bg-base-300 rounded-sm">
      <div class="card-body">
        <div className='flex'>
          <div class="avatar placeholder">
                    <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                        <span class="text-xl">{profileName}</span>
                    </div>
          </div> 
          <div className='flex-col ml-4 mt-1'>
            <p className='text-slate-600'>{name}</p>
            <p className='text-slate-500'>How is it going Biden?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactRow