import { useEffect, useState } from 'react';
import './App.css'

import { fetchApi } from './hooks/fetchApi';

export default function App() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  // // --
  // const fetchProducts = async () => {
  //   const res = await axios.get(
  //     // this api without Image from strapi = 'import.meta.env.VITE_API_URL + "/products",'
  //     // this api with Image from strapi = 'import.meta.env.VITE_API_URL + "/products?populate=*",'
  //     import.meta.env.VITE_API_URL + "/products?populate=*",
  //     {
  //       headers: {
  //         Authorization: "bearer "+ import.meta.env.VITE_API_TOKEN
  //       }
  //     }
  //   )
  //   console.log(res.data.data);
  // }
  // // --

  // Appel API
  const fetchProducts = async () =>{
    const res = await fetchApi.get("/products")
    setProducts(res.data.data);
  }
 
  // fetchProducts()
  useEffect(()=>{
    fetchProducts()
  },[])

  const fetchCategories = async () =>{
    const res = await fetchApi.get("/categories")
    setCategories(res.data.data);
  }
  // fetchCategories()
  useEffect(()=>{
    fetchCategories()
  },[])

  return (
    <>
      <h1>hello</h1>
    </>
  )
}

// export default App
