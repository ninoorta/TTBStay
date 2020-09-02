import React, { Component } from 'react'
import "../../../assets/img/coins@2x.png"
import "../../../assets/img/top-sales@2x.png"
import "../../../assets/img/wallet@2x.png"
import "../../../assets/img/backpack@2x.png"

class Pros extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="col-lg-7  col-xs-12 last-xs first-md sign__left">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="pros">
                            <img src="assets/img/coins@2x.png" width={65} height={70} />
                            <h3 className="pros__title">Tích điểm nhanh chóng</h3>
                            <p className="pros__text m--0">Tích điểm đối với mỗi lượt đặt chỗ thành công. Quy đổi
          thành Lux Credit để du lịch nhiều hơn nữa.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="pros">
                            <img src="assets/img/top-sales@2x.png" width={55} height={70} />
                            <h3 className="pros__title">Tiện ích thông minh</h3>
                            <p className="pros__text m--0">Check-in và kiểm tra hóa đơn thanh toán kể cả khi không
          có kết nối mạng. Hoàn tiền nhanh gọn. Đổi lịch dễ dàng.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="pros">
                            <img src="assets/img/wallet@2x.png" width={60} height={70} />
                            <h3 className="pros__title">Thanh toán đơn giản</h3>
                            <p className="pros__text m--0">Phương thức thanh toán tiện lợi, an toàn. Tích hợp chức
          năng lưu thẻ để đặt phòng lần sau.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="pros">
                            <img src="assets/img/backpack@2x.png" width={55} height={70} />
                            <h3 className="pros__title">Ưu đãi mỗi ngày</h3>
                            <p className="pros__text m--0">Nhận thông báo ưu đãi từ Luxstay khi có kế hoạch du lịch
          để lựa chọn và đặt ngay cho mình một chỗ ở phù hợp, tiện nghi với giá tốt nhất.</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Pros
