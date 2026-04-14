import { useEffect, useState,} from 'react';
import './style.css';
import { Card } from '../Card';
import axios from 'axios';
export const SectionCharacters = () => {

    const [characters, setCharacters] = useState([])


    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
    .then(res => {
        
        setCharacters(res.data.results)
    })
    }, [])


    return (
        <section ClassName="section-characters">
            <h2>Nossos <span>Personagens</span></h2>

            <div ClassName="container-cards-caracters">
                {characters.map((character) => (
                   <Card 
                        image={character.image} 
                        name={character.name} 
                        specie={character.species}
                        status={character.status}
                        location={character.origin.name} />
                ))}
            </div>

        </section>
    )
}