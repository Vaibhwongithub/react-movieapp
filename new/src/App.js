import React, { useState } from 'react'
import axios from 'axios'
import './App.css'
export default function App() {
  const [text,setText]=useState("");
  const [movies,setMovies]=useState([]);


    const chnangeText=(event)=>
  {
   setText(event.target.value);
  }
  const getMovies=(event)=>{
event.preventDefault();
 axios.get(`http://www.omdbapi.com/?s=${text}&apikey=29f396d9`)
 .then((response)=>{
  console.log(response);
  setMovies(response.data.Search);
 })
 
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">MOVIE APP</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
       
        
      </ul>
      <form className="d-flex" onSubmit={getMovies}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={text} onChange={chnangeText}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div className='container my-3'>
  <div className='row'>
    {
      movies.map((value,index)=>{
        return(
          <div className='col-3'>
    <div className="card" style={{width: "18 rem"}}>
  <img className="card-img-top" src={value.Poster} alt="Card image cap"/>
  <div className="card-body">
    <h3 className="card-title">{value.Year}</h3>
    <h4 className="card-text">{value.Title}</h4>
    <a href="movieverse.app" className="btn btn-primary">DOWNLOAD</a>
  </div>
</div>
    </div>
        )
      })
    }
  </div>
</div>
    </>
  )
}
