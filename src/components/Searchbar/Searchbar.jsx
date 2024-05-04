import React, { useState } from 'react'
import './Searchbar.scss'
import search from '../../../public/search.png'
export default function Searchbar() {

    const btn = ['Buy', 'Rent']

    const [black,setBlack]=useState('Buy')
  return <>
<div className='search'>
<div className='btn '>
           {btn.map((ele,inx)=> (
            <button onClick={()=>setBlack(ele)} className={black==ele? 'butns black' : 'butns'} key={inx}>{ele}</button>
           ))}
          </div>

     <form>
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
        <button>
          <img src={search} alt="" />
        </button>
      </form>
</div>
  </>
}
