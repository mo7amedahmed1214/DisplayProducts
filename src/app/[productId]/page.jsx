
import axios from "axios"
import Image from "next/image";
import { FaStar } from "react-icons/fa";


export default async function page({ params }) {
  let { productId } = await params
  console.log(productId);

  // ! get Product Details 
  async function getProductDetails() {
    try {
      const options = {
        url: `https://fakestoreapi.com/products/${productId}`,
        method: "GET",
      }
      let { data } = await axios.request(options)
      return data;
    } catch (error) {
      console.log(error);

    }
  }

  const productDetails = await getProductDetails()
  console.log(productDetails);


  return < >
    <main className="container px-5 sm:px-3">


      <h2 className="text-3xl font-semibold my-10 ">Details Of Product:</h2>
      <section className=" py-6  grid grid-cols-12  gap-7 mb-3  p-2 shadow-md rounded-lg overflow-hidden">
        <div className="col-span-12 sm:col-span-3">
          <Image src={productDetails?.image} width={400} height={400} className="w-full" alt={productDetails?.title} />
        </div>
        <div className="col-span-12 sm:col-span-9 space-y-4">
          <div>
            <h2 className="text-2xl text-gray-800 font-semibold">{productDetails?.title} </h2>
            <h2 className="text-primary-600 font-semibold">{productDetails?.category}</h2>
          </div>

          <p className="text-gray-400 "><span className="text-black font-semibold text-lg ">Description :</span>{productDetails?.description}</p>
          <div className="flex items-center justify-between">

            <span className="text-primary-800 font-semibold text-[17px] ">{productDetails?.price} E.G</span>

            <p className="font-semibold">{productDetails?.rating.rate}<FaStar className="inline-block text-orange-300 text-xl mb-1 " /></p>
          </div>
          <button

            className=" bg-primary-500 hover:bg-primary-700 transition-all duration-300  text-white w-full rounded-lg font-semibold "> Add To Cart</button>
        </div>



      </section>

    </main>
  </>
}


// ^ meta date

export async function generateMetadata({ params, searchParams },) {

  const id = await params.productId


  const product = await fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json())


  return {
    title: product.title,
    description: product.description
  }
}
