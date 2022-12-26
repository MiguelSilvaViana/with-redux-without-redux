import React from 'react'

import './With.css'

import Average from './components/average/Average'
import Interval from './components/interval/Interval'
import Raffle from './components/raffle/Raffle'
import Sum from './components/sum/Sum'


const With = props => {
    return (
        <div className="App">
            <h1>With Redux</h1>
            <div className="line">
                <Interval></Interval>
            </div>
            <div className="line">
                <Average></Average>
                <Sum></Sum>
                <Raffle></Raffle>
            </div>
        </div>
    )
}

export default With