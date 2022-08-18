import React, { useEffect, useState } from "react"
import Header from "./header"
import Product from "./product"
import { useStateValue } from "./stateProvider"
let db = require("./db.json")

const products = db.products
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
