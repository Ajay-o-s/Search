import {useState,useEffect} from 'react';
//import API_KEY from "./pages/keys";



//custom hook -we are creating
const useGoogleSearch = (term) => {
    const [data,setData] = useState(null);
    
    {/*
   const [data,setData] = useState(null);const API_KEY = "d259da8dd0fbd188d18c2688a790350b";
   let url = "http://api.serpstack.com/search?access_key="+API_KEY+"&type=web&query="+term;
   console.log(url);
    */}

   useEffect(()=>{
       console.log(term);
       const API_KEY = "d259da8dd0fbd188d18c2688a790350b";
       const url = "http://api.serpstack.com/search?access_key="+API_KEY+"&type=web&query="+term;
       console.log(url);


       const fetchData = async()=>{
            
           fetch(url)
           .then(response => response.json())
           .then(result=>{
               setData(result)
               //console.log(result);
           })
           
       }
       fetchData();
   },[term])
  
   return { data };
};

export default useGoogleSearch;
//data layer variable