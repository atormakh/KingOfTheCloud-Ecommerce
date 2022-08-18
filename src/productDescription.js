import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import Header from "./header"
import { useStateValue } from "./stateProvider"
let db = require("./db.json")

const ProductDescription = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const products = db.products

  const [{}, dispatch] = useStateValue()
  console.log("DB PRODUCTS===", db.products)
  // using contextAPI to add items to basket and update the cart
  const addToBasket = (id, title, image, price, rating) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }

  // fetching products from the server
  console.log(id)

  return (
    <div className="min-h-screen bg-slate-300 items-center">
      <Header />
      {/* getting id parameter and using it to retrieve details of a specific product */}
      {products != 0 ? (
        <div className="flex h-full flex-row justify-evenly mt-20 p-10">
          <div className="w-1/2">
            <img
              className=" w-9/12 h-56"
              style={{ aspectRatio: 1, height: "100%" }}
              src={products[id].image}
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-4xl font-bold">{products[id].title}</h1>
            <p className="text-lg mt-3">{products[id].description}</p>
            <p className="text-3xl mt-5">{"$" + products[id].amount}</p>
            <div className="flex mt-5 w-5/12 justify-between">
              <button
                onClick={() => {
                  addToBasket(
                    products[id].id,
                    products[id].title,
                    products[id].image,
                    products[id].amount,
                    products[id].rating
                  )
                  navigate("/checkout")
                }}
                className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded "
              >
                <a href="#">Buy Now</a>
              </button>
              <button
                onClick={() =>
                  addToBasket(
                    products[id].id,
                    products[id].title,
                    products[id].image,
                    products[id].amount,
                    products[id].rating
                  )
                }
                className="self-end bg-black hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-black hover:border-transparent rounded"
              >
                <a href="#">Add to Cart</a>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default ProductDescription
