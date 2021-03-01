import React, { useState, useEffect } from 'react';


const App = () => {

    const [films, setFilms] = useState([]);
    const [people, setPeople] = useState([]);

    const[displayFilms, setDisplayFilms] = useState([]);
    const[displayPeople, setDisplayPeople] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(allFilms => setFilms(allFilms))
}, []);



useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/people')
    .then(res => res.json())
    .then(allPeople => setFilms(allPeople))
}, []);




return(
    <main className="container">
        <section className="row justify-content-center mt-5">
        {films.map(film => (

        ))};





        </section>




    </main>
)





export default App;
}
