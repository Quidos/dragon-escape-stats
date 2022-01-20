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