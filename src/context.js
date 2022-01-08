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