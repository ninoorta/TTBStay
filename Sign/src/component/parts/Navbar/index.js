import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loggedIn: false
        }
    }

    componentDidMount() {
        setInterval(() => this.checkLocalStorage(), 500)
        window.onresize = () => {
            if (document.body.clientWidth > 992) {
                document.querySelector('.header__menu-list').classList.remove("show");
            }
        }
    }

    checkLocalStorage() {
        let loggedIn = localStorage.getItem('loggedIn')
        this.setState({
            loggedIn: !!loggedIn
        })
    }

    logOut() {
        localStorage.removeItem('loggedIn')
        this.setState({
            loggedIn: false
        })
    }

    openNav() {
        // document.querySelector('.collapse__btn').onClick = () => {
        console.log('clicked')
        document.querySelector('.header__menu-list').classList.toggle("show");
        // }
        if(document.getElementById('signOutBtn')){
            document.querySelector('.header__menu-list').classList.toggle();
        }
    }

    render() {
        let { loggedIn = false } = this.state

        return (
            <nav className="header">
                <div className="container-fluid">
                    <div className="header__menu">
                        <div className="header__menu-logo">
                            <Link className="navbar-brand menu-logo__link" to="/">
                                <i className="fas fa-hotel" />
                                TTBStay
                            </Link>
                        </div>
                        <button className="collapse__btn btn" onClick={() => { this.openNav(), 1000 }}>
                            <i className="fas fa-bars"></i>
                        </button>
                        {loggedIn ? (
                            <ul className="header__menu-list" id="nav-right">
                                <li className="menu__list-item">
                                    {"Welcome " + localStorage.getItem("loggedIn")}
                                    <button className="btn btn-sign-out ml-2" id="signOutBtn" onClick={() => this.logOut()}>
                                        <i className="fas fa-sign-out-alt"></i>
                                    </button>
                                </li>
                            </ul>
                        ) : (
                                <ul className="header__menu-list" id="nav-right">
                                    <li className="menu__list-item">
                                        <Link to="/sign-up" className="list-item__link bold">Đăng kí</Link>
                                    </li>
                                    <li className="menu__list-item">
                                        <Link to="/sign-in" className="list-item__link bold">Đăng nhập</Link>
                                    </li>
                                </ul>
                            )}
                    </div>
                </div>
            </nav>

        )
    }
}

export default Navbar
