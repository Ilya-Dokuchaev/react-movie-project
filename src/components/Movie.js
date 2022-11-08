export function Movie(props){
    const {
        Title:title,
        Year:year,
        imbdID:id,
        Type:type,
        Poster:poster
    } = props

    return<div id={id} className="card">
                <div className="card-image">
                    {
                        poster ==="N/A" ?
                            <img src={`https://via.placeholder.com/468x560?text=N/A`} alt={''}/>
                            :
                            <img src={poster} alt={'aid'}/>

                    }
                </div>
                <div className="card-content">
                        <span className="card-title">{title}</span>
                    <p>{year} <span className='right'>{type}</span></p>
                </div>
            </div>


}