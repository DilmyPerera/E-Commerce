import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Componenets/Popular/Popular'
import Offers from '../Componenets/Offers/Offers'
import NewCollections from '../Componenets/NewCollections/NewCollections.jsx'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
    </div>
  )
}

export default Shop
