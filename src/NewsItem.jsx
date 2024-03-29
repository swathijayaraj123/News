import React from 'react'
import news from './assets/news.jpg'
const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"340px"}}>
        <img src={src?src:news} style={{height:"200px", width:"320px"}} className="card-img-top" />
        <div className="card-body">
            <h5 className="card-title">{title.slice(0,50)}</h5>
            <p className="card-text">{description?description.slice(0,90):"Stay informed and engaged by reading the news—it's both informative and captivating. Explore intriguing stories"}</p>
            <a href={url} target="_blank" className="btn btn-primary">Read more</a>
        </div>
</div>
   
  )
}

export default NewsItem