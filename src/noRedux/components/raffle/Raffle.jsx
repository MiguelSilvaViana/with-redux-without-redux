import React from 'react'

import Card from '../card/Card'

export default props => {
    const {max, min} = props;
    
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
