import React, { Fragment } from 'react'


const Films = (props) => {
    return (
        <>
            <div class="card">
                <div class="card-body">
                    <h4>{props.film.title} </h4>
                    <p class="card-text">{props.film.description}</p>
                    <footer className='blockquoe-footer' ><a target='null' href={`https://ghibliapi.herokuapp.com/films/${props.film.id}`}>Link to Raw JSON </a> </footer>
                </div>
            </div>
        </>
    )

}


export default Films;