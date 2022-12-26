import React from 'react'

import Card from '../card/Card'

export default props => {

    const {min, max} = props;

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
