
import DisplayProductComponent from '@/components/products/DisplayProductComponent'
import FetchCar from '@/lib/api'
import { CarData } from '@/lib/car-type'
import React from 'react'
import { Metadata } from "next";

const ProductPage = async () => {
  const  data:CarData[] = await FetchCar(0,5)
  console.log(data)
  return (
    <div>
      {/* <SWRComponent/> */}
      <DisplayProductComponent tagline={'Latest Updates'} heading={'New Comming'} description={'Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.'} buttonText={'View all cars'} buttonUrl={''} posts={data}/>
    </div>
  )
}

export const metadata: Metadata = {
  title: "Prouduct",
  description: "Latest Prouduct posts about cars in Cambodia.",
  openGraph: {
    title: "Prouduct | Car Selling",
    description: "Explore car news, stories, and reviews in Cambodia.",
    url: "https://benz.com/Prouduct",
    siteName: "Car Selling",
    images: [
      {
        url: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg",
        width: 1200,
        height: 630,
        alt: "Car Selling Prouduct Banner",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prouduct | Car Selling",
    description: "Stay updated with car trends in Cambodia.",
    images: [
      "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg",
    ],
  },
};

export default ProductPage
