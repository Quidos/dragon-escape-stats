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
export const measurementID = `G-TXQGWGVKYP`

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
    { value: 'WinsSkylands', label: 'Wins Skylands' },
    { value: 'WinsFen', label: 'Wins Fen' },
    { value: 'WinsAcropolis', label: 'Wins Acropolis' },
    { value: 'WinsZodiac', label: 'Wins Zodiac' },
    { value: 'WinsUtopia', label: 'Wins Utopia' },
    { value: 'WinsSandstorm', label: 'Wins Sandstorm' },
  ]

export const statNamesArr = [
    { value: 'Daily', label: 'Daily' },
    { value: 'Weekly', label: 'Weekly' },
    { value: 'Monthly', label: 'Monthly' },
    { value: 'Yearly', label: 'Yearly' },
    { value: 'All', label: 'All Time' },
  ]