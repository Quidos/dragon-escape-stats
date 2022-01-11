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

export const boardNames = ["Wins", "Losses", "Deaths", "GemsEarned"]
export const statNames = ["Daily", "Weekly", "Monthly", "Yearly", "All"]