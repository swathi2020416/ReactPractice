import React from 'react'

function MemoComp({name}) {
    console.log('renderingmemo')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
