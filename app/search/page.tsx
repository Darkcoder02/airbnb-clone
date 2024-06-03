import React from 'react'
import Header from '../../components/Header'
function Search() {
  const location = "London"
  return (
    <div>
      <Header/>
      <main className="flex">
        <section>
          <p className='text-sm font-semibold pl-4 pt-6'>Over 1,000 places in {location}</p>

        </section>
      </main>
    </div>
  )
}

export default Search;