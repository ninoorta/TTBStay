import React, { Component } from 'react'

class ButtonSignIn extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="btn-sign-in"
                style={this.props.style}
                onClick={this.props.onClick}>
                    {this.props.children}
            </div>
        )
    }
}

export default ButtonSignIn
