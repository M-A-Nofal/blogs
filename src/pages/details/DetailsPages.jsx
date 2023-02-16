import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './details.css'
import { useSelector } from 'react-redux'
import NotFoundPage from '../notfoundpage/NotFoundPage';

function DetailsPages() {
  const {title} = useParams();
  const [blogs, setBlogs] = useState(null);

  const business = useSelector((state) => state.business);
  const entertainment = useSelector((state) => state.entertainment);
  const health = useSelector((state) => state.health);
  const science = useSelector((state) => state.science);
  const sports = useSelector((state) => state.sports);
  const technology = useSelector((state) => state.technology);


  const allBlogs = [...business,...entertainment, ...health, ...science, ...sports, ...technology]


  useEffect (()=> {
    let blogs = allBlogs.find((blogs) => blogs.title === title)
    if (blogs) {
      setBlogs(blogs)
    }
  },[])

  return (
    <div className=' min-vh-100'>
      {blogs ? (
        <section className='pt-5 detailsPage'>
            <div className='left'>
              <img src={blogs.urlToImage} alt='' />
            </div>
            <div className='right mt-3'>
              <h1 className='fs-3 fw-bold'>{blogs.title}</h1>
              <p className="lead mt-3 lh-lg">{blogs.content}</p>
              <a className="btn btn-outline-primary mb-3" href={blogs.url} role="button" target="_blank" rel="noopener noreferrer">{blogs.url}</a>
              <p>Author: {blogs.author ? blogs.author : 'Unknown'}</p>
            </div>
        </section>
      ): 
      <NotFoundPage /> }
    </div>
  )
}

export default DetailsPages