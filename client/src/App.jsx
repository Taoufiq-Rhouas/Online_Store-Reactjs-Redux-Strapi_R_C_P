import { useEffect, useState } from 'react';
import './App.css'

// --S_Comment_2
// import { fetchApi } from './hooks/fetchApi';
// --E_Comment_2

import useFetch from './hooks/useFetch';

export default function App() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  // // --S_Comment_1
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
  // // --E_Comment_1


  // // --S_Comment_2
  // // Appel API
  // const fetchProducts = async () =>{
  //   const res = await fetchApi.get("/products")
  //   setProducts(res.data.data);
  // }
 
  // // fetchProducts()
  // useEffect(()=>{
  //   fetchProducts()
  // },[])

  // const fetchCategories = async () =>{
  //   const res = await fetchApi.get("/categories")
  //   setCategories(res.data.data);
  // }
  // // fetchCategories()
  // useEffect(()=>{
  //   fetchCategories()
  // },[])
  // // --E_Comment_2



  const {data, loading, error} = useFetch("/products")

  useEffect(()=>{
    // data && console.log(data) = console.log(data) Only if data is not null
    data && console.log(data);
  },[data])

  return (
    <>
      <h1>hello</h1>
    </>
  )
}

// export default App
