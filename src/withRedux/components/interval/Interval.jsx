import './Interval.css'
import React from 'react'
import { connect } from 'react-redux'

import Card from '../card/Card'
import {changeNumMin, changeNumMax} from '../../store/actions/nums'

const Interval = props => {
    const {min, max} = props.nums;
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

const mapStateToProps = state => {
    return {
        nums: state.nums
    }
}

// map actions to props

function mapDispatchToProps(dispatch) {
    return {
        changeMin(newNumber) {
            const action = changeNumMin(newNumber)
            dispatch(action)
        },
        changeMax(newNumber) {
            const action = changeNumMax(newNumber)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Interval)