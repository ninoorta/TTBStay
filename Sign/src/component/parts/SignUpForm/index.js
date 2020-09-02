import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'

class SignUpForm extends Component {
    constructor(props) {
        super(props)

        this.signUp = this.signUp.bind(this)
    }

    signUp() {
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let name = document.getElementById("name").value;
        let password = document.getElementById("password").value;
        let repassword = document.getElementById("repassword").value;

        if (repassword !== password) {
            document.getElementById("repassword-error").style.display = "block";
            document.getElementById("repassword-error").innerHTML = "Please enter your password correctly again!";
        } else {
            document.getElementById("repassword-error").style.display = "none";

            axios({
                url: 'http://localhost:9000/api/auth/sign-up',
                method: "POST",
                headers: {},
                data: {
                    email: email,
                    phone: phone,
                    name: name,
                    password: password
                }
            })
                .then(res => {
                    // If data is valid , we will redirect to sign-in page 
                    this.props.history.push('/sign-in')
                })
                .catch(err => {
                    console.log('catch err request')
                    console.log(err, err.response)

                    let errMessage = err.response.data.message
                    // If have email, put email-error display none
                    if (email && errMessage.indexOf("email") == -1) {
                        document.getElementById("email-error").style.display = "none";
                    } 
                    if (phone && errMessage.indexOf("phone") == -1) {
                        document.getElementById("phone-error").style.display = "none";
                    } 
                    if (name && errMessage.indexOf("name") == -1) {
                        document.getElementById("name-error").style.display = "none";
                    } 
                    if (password && errMessage.indexOf("password") == -1) {
                        document.getElementById("password-error").style.display = "none";
                    }

                    //  Else
                    if (!email || errMessage.indexOf("email") !== -1) {
                        document.getElementById("email-error").innerHTML = errMessage
                        console.log(errMessage)
                        document.getElementById("email-error").style.display = "block";
                    } else if (!phone || errMessage.indexOf("phone") !== -1) {
                        document.getElementById("phone-error").innerHTML = errMessage
                        document.getElementById("phone-error").style.display = "block";
                    } else if (!name || errMessage.indexOf("name") !== -1) {
                        document.getElementById("name-error").innerHTML = errMessage
                        document.getElementById("name-error").style.display = "block";
                    } else if (!password || errMessage.indexOf("password") !== -1) {
                        document.getElementById("password-error").innerHTML = errMessage
                        document.getElementById("password-error").style.display = "block";
                    }
                })
        }


    }



    render() {
        return (
            <div className="col-lg-5 col-md-12 col-xs-12 first-xs sign-up__right">
                <div className="account">
                    <form action="" className="account__sign-up">
                        <h3 className="sign-up__title">Đăng ký thành viên</h3>
                        <div className="sign-up__input">
                            <div className="sign-up__input-item sign__input-item">
                                <label className="bold">
                                    Địa chỉ email
                                </label>
                                <div className="input-item__wrapper">
                                    <input type="email" id="email" />
                                    <span>
                                        <i className="far fa-envelope" />
                                    </span>
                                    <div className="input-item__error email" id="email-error">
                                    </div>
                                </div>
                            </div>
                            <div className="sign-up__input-item sign__input-item">
                                <label className="bold">
                                    Số điện thoại
                                </label>
                                <div className="input-item__wrapper">
                                    <input type="tel" placeholder="Số điện thoại" id="phone" />
                                    <div className="input-item__error tel" id="phone-error">
                                    </div>
                                </div>
                            </div>
                            <div className="sign-up__input-item sign__input-item">
                                <label className="bold">
                                    Tên
                                </label>
                                <div className="input-item__wrapper">
                                    <input type="text" id="name" />
                                    <div className="input-item__error name" id="name-error">
                                    </div>
                                </div>
                            </div>
                            <div className="sign-up__input-item sign__input-item">
                                <label className="bold">
                                    Mật khẩu
                                <span className="input-item__password-header">(Tối thiểu 6 ký tự)</span>
                                </label>
                                <div className="input-item__wrapper">
                                    <input type="password" placeholder="Mật khẩu" id="password" />
                                    <span>
                                        <i className="fas fa-lock" />
                                    </span>
                                    <div className="input-item__error password" id="password-error">
                                    </div>
                                </div>
                            </div>
                            <div className="sign-up__input-item sign__input-item">
                                <label className="bold">
                                    Xác nhận mật khẩu mới
                                </label>
                                <div className="input-item__wrapper">
                                    <input type="password" id="repassword" />
                                    <span>
                                        <i className="fas fa-lock" />
                                    </span>
                                    <div className="input-item__error re-password" id="repassword-error">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="account__btn">
                        <button className="btn bold" onClick={this.signUp}>Đăng ký</button>
                        <div className="account__btn-sign-in">
                            Bạn đã có tài khoản TTBStay?
                        <Link to="/sign-in" className="btn-sign-in__text bold" style={{ cursor: 'pointer' }}>Đăng nhập</Link>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(SignUpForm)
