import { useState, useEffect } from "react"

export async function useGql(url) {
    const [players, setPlayers] = useState(null)

    useEffect(() => {
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `
                query getPlayerCards {
                    players {
                        name 
                        clan
                        country
                        
                        playerData {
                            playerId
                            clanId
                        }
                        
                        playerStats {
                            ovr
                            acc
                            imp
                            ast
                            ent
                            utl
                            exp
                        }
                    }
                }
            `}),
        })
        .then(res => res.json())
        .then(json => setPlayers(json))
    },[url])
    return { players }
}