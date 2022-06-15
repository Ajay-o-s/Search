import React,{useState,useEffect} from 'react';

function SearchPageTest() {
    
    const [query,setQuery]=useState('');
    const StartSearch = (e) => {
        e.preventDefault();
        console.log(query);
        
        const API_KEY = "d259da8dd0fbd188d18c2688a790350b";
        const url = "http://api.serpstack.com/search?access_key="+API_KEY+"&type=web&query="+query;
        console.log(url);

    }
    return (
        <div className="searchPageTest">
            <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="search" />
            <button onClick={StartSearch}>Search</button>
        </div>
    )
}

export default SearchPageTest

/*
$("#form").submit(function(e){
  e.preventDefault();

  var query = $("#search").val();
  let result = '';
  var API_KEY = "d259da8dd0fbd188d18c2688a790350b";
  var url = "http://api.serpstack.com/search?access_key="+API_KEY+"&type=web&query="+query;
  console.log(url);

  $.get(url,function(data){
    $("#results").html('')
    console.log(data);
    data.organic_results.forEach(res =>{
      result = `
      <h1>${res.title}</h1>
      <a href="${res.url}" target="_blank">${res.url}</a>
     
      <p>${res.snippet}</p>
      `
      $("#results").append(result);
    });

  })


*/