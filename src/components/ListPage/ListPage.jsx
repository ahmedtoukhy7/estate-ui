import React from 'react'
import Map from '../Map/Map'
import Filter from '../Filter/Filter'
import'./ListPage.scss'
import { listData } from '../../lib/data'
import { Link } from 'react-router-dom'

export default function ListPage() {
  return <>

  <section className='list'>

    <div className='result'>

      <div className='wrapper'>
      <Filter/>

      <div className='dataList'>
       {listData.map((ele)=> {
        return <div className='item'>
              <div className='image'>
                <img src={ele.img} alt="" />
                </div>   
              <div className='text'>
              <p className="title">
          <Link to={`/${ele.id}`}>{ele.title}</Link>
                </p>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{ele.address}</span>
        </p>
        <p className="price">$ {ele.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{ele.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{ele.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
          </div>
          </div>
        </div>   
        </div>
              
       }
        )}
      </div>


      </div>


    </div>

   <div className='map'>
   
   <Map listData ={listData}/>

  
   </div>


  </section>
  
  
  </>
}
