import React from "react";

export class Search extends React.Component{

    state ={
        search:'',
        type:'all'
    }

    handleKey = (event) =>{
        if(event.key==='Enter'){
            this.props.searchMovies(this.state.search)
        }
    }
    handleType = (event) =>{
        this.setState(()=>({type: event.target.dataset.type}),()=>{
        this.props.searchMovies(this.state.search, this.state.type)

        })
    }

    render() {

        return <div className="row">

            <div className="input-field col s12">
                <input
                    placeholder={'search'}
                    type="search"
                    className="validate"
                    value={this.state.search}
                    onKeyDown={this.handleKey}
                    onChange={(e)=>this.setState({search:e.target.value})}
                />
                <button className={'btn search-btn'} onClick={()=> this.props.searchMovies(this.state.search, this.state.type)}>Search</button>
            </div>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type='all'
                        onChange={this.handleType}
                        checked={this.state.type === 'all'}
                    />
                    <span>All</span>
                </label>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type='movie'
                        onChange={this.handleType}
                        checked={this.state.type === 'movie'}
                    />
                    <span>Movies</span>
                </label>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type='series'
                        onChange={this.handleType}
                        checked={this.state.type === 'series'}
                    />
                    <span>Series</span>
                </label>
        </div>
    }
}