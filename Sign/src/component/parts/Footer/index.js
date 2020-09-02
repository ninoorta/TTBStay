import React, { Component } from 'react'

class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <footer className="footer">
                <div className="container container-md">
                    <div className="row justify-content-center">
                        <div className="col-xs-12 text-center">
                            <p className="footer__text">
                                TTBStay by TTB Team.
                  </p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
