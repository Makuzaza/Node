import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/header';
import Footer from './components/footer';
import image from './assets/react.svg';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/home';
import Persons from './routes/persons';
import Root from './routes/root';
import ErrorPage from './routes/error';

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
    setSearch(event.target.value);
  }

const router = createBrowserRouter([

  // { path: '/auth', element: <AuthLayout/>, children [{ path: '/login', element: <LogIn/>}, {}] },

  { path: '/', element:<Root/>, 
  errorElement: <ErrorPage/>, children: [
    { path: '/', element: <Home/> },
    { path: '/persons', 
    element: (<Persons 
      searchHandler={searchHandler} 
      removeHandler={removeHandler} 
      search={search} 
      persons={persons}/>),
    }
  ]}
]);

  return (
    <div>   
      <RouterProvider router = {router} />
      {/* <Header logo="Maria Kuznetsova"/>
      <main>
      <h1>This is my application</h1>
      <img src={image} alt="React logo" />
      <div><input type="text" onChange={searchHandler}></input></div>
<div className='card'>
      {persons.filter(fox => fox.name.toLowerCase().includes(search.toLowerCase())).map((person) => 
      (<Card key={person.id}
        {...person}
        click={() => removeHandler(person.id)}
        />
        ))};
</div>
      </main>
      <Footer copyright="Copyright"/> */}
      </div>
  );
};
 
export default App;