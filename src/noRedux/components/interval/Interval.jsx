import './Interval.css'
import React from 'react'

import Card from '../card/Card'

export default props => {
    const {min, max} = props;
    return (
        <Card title="interval of numbers" red>
            <div className="interval">
            <span>
                <strong>Min:</strong>
                <input type="number" value={min} 
                onChange={e => props.changeMin(+e.target.value)}/>
            </span>
            <span>
                <strong>Max:</strong>
                <input type="number" value={max} 
                onChange={e => props.changeMax(+e.target.value)}/>
            </span>
            </div>

        </Card>
    )
}

