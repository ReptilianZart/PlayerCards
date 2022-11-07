import { useState } from 'react';
import { useFetch } from '../hooks/useFetch'

import './PlayerCard.css';

function PlayerCard( { name, clan, country, playerData, playerStats } ) {
    /* const countryImage = useFetch("http://office.skybox.gg:3000/resources/flags/".concat(country)) */
    const { playerImage, playerImagePending, playerImageError } = useFetch("http://office.skybox.gg:3000/resources/players/".concat(playerData.playerId))
    /* const clanImage = useFetch("http://office.skybox.gg:3000/resources/clans/".concat(playerData.clanId)) */

    // to display
    const statsName = ["ovr", "acc", "imp", "ast", "ent", "utl", "exp"]
    

    return (
        <div className="PlayerCard">
            <div className="Picture">
                {playerImagePending && <p>loading</p>}
                {playerImageError && <p>error: {playerImageError}</p>}
                <img src={playerImage && "data:image/webp;base64,".concat(playerImage.data.base64_image)}></img>
            </div>
            <div className="Stats">
                
            </div>
        </div>
    );
}

export default PlayerCard;
