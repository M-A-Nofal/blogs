import React, { useEffect } from 'react'
import Category from '../../components/category/Category'
import BlogCard from '../../components/blog/BlogCard'
import { fechBusiness } from '../../rtk/slices/business-slice';
import { useDispatch, useSelector } from 'react-redux';


function Home() {
  const business = useSelector((state) => state.business);

  const dispatch = useDispatch();

  useEffect (()=> {
    dispatch(fechBusiness());
  },[])

  return (
    <>
      <Category />
      <BlogCard items={business}/>
    </>
  )
}

export default Home