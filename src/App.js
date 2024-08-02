import './App.css';
import {useState} from 'react'
import AnimalShow from './AnimalShow';

function getRandomAnimal(){
    const animals = ['bird', 'cat', 'dog', 'gator', 'horse', 'cow'];

    return animals[Math.floor(Math.random() * animals.length)];
}

function App(){
    // Initialize state with useState hook
    const[animals, setAnimals] = useState([]);

    // Function to handle button click
    const handleClick = () => {
       setAnimals([...animals, getRandomAnimal()]); // To create an array with existing animals and put new aniaml
        console.log("Button was clicked")
    }

    const renderedAnimals = animals.map((animal,index) => {
        return <AnimalShow type={animal} key={index} />;
    });
    

    return (
        <div className="app">
            <button onClick={handleClick}>Add Animal</button>
            <div className="animal-list">{renderedAnimals}</div>
            
        </div>
    );    
}

export default App;