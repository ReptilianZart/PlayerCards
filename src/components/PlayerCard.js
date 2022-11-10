import { useState } from 'react';
import { useFetch } from '../hooks/useFetch'

import './PlayerCard.css';

function PlayerCard({ name, clan, country, playerData, playerStats }) {
    const countryImage = useFetch("http://office.skybox.gg:3000/resources/flags/".concat(country))
    const playerImage = useFetch("http://office.skybox.gg:3000/resources/players/".concat(playerData.playerId))
    const clanImage = useFetch("http://office.skybox.gg:3000/resources/clans/".concat(playerData.clanId))

    // to display
    const statsName = ["ovr", "acc", "imp", "ast", "ent", "utl", "exp"]

    return (
        <div className="PlayerCard">
            <div className="PlayerInfoLeft">
                <p className="Name">{name}</p>
                <p className="Clan">{clan}</p>
            </div>
            <div className="ovrScore">
                <p className="Score">{playerStats.ovr}</p>
                <p className="Attribute">OVR</p>
            </div>

            <div className="PlayerInfoRight">
                <div className="ClanImage">
                    <img src={clanImage.data && "data:".concat(clanImage.data.mime_type, ";base64,", clanImage.data.base64_image)}></img>
                </div>   
                <div className="CountryImage">
                    <img src={countryImage.data && "data:image/webp;base64,".concat(countryImage.data.base64_image)}></img>
                </div>
                            
            </div>

            <div className="CardBorder"></div>

            <div className="CardDivider"></div>

            <div className="TopContainer">
                <div className="PlayerAvatar">
                    <img src={playerImage.data && "data:image/webp;base64,".concat(playerImage.data.base64_image)}></img>
                </div>
            
            </div>

            <div className="BottomContainer">
                <div className="Stats">
                    <div className="Coloumn">

                    </div>
                    <div className="Divider"></div>
                    <div className="Coloumn">

                    </div>
                </div>

            </div>

            <div className="CardBg"></div>
        </div>
    );
}

export default PlayerCard;
