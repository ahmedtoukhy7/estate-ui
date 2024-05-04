import React from 'react'
import './Filter.scss'
export default function Filter() {
  return <>

 <div className='filter'>
 <p>Search result for</p>

<label htmlFor="location">Location</label>
<input className='location' type="text" name='location' placeholder='City Location' />

<div className='inputes'>
  <div className='item'>
       <label htmlFor="type">type</label>
      <select name="type" id="">
      <option value="any">any</option>
       </select>
   </div>
   <div className='item'>
       <label htmlFor="productiv">productiv</label>
      <select name="type" id="">
      <option value="any">any</option>
       </select>
   </div>
   <div className='item'>
   <label htmlFor="minprice">minprice</label>
   <input placeholder='any' type="text" name="minprice"  id="" />
   </div>
   <div className='item'>
   <label htmlFor="maxprice">maxprice</label>
   <input placeholder='any' type="text" name="maxprice"  id="" />
   </div>
   <div className='item'>
   <label htmlFor="bedroom">bedroom</label>
   <input placeholder='any' type="text" name="bedroom"  id="" />     </div>
  
   <button>
          <img src="/search.png" alt="" />
      </button>


  
</div>
 </div>
  
  
  </>
}
