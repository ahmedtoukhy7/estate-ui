import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import './Pin.scss'

export default function Pin({ele}) {
  return <>

<Marker position={[ele.latitude , ele.longitude]}>
    <Popup>
    <div className="popupContainer">
          <img src={ele.img} alt="" />
          <div className="textContainer">
            <Link to={`/${ele.id}`}>{ele.title}</Link>
            <span>{ele.bedroom} bedroom</span>
            <b>$ {ele.price}</b>
          </div>
      </div>
    </Popup>
  </Marker>
  
  </>
}
