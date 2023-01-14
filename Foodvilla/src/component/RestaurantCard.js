import React from 'react'

const RestaurantCard = () => {
  return (
    <div className="card " style={{"width": "18rem"}}>
  <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kmjxpwf1obnibka2euhj" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Burger King</h5>
    <p className="card-text">Burger American</p>
    <p className="card-text">6.1Km</p>
  </div>
</div>
  )
}

export default RestaurantCard