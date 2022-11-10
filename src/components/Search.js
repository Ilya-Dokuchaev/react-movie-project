import React,{useState} from "react";

export const Search = (props) => {
    const {
        searchMovies = Function.prototype,
    } = props

    const [search,setSearch] = useState('')
    const [type,setType] = useState('all')

   const handleKey = (event) =>{
        if(event.key==='Enter'){
            searchMovies(search,type)
        }
    }
    const handleType = (event) =>{
        setType(event.target.dataset.type)
        searchMovies(search,event.target.dataset.type)
    }

        return <div className="row">

            <div className="input-field col s12">
                <input
                    placeholder={'search'}
                    type="search"
                    className="validate"
                    value={search}
                    onKeyDown={handleKey}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className={'btn search-btn'} onClick={()=> searchMovies(search, type)}>Search</button>
            </div>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type='all'
                        onChange={handleType}
                        checked={type === 'all'}
                    />
                    <span>All</span>
                </label>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type='movie'
                        onChange={handleType}
                        checked={type === 'movie'}
                    />
                    <span>Movies</span>
                </label>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type='series'
                        onChange={handleType}
                        checked={type === 'series'}
                    />
                    <span>Series</span>
                </label>
        </div>
}