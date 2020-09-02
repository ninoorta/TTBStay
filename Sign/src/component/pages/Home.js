import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import '../../assets/img/dalat.png'
import '../../assets/img/hanoi.png'
import '../../assets/img/hochiminh.png'
import '../../assets/img/quangninh.png'
import '../../assets/img/hoian.png'
import '../../assets/img/dalat.png'
import '../../assets/img/dalat.png'
import '../../assets/img/room1.jpg'
import '../../assets/img/room2.jpg'
import '../../assets/img/room3.png'
import '../../assets/img/room4.jpg'
import '../../assets/img/room5.jpg'
import '../../assets/img/room6.jpg'
import '../../assets/img/room7.jpg'
import '../../assets/img/room8.png'


class Home extends Component {
    constructor(props) {
        super(props)
    }

    canShowSlider() {
        return $('.favorite__slider').owlCarousel
    }

    showSlider() {
        $('.favorite__slider').owlCarousel({
            loop: true,
            autoplay:true,
            autoplayTimeout: 1500,
            items: 5,
            margin: 20,
            dots: true,
            dotsEach: true,
            // stagePadding: 30
            responsive: {
                0:{
                    items:1,
                },
                768:{
                    items:3,
                },
                1024:{
                    items: 4
                }
            }
        });
    }

    componentDidMount() {
        if(this.canShowSlider()) {
            this.showSlider()
        } else {
            setTimeout(() => this.showSlider(), 1000)
        }
    }

    render() {
        return (
            <div>
                <section className="favorite">
                    <div className="container-fluid">
                        <div className="row">
                            <h3 className="favorite__title">Lựa chọn những homestay hoàn hảo tại các điểm đến được yêu thích nhất</h3>
                            <div className="owl-carousel owl-theme favorite__slider">
                                <div className="favorite__slider-item">
                                    <a href="#" className="slider-item__link">
                                        <div className="item__link-wrapper">
                                            <img src="./assets/img/dalat.png" alt="" />
                                            <div className="link-wrapper__info">
                                                <div className="wrapper__info-title">
                                                    Đà Lạt
                    </div>
                                                <span className="wrapper__info-places">
                                                    <b>2174 </b>
                    Chỗ ở
                    </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="favorite__slider-item">
                                    <a href="#" className="slider-item__link">
                                        <div className="item__link-wrapper">
                                            <img src="./assets/img/hanoi.png" alt="" />
                                            <div className="link-wrapper__info">
                                                <div className="wrapper__info-title">
                                                    Hà Nội
                            </div>
                                                <span className="wrapper__info-places">
                                                    <b>3564 </b>
                                Chỗ ở
                            </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="favorite__slider-item">
                                    <a href="#" className="slider-item__link">
                                        <div className="item__link-wrapper">
                                            <img src="./assets/img/hochiminh.png" alt="" />
                                            <div className="link-wrapper__info">
                                                <div className="wrapper__info-title">
                                                    Hồ Chí Minh
                    </div>
                                                <span className="wrapper__info-places">
                                                    <b>4265 </b>
                    Chỗ ở
                    </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="favorite__slider-item">
                                    <a href="#" className="slider-item__link">
                                        <div className="item__link-wrapper">
                                            <img src="./assets/img/quangninh.png" alt="" />
                                            <div className="link-wrapper__info">
                                                <div className="wrapper__info-title">
                                                    Quảng Ninh
                    </div>
                                                <span className="wrapper__info-places">
                                                    <b>1240 </b>
                    Chỗ ở
                    </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="favorite__slider-item">
                                    <a href="#" className="slider-item__link">
                                        <div className="item__link-wrapper">
                                            <img src="./assets/img/hoian.png" alt="" />
                                            <div className="link-wrapper__info">
                                                <div className="wrapper__info-title">
                                                    Hội An
                    </div>
                                                <span className="wrapper__info-places">
                                                    <b>2678 </b>
                    Chỗ ở
                    </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="rooms">
                    <div className="container-fluid">
                        <div className="row">
                            <h2 className="col-12 rooms__heading">Các homestay nổi bật tại TTBStay</h2>
                            <div className="col-lg-3 col-md-6 col-xs-12 mt-5 mb-2">
                                <div className="rooms__item">
                                    <Link to="/detail" className="rooms__item-link">
                                        <div className="item-link__img">
                                            <img src="./assets/img/room1.jpg" alt="" />
                                        </div>
                                        <div className="item-link__content">
                                            <h3 className="link__content-name">
                                                <svg version="1.1" viewBox="0 0 20 20" className="is-instant-book mr--6 svg-icon svg-fill" style={{ width: '20px', height: '20px' }}>
                                                    <defs><linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="svgicon_instant_book_a">
                                                        <stop stopColor="#F68A39" offset="0%" />
                                                        <stop stopColor="#F65E39" offset="100%" />
                                                    </linearGradient></defs><g fill="none" fillRule="evenodd">
                                                        <circle pid={0} fill="url(#svgicon_instant_book_a)" cx={10} cy={10} r={10}>
                                                        </circle>
                                                        <path pid={1} d="M10.42 15.158l3.037-6.073A.75.75 0 0012.787 8H10V5.177a.75.75 0 00-1.42-.335l-3.037 6.073A.75.75 0 006.213 12H9v2.823a.75.75 0 001.42.335z" fill="#FFF" /></g>
                                                </svg>
                                                    AimeeHomestay#2 - Phan Bội Châu/ Self check-in
                                             </h3>
                                            <div className="link__content-utilities">
                                                2 khách · 1 Phòng ngủ · 1 phòng tắm
                                            </div>
                                            <div className="link__content-price">
                                                <b>315,000đ/đêm</b>
                                            </div>
                                            <div className="link__content-location">
                                                Hai Bà Trưng, Hà Nội
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xs-12 mt-5 mb-2">
                                <div className="rooms__item">
                                <Link to="/detail" className="rooms__item-link">
                                    {/* <a href="#" className="rooms__item-link"> */}
                                        <div className="item-link__img">
                                            <img src="./assets/img/room2.jpg" alt="" />
                                        </div>
                                        <div className="item-link__content">
                                            <h3 className="link__content-name">
                                                <svg version="1.1" viewBox="0 0 20 20" className="is-instant-book mr--6 svg-icon svg-fill" style={{ width: '20px', height: '20px' }}>
                                                    <defs><linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="svgicon_instant_book_a">
                                                        <stop stopColor="#F68A39" offset="0%" />
                                                        <stop stopColor="#F65E39" offset="100%" />
                                                    </linearGradient></defs><g fill="none" fillRule="evenodd">
                                                        <circle pid={0} fill="url(#svgicon_instant_book_a)" cx={10} cy={10} r={10}>
                                                        </circle>
                                                        <path pid={1} d="M10.42 15.158l3.037-6.073A.75.75 0 0012.787 8H10V5.177a.75.75 0 00-1.42-.335l-3.037 6.073A.75.75 0 006.213 12H9v2.823a.75.75 0 001.42.335z" fill="#FFF" /></g>
                                                </svg>
                                                   AimeeHomestay#2 - Phan Bội Châu/ Self check-in
                                             </h3>
                                            <div className="link__content-utilities">
                                                2 khách · 1 Phòng ngủ · 1 phòng tắm
                                            </div>
                                            <div className="link__content-price">
                                                <b>315,000đ/đêm</b>
                                            </div>
                                            <div className="link__content-location">
                                                Hai Bà Trưng, Hà Nội
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xs-12 mt-5 mb-2">
                                <div className="rooms__item">
                                <Link to="/detail" className="rooms__item-link">
                                    {/* <a href="#" className="rooms__item-link"> */}
                                        <div className="item-link__img">
                                            <img src="./assets/img/room3.png" alt="" />
                                        </div>
                                        <div className="item-link__content">
                                            <h3 className="link__content-name">
                                                <svg version="1.1" viewBox="0 0 20 20" className="is-instant-book mr--6 svg-icon svg-fill" style={{ width: '20px', height: '20px' }}>
                                                    <defs><linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="svgicon_instant_book_a">
                                                        <stop stopColor="#F68A39" offset="0%" />
                                                        <stop stopColor="#F65E39" offset="100%" />
                                                    </linearGradient></defs><g fill="none" fillRule="evenodd">
                                                        <circle pid={0} fill="url(#svgicon_instant_book_a)" cx={10} cy={10} r={10}>
                                                        </circle>
                                                        <path pid={1} d="M10.42 15.158l3.037-6.073A.75.75 0 0012.787 8H10V5.177a.75.75 0 00-1.42-.335l-3.037 6.073A.75.75 0 006.213 12H9v2.823a.75.75 0 001.42.335z" fill="#FFF" /></g>
                                                </svg>
                                                   AimeeHomestay#2 - Phan Bội Châu/ Self check-in
                                             </h3>
                                            <div className="link__content-utilities">
                                                2 khách · 1 Phòng ngủ · 1 phòng tắm
                                            </div>
                                            <div className="link__content-price">
                                                <b>315,000đ/đêm</b>
                                            </div>
                                            <div className="link__content-location">
                                                Hai Bà Trưng, Hà Nội
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xs-12 mt-5 mb-2">
                                <div className="rooms__item">
                                <Link to="/detail" className="rooms__item-link">
                                    {/* <a href="#" className="rooms__item-link"> */}
                                        <div className="item-link__img">
                                            <img src="./assets/img/room4.jpg" alt="" />
                                        </div>
                                        <div className="item-link__content">
                                            <h3 className="link__content-name">
                                                <svg version="1.1" viewBox="0 0 20 20" className="is-instant-book mr--6 svg-icon svg-fill" style={{ width: '20px', height: '20px' }}>
                                                    <defs><linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="svgicon_instant_book_a">
                                                        <stop stopColor="#F68A39" offset="0%" />
                                                        <stop stopColor="#F65E39" offset="100%" />
                                                    </linearGradient></defs><g fill="none" fillRule="evenodd">
                                                        <circle pid={0} fill="url(#svgicon_instant_book_a)" cx={10} cy={10} r={10}>
                                                        </circle>
                                                        <path pid={1} d="M10.42 15.158l3.037-6.073A.75.75 0 0012.787 8H10V5.177a.75.75 0 00-1.42-.335l-3.037 6.073A.75.75 0 006.213 12H9v2.823a.75.75 0 001.42.335z" fill="#FFF" /></g>
                                                </svg>
                                                   AimeeHomestay#2 - Phan Bội Châu/ Self check-in
                                             </h3>
                                            <div className="link__content-utilities">
                                                2 khách · 1 Phòng ngủ · 1 phòng tắm
                                            </div>
                                            <div className="link__content-price">
                                                <b>315,000đ/đêm</b>
                                            </div>
                                            <div className="link__content-location">
                                                Hai Bà Trưng, Hà Nội
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xs-12 mt-5 mb-2">
                                <div className="rooms__item">
                                <Link to="/detail" className="rooms__item-link">
                                    {/* <a href="#" className="rooms__item-link"> */}
                                        <div className="item-link__img">
                                            <img src="./assets/img/room5.jpg" alt="" />
                                        </div>
                                        <div className="item-link__content">
                                            <h3 className="link__content-name">
                                                <svg version="1.1" viewBox="0 0 20 20" className="is-instant-book mr--6 svg-icon svg-fill" style={{ width: '20px', height: '20px' }}>
                                                    <defs><linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="svgicon_instant_book_a">
                                                        <stop stopColor="#F68A39" offset="0%" />
                                                        <stop stopColor="#F65E39" offset="100%" />
                                                    </linearGradient></defs><g fill="none" fillRule="evenodd">
                                                        <circle pid={0} fill="url(#svgicon_instant_book_a)" cx={10} cy={10} r={10}>
                                                        </circle>
                                                        <path pid={1} d="M10.42 15.158l3.037-6.073A.75.75 0 0012.787 8H10V5.177a.75.75 0 00-1.42-.335l-3.037 6.073A.75.75 0 006.213 12H9v2.823a.75.75 0 001.42.335z" fill="#FFF" /></g>
                                                </svg>
                                                   AimeeHomestay#2 - Phan Bội Châu/ Self check-in
                                             </h3>
                                            <div className="link__content-utilities">
                                                2 khách · 1 Phòng ngủ · 1 phòng tắm
                                            </div>
                                            <div className="link__content-price">
                                                <b>315,000đ/đêm</b>
                                            </div>
                                            <div className="link__content-location">
                                                Hai Bà Trưng, Hà Nội
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xs-12 mt-5 mb-2">
                                <div className="rooms__item">
                                <Link to="/detail" className="rooms__item-link">
                                    {/* <a href="#" className="rooms__item-link"> */}
                                        <div className="item-link__img">
                                            <img src="./assets/img/room6.jpg" alt="" />
                                        </div>
                                        <div className="item-link__content">
                                            <h3 className="link__content-name">
                                                <svg version="1.1" viewBox="0 0 20 20" className="is-instant-book mr--6 svg-icon svg-fill" style={{ width: '20px', height: '20px' }}>
                                                    <defs><linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="svgicon_instant_book_a">
                                                        <stop stopColor="#F68A39" offset="0%" />
                                                        <stop stopColor="#F65E39" offset="100%" />
                                                    </linearGradient></defs><g fill="none" fillRule="evenodd">
                                                        <circle pid={0} fill="url(#svgicon_instant_book_a)" cx={10} cy={10} r={10}>
                                                        </circle>
                                                        <path pid={1} d="M10.42 15.158l3.037-6.073A.75.75 0 0012.787 8H10V5.177a.75.75 0 00-1.42-.335l-3.037 6.073A.75.75 0 006.213 12H9v2.823a.75.75 0 001.42.335z" fill="#FFF" /></g>
                                                </svg>
                                                   AimeeHomestay#2 - Phan Bội Châu/ Self check-in
                                             </h3>
                                            <div className="link__content-utilities">
                                                2 khách · 1 Phòng ngủ · 1 phòng tắm
                                            </div>
                                            <div className="link__content-price">
                                                <b>315,000đ/đêm</b>
                                            </div>
                                            <div className="link__content-location">
                                                Hai Bà Trưng, Hà Nội
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xs-12 mt-5 mb-2">
                                <div className="rooms__item">
                                <Link to="/detail" className="rooms__item-link">
                                    {/* <a href="#" className="rooms__item-link"> */}
                                        <div className="item-link__img">
                                            <img src="./assets/img/room7.jpg" alt="" />
                                        </div>
                                        <div className="item-link__content">
                                            <h3 className="link__content-name">
                                                <svg version="1.1" viewBox="0 0 20 20" className="is-instant-book mr--6 svg-icon svg-fill" style={{ width: '20px', height: '20px' }}>
                                                    <defs><linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="svgicon_instant_book_a">
                                                        <stop stopColor="#F68A39" offset="0%" />
                                                        <stop stopColor="#F65E39" offset="100%" />
                                                    </linearGradient></defs><g fill="none" fillRule="evenodd">
                                                        <circle pid={0} fill="url(#svgicon_instant_book_a)" cx={10} cy={10} r={10}>
                                                        </circle>
                                                        <path pid={1} d="M10.42 15.158l3.037-6.073A.75.75 0 0012.787 8H10V5.177a.75.75 0 00-1.42-.335l-3.037 6.073A.75.75 0 006.213 12H9v2.823a.75.75 0 001.42.335z" fill="#FFF" /></g>
                                                </svg>
                                                   AimeeHomestay#2 - Phan Bội Châu/ Self check-in
                                             </h3>
                                            <div className="link__content-utilities">
                                                2 khách · 1 Phòng ngủ · 1 phòng tắm
                                            </div>
                                            <div className="link__content-price">
                                                <b>315,000đ/đêm</b>
                                            </div>
                                            <div className="link__content-location">
                                                Hai Bà Trưng, Hà Nội
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xs-12 mt-5 mb-2">
                                <div className="rooms__item">
                                <Link to="/detail" className="rooms__item-link">
                                    {/* <a href="#" className="rooms__item-link"> */}
                                        <div className="item-link__img">
                                            <img src="./assets/img/room8.png" alt="" />
                                        </div>
                                        <div className="item-link__content">
                                            <h3 className="link__content-name">
                                                <svg version="1.1" viewBox="0 0 20 20" className="is-instant-book mr--6 svg-icon svg-fill" style={{ width: '20px', height: '20px' }}>
                                                    <defs><linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="svgicon_instant_book_a">
                                                        <stop stopColor="#F68A39" offset="0%" />
                                                        <stop stopColor="#F65E39" offset="100%" />
                                                    </linearGradient></defs><g fill="none" fillRule="evenodd">
                                                        <circle pid={0} fill="url(#svgicon_instant_book_a)" cx={10} cy={10} r={10}>
                                                        </circle>
                                                        <path pid={1} d="M10.42 15.158l3.037-6.073A.75.75 0 0012.787 8H10V5.177a.75.75 0 00-1.42-.335l-3.037 6.073A.75.75 0 006.213 12H9v2.823a.75.75 0 001.42.335z" fill="#FFF" /></g>
                                                </svg>
                                                   AimeeHomestay#2 - Phan Bội Châu/ Self check-in
                                             </h3>
                                            <div className="link__content-utilities">
                                                2 khách · 1 Phòng ngủ · 1 phòng tắm
                                            </div>
                                            <div className="link__content-price">
                                                <b>315,000đ/đêm</b>
                                            </div>
                                            <div className="link__content-location">
                                                Hai Bà Trưng, Hà Nội
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <ul className="pagination justify-content-center rooms__pagination">
                            <li className="page-item ">
                                <a className="page-link" href="#" tabIndex={-1}>Previous</a>
                            </li>
                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}

export default withRouter(Home)
