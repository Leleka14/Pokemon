import React from 'react'
import {Card, CardImg, CardBody, CardTitle} from 'reactstrap'
import { imageOfPokemon } from '../shared/baseUrl'
import TypeBadge from './TypesComponent'

const PokemonCard = (props) =>{
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    
    return(
        <div>
            <Card className="mb-4 pokemon-card" outline color="secondary">
                <div className="p-2">
                    <CardImg width="100%" src={imageOfPokemon+''+props.id+'.png'} className="border"/>
                </div>
                <CardBody>
                    <CardTitle>
                        <h6 className="text-center">{capitalize(props.pokemon.name)}</h6>
                    </CardTitle>
                    <TypeBadge />
                </CardBody>
            </Card>
        </div>
    )
}

export default PokemonCard;