import React, { Component } from 'react';
import CFooter from '../parts/Footer/index';
import '../../assets/img/detail1.jpg';
import '../../assets/img/detail2.jpg';
import '../../assets/img/detail3.jpg';
import '../../assets/img/detail4.jpg';

class Detail extends Component {
    constructor(props) {
        super(props)

        this.isClick = this.isClick.bind(this)
    }


    canShowSlider() {
        return $('.roomDetail-slider').owlCarousel
    }
    canClick(){
        return document.querySelector('.detail__info-btn')
    }

    showSlider() {
        $('.roomDetail-slider').owlCarousel({
            items: 3,
            margin: 10,
            nav: true,
            dots: false,
            navSpeed: 800,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                768: {
                    items: 1,
                    nav: true
                },
                1024: {
                    items: 3
                }

            }
        });
    }

    componentDidMount() {
        if (this.canShowSlider()) {
            this.showSlider()
        } else {
            setTimeout(() => this.showSlider(), 1000)
        }

        if(this.canClick()){
            console.log
        }
    }

    isClick() {
        let isClick = true;

        document.querySelector('.detail__info-btn').onclick = () => {
            if (isClick) {
                document.querySelector('.show-info').style.opacity = "1";
                document.querySelector('.show-info').style.position = "relative";
                document.querySelector('.detail__info-short').style.display = "none";
                document.querySelector('.detail__info-btn').innerHTML = `Thu gọn`
                isClick = false;
            } else {
                document.querySelector('.show-info').style.opacity = "0";
                document.querySelector('.show-info').style.position = "absolute";
                document.querySelector('.detail__info-short').style.display = "block";
                document.querySelector('.detail__info-btn').innerHTML = `Đọc thêm`
                isClick = true;
            }

        }
    }



    render() {
        return (
            <div>
                {/* <!-- Start slider --> */}
                <div className="roomDetail">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="owl-carousel owl-theme roomDetail-slider">
                                <div className="slider__item">
                                    <img src="assets/img/detail1.jpg" alt="" />
                                </div>
                                <div className="slider__item">
                                    <img src="assets/img/detail2.jpg" alt="" />
                                </div>
                                <div className="slider__item">
                                    <img src="assets/img/detail3.jpg" alt="" />
                                </div>
                                <div className="slider__item">
                                    <img src="assets/img/detail4.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End slider --> */}
                <section className="detail">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-xs-12">
                                <div className="detail__title">
                                    <h1 className="detail__title-heading mb-5">ADODDA - Vinhome Greenbay</h1>
                                    <div className="detail__title-location d-inline-flex">
                                        <svg version="1.1" viewBox="0 0 24 24" className="svg-icon svg-fill" style={{ width: '24px', height: '24px' }}>
                                            <g fill="none" fillRule="evenodd">
                                                <circle pid={0} cx={12} cy={12} r={12} fill="#000" fillOpacity=".2" fillRule="nonzero" />
                                                <path pid={1} fill="#FFF" d="M11.92 6c2.87 0 5.218 2.335 5.218 5.205a5.112 5.112 0 01-1.055 3.137c-.97 1.252-3.77 3.461-3.882 3.56a.43.43 0 01-.282.098.43.43 0 01-.281-.098c-.113-.099-2.912-2.308-3.883-3.546a5.182 5.182 0 01-1.055-3.15C6.7 8.335 9.05 6 11.92 6zm0 7.203a2.104 2.104 0 000-4.207 2.104 2.104 0 000 4.206z">
                                                </path>
                                            </g>
                                        </svg>
                                        <span className="ml-2 bold">Nam Từ Liêm, Hà Nội, Việt Nam</span>
                                    </div>
                                    <div className="mt-2 detail__title-type d-flex">
                                        <svg version="1.1" viewBox="0 0 24 24" className="svg-icon svg-fill" style={{ width: '24px', height: '24px' }}>
                                            <g fill="none" fillRule="evenodd">
                                                <circle pid={0} cx={12} cy={12} r={12} fill="#000" fillOpacity=".2" />
                                                <path pid={1} fill="#FFF" d="M7 17V8a1 1 0 011-1h8a1 1 0 011 1v9M8 7V6a1 1 0 011-1h6a1 1 0 011 1v1m-6 1a1 1 0 110 2 1 1 0 110-2zm4 0a1 1 0 110 2 1 1 0 110-2zm-4 3a1 1 0 110 2 1 1 0 110-2zm4 0a1 1 0 110 2 1 1 0 110-2zm-4 3a1 1 0 010 2 1 1 0 110-2zm4 0a1 1 0 110 2 1 1 0 010-2zm-7 3h10a1 1 0 011 1v1H6v-1a1 1 0 011-1z">
                                                </path>
                                            </g>
                                        </svg>
                                        <span className="ml-2 bold">Căn hộ chung cư</span>
                                        <span className="span"> · 28
              m<sup>2</sup>
                                        </span>
                                    </div>
                                    <p className="mt-3">
                                        <span>Nguyên căn · </span> <span>1 phòng tắm · </span> <span>1 giường ·
            </span> <span>1 phòng ngủ · </span> <span>2 khách (tối đa 2 khách)</span>
                                    </p>
                                </div>
                                <div className="detail__info mt-4 ">
                                    <div className="detail__info-short">
                                        <p><strong>ADODDA</strong> là căn homestay có đầy đủ tiện ích dành cho khách du lịch
              hoặc đi công tác tại Vinhome Greenbay Mễ Trì, Nam Từ Liêm, Hà Nội (gần hầm chui Đại
              lộ Thăng Long, nút giao Big C).</p>
                                        <p>Đây là căn hộ đầu tay tôi trang trí và chuẩn bị từng góc nhỏ để đón khách, cố gắng
              tạo sự thân thiện và tiện lợi đến tất cả khách hàng.</p>
                                        <p>Từ <strong>ADODDA</strong> bạn có thể dễ dàng di chuyển đến Trung tâm hành chính của
              Hà Nội, khu phố
              cổ, đường lên sân bay Nội Bài, các địa điểm du lịch.</p>
                                        <p>Việc đón taxi cũng khá thuận tiện, gần Kengnam,...</p>
                                        <p>Bên cạnh đó, tôi cũng là một người bản địa <span style={{ color: 'rgb(0,0,0)' }}>vô cùng
                                        thân thiện và thoải mái. Chính vì vậy đừng ngại ngần mà chia sẻ với chúng tôi
                những điều bạn đang thắc mắc hoặc những khó khăn bạn gặp phải khi ở đây. </span>
                                        </p>
                                    </div>
                                    <div className="show-info">
                                        <p><strong>ADODDA</strong> là căn homestay có đầy đủ tiện ích dành cho khách du lịch
              hoặc đi công tác tại Vinhome Greenbay Mễ Trì, Nam Từ Liêm, Hà Nội (gần hầm chui Đại
              lộ Thăng Long, nút giao Big C).</p>
                                        <p>Đây là căn hộ đầu tay tôi trang trí và chuẩn bị từng góc nhỏ để đón khách, cố gắng
              tạo sự thân thiện và tiện lợi đến tất cả khách hàng.</p>
                                        <p>Từ <strong>ADODDA</strong> bạn có thể dễ dàng di chuyển đến Trung tâm hành chính của
              Hà Nội, khu phố
              cổ, đường lên sân bay Nội Bài, các địa điểm du lịch.</p>
                                        <p>Việc đón taxi cũng khá thuận tiện, gần Kengnam,...</p>
                                        <p>Bên cạnh đó, tôi cũng là một người bản địa <span style={{ color: 'rgb(0,0,0)' }}>vô cùng
                                        thân thiện và thoải mái. Chính vì vậy đừng ngại ngần mà chia sẻ với chúng tôi
                những điều bạn đang thắc mắc hoặc những khó khăn bạn gặp phải khi ở đây. </span>
                                        </p>
                                        <p><span style={{ color: 'rgb(0,0,0)' }}>Chúng tôi cũng luôn mong muốn được cùng bạn khám phá
                nhiều địa điểm tốt đẹp nhất tại đây. </span></p>
                                        <p><span style={{ color: 'rgb(28,30,33)' }}>Vậy còn chần chừ gì nữa ngay bây giờ hãy lên kế
                hoạch để tận hưởng những khoảnh khắc tuyệt vời cùng nhau.</span></p>
                                        <p>Mong rằng bạn sẽ có trải nghiệm vui vẻ và đầy ý nghĩa ở <strong>ADODDA</strong>.</p>
                                    </div>
                                    <a className="btn detail__info-btn" onclick={setTimeout(() => {
                                        this.isClick();
                                    }, 1000)}>Đọc thêm</a>
                                </div>
                                <div className="detail__utilities mt-5">
                                    <div className="detail__utilities-title">
                                        <h3>Tiện nghi chỗ ở </h3>
                                        <span>Giới thiệu về các tiện nghi và dịch vụ tại nơi lưu trú</span>
                                    </div>
                                    <ul className="detail__utilities-list mt-2 d-flex">
                                        <li className="list-item mt-2">
                                            <svg version="1.1" viewBox="0 0 24 24" className="svg-icon svg-fill" alt="" style={{ width: '24px', height: '24px' }}>
                                                <g fill="#000" fillRule="nonzero">
                                                    <path pid={0} d="M23.44 9.04a.502.502 0 01-.354-.146A14.9 14.9 0 0012.48 4.5 14.903 14.903 0 001.873 8.894a.5.5 0 01-.707-.707A15.896 15.896 0 0112.48 3.5c4.274 0 8.292 1.665 11.313 4.687a.5.5 0 01-.353.853z">
                                                    </path>
                                                    <path pid={1} d="M20.612 11.868a.502.502 0 01-.354-.146c-4.289-4.288-11.268-4.288-15.557 0a.5.5 0 01-.707-.707c4.679-4.679 12.292-4.679 16.971 0a.5.5 0 01-.353.853z">
                                                    </path>
                                                    <path pid={2} d="M17.783 14.697a.502.502 0 01-.354-.146 6.954 6.954 0 00-4.95-2.05c-1.87 0-3.627.728-4.95 2.05a.5.5 0 01-.707-.707 7.948 7.948 0 015.657-2.343c2.137 0 4.146.832 5.657 2.343a.5.5 0 01-.353.853zM12.48 20.5a2.503 2.503 0 01-2.5-2.5c0-1.378 1.122-2.5 2.5-2.5s2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zm0-4c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z">
                                                    </path>
                                                </g>
                                            </svg>
                                            <span>Wifi</span>
                                        </li>
                                        <li className="list-item mt-2">
                                            <svg version="1.1" viewBox="0 0 24 24" className="svg-icon svg-fill" alt="" style={{ width: '24px', height: '24px' }}>
                                                <path pid={0} fill="#000" fillRule="nonzero" d="M16.293 14H8.707l-1.853 1.854a.5.5 0 01-.708-.708L7.293 14H3.5a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h18a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-3.793l1.147 1.146a.5.5 0 01-.708.708L16.293 14zM4 3v10h17V3H4zM3 21.5v1a.5.5 0 11-1 0V18a1.5 1.5 0 011.5-1.5h18A1.5 1.5 0 0123 18v4.5a.5.5 0 11-1 0v-1H3zm0-1h19V18a.5.5 0 00-.5-.5h-18a.5.5 0 00-.5.5v2.5zm8.5-1a.5.5 0 110-1h2a.5.5 0 110 1h-2zM5.854 5.854a.5.5 0 11-.708-.708l1-1a.5.5 0 11.708.708l-1 1zm0 3a.5.5 0 11-.708-.708l4-4a.5.5 0 11.708.708l-4 4z">
                                                </path>
                                            </svg>
                                            <span>TV</span>
                                        </li>
                                        <li className="list-item mt-2">
                                            <svg version="1.1" viewBox="0 0 24 24" className="svg-icon svg-fill" alt="" style={{ width: '24px', height: '24px' }}>
                                                <path pid={0} fill="#000" fillRule="nonzero" d="M23 8.5h-2.085a1.5 1.5 0 01-2.83 0H1v4a.5.5 0 00.5.5h1v-.5A1.5 1.5 0 014 11h16a1.5 1.5 0 011.5 1.5v.5h1a.5.5 0 00.5-.5v-4zm0-1v-2a.5.5 0 00-.5-.5h-21a.5.5 0 00-.5.5v2h17.085a1.5 1.5 0 012.83 0H23zM20.5 13v-.5a.5.5 0 00-.5-.5H4a.5.5 0 00-.5.5v.5h17zm-19-9h21A1.5 1.5 0 0124 5.5v7a1.5 1.5 0 01-1.5 1.5h-21A1.5 1.5 0 010 12.5v-7A1.5 1.5 0 011.5 4zm5.886 16.182a.5.5 0 01-.772.636c-.817-.993-.817-2.086-.009-3.125.525-.674.525-1.248.009-1.875a.5.5 0 01.772-.636c.817.993.817 2.086.009 3.125-.525.674-.525 1.248-.009 1.875zm5 0a.5.5 0 01-.772.636c-.817-.993-.817-2.086-.009-3.125.525-.674.525-1.248.009-1.875a.5.5 0 01.772-.636c.817.993.817 2.086.009 3.125-.525.674-.525 1.248-.009 1.875zm5 0a.5.5 0 01-.772.636c-.817-.993-.817-2.086-.009-3.125.525-.674.525-1.248.009-1.875a.5.5 0 01.772-.636c.817.993.817 2.086.009 3.125-.525.674-.525 1.248-.009 1.875z">
                                                </path>
                                            </svg>
                                            <span>Điều hoà</span>
                                        </li>
                                        <li className="list-item mt-2">
                                            <svg version="1.1" viewBox="0 0 24 24" className="svg-icon svg-fill" alt="" style={{ width: '24px', height: '24px' }}>
                                                <path pid={0} fill="#000" fillRule="nonzero" d="M15.07 11.21a4.5 4.5 0 100 6.58c-2.093-1.832-2.093-4.748 0-6.58zm.651.759c-1.628 1.432-1.628 3.63 0 5.062A4.48 4.48 0 0016.5 14.5a4.48 4.48 0 00-.779-2.531zM10 1H4.5a.5.5 0 00-.5.5V5h6V1zm1 0v4h9V1.5a.5.5 0 00-.5-.5H11zM4 6v17h16V6H4zm.5-6h15A1.5 1.5 0 0121 1.5v22a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-22A1.5 1.5 0 014.5 0zM12 20a5.5 5.5 0 110-11 5.5 5.5 0 010 11zM6 3.5a.5.5 0 010-1h2a.5.5 0 010 1H6zM18 4a1 1 0 110-2 1 1 0 010 2zm-3 0a1 1 0 110-2 1 1 0 010 2z">
                                                </path>
                                            </svg>
                                            <span>Máy giặt</span>
                                        </li>
                                        <li className="list-item mt-2">
                                            <svg version="1.1" viewBox="0 0 24 24" className="svg-icon svg-fill" alt="" style={{ width: '24px', height: '24px' }}>
                                                <path pid={0} d="M7.381 0c-1.457 0-2.7 1.065-2.7 1.065a.48.48 0 10.6.75S6.438.96 7.381.96c1.226 0 2.28.855 2.28.855l.12.09V3.84H9.211a.48.48 0 00-.39.48v2.4h-.48a4.336 4.336 0 00-4.32 4.32v2.73a.492.492 0 000 .285V21.6a2.41 2.41 0 002.4 2.4h11.52a2.41 2.41 0 002.4-2.4v-7.59a.488.488 0 000-.195V11.04a4.336 4.336 0 00-4.32-4.32h-.48v-2.4a.48.48 0 00-.48-.48h-.48V1.92h.48a.483.483 0 00.422-.238.485.485 0 000-.484.483.483 0 00-.422-.238h-.855a.45.45 0 00-.15-.015.422.422 0 00-.045.015h-3.645a.45.45 0 00-.15-.015.422.422 0 00-.045.015h-.06C9.894.786 8.87 0 7.381 0zm3.36 1.92h2.88v1.92h-2.88V1.92zm-.96 2.88h4.8v1.92h-4.8V4.8zm-1.44 2.88h7.68c1.85 0 3.36 1.51 3.36 3.36v2.4h-5.805c.026-.154.045-.319.045-.48a2.888 2.888 0 00-2.88-2.88 2.888 2.888 0 00-2.88 2.88c0 .161.019.326.045.48H4.981v-2.4c0-1.85 1.51-3.36 3.36-3.36zm2.4 3.36c1.067 0 1.92.853 1.92 1.92s-.853 1.92-1.92 1.92a1.91 1.91 0 01-1.74-1.11v-.015l-.015-.03-.015-.015c-.002-.004.002-.011 0-.015l-.015-.015a1.944 1.944 0 01-.135-.72c0-1.067.853-1.92 1.92-1.92zm-5.76 3.36h3.27a2.89 2.89 0 002.49 1.44 2.89 2.89 0 002.49-1.44h6.15v7.2a1.44 1.44 0 01-1.44 1.44H6.421a1.44 1.44 0 01-1.44-1.44v-7.2zm10.08 1.44c-1.056 0-1.92.864-1.92 1.92s.864 1.92 1.92 1.92 1.92-.864 1.92-1.92-.864-1.92-1.92-1.92zm0 .96c.536 0 .96.424.96.96s-.424.96-.96.96a.952.952 0 01-.96-.96c0-.536.424-.96.96-.96zm-3.84 2.4c-.79 0-1.44.65-1.44 1.44 0 .79.65 1.44 1.44 1.44.79 0 1.44-.65 1.44-1.44 0-.79-.65-1.44-1.44-1.44zm0 .96c.27 0 .48.21.48.48s-.21.48-.48.48-.48-.21-.48-.48.21-.48.48-.48z" fill="#000" fillRule="nonzero" />
                                            </svg>
                                            <span>Dầu gội, dầu xả</span>
                                        </li>
                                        <li className="list-item mt-2">
                                            <svg version="1.1" viewBox="0 0 24 24" className="svg-icon svg-fill" alt="" style={{ width: '24px', height: '24px' }}>
                                                <path pid={0} fill="#000" d="M0 7.429C0 3.367 1.964 0 4.571 0H19.43C22.036 0 24 3.367 24 7.429c0 4.06-1.964 7.428-4.571 7.428H16v8.572a.571.571 0 01-.571.571H.57a.571.571 0 01-.57-.571v-16zm14.857 7.428H4.571c-1.394 0-2.604-.963-3.428-2.48v10.48h13.714v-8zm4.572-1.143c1.81 0 3.428-2.772 3.428-6.285 0-3.514-1.617-6.286-3.428-6.286H7.035c1.286 1.323 2.108 3.66 2.108 6.286 0 2.626-.822 4.962-2.108 6.285H19.43zm-14.858 0C6.383 13.714 8 10.942 8 7.43c0-3.514-1.617-6.286-3.429-6.286-1.81 0-3.428 2.772-3.428 6.286 0 3.513 1.617 6.285 3.428 6.285zm0-4c-1.007 0-1.714-1.06-1.714-2.285 0-1.226.707-2.286 1.714-2.286 1.008 0 1.715 1.06 1.715 2.286 0 1.225-.707 2.285-1.715 2.285zm0-1.143c.256 0 .572-.474.572-1.142 0-.669-.316-1.143-.572-1.143-.255 0-.571.474-.571 1.143 0 .668.316 1.142.571 1.142z" fillRule="evenodd" />
                                            </svg>
                                            <span>Giấy vệ sinh</span>
                                        </li>
                                        <li className="list-item mt-2">
                                            <svg version="1.1" viewBox="0 0 24 24" className="svg-icon svg-fill" alt="" style={{ width: '24px', height: '24px' }}>
                                                <g fillRule="evenodd">
                                                    <path pid={0} fillRule="nonzero" d="M22.527 6.497h-.366v-.202c.107-1.298-.245-2.453-.993-3.254a3.18 3.18 0 00-2.443-1.024H3.945c-1.376 0-2.496 1.102-2.496 2.457v2.023h-.023C.64 6.497 0 7.127 0 7.901v.359c0 .774.64 1.403 1.426 1.403h.023v10.865c0 1.355 1.12 2.457 2.496 2.457h12.188c1.417 0 2.208-.28 2.646-.934.417-.624.421-1.51.421-2.537h1.757c.675 0 1.204-.67 1.204-1.524V9.663h.366c.787 0 1.426-.63 1.426-1.403V7.9c0-.773-.64-1.403-1.426-1.403zM1.45 8.742h-.023a.487.487 0 01-.49-.482V7.9c0-.265.22-.482.49-.482h.023v1.324zM21.225 6.36v.137H19.21c.043-.329.15-.593.314-.77a.773.773 0 01.577-.245c.39 0 .899.276 1.125.878zm-2.96 13.126c0 1.032-.019 1.686-.267 2.058-.162.242-.52.52-1.865.52H3.945c-.86 0-1.56-.69-1.56-1.536V18.05h15.88v1.435zm0-2.356H2.384v-1.98h15.88v1.98zm.572-12.028c-.307.327-.655.949-.573 2.057v7.07H2.384v-.88h4.578a.464.464 0 00.468-.46.465.465 0 00-.468-.461H2.385V4.474c0-.847.7-1.536 1.56-1.536h14.803a2.252 2.252 0 011.731.726c.298.32.513.72.638 1.18A2.001 2.001 0 0020.1 4.56c-.487 0-.935.192-1.263.541zm2.388 12.888c0 .396-.2.603-.268.603H19.2v-8.93h2.025v8.327zm1.793-9.73c0 .266-.22.482-.49.482H19.2V7.418h3.327c.27 0 .49.217.49.483v.359z">
                                                    </path>
                                                    <path pid={1} d="M8.428 12.428h-.037a.464.464 0 00-.468.46c0 .255.21.461.468.461h.037a.464.464 0 00.468-.46.465.465 0 00-.468-.461z">
                                                    </path>
                                                </g>
                                            </svg>
                                            <span>Khăn tắm</span>
                                        </li>
                                        <li className="list-item mt-2">
                                            <svg version="1.1" viewBox="0 0 24 24" className="svg-icon svg-fill" alt="" style={{ width: '24px', height: '24px' }}>
                                                <path pid={0} d="M19.824 1.261L18.105 2.98l-3.273.399-.123.014-.096.068L2.745 12.99l-.014.014-.013.027-1.155 1.141-.303.317 8.25 8.25.317-.303 1.14-1.155.028-.014.014-.013 9.556-11.825.083-.097.014-.137.357-3.3 1.416-1.402.303-.317-2.915-2.915zm0 1.252L21.5 4.176l-.893.894-1.678-1.664.894-.894zm-1.692 1.36h.014l1.98 1.98v.014l-.234 2.324-4.056-4.056 2.296-.261zm-3.286.523l4.785 4.785-9.281 11.482-.027.04-.798.785-7.013-7.013.784-.797.042-.028 11.508-9.254zM12.11 8.824c-.555 0-1.102.235-1.526.66-.394.393-.518.844-.605 1.168-.047.17-.072.298-.138.413-.063.113-.136.23-.206.344-.345.548-.928 1.464-.206 2.186.178.179.399.3.632.344.045.233.164.45.344.632.22.22.52.344.839.344.488 0 .923-.282 1.347-.55.114-.07.23-.143.344-.206.115-.066.242-.091.412-.138.325-.087.776-.211 1.17-.605.905-.906.872-2.195-.07-3.135a2.62 2.62 0 00-.398-.33 2.62 2.62 0 00-.33-.399c-.47-.469-1.021-.728-1.609-.728zm0 .88c.337 0 .68.158.99.467.138.138.234.286.303.427.14.068.287.163.426.302.603.603.608 1.356.069 1.897-.392.392-.901.32-1.403.605-.455.26-.928.633-1.251.633a.303.303 0 01-.22-.082c-.155-.155-.143-.353.055-.55.273-.274.58-.686.825-1.046.093-.137-.028-.288-.165-.288a.148.148 0 00-.097.027c-.359.244-.773.552-1.044.825-.109.109-.217.165-.317.165a.332.332 0 01-.234-.11c-.287-.287.226-.897.55-1.471.286-.504.214-.999.606-1.389.262-.264.586-.412.907-.412zm-7.92 3.41l-.619.632.317.316.618-.632-.316-.316zm.646.646l-.632.619.316.316.632-.619-.316-.316zm.633.633l-.619.618.316.317.619-.62-.316-.316zm.632.632l-.619.633.317.316.619-.633-.317-.316zm.646.646l-.632.619.316.316.633-.619-.317-.316zm.633.633l-.619.619.316.316.62-.619-.317-.316zm.633.632l-.62.633.317.316.619-.633-.317-.316zm.646.647l-.633.618.316.317.633-.62-.316-.315zm.632.632l-.619.619.317.316.618-.619-.316-.316zm.633.633l-.619.632.316.316.619-.632-.316-.316zm.646.646l-.633.619.317.316.632-.619-.316-.316z" fill="#000" fillRule="nonzero" />
                                            </svg>
                                            <span>Kem đánh răng</span>
                                        </li>
                                        <li className="list-item mt-2">
                                            <svg version="1.1" viewBox="0 0 24 24" className="svg-icon svg-fill" alt="" style={{ width: '24px', height: '24px' }}>
                                                <g fillRule="evenodd">
                                                    <path pid={0} d="M7.2 16.902a2.105 2.105 0 01-1.654-.57 1.804 1.804 0 01-.351-1.328.393.393 0 00-.331-.443.4.4 0 00-.458.315 2.576 2.576 0 00.526 1.96c.488.564 1.251.85 2.268.85.22 0 .4-.175.4-.392a.396.396 0 00-.4-.392zm2 0h-.4c-.22 0-.4.176-.4.392 0 .217.18.392.4.392h.4c.22 0 .4-.175.4-.392a.396.396 0 00-.4-.392zm7.6-5.49c.61-.059 1.215.15 1.654.569.288.381.414.858.351 1.329a.393.393 0 00.395.455.398.398 0 00.394-.328 2.573 2.573 0 00-.526-1.959c-.488-.564-1.251-.85-2.268-.85-.22 0-.4.175-.4.392 0 .216.18.392.4.392zm-1.2-.392a.396.396 0 00-.4-.393h-.4c-.22 0-.4.176-.4.393 0 .216.18.392.4.392h.4c.22 0 .4-.176.4-.392z">
                                                    </path>
                                                    <path pid={1} fillRule="nonzero" d="M2 9.451c1.104 0 2-.878 2-1.96 0-1.084-.896-1.962-2-1.962S0 6.407 0 7.49c.001 1.083.896 1.96 2 1.961zm0-3.137c.663 0 1.2.526 1.2 1.176 0 .65-.537 1.177-1.2 1.177-.663 0-1.2-.527-1.2-1.177S1.337 6.314 2 6.314zm8.8.392c0 .866.716 1.569 1.6 1.569.884 0 1.6-.703 1.6-1.57 0-.865-.716-1.568-1.6-1.568-.884 0-1.6.703-1.6 1.569zm2.4 0a.792.792 0 01-.8.784.792.792 0 01-.8-.784c0-.433.358-.784.8-.784.442 0 .8.35.8.784zM4.8 4.745c0 1.516 1.254 2.745 2.8 2.745 1.546 0 2.8-1.229 2.8-2.745S9.146 2 7.6 2c-1.546.002-2.798 1.23-2.8 2.745zm4.8 0c0 1.083-.896 1.96-2 1.96s-2-.877-2-1.96.896-1.96 2-1.96 1.999.878 2 1.96z">
                                                    </path>
                                                    <path pid={2} d="M7.197 5.014a.722.722 0 01-.017-.54.39.39 0 00-.255-.495.402.402 0 00-.505.25c-.145.413-.1.867.127 1.243a1.22 1.22 0 001.053.45c.22 0 .4-.176.4-.393a.396.396 0 00-.4-.392.527.527 0 01-.403-.123z">
                                                    </path>
                                                    <path pid={3} fillRule="nonzero" d="M21.6 16.118a2.38 2.38 0 00-.431.042c.02-.144.03-.29.031-.435v-3.137c-.002-1.948-1.613-3.527-3.6-3.53H6.4c-1.987.003-3.598 1.582-3.6 3.53v3.137c.002 1.949 1.613 3.528 3.6 3.53h6.54a2.397 2.397 0 002.26 1.569c.349 0 .694-.076 1.008-.224A2.4 2.4 0 0018.4 22a2.4 2.4 0 002.192-1.4c.314.148.66.224 1.008.224 1.325 0 2.4-1.054 2.4-2.353 0-1.3-1.075-2.353-2.4-2.353zm-8.8 2.353H6.4c-1.546-.002-2.798-1.23-2.8-2.746v-3.137c.002-1.515 1.254-2.743 2.8-2.745h11.2c1.546.002 2.798 1.23 2.8 2.745v3.137c0 .086-.01.17-.018.253a2.409 2.409 0 00-2.196-1.028 2.39 2.39 0 00-1.978 1.39 2.375 2.375 0 00-1.008-.222c-1.325.001-2.399 1.054-2.4 2.353zm8.8 1.568a1.598 1.598 0 01-.988-.345.406.406 0 00-.387-.059.394.394 0 00-.253.294 1.588 1.588 0 01-1.57 1.286 1.588 1.588 0 01-1.57-1.286.395.395 0 00-.253-.294.406.406 0 00-.387.059c-.28.223-.63.345-.992.345-.884 0-1.6-.702-1.6-1.568 0-.867.716-1.569 1.6-1.569.36.001.708.123.988.345.11.085.256.107.387.06a.394.394 0 00.253-.295 1.588 1.588 0 011.57-1.285c.772 0 1.433.54 1.57 1.285a.395.395 0 00.253.294c.13.048.278.026.387-.059.28-.222.63-.344.992-.345.884 0 1.6.702 1.6 1.569 0 .866-.716 1.568-1.6 1.568z">
                                                    </path>
                                                </g>
                                            </svg>
                                            <span>Xà phòng tắm</span>
                                        </li>
                                        <li className="list-item mt-2">
                                            <svg version="1.1" viewBox="0 0 24 24" className="svg-icon svg-fill" alt="" style={{ width: '24px', height: '24px' }}>
                                                <g fill="none" fillRule="evenodd">
                                                    <path pid={0} d="M0 0h24v24H0z" />
                                                    <path pid={1} fill="#000" fillRule="nonzero" d="M17.571 3.452L6.434 2.07a5.872 5.872 0 00-.669-.038C2.586 2.03 0 4.62 0 7.805v.12a5.78 5.78 0 002.932 5.028l1.54 6.226c.17.689.599 1.27 1.206 1.636a2.639 2.639 0 002.01.304l.042-.01a2.638 2.638 0 001.637-1.206 2.639 2.639 0 00.304-2.01l-1.112-4.495 9.012-1.12a.494.494 0 00.434-.49V3.943c0-.25-.186-.46-.434-.49zM8.711 18.13c.107.433.039.88-.191 1.262-.23.381-.595.65-1.027.757l-.043.01c-.432.107-.88.04-1.26-.19a1.656 1.656 0 01-.758-1.028l-1.36-5.495a5.737 5.737 0 002.367.215l1.131-.14 1.14 4.61zm8.305-6.78L6.32 12.68A4.786 4.786 0 01.99 7.925v-.12a4.786 4.786 0 015.328-4.754L17.016 4.38v6.97z">
                                                    </path>
                                                    <path pid={2} fill="#000" fillRule="nonzero" d="M2.763 7.865a3.293 3.293 0 003.29 3.29 3.293 3.293 0 003.288-3.29 3.293 3.293 0 00-3.289-3.289 3.293 3.293 0 00-3.289 3.29zm5.59 0c0 1.269-1.032 2.3-2.3 2.3a2.303 2.303 0 01-2.301-2.3c0-1.268 1.032-2.3 2.3-2.3 1.269 0 2.3 1.032 2.3 2.3z">
                                                    </path>
                                                    <path pid={3} fill="#000" d="M19.196 6.305c.288 0 .426.155.688.476.289.356.684.843 1.455.843s1.166-.487 1.455-.843c.262-.321.4-.476.687-.476a.494.494 0 100-.99c-.77 0-1.166.487-1.455.843-.261.322-.4.477-.687.477-.288 0-.426-.155-.687-.477-.29-.356-.685-.842-1.455-.842a.494.494 0 000 .989zm4.285 1.998c-.77 0-1.166.486-1.455.842-.261.322-.4.477-.687.477-.288 0-.426-.155-.687-.477-.29-.356-.685-.842-1.455-.842a.494.494 0 100 .989c.287 0 .425.155.687.476.289.356.684.843 1.455.843s1.166-.487 1.455-.843c.262-.321.4-.476.688-.476a.494.494 0 100-.99z">
                                                    </path>
                                                </g>
                                            </svg>
                                            <span>Máy sấy</span>
                                        </li>
                                    </ul>
                                    <div className="detail__utilities-title">
                                        <h3>Tiện nghi bếp </h3>
                                    </div>
                                    <ul className="detail__utilities-list mt-2 d-flex">
                                        <li className="list-item mt-2">
                                            <svg version="1.1" viewBox="0 0 24 24" className="svg-icon svg-fill" alt="" style={{ width: '24px', height: '24px' }}>
                                                <g fillRule="evenodd" transform="translate(1)">
                                                    <path pid={0} d="M2 0h18a2 2 0 012 2v20a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm1 1a2 2 0 00-2 2v18a2 2 0 002 2h16a2 2 0 002-2V3a2 2 0 00-2-2H3z">
                                                    </path>
                                                    <path pid={1} d="M11 19a8 8 0 110-16 8 8 0 010 16zm0-1a7 7 0 100-14 7 7 0 000 14z">
                                                    </path>
                                                    <rect pid={2} width={5} height={1} x={14} y={21} rx=".5" />
                                                    <rect pid={3} width={2} height={1} x={3} y={21} rx=".5" />
                                                    <rect pid={4} width={2} height={1} x={6} y={21} rx=".5" />
                                                </g>
                                            </svg>
                                            <span>Bếp điện</span>
                                        </li>
                                        <li className="list-item mt-2">
                                            <svg version="1.1" viewBox="0 0 24 24" className="svg-icon svg-fill" alt="" style={{ width: '24px', height: '24px' }}>
                                                <path pid={0} fill="#000" fillRule="nonzero" d="M16 10V8.5a.5.5 0 00-.5-.5h-11a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V15h-.5a1.5 1.5 0 01-1.5-1.5v-2a1.5 1.5 0 011.5-1.5h.5zm0 1h-.5a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h.5v-3zM1.5 4h21A1.5 1.5 0 0124 5.5v14a1.5 1.5 0 01-1.5 1.5h-21A1.5 1.5 0 010 19.5v-14A1.5 1.5 0 011.5 4zm0 1a.5.5 0 00-.5.5v14a.5.5 0 00.5.5h21a.5.5 0 00.5-.5v-14a.5.5 0 00-.5-.5h-21zm3 2h11A1.5 1.5 0 0117 8.5v8a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 16.5v-8A1.5 1.5 0 014.5 7zm1.354 3.853a.5.5 0 01-.708-.707l1-1a.5.5 0 01.708.707l-1 1zm0 3a.5.5 0 01-.708-.707l4-4a.5.5 0 01.708.707l-4 4zM20 9a1 1 0 110-2 1 1 0 010 2zm0 4a1 1 0 110-2 1 1 0 010 2zm0 4a1 1 0 110-2 1 1 0 010 2z">
                                                </path>
                                            </svg>
                                            <span>Lò vi sóng</span>
                                        </li>
                                        <li className="list-item mt-2">
                                            <svg version="1.1" viewBox="0 0 24 24" className="svg-icon svg-fill" alt="" style={{ width: '24px', height: '24px' }}>
                                                <path pid={0} fill="#000" fillRule="nonzero" d="M17.5 0A1.5 1.5 0 0119 1.5v21a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 015 22.5v-21A1.5 1.5 0 016.5 0h11zM6 13h12V1.5a.5.5 0 00-.5-.5h-11a.5.5 0 00-.5.5V13zm0 1v8.5a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V14H6zm1-6.5a.5.5 0 011 0v4a.5.5 0 11-1 0v-4zm0 8a.5.5 0 111 0v4a.5.5 0 11-1 0v-4zm8.854 6.354a.5.5 0 01-.708-.708l1-1a.5.5 0 01.708.708l-1 1zm-3 0a.5.5 0 01-.708-.708l4-4a.5.5 0 01.708.708l-4 4z">
                                                </path>
                                            </svg>
                                            <span>Tủ lạnh</span>
                                        </li>
                                    </ul>
                                    <div className="detail__utilities-title">
                                        <h3>Tiện nghi giải trí </h3>
                                    </div>
                                    <ul className="detail__utilities-list mt-2 d-flex">
                                        <li className="list-item mt-2">
                                            <svg version="1.1" viewBox="0 0 24 24" className="svg-icon svg-fill" alt="" style={{ width: '24px', height: '24px' }}>
                                                <g fillRule="evenodd">
                                                    <path pid={0} d="M10.568 12.772a.533.533 0 00-.396-.642c-.413-.098-1.015-1-.961-1.44a.533.533 0 10-1.06-.13c-.118.974.844 2.387 1.775 2.608a.532.532 0 00.642-.396z">
                                                    </path>
                                                    <path pid={1} fillRule="nonzero" d="M18.896 19.245c-.105 0-.209.007-.31.02l-1.422-3.521c.7-.4 1.337-.92 1.889-1.547a8.227 8.227 0 002.026-5.36.533.533 0 00-.533-.534H6.318a.533.533 0 00-.533.534c0 .35.024.7.071 1.048H3.554a.533.533 0 100 1.067h2.52a8.223 8.223 0 001.737 3.245 7.42 7.42 0 001.827 1.51l-2.97 7.565a.533.533 0 10.993.39l.675-1.718h8.139C16.637 23.104 17.66 24 18.896 24c1.348 0 2.445-1.067 2.445-2.378 0-1.31-1.097-2.377-2.445-2.377zM8.612 13.493A7.166 7.166 0 016.873 9.37h13.118a7.166 7.166 0 01-1.739 4.123A6.382 6.382 0 0116.303 15l-.013.005a.547.547 0 00-.074.038 6.408 6.408 0 01-2.784.607c-1.131 0-2.07-.258-2.838-.633a.535.535 0 00-.094-.048l-.003-.001a6.392 6.392 0 01-1.885-1.476zm1.987 2.685c.88.354 1.836.54 2.833.54.972 0 1.905-.177 2.767-.513l1.38 3.416a2.4 2.4 0 00-1.004 1.256h-7.82l1.844-4.699zm8.297 6.755c-.76 0-1.378-.588-1.378-1.31 0-.724.618-1.312 1.378-1.312.76 0 1.378.588 1.378 1.311s-.618 1.311-1.378 1.311z">
                                                    </path>
                                                    <path pid={2} d="M9.157 6.596a.533.533 0 10.603.88c1.742-1.196.952-2.481.572-3.099-.42-.682-.598-1.066.267-1.66a.533.533 0 10-.604-.88c-1.741 1.197-.951 2.482-.571 3.099.419.683.598 1.066-.267 1.66zm7.177 0a.533.533 0 10.604.88c1.741-1.196.951-2.481.572-3.098-.42-.683-.599-1.067.267-1.66a.533.533 0 10-.604-.88c-1.742 1.195-.952 2.48-.572 3.098.42.683.598 1.066-.267 1.66zm-3.98 0a.533.533 0 00.604.88c2.226-1.53 1.213-3.178.726-3.97-.603-.983-.876-1.643.42-2.533a.533.533 0 10-.603-.88c-2.226 1.529-1.213 3.178-.726 3.97.603.982.876 1.643-.42 2.533z">
                                                    </path>
                                                </g>
                                            </svg>
                                            <span>BBQ</span>
                                        </li>
                                        <li className="list-item mt-2">
                                            <svg version="1.1" viewBox="0 0 24 24" className="svg-icon svg-fill" alt="private_pool" style={{ width: '24px', height: '24px' }}>
                                            </svg>
                                            <span>
                                                Bể bơi cá nhân
              </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-12">
                                <div className="detail__booking">
                                    <div className="detail__booking-sidebar">
                                        <div className="booking-sidebar__content">
                                            <div className="room-sidebar__price">
                                                <p className="sidebar__price-text">
                                                    <span>468,000₫</span>
                                                    <small>/đêm</small>
                                                </p>
                                            </div>
                                            <button className="btn sidebar__content-btn">
                                                <svg version="1.1" viewBox="0 0 20 20" className="mr--6 svg-icon svg-fill" style={{ width: '20px', height: '20px' }}>
                                                    <g fill="none" fillRule="evenodd" transform="translate(-2 -2)">
                                                        <path pid={0} d="M0 0h24v24H0z" />
                                                        <circle pid={1} cx={12} cy={12} r={10} fill="#FFF" opacity=".3">
                                                        </circle>
                                                        <path pid={2} fill="#FFF" d="M12.42 17.158l3.037-6.073a.75.75 0 00-.67-1.085H12V7.177a.75.75 0 00-1.42-.335l-3.037 6.073A.75.75 0 008.213 14H11v2.823a.75.75 0 001.42.335z">
                                                        </path>
                                                    </g>
                                                </svg>
                                                <span className="ml-2">Đặt ngay</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div >
        )
    }



   

}

export default Detail
