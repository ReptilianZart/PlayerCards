import { useState } from 'react';

import './Stat.css';

function Stat({ name, value}) {
    const [statName, setStatName] = useState(name)
    const [statValue, setStatValue] = useState(value)



    return (
        <div className="Stat">
            <p>{statName}</p>
            <p>{statValue}</p>
        </div>
    );
}

export default Stat;
