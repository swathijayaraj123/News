import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
const Newsboard = ({category,country}) => {

    const [articles, setArticle]=useState([])

    // useEffect(()=>{
    //     let url=`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    //     console.log(country)

    //     let curr=fetch(url).then(response=>response.json()).then(data=> setArticle(data.articles))
    // },[category,country])

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        console.log(country);
    
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch articles');
                }
                return response.json();
            })
            .then(data => {
                if (data.articles) {
                    setArticle(data.articles);
                } else {
                    // Handle case where articles are not available
                    console.error('No articles found in the API response');
                }
            })
            .catch(error => {
                // Handle fetch errors
                console.error('Error fetching articles:', error);
            });
    }, [category, country]);
    
  return (
    <div><h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
     {articles?.map((news,index)=>{
        return (<NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>)
    })}
    </div>
   
  )
}

export default Newsboard