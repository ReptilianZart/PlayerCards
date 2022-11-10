import { useState, useEffect } from 'react';
import { useGql } from '../hooks/useGql_copy';
import PlayerCard from './PlayerCard'

import './PlayerCardGrid.css';

function PlayerCardGrid() {
    const url = "http://office.skybox.gg:3000/"
    const [players, setPlayers] = useState()

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
            .then(json => setPlayers(json.data.players))    // will not trigger a rerender
                                                            // if state is set to the same value
    })

    return (
        <div className="PlayerCardGrid">
            {players && players.map(player => (
                <div key={player.playerData.playerId}>
                    <PlayerCard {... player}/>
                </div>
            ))}

        </div>
    );
}

export default PlayerCardGrid;
