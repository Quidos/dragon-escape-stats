export const url = `https://mpstats.timmi6790.de`
export const imageApiUrl = `https://crafatar.com`
export const ashconApiUrl = `https://api.ashcon.app`
export const measurementID = `G-TXQGWGVKYP`

export async function fetchPlayerData(playerName: string, gameName: string, boardName: string) {
    const res = await fetch(`${url}/v1/java/player/${playerName}/stats/game/${gameName}/${boardName}`)
    if(!res.ok) throw new Error("err")
  
    const data = await res.json()
    return data
}
  
export async function fetchPlayerInfo(playerName: string) {
    const res = await fetch(`${ashconApiUrl}/mojang/v2/user/${playerName}`)
    if(!res.ok) throw new Error("err")
    
    const data = await res.json()
    return data
}

export async function fetchPlayerWebsite(playerName: string) {
  const res = await fetch(`${url}/v1/java/website/${playerName}`)
  if(!res.ok) throw new Error("err")
  
  const data = await res.json()
  return data
}

export async function fetchRender(uuid: string) {
  const res = await fetch(`${imageApiUrl}/renders/body/${uuid}`)
  if(!res.ok) throw new Error("err")
  
  const data = await res.blob()
  return URL.createObjectURL(data)
}