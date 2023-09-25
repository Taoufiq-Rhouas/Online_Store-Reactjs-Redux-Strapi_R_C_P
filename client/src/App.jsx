// // S_Comment_4
// import { useEffect, useState } from 'react';
// // E_Comment_4
import './App.css'
import Products from './components/Products';
import Categories from './components/Categories';

// --S_Comment_2
// import { fetchApi } from './hooks/fetchApi';
// --E_Comment_2

// // S_Comment_3
// import useFetch from './hooks/useFetch';
// // E_Comment_3

export default function App() {
  // // S_Comment_3
  // const [products, setProducts] = useState([])
  // // E_Comment_3

  // // S_Comment_4
  // const [categories, setCategories] = useState([])
  // // E_Comment_4

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



  // // S_Comment_3
  // const {data, loading, error} = useFetch("/products")

  // useEffect(()=>{
  //   // data && console.log(data) = console.log(data) Only if data is not null
  //   data && console.log(data);
  // },[data])
  // // E_Comment_3

  return (
    <>
      {/* <h1>hello</h1> */}
      <Categories />
      <Products />
    </>
  )
}

// export default App
