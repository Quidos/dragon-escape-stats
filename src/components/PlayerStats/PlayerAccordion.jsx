import { useState, useEffect, useReducer } from "react"
import Select from "react-select";
import {
    getCategoryNames, 
    getLeaderboarNames, 
    getBoardNames, 
    createOption, 
    createOptions, 
    parseOption,
} from "../../util";
import { fetchPlayerData } from "../../lib/api/ApiUtils";
import Loading from "../Main/Loading";

import PlayerTable from "./PlayerTable";

const Actions = {
    CATEGORY_NAME_CHANGE: 0,
    LEADERBOARD_NAME_CHANGE: 1,
    BOARD_NAME_CHANGE: 2,
    PLAYER_DATA_CHANGE: 3,
    IS_LOADING: 4,
    NOT_LOADING: 5,
}

const reducer = (currState, action) => {
    switch(action.type) {
        case Actions.CATEGORY_NAME_CHANGE:
            const categoryName = action.payload

            return {
                ...currState, 
                categoryName: categoryName,
                leaderboardNames: getLeaderboarNames(categoryName),
                leaderboardName: getLeaderboarNames(categoryName)[0]
            }
        case Actions.LEADERBOARD_NAME_CHANGE:
            const leaderboardName = action.payload

            return {
                ...currState, 
                leaderboardName: leaderboardName
            }
        case Actions.BOARD_NAME_CHANGE:
            const boardName = action.payload

            return {
                ...currState, 
                boardName: boardName
            }
        case Actions.PLAYER_DATA_CHANGE:
            const playerData = action.payload

            return {
                ...currState,
                playerData: playerData
            }
        case Actions.IS_LOADING:
            return {
                ...currState,
                loading: true
            }
        case Actions.NOT_LOADING:
            return {
                ...currState,
                loading: false
            }
        default:
            return currState
    }
}


const PlayerAccordion = ({ playerName }) => {

    const initialState = {
        playerName: playerName,
        categoryNames: getCategoryNames(),
        categoryName: getCategoryNames()[0],
        leaderboardNames: getLeaderboarNames(getCategoryNames()[0]),
        leaderboardName: getLeaderboarNames(getCategoryNames()[0])[0],
        boardNames: getBoardNames(),
        boardName: getBoardNames()[4],
        playerData: {stats: [{leaderboard: {stat: {}}}]},
        loading: false
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleCategoryNameChange = (e) => {
        dispatch({type: Actions.CATEGORY_NAME_CHANGE, payload: e.target.innerHTML})
    }

    const handleLeaderboardNameChange = (e) => {
        dispatch({type: Actions.LEADERBOARD_NAME_CHANGE, payload: e.target.innerHTML})
    }

    const handleBoardNameChange = (option) => {
        dispatch({type: Actions.BOARD_NAME_CHANGE, payload: parseOption(option)})
    }

    useEffect( async () => {
        dispatch({type: Actions.IS_LOADING})
        const playerData = await fetchPlayerData(state.playerName, state.leaderboardName, state.boardName)
        dispatch({type: Actions.PLAYER_DATA_CHANGE, payload: playerData})
        dispatch({type: Actions.NOT_LOADING})
    }, [state.leaderboardName, state.boardName])

    return (
        <div className="w-full bg-white">
            <div className="border w-full">
                {state.categoryNames.map(category => {
                    return (
                        <button
                            className="hover:bg-gray-700 text-gray-700 hover:text-white p-1 border border-gray-700 hover:border-transparent rounded m-1"
                            key={category}
                            onClick={handleCategoryNameChange}
                        >
                            {category}
                        </button>
                    )
                })}
            </div>
            <div className="border">
                {
                state.leaderboardNames.map((lname) => (
                    <div key={lname}>
                        <div
                            className="cursor-pointer m-2 p-2 rounded border-2 border-slate-400 text-gray-800"
                            onClick={handleLeaderboardNameChange}
                        >
                            {lname}
                        </div>
                        {
                            state.leaderboardName == lname ?
                                <div className="m-2">
                                <Select 
                                    className="select"
                                    defaultValue={createOption(state.boardName)} 
                                    value={createOption(state.boardName)}
                                    options={createOptions(state.boardNames)}
                                    isSearchable={false}
                                    onChange={handleBoardNameChange}

                                    menuPortalTarget={document.body} 
                                    styles={{ menuPortal: base => ({ ...base, zIndex: 0 }) }}
                                />
                                    {
                                        state.loading ?
                                            <Loading />
                                            :
                                            <PlayerTable playerData={state.playerData} />
                                    }
                            </div>
                            :
                            <></>
                        }
                    </div>
                ))
                }
            </div>
        </div>

    )
}

export default PlayerAccordion