import React from 'react'
import Slider from '../Slider/Slider'
import './SinglePage.scss'
import { singlePostData } from '../../lib/data'
import Map from '../Map/Map'


export default function SinglePage() {
  return <>

  <div className='single'>
    <div className='left'>
      <h1>ahmed</h1>

      <Slider/>

      <div className='text'>
       <div className='cont'>
       <div className='left-text'>
       <h2>Beautifaul kkkk</h2>
        <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>cairo</span>
        </div>
        <p className='price'>1500</p>
       </div>
       <div className='user'>
       <img src='/public/logo.png' alt="" />
                <h5>ahmed</h5>
       </div>
       </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam amet illum, a corporis hic est doloribus molestias eaque quae ullam, ad, deserunt nulla aliquid rem. Aliquam alias reiciendis exercitationem animi?</p>
      </div>
  
    </div>
    <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80 sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map listData={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
  </div>
  
  </>
}
