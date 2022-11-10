import React, {useState,useEffect} from "react";
import {Movies} from "../components/Movies";
import {Preloader} from "../components/Preloader";
import {Search} from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY

export function Main(){

    const [movies,setMovies] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                setLoading(false)
                setMovies(data.Search)
            })
            .catch((err) =>{
                console.error(err)
                setLoading(false)
            })
        },[])

    const searchMovies =(str,type = 'all') =>{
        setLoading(true)
        fetch(`https://www.omdbapi.com/?s=${str}${type !=='all'?`&type=${type}`:''}&apikey=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                setLoading(false)
                setMovies (data.Search)
            })

            .catch((err) =>{
                console.error(err)
                setLoading(false)
            })
    }
        return<main className='container content'>
                       <Search searchMovies={searchMovies}/>
            {loading ? <Preloader/>:<Movies movies = {movies}/>}
        </main>

}