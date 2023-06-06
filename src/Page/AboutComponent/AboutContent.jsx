import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
export default function AboutContent() {
  return (
    <Container>
      <div className="about-content">
        <div className="about-content-header">
          <span>Tai</span> <br />
          Sống đậm chất riêng
        </div>
        <div className="about-list">
          <Row className="about-item">
            <Col
              xs={12}
              md={5}
              className="order-1 order-md-0 or about-item-img"
            >
              <img src="/about-1.webp" alt="" />
            </Col>
            <Col xs={12} md={7} className="order-0 order-md-1 about-item-des">
              <span>Tai</span> là ứng dụng du lịch và tiện ích sống hàng đầu
              Đông Nam Á, chúng tôi giúp bạn khám phá các địa điểm mới một cách
              thoải mái, phù hợp với bản thân. Không chỉ vậy, để giúp bạn thực
              hiện nhiều ước vọng về phong cách sống của mình, chúng tôi còn
              hoàn thiện các dịch vụ của mình với một loạt các điểm tham quan,
              hoạt động địa phương cũng như các spa chăm sóc sức khỏe và sắc
              đẹp. Vì vậy, bất kể lựa chọn lối sống của bạn là gì, bạn chỉ cần
              một cú nhấp chuột!
            </Col>
          </Row>
          <Row className="about-item">
            <Col xs={12} md={7} className="about-item-des">
              <span>Tai</span> tin rằng hạnh phúc có thể đến dưới nhiều hình
              thức đối với những người khác nhau trong những thời điểm khác
              nhau. Vì vậy, với uy tín của chúng tôi và kinh nghiệm hơn 10 năm,
              chúng tôi hứa hẹn với bạn một loạt các lựa chọn phong phú để thắp
              sáng trạng thái hạnh phúc của chính bạn. Cho dù bạn đang tìm kiếm
              một trải nghiệm thú vị hay nghỉ ngơi trong khu nghỉ dưỡng 5 sao,
              một ngày spa thư giãn hay một chuyến phiêu lưu ly kỳ, một chuyến
              bay hạng nhất tiện lợi hay chuyến đi đường bộ thú vị, cho cả
              chuyến đi trong nước và quốc tế, bạn đều có tất cả trong một ứng
              dụng <span>Tai</span>. <br />
              <br />
              Với dịch vụ chăm sóc khách hàng 24/7 bằng các ngôn ngữ địa phương
              cũng như hơn 30 phương thức thanh toán địa phương khác nhau,
              <span>Tai</span> đã được tải xuống hơn 100 triệu lần, trở thành
              ứng dụng du lịch và tiện ích sống phổ biến nhất ở khu vực Đông Nam
              Á.
              <br />
              <br />
              Bạn còn chờ gì nữa? Đặt một chuyến đi được lên kế hoạch chu đáo
              hoặc một kỳ nghỉ được quyết định vào phút chót với chúng tôi. Với
              tất cả các lựa chọn du lịch và phong cách sống độc đáo của bạn,
              như mọi khi, <span>Tai</span> sẽ đồng hành cùng bạn.
            </Col>
            <Col xs={12} md={5} className="about-item-img long">
              <img src="/about-2.webp" alt="" />
            </Col>
          </Row>
        </div>
      </div>
      <Link
        to="/"
        className="about-more"
        onMouseDown={(e) => {
          e.target.style = "scale:0.95";
        }}
        onMouseUp={(e) => {
          e.target.style = "scale:1";
        }}
      >
        Khám Phá Thêm
      </Link>
    </Container>
  );
}
