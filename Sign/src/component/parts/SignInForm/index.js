import React, { Component } from 'react'
import btnSignIn from '../../pieces/ButtonSignIn';
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'

class SignInForm extends Component {
    constructor(props) {
        super(props)

        this.signIn = this.signIn.bind(this)
    }

    signIn() {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        localStorage.removeItem('loggedIn')

        axios({
            url: 'http://localhost:9000/api/auth/sign-in',
            method: "POST",
            headers: {},
            data: {
                email: email,
                password: password
            }
        }).then(res => {
            if (res.data.familyName == undefined) {
                res.data.familyName = '';
            }
            let userName = res.data.familyName + " " + res.data.name
            this.setState({
                name: userName
            })
            // If data is valid , we will redirect to home page 
            this.props.history.push('/')
            console.log(this.state)
            localStorage.setItem('loggedIn', userName)

            // document.getElementById("nav-right").innerHTML = "Welcome " + this.state.name
            // document.getElementById("nav-right").style.color = "#f65e39"
            // document.getElementById("nav-right").style.fontSize = "xx-large"

        }).catch(err => {
            console.log('catch err request')
            console.log(err, err.response)
            let errMessage = err.response.data.message
            // If have email, put email-error display none
            if (email && errMessage.indexOf("email") == -1) {
                document.getElementById("email-error").style.display = "none";
            }
            if (password && errMessage.indexOf("password") == -1) {
                document.getElementById("password-error").style.display = "none";
            }
            //  Else
            if (!email) {
                document.getElementById("email-error").innerHTML = errMessage
                console.log(errMessage)
                document.getElementById("email-error").style.display = "block";
            } else
                if (!password) {
                    document.getElementById("password-error").innerHTML = errMessage
                    document.getElementById("password-error").style.display = "block";
                }

        })

        // console.log("clicked")

    }



    render() {
        return (
            <div className="col-lg-5 col-md-12 col-xs-12 first-xs sign-up__right">
                <div className="account">
                    <form action="" className="account__sign-in">
                        <h3 className="sign-in__title bold">Đăng nhập</h3>
                        <div className="sign-in__input">
                            <div className="sign-in__input-item sign__input-item">
                                <label className="bold">
                                    Địa chỉ email
                    </label>
                                <div className="input-item__wrapper">
                                    <input type="email" placeholder="Địa chỉ email" id="email" required="required" />
                                    <span>
                                        <i className="far fa-envelope" />
                                    </span>
                                    <div className="input-item__error email" id="email-error">
                                    </div>
                                </div>
                            </div>
                            <div className="sign-in__input-item sign__input-item">
                                <label className="bold">
                                    Mật khẩu
                      <span className="input-item__password-header">(Tối thiểu 6 ký tự)</span>
                                </label>
                                <div className="input-item__wrapper">
                                    <input type="password" placeholder="Mật khẩu" id="password" required="required" />
                                    <span>
                                        <i className="fas fa-lock" />
                                    </span>
                                    <div className="input-item__error password" id="password-error">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="account__btn">
                        <button onClick={this.signIn} className="btn bold">Đăng nhập</button>
                        <div className="account__btn-sign-in">
                            Bạn chưa có tài khoản TTBStay?
                  <Link to="/sign-up" className="btn-sign-in__text bold" style={{ cursor: 'pointer' }} >Đăng ký</Link>
                        </div>
                        {/* <div><button
                            onClick={() => this.props.history.push('/sign-up')}>Go</button></div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SignInForm)
