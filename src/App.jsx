import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useState} from 'react';
import './App.css';
import Card from './Card';
import Header from './header';
import Footer from './footer';
import image from './assets/react.svg';

// function Greeting({name}) {
//   if (name === 'Maria') {
//     return <p>Welcome, {name}</p>
//   } 
//   return <p>Please, log in</p>
// };

function Greeting({name}) {
  return ((name === 'Maria') ? <p className='welcome'>Welcome, {name}</p>: <p className='please'>Please, log in</p>)
};

// function Greeting({isLoggedIn}) {
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   } return <GuestGreeting />;
// }

function App() {
  
  const [persons, setPersons] = useState([
    { id: 1, name: "Margit", title: "CEO", age: 29 }, 
    { id: 2, name: "Kati", title: "worker", age: 20 }, 
    { id: 3, name: "Mati", title: "boss", age: 30 },
    { id: 4, name: "Pati", title: "boss", age: 30 },
  ]);

const [search, setSearch] = useState('');
  
  const removeHandler = (id) => {
    const updatedArray = persons.filter((person) => person.id !== id); 
    setPersons(updatedArray)
  };

  const searchHandler = (event) => {
    // console.log(event)
    // console.log(event.target.value)
    setSearch(event.target.value);
  }

  return (
    <div>   
      <Header logo="Maria Kuznetsova"/>
      <main>
      {/* <Greeting isLoggedIn={false} />; */}
        <Greeting name="Maria" />
      <h1>This is my application</h1>
      <img src={image} alt="React logo" />
      <div><input type="text" onChange={searchHandler}></input></div>
<div className='card'>
      {persons.filter(fox => fox.name.toLowerCase().includes(search.toLowerCase())).map((person) => 
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