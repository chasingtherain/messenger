import React from 'react'

function BoardFooter() {
  return (
        <div class="mt-2 mx-2">
            <input type="text" placeholder="Message" class="input input-bordered w-11/12 rounded-sm" />
            <button class="btn btn-primary rounded-sm mx-3">send</button>
        </div>
  )
}

export default BoardFooter