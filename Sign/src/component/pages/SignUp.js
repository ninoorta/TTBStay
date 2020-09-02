import React, { Component } from 'react'
import CBanner from '../parts/Banner'
import CFooter from '../parts/Footer'
import CPros from '../parts/Pros'
import CSignUpForm from '../parts/SignUpForm'
import axios from 'axios'
// F2
class Home extends Component {
    constructor(props) {
        super(props)
        this.finishSignUp = this.finishSignUp.bind(this)
    }

    finishSignUp(){
        axios.request({
            url: 'http://localhost:9000/api/auth/sign-up',
            method: "POST",
            params: queryParams
        })
    }




    render() {
        return (
            <div>
                <CBanner></CBanner>
                <section className="sign sign-up" id="sign-up">
                    <div className="container">
                        <div className="row">
                            <CPros></CPros>
                            <CSignUpForm></CSignUpForm>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}

export default Home
