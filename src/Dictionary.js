import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import './Dictionary.css';
import Photos from "./Photos";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);
    let [loaded, setLoaded] =useState(false)

   function handleResponse(response) {
       setResults(response.data[0]);
   }

   function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
   }

   function search (){
       let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
       axios.get(apiUrl).then(handleResponse);
       let pexelsApiKey = "563492ad6f917000010000015a9b5485a60b4736a715c32b32b2fed4";
       let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
       let headers = { Authorization: `Bearer ${pexelsApiKey}`};
       axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);
   
   
    }

    function handleSubmit(event){
        event.preventDefault()
        search()
    }

   function handleKeywordChange(event) {
     setKeyword(event.target.value);  
   }
   
   function load() {
    setLoaded(true);
    search();
   }
   if(loaded){
    return (
        <div className="Dictionary">
            <section>
            <form onSubmit={handleSubmit}>
             <div className="row">
             <div className="col-8">
             <input type="search" onChange={handleKeywordChange} placeholder="Type a word..." />
             </div>
             <div className="col-4">
            <input
            type="button"
            value="Search"
            className="button-search" />
           </div>
           </div>
             </form> 
             </section>

             <Results results={results} />
             <Photos photos={photos} />
        </div>
    );
   } else {
      load();
      return "Loading..." ;
   }
}