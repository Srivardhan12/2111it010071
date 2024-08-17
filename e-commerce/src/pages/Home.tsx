import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ACCESS_TOKEN, BACKEND_URL } from "../config"

export interface Data {
    productName: string,
    price: number,
    rating: Float32Array,
    discount: number,
    availability: string,
}

export default function Home() {

    const [data, setData] = useState([])
    useEffect(() => {
        try {
            axios.get(`${BACKEND_URL}/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000`, {
                headers: {
                    'Authorization': `Bearer ${ACCESS_TOKEN}`
                }
            }).then(response => setData(response.data))
            // console.log(data)
        } catch (error) {
            console.log(error)
        }
    }, [])



    return (
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
                {data.map((d: Data) => {

                    return <div className="p-4 md:w-1/3">
                        <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog" />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{d.availability}</h2>
                                <h1 className="title-font text-xl font-medium text-black mb-2">{d.productName}</h1>
                                <p className="tracking-widest text-xs title-font font-medium text-gray-700 mb-1">Price: {d.price}rs</p>
                                <div className="flex items-center flex-wrap">
                                    <Link to="/view-product" className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0 text-sm">View Details
                                        <svg className="w-3 h-3 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                    <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">Rating: {d.rating}</span>
                                    <span className="text-gray-500 inline-flex items-center leading-none text-sm">{d.discount}% discount</span>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
