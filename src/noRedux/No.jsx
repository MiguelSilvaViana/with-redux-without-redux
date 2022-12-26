import React, {useState} from 'react'
import './No.css'

import Average from './components/average/Average'
import Interval from './components/interval/Interval'
import Raffle from './components/raffle/Raffle'
import Sum from './components/sum/Sum'

const NoRedux = props => {
    const [min, setMin] = useState(1)
    const [max, setMax] = useState(1)

    return (
        <div className="App">
            <h1>No redux</h1>
            <div className="line">
                <Interval min={min} max={max}
                changeMin={setMin} changeMax={setMax}></Interval>
            </div>
            <div className="line">
                <Average min={min} max={max}></Average>
                <Sum min={min} max={max}></Sum>
                <Raffle min={min} max={max}></Raffle>
            </div>
        </div>
    )
}

export default NoRedux