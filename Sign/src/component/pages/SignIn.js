import React, { Component } from 'react'
import CBanner from '../parts/Banner'
import CFooter from '../parts/Footer'
import CPros from '../parts/Pros'
import CSignInForm from '../parts/SignInForm'
import axios from 'axios'
// F2
class Home extends Component {
    constructor(props) {
        super(props)
    }

    finishSignIn(){
        axios.request({
            url: 'http://localhost:9000/api/auth/sign-in',
            method: "POST",
            params: queryParams 
        })
    }


    render() {
        return (
            <div>
                <CBanner></CBanner>
                <section className="sign sign-in" id="sign-in">
                    <div className="container">
                        <div className="row">
                            <CPros></CPros>
                            <CSignInForm></CSignInForm>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}

export default Home
