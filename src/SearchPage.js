import React from 'react';

import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";

function SearchPage() {
    
    const [{term},dispatch]=useStateValue();
    const { data } = useGoogleSearch(term);

    console.log(data);
    return (
       
        <div className="searchPage">
            
            <div className="searchPage__header">
            <h1>{term}</h1>

            </div>
            <div className="searchPage__results">
            {
                data==null ? (
                    <h1>loading...</h1>
                ):   <div>
          {data.organic_results.map(({title,url,snippet})=>(
              <div>  
                  <h1>{title}</h1>
                  <a href={url} target="blank" >{url}</a>
                  <p>{snippet}</p>
              </div>
          ))}
            
        </div>
            }
        
         
               {/*
                data.organic_results.forEach(res =>{
      result = `
      <h1>${res.title}</h1>
      <a href="${res.url}" target="_blank">${res.url}</a>
     
      <p>${res.snippet}</p>
              */}
            </div>
        </div>
    )
}

export default SearchPage