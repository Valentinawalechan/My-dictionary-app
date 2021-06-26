import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import './Dictionary.css';
import Photos from "./Photos";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

   function handleResponse(response) {
       setResults(response.data[0]);
   }

   function handlePexelsResponse(response) {
    console.log(response.data.photos[0].src.landscape);
    setPhotos(response.data.photos);
   }

   function search (event){
       event.preventDefault();

       let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
       axios.get(apiUrl).then(handleResponse);
       let pexelsApiKey = "563492ad6f917000010000015a9b5485a60b4736a715c32b32b2fed4";
       let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
       let headers = { Authorization: `Bearer ${pexelsApiKey}`};
       axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);
   
   
    }

   function handleKeywordChange(event) {
     setKeyword(event.target.value);  
   }
    return (
        <div className="Dictionary">
            <section>
         <form onSubmit={search}>
             <input type="search" onChange={handleKeywordChange} />
             </form> 
             </section>
             <Results results={results} />
             <Photos photos={photos} />
        </div>
    );
}