import Header from '../header';
import Footer from '../footer';
import Card from '../Card';
import image from '../assets/react.svg';

function Persons ({searchHandler, persons, search, removeHandler}) {
    return (  
        <>  
    <Header />
      <main>
      <h1>Persons:</h1>
      <img src={image} alt="React logo" />
      <div><input type="text" onChange={searchHandler}></input></div>
<div className='card'>
      {persons.filter(i => i.name.toLowerCase().includes(search.toLowerCase())).map((person) => 
      (<Card key={person.id}
        {...person}
        click={() => removeHandler(person.id)}
        />
        ))};
</div>
      </main>
      <Footer copyright="Copyright"/> 
       </> 
    );
}

export default Persons;

