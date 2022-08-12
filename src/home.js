import React, { useEffect, useState } from "react"
import Header from "./header"
import Product from "./product"
import axios from "axios"
import { useStateValue } from "./stateProvider"
import { Link } from "react-router-dom"
export const products = [
  {
    key: "1",
    id: "1",
    title: "The Lean Startup",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
    price: "$19.99",
    rating: 5,
  },
  {
    key: "2",
    id: "2",
    title: "Zero to One",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
    price: "$19.99",
    rating: 5,
  },
]
const Home = () => {
  const { user } = useStateValue()

  return (
    <div className=" min-h-screen  bg-slate-300">
      <Header />

      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-center">
        {/* map products with product cards */}
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.amount}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
