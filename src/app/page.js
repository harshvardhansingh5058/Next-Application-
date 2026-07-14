import React from 'react'
import HeroBanner from './home/HeroBanner'
import CategoryGrid from './home/CategoryGrid'
import CollectionBanners from './home/CollectionBanners'
import Bestsellers from './home/Bestsellers'

export default function page() {
  return (
    <>
      <div className="w-full">
        <HeroBanner />
        <CategoryGrid />
        <CollectionBanners />
        <Bestsellers />
      </div>
    </>
  )
}
