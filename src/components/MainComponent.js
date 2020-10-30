import React, {useState, useEffect} from 'react'
import Header from './HeaderComponent'
import PokemonCard from './PokemonCardComponent'
import DetailedCard from './DetailedPokemonCardComponent'
import { allPokemons,  } from '../shared/baseUrl'
import { Button } from 'reactstrap'

const Main = () =>{

    const [state, setState] = useState([])
    const [amountOfPokemons, setAmountOfPokemons] = useState(12)
    const [detailedPokemon, setDetailedPokemon] = useState({
        detailedPokemonObject: null,
        mainInfoAboutPokemon: null,
        toggleDetailedCard: false
    })

    const [type, setType] = useState([])

    useEffect(() => {
        const fetchPokemons = () =>{
            return fetch(allPokemons + `${amountOfPokemons}`)
                .then(response => response.json())
                
                .then(response => {
                    setState(response.results)
                })
        }
        fetchPokemons();
    }, [amountOfPokemons])

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    const selectPokemon = (url) =>{
        return fetch(url)
            .then(response => response.json())
            .then(response => {
                setDetailedPokemon({detailedPokemonObject: response, mainInfoAboutPokemon: {
                    name: capitalize(response.name),
                    types: response.types.map((type)=> type.type.name).map((type)=>capitalize(type)),
                    attack: response.stats[1].base_stat,
                    defense: response.stats[2].base_stat,
                    hp: response.stats[0].base_stat,
                    spAttack: response.stats[3].base_stat,
                    spDefense: response.stats[4].base_stat,
                    speed: response.stats[5].base_stat,
                    weight: response.weight,
                    totalMoves: response.moves.length
                }, toggleDetailedCard: true});
                let obj = {
                    name: capitalize(response.name),
                    types: response.types.map((type)=> type.type.name).map((type)=>capitalize(type))
                }
                setType(type.concat(obj))
            })
    }

    const allCards = state.map((pokemon, index) => {
        index +=1;
        return(
            <div key={index} className="col-6 col-lg-4" onClick={() => selectPokemon(pokemon.url)}>
                <PokemonCard pokemon={pokemon} id={index}/>
            </div>
        )
    })

    const increaseAmountOfPokemons = () =>{
        setAmountOfPokemons(amountOfPokemons+12)
    }


    return(
        <div className="App">
            <Header/>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-12 col-md-6 ">
                        <div className="row">
                            {allCards}
                            <div className="col-12">
                                <Button color="primary" className="col-12" onClick={increaseAmountOfPokemons}>Load More</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 order-first order-md-last">
                        <DetailedCard  info={detailedPokemon}/>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default Main;