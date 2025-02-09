"use client"
import { IoIosEye } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import Image from "next/image";


export default function Card({ productInfo }) {
    const { image, description, id, price, title, rating } = productInfo
    return < >

        <div className="group/card mx-auto rounded-lg overflow-hidden shadow-lg space-y-4 hover:-translate-y-2 hover:shadow-primary-200 transition-all duration-300">
            <div className=" w-full h-60 relative overflow-hidden  ">
                <Image width={300} height={300} src={image}
                    className="w-fill h-full object-contain mx-auto " alt={title} />
                <div className="w-full h-full object-contain bg-slate-400 bg-opacity-45 opacity-0  absolute left-0  top-0 group-hover/card:opacity-100 transition-opacity duration-300 flex justify-center items-center gap-3">
                    <div className="w-8  h-8 cursor-pointer hover:scale-110 hover:rotate-6 transition-transform duration-300 rounded-full bg-primary-600  flex justify-center items-center">
                        <FaHeart className=" text-xl text-white font-semibold inline-block" />
                    </div>
                    <div className="w-8  h-8 cursor-pointer hover:scale-110 hover:rotate-6 transition-transform duration-300 rounded-full bg-primary-600  flex justify-center items-center">
                        <FaCartShopping className=" text-xl text-white font-semibold inline-block" />
                    </div>
                    <Link href={`/${id}`} className="w-8  h-8 cursor-pointer hover:scale-110 hover:rotate-6 transition-transform duration-300 rounded-full bg-primary-600  flex justify-center items-center">
                        <IoIosEye className=" text-xl text-white font-semibold inline-block" />
                    </Link>

                </div>
            </div>
            <div className="px-3 py-1 spay-2">
                <h3 className="text-xl font-semibold line-clamp-1 cursor-pointer text-black">
                    <Link href={`/${id}`}> {title}</Link>
                </h3>
                <p className="text-gray-500 text-[17px] line-clamp-2 p-0">{description}</p>
                <div className="flex justify-between items-center">
                    <p className="text-primary-400 font-semibold">{price} E.G</p>
                    <p className="text-black font-semibold" >{rating.rate}<FaStar className="inline-block text-orange-300 text-lg mb-1 " /></p>
                </div>
                
            </div>

        </div>
    </>
}
