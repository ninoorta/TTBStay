import React, { Component } from 'react'

class Banner extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            < div className="banner" >
                <div className="container">
                    <div className="col-md-7 col-xs-12">
                        <h1 className="banner__title">Đăng ký thành viên TTBStay - Tích điểm thưởng và nhận ưu đãi</h1>
                        <p className="banner__text">Nhanh chóng, tiện lợi và an toàn. Đăng ký liền tay, rinh ngay quyền lợi.</p>
                    </div>
                </div>
            </div >
        )
    }
}

export default Banner
