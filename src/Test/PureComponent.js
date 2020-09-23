import React, { PureComponent } from 'react'

 class PureCompo extends PureComponent {
    render() {
        return (
            <div>
                PureComponent {this.props.name}
            </div>
        )
    }
}

export default PureCompo
