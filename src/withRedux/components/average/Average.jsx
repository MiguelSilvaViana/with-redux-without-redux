import React from 'react'
import { connect } from 'react-redux';

import Card from '../card/Card'

const Average =  props => {
    const {min, max} = props.nums;
    return (
        <Card title="Average of Numbers" green>
            <div>
            <span>
                <span>Result:</span>
                <strong>{(max + min) / 2}</strong>
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

export default connect(mapStateToProps)(Average)