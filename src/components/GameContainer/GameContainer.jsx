import { useState, useEffect } from "react"
import { url, id } from "../../context"

import GameCard from "../GameCard/GameCard"
import "./game-container.css"
import { useFetch } from "../../context"


const GameContainer = (props) => {
    const [GameData, loadingGameData] = useFetch(`${url}/v1/java/game`)
    const [CategoryData, loadingCategoryData] = useFetch(`${url}/v1/java/game/category`)
    if(loadingGameData) return (
        <div className="game-container">
            Loading
        </div>
    )

    return (
        <div className="game-container">
            <select name="categories" id="categories">
                {CategoryData.map(category => {

                    return (
                        <option value="">{category.categoryName}</option>
                    )
                })}
            </select>
            {GameData.map(game => {
                if(game.categoryName == "Classic Games")
                return(
                    <GameCard key={game.gameName} {...game}/>
                )
            })}
        </div>
    )
}

export default GameContainer