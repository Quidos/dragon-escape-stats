import { useState, useEffect } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
          })
    }, [])
    return [data, loading]
}

export const url = `https://mpstats.timmi6790.de`
export const imageApiUrl = `https://crafatar.com`

export const boardNames = ["Wins", "Losses", "Deaths", "GemsEarned"]
export const statNames = ["Daily", "Weekly", "Monthly", "Yearly", "All"]
export const playerBoardNames = [
    "Wins", "SecondPlace", "ThirdPlace", "Losses", "Deaths", "GemsEarned", "TraveledBlocks", "ExpEarned", 
    "Paralympics"
]

export const boardNamesArr = [
    { value: 'Wins', label: 'Wins' },
    { value: 'SecondPlace', label: 'Second Place' },
    { value: 'ThirdPlace', label: 'Third Place' },
    { value: 'Losses', label: 'Losses' },
    { value: 'Deaths', label: 'Deaths' },
    { value: 'GemsEarned', label: 'Gems Earned' },
    { value: 'TraveledBlocks', label: 'Traveled Blocks' },
    { value: 'ExpEarned', label: 'Exp Earned' },
    { value: 'Paralympics', label: 'Paralympics' },
  ]

export const statNamesArr = [
    { value: 'Daily', label: 'Daily' },
    { value: 'Weekly', label: 'Weekly' },
    { value: 'Monthly', label: 'Monthly' },
    { value: 'Yearly', label: 'Yearly' },
    { value: 'All', label: 'All Time' },
  ]