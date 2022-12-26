import React from 'react'
import { connect } from 'react-redux';

import Card from '../card/Card'

const Sum = props => {

    const {min, max} = props.nums;
    return (
        <Card title="Sum of Numbers" blue>
            <div>
            <span>
                <span>Result:</span>
                <strong>{max + min}</strong>
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

export default connect(mapStateToProps)(Sum)