"use client"
import Card from "@/components/Card/Card"
import Loading from "@/components/Loading.jsx/Loading";

import axios from "axios"

const { useState, useEffect } = require("react");


export default function Home() {
  const [products, setProducts] = useState(null)
  const [copyProducts, setCopyProducts] = useState(null)


  // !get Product
  async function getProducts() {
    try {
      const options = {
        url: "https://fakestoreapi.com/products",
        method: "GET",
      }
      let { data } = await axios.request(options)
      setProducts(data)
    } catch (error) {
      console.log(error);


    }
  }

  useEffect(() => {
    getProducts()
  }, [])
  useEffect(() => {
    products ? setCopyProducts(products) : null
  }, [products])

  console.log(products);


  return < >
    {products ?
      <main className="container px-5 sm:px-3 ">
        <div className="flex justify-center w-full mt-6">
          <input type="text"
            className="apply py-1 px-2 rounded-md focus:outline-none border-2 border-slate-400 border-opacity-40 focus:border-primary-400 focus:caret-primary-400 focus:shadow-lg w-3/4  " placeholder="search..."
            onChange={(e) => {
              setCopyProducts(products?.filter((product) => product.title.toLowerCase().includes(e.target.value.toLowerCase())))
            }}
          />
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-7 space-x-0 py-12 ">

          {copyProducts?.map((product) => <Card key={product.id} productInfo={product} />)}
        </section>
      </main> :
      <Loading />
    }





  </>
}
