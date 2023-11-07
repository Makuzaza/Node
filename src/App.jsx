import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useState} from 'react'
import './App.css'
import Card from './Card'
import Header from './header'
import Footer from './footer'
import image from './assets/react.svg'


function App() {
  
  const [persons, setPersons] = useState([
    { id: 1, name: "Margit", title: "CEO", age: 29 }, 
    { id: 2, name: "Kati", title: "worker", age: 20 }, 
    { id: 3, name: "Mati", title: "boss", age: 30 },
    { id: 4, name: "Mati", title: "boss", age: 30 },
    { id: 5, name: "Mati", title: "boss", age: 30 },
    { id: 6, name: "Mati", title: "boss", age: 30 },
    { id: 7, name: "Mati", title: "boss", age: 30 },
    { id: 8, name: "Mati", title: "boss", age: 30 },
    { id: 9, name: "Mati", title: "boss", age: 30 },
    { id: 10, name: "Mati", title: "boss", age: 30 }
  ]);
  
  const removeHandler = (id) => {
    const updatedArray = persons.filter((person) => person.id !== id); 
    setPersons(updatedArray)
  }

  return (
    <div>   
      <Header logo="Maria Kuznetsova"/>
      <main>
      <h1>This is my application</h1>
      <img src={image} alt="React logo" />
<div className='card'>
      {persons.map((person) => 
      (<Card key={person.id}
        {...person}
        click={() => removeHandler(person.id)}
        />
        //  <Card key={person.id}
        //  name={person.name}
        //  title={person.title} 
        //  age={person.age} 
        //  id={person.id}/>
        // <li key={person.id}>{person.name}</li>
        ))};
</div>
      {/* <Card name={persons[0].name}
      title={persons[0].title} 
      age={persons[0].age}/>
      
      <Card name={persons[1].name}
      title={persons[1].title} 
      age={persons[1].age}/>
      
      <Card name={persons[2].name}
      title={persons[2].title} 
    age={persons[2].age}/> */}
    {/* <button onClick={eventHandler}>Click me</button> */}
      </main>
      <Footer copyright="Copyright"/>
      </div>
  );
};
 
export default App;