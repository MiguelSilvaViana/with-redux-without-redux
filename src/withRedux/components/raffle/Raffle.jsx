import React from 'react'
import {connect} from 'react-redux'

import Card from '../card/Card'

const Raffle = props => {
    const {max, min} = props.nums;
    const random = parseInt(Math.random() * (max - min)) + min;
    return (
        
        <Card title="Random Number" purple>
            <div>
            <span>
                <span>Result:</span>
                <strong>{random}</strong>
            </span>
            </div>
        </Card>
    )
}


const mapStateToProps = state => {
    return {
        nums: state.nums
    }
}

export default connect(mapStateToProps)(Raffle)
