import React, { useState, useEffect } from 'react';
import Films from './Films'
import People from './People'


const App = () => {

    const [films, setFilms] = useState([])
    const [people, setPeople] = useState([])

    const [loadFilms, setLoadFilms] = useState(false)
    const [loadPeople, setLoadPeople] = useState(false)


    let handleLoadFilms = () => {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json()) // takes it out of kson format so we can use
        .then(res => setFilms(res))

        setLoadPeople(false)
        setLoadFilms(true)
    }
    let handleLoadPeople = () => {
        fetch('https://ghibliapi.herokuapp.com/people')
        .then(res => res.json())
        .then(res => setPeople(res))

        setLoadFilms(false)
        setLoadPeople(true)
    }


    if (loadFilms == false && loadPeople == false) {
        return (
            <>
            <button onClick={()=> handleLoadFilms()}>Load those Films!</button>
            <button onClick={()=> handleLoadPeople()}>Load those People</button>

            Hello
            </>
        )
    } else if (loadFilms == true) {
        return (
            <>
            <button onClick={()=> handleLoadFilms()}>Load those Films!</button>
            <button onClick={()=> handleLoadPeople()}>Load those People</button>


            {films.map(film => (
           <Films film={film}/>  // setting a prop called film , so we can use it and setting it. if we clicked load those films we get all, 
            ))}
        </>
    )
  } else if (setLoadFilms == true) {
    return (
        <>
        <button onClick={()=> handleLoadFilms()}>Load those Films!</button>
        <button onClick={()=> handleLoadPeople()}>Load those People</button>

        {people.map(person => (
       <People person={person} />  // setting a prop called film , so we can use it and setting it. if we clicked load those films we get all, 
        ))}
    </>
)

  }

}






export default App;

