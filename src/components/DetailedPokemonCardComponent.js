import React from 'react'
import {Card, CardImg, CardBody, CardTitle } from 'reactstrap'
import { imageOfPokemon } from '../shared/baseUrl'

const RenderCard = ({pokemon, styleCard}) =>{
    if(pokemon.mainInfoAboutPokemon != null){
        return(
            <div className="">
                <Card outline color="secondary" style={styleCard}>
                    <div className="p-2">
                        <CardImg width="100%" src={imageOfPokemon+''+pokemon.detailedPokemonObject.id+'.png'} className="border"/>
                    </div>
                    <CardBody className="text-center">
                        <CardTitle>
                            <h3>{pokemon.mainInfoAboutPokemon.name} #{pokemon.detailedPokemonObject.id}</h3>
                        </CardTitle>
                        <div className="row" >
                            <div className="col-6 border border-dark">Type</div>
                            <div className="col-6 border border-dark border-left-0">{pokemon.mainInfoAboutPokemon.types.join()}</div>
                        </div>
                        <div className="row">
                            <div className="col-6 border border-dark">Attack</div>
                            <div className="col-6 border border-dark border-left-0">{pokemon.mainInfoAboutPokemon.attack}</div>
                        </div>
                        <div className="row">
                            <div className="col-6 border border-dark">Defense</div>
                            <div className="col-6 border border-dark border-left-0">{pokemon.mainInfoAboutPokemon.defense}</div>
                        </div>
                        <div className="row">
                            <div className="col-6 border border-dark">HP</div>
                            <div className="col-6 border border-dark border-left-0">{pokemon.mainInfoAboutPokemon.hp}</div>
                        </div>
                        <div className="row">
                            <div className="col-6 border border-dark">SP Attack</div>
                            <div className="col-6 border border-dark border-left-0">{pokemon.mainInfoAboutPokemon.spAttack}</div>
                        </div>
                        <div className="row">
                            <div className="col-6 border border-dark">SP Defense</div>
                            <div className="col-6 border border-dark border-left-0">{pokemon.mainInfoAboutPokemon.spDefense}</div>
                        </div>
                        <div className="row">
                            <div className="col-6 border border-dark">Speed</div>
                            <div className="col-6 border border-dark border-left-0">{pokemon.mainInfoAboutPokemon.speed}</div>
                        </div>
                        <div className="row">
                            <div className="col-6 border border-dark">Weight</div>
                            <div className="col-6 border border-dark border-left-0">{pokemon.mainInfoAboutPokemon.weight}</div>
                        </div>
                        <div className="row">
                            <div className="col-6 border border-dark">Total moves</div>
                            <div className="col-6 border border-dark border-left-0">{pokemon.mainInfoAboutPokemon.totalMoves}</div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}

const DetailedCard = (props) =>{
    
    const styleCard = {
        display: 'none'
    }
    if(props.info.toggleDetailedCard){
        styleCard.display = 'block'
    }
    if(props.info != null){
        return(
            <RenderCard pokemon={props.info} styleCard={styleCard}/>
        )
    }
    
}

export default DetailedCard;