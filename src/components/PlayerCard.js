import { useState } from 'react';
import { useFetch } from '../hooks/useFetch'

import './PlayerCard.css';

function PlayerCard({ name, clan, country, playerData, playerStats }) {
    const countryImage = useFetch("http://office.skybox.gg:3000/resources/flags/".concat(country))
    const playerImage = useFetch("http://office.skybox.gg:3000/resources/players/".concat(playerData.playerId))
    const clanImage = useFetch("http://office.skybox.gg:3000/resources/clans/".concat(playerData.clanId))

    return (
        <div className="PlayerCard">

            <div className="ovrScore">
                <p className="Score">{playerStats.ovr}</p>
                <p className="Attribute">OVR</p>
            </div>

            <div className="CardBorder"></div>

            <div className="TopContainer">
                <img className="PlayerAvatar" src={playerImage.data && "data:image/webp;base64,".concat(playerImage.data.base64_image)} alt="playerAvatar"></img>

            </div>

            <div className="BottomContainer">
                <div className="PlayerInfoLeft">
                    <div className="Name">{name}</div>
                    <div className="Clan">{clan}</div>
                </div>

                <div className="PlayerInfoRight">
                    <div className="ClanImage">
                        <img src={clanImage.data && "data:".concat(clanImage.data.mime_type, ";base64,", clanImage.data.base64_image)} alt="clanImage"></img>
                    </div>
                    <div className="CountryImage">
                        <img src={countryImage.data && "data:image/webp;base64,".concat(countryImage.data.base64_image)} alt="countryImage"></img>
                    </div>
                </div>

                <div className="Stats">
                    <div className="ColoumnLeft">
                        <div className="Stat">
                            <p className="Score">{playerStats.acc}</p>
                            <p className="Att">ACC</p>
                        </div>
                        <div className="Stat">
                            <p className="Score">{playerStats.imp}</p>
                            <p className="Att">IMP</p>
                        </div>
                        <div className="Stat">
                            <p className="Score">{playerStats.ast}</p>
                            <p className="Att">AST</p>
                        </div>
                    </div>

                    <vr className="Divider"></vr>

                    <div className="ColoumnRight">
                        <div className="Stat">
                            <p className="Score">{playerStats.ent}</p>
                            <p className="Att">ENT</p>
                        </div>
                        <div className="Stat">
                            <p className="Score">{playerStats.utl}</p>
                            <p className="Att">UTL</p>
                        </div>
                        <div className="Stat">
                            <p className="Score">{playerStats.exp}</p>
                            <p className="Att">EXP</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default PlayerCard;
