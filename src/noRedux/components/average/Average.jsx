import React from 'react'

import Card from '../card/Card'

export default props => {
    const {min, max} = props;
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

