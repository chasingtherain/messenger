import React from 'react'

function SearchBar({placeholder, setSearchTerm}) {
  return (
    <div>
      <input type="text" placeholder={placeholder} class="input input-bordered input-primary w-full rounded-md" onChange={(e) => setSearchTerm(e.target.value)} />
    </div>
  )
}

export default SearchBar