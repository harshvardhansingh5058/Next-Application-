import React from 'react'
import ProductDetailPage from '../ProductDetailPage'

export default async function page({ params }) {
  const { id } = await params

  return <ProductDetailPage productId={id} />
}
