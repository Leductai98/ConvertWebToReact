import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/help.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function Help() {
  document.title = "Trợ giúp - Tai";
  return (
    <>
      <div className="help__banner">
        <div className="banner-header">
          <p>Cần giúp đỡ ư? Chúng tôi đến giúp quý khách đây!</p>
        </div>
        <div className="banner-house">
          <div className="house-icon">
            <img src="building-svgrepo-com.svg" alt="" />
          </div>
        </div>
      </div>
      <Container>
        <div className="help__content">
          <Row>
            <Col xs={4}>
              <div className="list-question">
                <a href="#1" className="list-question-item">
                  <div className="question-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                    </svg>
                  </div>
                  <div className="question-text">Chi tiết đặt chỗ</div>{" "}
                </a>
                <a href="#2" className="list-question-item">
                  <div className="question-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-x-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </div>
                  <div className="question-text">Hủy bỏ</div>
                </a>
                <a href="#3" className="list-question-item">
                  <div className="question-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-newspaper"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                      <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
                    </svg>
                  </div>
                  <div className="question-text">Thay đổi việc đặt chỗ</div>
                </a>
                <a href="#4" className="list-question-item">
                  <div className="question-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-bell"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                    </svg>
                  </div>
                  <div className="question-text">Yêu cầu đặc biệt</div>
                </a>
                <a href="#5" className="list-question-item">
                  <div className="question-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-house-lock"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708L7.293 1.5Z" />
                      <path d="M10 13a1 1 0 0 1 1-1v-1a2 2 0 0 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z" />
                    </svg>
                  </div>
                  <div className="question-text">
                    Đóng băng giá cả cho khách sạn
                  </div>
                </a>
                <a href="#6" className="list-question-item">
                  <div className="question-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-heart-pulse"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01L8 2.748ZM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5Z" />
                      <path d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162l-1.874-4.686Z" />
                    </svg>
                  </div>
                  <div className="question-text">COVID - 19</div>
                </a>
              </div>
            </Col>
            <Col xs={8}>
              <div className="question-answer-list">
                <div className="question-contact">
                  <div className="question-contact-text">
                    Có câu trả lời nhanh, liên hệ với chỗ nghỉ hoặc bộ phận chăm
                    sóc khách hàng <span>Tai</span>, v.v. với các tính năng trợ
                    giúp tự phục vụ của chúng tôi.
                  </div>
                  <div className="question-contact-phone">
                    <div className="contact-phone-icon">
                      <img src="contact-us-joy-062022.ico" alt="" />
                    </div>
                    <a href="tel: 0776455910" className="contact-phone-number">
                      Liên hệ với Dịch vụ khách hàng Tai
                    </a>
                  </div>
                </div>
                <div id="1" className="question-answer-item">
                  <div className="question-answer-header">Chi tiết đặt chỗ</div>
                  <div className="answer-list">
                    <div className="answer-wrap">
                      <input type="checkbox" id="answer-input-1" />
                      <label htmlFor="answer-input-1" className="answer-item">
                        <div className="answer-item-left">
                          <div className="answer-display">
                            Làm thế nào tôi có được thêm thông tin về phòng hoặc
                            cơ sở vật chất của chỗ nghỉ?
                          </div>
                          <div className="answer-hide">
                            Quý khách có thể tìm thấy chi tiết về chỗ nghỉ trong
                            thư điện tử xác nhận của mình hoặc trên trang chi
                            tiết chỗ nghỉ. Về bất cứ điều gì khác, quý khách
                            cũng có thể liên hệ trực tiếp với chỗ nghỉ.
                          </div>
                        </div>
                        <div className="answer-item-right">
                          <div className="answer-item-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="answer-wrap">
                      <input type="checkbox" id="answer-input-2" />
                      <label htmlFor="answer-input-2" className="answer-item">
                        <div className="answer-item-left">
                          <div className="answer-display">
                            Khi nào tôi có thư điện tử xác nhận?
                          </div>
                          <div className="answer-hide">
                            Trong hầu hết các trường hợp, quý khách sẽ nhận được
                            thư điện tử này cùng với chứng từ đặt phòng (tệp
                            PDF) trong vòng 30 phút kể từ khi đặt phòng. Nếu quý
                            khách vẫn chưa nhận được nó sau thời gian đó thì vui
                            lòng kiểm tra thư rác và/hoặc bộ lọc thư rác. Quý
                            khách cũng có thể tải về hoặc gửi lại chứng từ đặt
                            phòng trực tuyến.
                          </div>
                        </div>
                        <div className="answer-item-right">
                          <div className="answer-item-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="answer-wrap">
                      <input type="checkbox" id="answer-input-3" />
                      <label htmlFor="answer-input-3" className="answer-item">
                        <div className="answer-item-left">
                          <div className="answer-display">
                            Tôi có thể kiểm tra chi tiết và trạng thái đặt phòng
                            của mình ở đâu?
                          </div>
                          <div className="answer-hide">
                            Quý khách luôn có thể xem chi tiết và trạng thái đặt
                            phòng trực tuyến bằng cách đăng nhập và chọn "Đơn
                            đặt phòng của tôi" từ lệnh đơn tài khoản. Nếu quý
                            khách không biết chi tiết đăng nhập của mình thì quý
                            khách có thể theo liên kết "Đơn đặt phòng của tôi"
                            trong thư điện tử xác nhận của mình.
                          </div>
                        </div>
                        <div className="answer-item-right">
                          <div className="answer-item-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="answer-wrap">
                    <input type="checkbox" id="answer-input-4" />
                    <label htmlFor="answer-input-4" className="answer-item">
                      <div className="answer-item-left">
                        <div className="answer-display">
                          <span>Tai</span> có thể gửi lại chứng từ đặt phòng cho
                          tôi không?
                        </div>
                        <div className="answer-hide">
                          <span>Tai</span> hiện cung cấp cho quý khách lựa chọn
                          tự phục vụ. Chỉ bằng cách bấm vào liên kết tự phục vụ
                          được cung cấp trong thư điện tử xác nhận, quý khách sẽ
                          có thể gửi lại chứng từ đặt phòng.
                        </div>
                      </div>
                      <div className="answer-item-right">
                        <div className="answer-item-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-down"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="answer-wrap">
                    <input type="checkbox" id="answer-input-5" />
                    <label htmlFor="answer-input-5" className="answer-item">
                      <div className="answer-item-left">
                        <div className="answer-display">
                          Tôi có thể thêm giường phụ/cũi em bé trong phòng mình
                          không?
                        </div>
                        <div className="answer-hide">
                          Sự sẵn có của giường phụ/cũi em bé tùy thuộc vào chỗ
                          nghỉ. Khoản phí phụ thu cho trẻ em, gồm cả giường phụ,
                          chưa bao gồm trong giá đặt phòng trừ khi được quy
                          định. Vui lòng liên hệ trực tiếp với chỗ nghỉ để biết
                          thông tin này.
                        </div>
                      </div>
                      <div className="answer-item-right">
                        <div className="answer-item-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-down"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="answer-wrap">
                    <input type="checkbox" id="answer-input-6" />
                    <label htmlFor="answer-input-6" className="answer-item">
                      <div className="answer-item-left">
                        <div className="answer-display">
                          Giá phòng gồm cả bữa sáng chưa?
                        </div>
                        <div className="answer-hide">
                          Nếu gồm cả bữa sáng thì giá sẽ hiển thị "Gồm Cả Bữa
                          Sáng" bên dưới loại phòng. Nếu nó không được đề cập
                          thì khách sạn không bao gồm bữa sáng với ưu đãi phòng
                          này.
                        </div>
                      </div>
                      <div className="answer-item-right">
                        <div className="answer-item-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-down"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="answer-wrap">
                    <input type="checkbox" id="answer-input-7" />
                    <label htmlFor="answer-input-7" className="answer-item">
                      <div className="answer-item-left">
                        <div className="answer-display">
                          Tôi chưa nhận được xác nhận đặt chỗ và không thể xác
                          định vị trí đơn đặt chỗ của mình trực tuyến.
                        </div>
                        <div className="answer-hide">
                          Trong hầu hết các trường hợp, quý khách sẽ nhận được
                          xác nhận đặt chỗ (tệp PDF) qua thư điện tử trong vòng
                          30 phút sau khi hoàn tất việc đặt chỗ. Nếu quý khách
                          vẫn chưa nhận được nó sau thời gian đó thì vui lòng
                          kiểm tra thư rác và/hoặc thư mục thư rác. Quý khách
                          cũng có thể xem chi tiết và trạng thái đặt chỗ trực
                          tuyến bằng cách đăng nhập và chọn "Đơn đặt chỗ của
                          tôi" từ lệnh đơn tài khoản. Nếu quý khách vẫn không
                          thể xác định vị trí đơn đặt chỗ của mình và chưa nhận
                          được xác nhận đặt chỗ sau 24 giờ thì vui lòng liên hệ
                          với chúng tôi.
                        </div>
                      </div>
                      <div className="answer-item-right">
                        <div className="answer-item-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-down"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="answer-wrap">
                    <input type="checkbox" id="answer-input-8" />
                    <label htmlFor="answer-input-8" className="answer-item">
                      <div className="answer-item-left">
                        <div className="answer-display">
                          Làm sao tôi có thể gửi xác nhận đặt phòng tới địa chỉ
                          thư điện tử khác với địa chỉ tôi đã sử dụng để đặt
                          phòng?
                        </div>
                        <div className="answer-hide">
                          Quý khách sẽ nhận được một thư điện tử xác nhận đặt
                          phòng tới địa chỉ thư điện tử mà quý khách đã cung cấp
                          trong quá trình đặt phòng. Ngoài ra, quý khách có thể
                          tìm được các đơn đặt phòng sắp tới, đã hủy bỏ và đã
                          hoàn thành trên trang "[Đơn đặt chỗ của tôi]"
                        </div>
                      </div>
                      <div className="answer-item-right">
                        <div className="answer-item-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-down"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <div id="2" className="question-answer-item">
                  <div className="question-answer-header">Hủy bỏ</div>
                  <div className="answer-list">
                    <div className="answer-wrap">
                      <input type="checkbox" id="answer-input-9" />
                      <label htmlFor="answer-input-9" className="answer-item">
                        <div className="answer-item-left">
                          <div className="answer-display">
                            Làm thế nào tôi có thể hủy phòng của mình?
                          </div>
                          <div className="answer-hide">
                            Quý khách có thể hủy phòng trực tuyến trên website
                            hoặc ứng dụng <span>Tai</span>. Mọi phí hủy do chỗ
                            nghỉ quyết định và được liệt kê trong chính sách hủy
                            của quý khách.
                          </div>
                        </div>
                        <div className="answer-item-right">
                          <div className="answer-item-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="answer-wrap">
                      <input type="checkbox" id="answer-input-10" />
                      <label htmlFor="answer-input-10" className="answer-item">
                        <div className="answer-item-left">
                          <div className="answer-display">
                            Tôi sẽ bị tính phí nếu tôi hủy phòng của mình chứ?
                          </div>
                          <div className="answer-hide">
                            Nếu quý khách có đơn đặt phòng miễn phí hủy thì quý
                            khách sẽ không phải trả phí hủy. Nếu đơn đặt phòng
                            của quý khách không còn được miễn phí hủy hoặc không
                            được hoàn trả thì quý khách có thể gánh chịu phí
                            hủy. Mọi phí hủy cho việc đặt phòng đều do chỗ nghỉ
                            quyết định.
                          </div>
                        </div>
                        <div className="answer-item-right">
                          <div className="answer-item-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="answer-wrap">
                      <input type="checkbox" id="answer-input-11" />
                      <label htmlFor="answer-input-11" className="answer-item">
                        <div className="answer-item-left">
                          <div className="answer-display">
                            Làm sao tôi biết việc đặt phòng của mình đã bị hủy
                            bỏ hãy chưa?
                          </div>
                          <div className="answer-hide">
                            Sau khi quý khách hủy phòng với chúng tôi, quý khách
                            sẽ nhận được thư điện tử xác nhận việc hủy. Hãy kiểm
                            tra hộp thư đến và thư mục rác của quý khách.
                          </div>
                        </div>
                        <div className="answer-item-right">
                          <div className="answer-item-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="answer-wrap">
                    <input type="checkbox" id="answer-input-12" />
                    <label htmlFor="answer-input-12" className="answer-item">
                      <div className="answer-item-left">
                        <div className="answer-display">
                          Tôi có thể tìm chính sách hủy ở đâu?
                        </div>
                        <div className="answer-hide">
                          Khi tìm phòng, quý khách sẽ có thể thấy các điều kiện
                          đặt phòng và chính sách hủy cùng với thông tin khác về
                          phòng. Quý khách cũng có thể tìm thông tin này trên
                          chứng từ đặt phòng của mình.
                        </div>
                      </div>
                      <div className="answer-item-right">
                        <div className="answer-item-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-down"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="answer-wrap">
                    <input type="checkbox" id="answer-input-13" />
                    <label htmlFor="answer-input-13" className="answer-item">
                      <div className="answer-item-left">
                        <div className="answer-display">
                          Bao lâu tôi sẽ nhận lại tiền của mình?
                        </div>
                        <div className="answer-hide">
                          Số tiền hoàn lại, nếu có, sẽ được xử lý ngay lập tức.
                          Kể từ ngày xử lý/ngày hoàn tiền, ngân hàng có thể mất
                          đến 30 ngày làm việc để hoàn trả khoản tiền này hoặc
                          cho đến chu kỳ thanh toán tiếp theo của quý khách.
                          Khoản hoàn trả sẽ được ngân hàng chuyển đổi
                        </div>
                      </div>
                      <div className="answer-item-right">
                        <div className="answer-item-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-down"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <div id="3" className="question-answer-item">
                  <div className="question-answer-header">
                    Thay đổi việc đặt chỗ
                  </div>
                  <div className="answer-list">
                    <div className="answer-wrap">
                      <input type="checkbox" id="answer-input-14" />
                      <label htmlFor="answer-input-14" className="answer-item">
                        <div className="answer-item-left">
                          <div className="answer-display">
                            Tôi muốn thay đổi ngày đặt phòng của mình. Làm sao
                            tôi có thể làm vậy?
                          </div>
                          <div className="answer-hide">
                            <span>Tai</span> hiện cung cấp cho quý khách lựa
                            chọn tự phục vụ. Hãy chọn đơn đặt phòng và chọn ngày
                            mới.
                          </div>
                        </div>
                        <div className="answer-item-right">
                          <div className="answer-item-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="answer-wrap">
                      <input type="checkbox" id="answer-input-15" />
                      <label htmlFor="answer-input-15" className="answer-item">
                        <div className="answer-item-left">
                          <div className="answer-display">
                            Tôi muốn thay đổi tên của khách chính. Làm sao tôi
                            có thể làm vậy?
                          </div>
                          <div className="answer-hide">
                            <span>Tai</span> hiện cung cấp cho quý khách lựa
                            chọn tự phục vụ. Hãy chọn đơn đặt phòng và cập nhật
                            tên khách.
                          </div>
                        </div>
                        <div className="answer-item-right">
                          <div className="answer-item-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="answer-wrap">
                      <input type="checkbox" id="answer-input-16" />
                      <label htmlFor="answer-input-16" className="answer-item">
                        <div className="answer-item-left">
                          <div className="answer-display">
                            Làm thế nào để tôi kéo dài thời gian ở?
                          </div>
                          <div className="answer-hide">
                            <span>Tai</span> hiện cung cấp cho quý khách lựa
                            chọn tự phục vụ. Hãy chọn đơn đặt phòng và chọn ngày
                            mới. Xin lưu ý rằng không phải tất cả các đơn đặt
                            phòng sẽ cho phép thay đổi ngày đặt phòng.
                          </div>
                        </div>
                        <div className="answer-item-right">
                          <div className="answer-item-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="answer-wrap">
                    <input type="checkbox" id="answer-input-17" />
                    <label htmlFor="answer-input-17" className="answer-item">
                      <div className="answer-item-left">
                        <div className="answer-display">
                          Làm thế nào để tôi rút ngắn thời gian ở?
                        </div>
                        <div className="answer-hide">
                          <span>Tai</span> hiện cung cấp cho quý khách lựa chọn
                          tự phục vụ. Hãy chọn đơn đặt phòng và chọn ngày mới.
                          Xin lưu ý rằng không phải tất cả các đơn đặt phòng sẽ
                          cho phép thay đổi ngày đặt phòng.
                        </div>
                      </div>
                      <div className="answer-item-right">
                        <div className="answer-item-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-down"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <div id="4" className="question-answer-item">
                  <div className="question-answer-header">Yêu cầu đặc biệt</div>
                  <div className="answer-list">
                    <div className="answer-wrap">
                      <input type="checkbox" id="answer-input-18" />
                      <label htmlFor="answer-input-18" className="answer-item">
                        <div className="answer-item-left">
                          <div className="answer-display">
                            Làm thế nào tôi có thể đưa ra một yêu cầu đặc biệt?
                          </div>
                          <div className="answer-hide">
                            Quý khách có thể gửi yêu cầu đặc biệt của mình tới
                            chỗ nghỉ bằng lựa chọn tự phục vụ. Xin lưu ý rằng
                            mọi yêu cầu đặc biệt đều lệ thuộc vào khả năng cung
                            cấp và không thể được <span>Tai</span> đảm bảo.
                          </div>
                        </div>
                        <div className="answer-item-right">
                          <div className="answer-item-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="answer-wrap">
                      <input type="checkbox" id="answer-input-19" />
                      <label htmlFor="answer-input-19" className="answer-item">
                        <div className="answer-item-left">
                          <div className="answer-display">
                            Làm thế nào thì tôi sẽ biết là một yêu cầu đặc biệt
                            được xác nhận?
                          </div>
                          <div className="answer-hide">
                            Tất cả các yêu cầu đặc biệt đều lệ thuộc vào khả
                            năng đáp ứng và không thể được <span>Tai</span> bảo
                            đảm. Khi nhận được, <span>Tai</span> sẽ chuyển yêu
                            cầu đến chỗ nghỉ ưa thích của quý khách, và quý
                            khách có thể theo dõi với chỗ nghỉ trước hoặc khi
                            đến.
                          </div>
                        </div>
                        <div className="answer-item-right">
                          <div className="answer-item-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="answer-wrap">
                      <input type="checkbox" id="answer-input-20" />
                      <label htmlFor="answer-input-20" className="answer-item">
                        <div className="answer-item-left">
                          <div className="answer-display">
                            Tôi có được yêu cầu nhận phòng sớm/trả phòng muộn
                            không?
                          </div>
                          <div className="answer-hide">
                            Quý khách có thể gửi yêu cầu đặc biệt của mình về
                            việc nhận phòng sớm/trả phòng muộn tới chỗ nghỉ bằng
                            lựa chọn tự phục vụ. Xin lưu ý rằng mọi yêu cầu đặc
                            biệt đều lệ thuộc vào khả năng cung cấp và không thể
                            được
                            <span>Tai</span> đảm bảo.
                          </div>
                        </div>
                        <div className="answer-item-right">
                          <div className="answer-item-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="answer-wrap">
                    <input type="checkbox" id="answer-input-21" />
                    <label htmlFor="answer-input-21" className="answer-item">
                      <div className="answer-item-left">
                        <div className="answer-display">
                          Tôi có thể chọn loại giường tôi muốn, yêu cầu phòng
                          hút thuốc hoặc cấm hút thuốc, hoặc yêu cầu phòng nối
                          liền nhau chứ?
                        </div>
                        <div className="answer-hide">
                          Tất cả các yêu cầu đặc biệt đều lệ thuộc vào khả năng
                          đáp ứng và không thể được <span>Tai</span> bảo đảm.
                          Khi nhận được, <span>Tai</span> sẽ chuyển yêu cầu đến
                          chỗ nghỉ ưa thích của quý khách, và quý khách có thể
                          theo dõi với chỗ nghỉ trước hoặc khi đến
                        </div>
                      </div>
                      <div className="answer-item-right">
                        <div className="answer-item-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-down"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <div id="5" className="question-answer-item">
                  <div className="question-answer-header">
                    Đóng băng Giá cả cho khách sạn
                  </div>
                  <div className="answer-list">
                    <div className="answer-wrap">
                      <input type="checkbox" id="answer-input-22" />
                      <label htmlFor="answer-input-22" className="answer-item">
                        <div className="answer-item-left">
                          <div className="answer-display">
                            Đóng băng Giá cả cho khách sạn: Chương trình hoạt
                            động ra sao?
                          </div>
                          <div className="answer-hide">
                            Không bao giờ bỏ lỡ ưu đãi khách sạn một lần nữa với
                            Đóng băng Giá Khách sạn của Hopper! Chỉ cần trả một
                            khoản tiền đặt cọc nhỏ để đóng băng giá phòng khách
                            sạn trên <span>Tai</span>, và quay lại để đảm bảo
                            việc đặt phòng của quý khách vào một ngày sau này.
                            Nếu giá tăng, chúng tôi sẽ bù lấp giá tiền chênh
                            lệch đến giới hạn tối đa được liệt kê trong chính
                            sách Đóng băng Giá cả của quý khách. Nếu giá giảm
                            thì quý khách trả mức giá thấp hơn! Khi quý khách
                            hoàn tất việc đặt phòng, tiền đặt cọc sẽ được áp
                            dụng cho giá thành sau cùng của đơn đặt phòng. Nếu
                            quý khách không đặt phòng thì việc đóng băng sẽ hết
                            hạn và tiền đặt cọc bị mất.
                          </div>
                        </div>
                        <div className="answer-item-right">
                          <div className="answer-item-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="answer-wrap">
                      <input type="checkbox" id="answer-input-23" />
                      <label htmlFor="answer-input-23" className="answer-item">
                        <div className="answer-item-left">
                          <div className="answer-display">
                            Khung thời gian đóng băng giá khách sạn của tôi là
                            gì?
                          </div>
                          <div className="answer-hide">
                            Khi quý khách mua Đóng băng Giá cả, chúng tôi sẽ
                            đóng băng giá cả cho đến ngày hết hạn của quý khách,
                            ngày này sẽ được quy định cho quý khách tại thời
                            điểm mua. Quý khách có thể xem ngày hết hạn và các
                            chi tiết khác trực tiếp trên website của{" "}
                            <span>Tai</span> trên trang Đơn đặt chỗ của tôi.
                          </div>
                        </div>
                        <div className="answer-item-right">
                          <div className="answer-item-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="answer-wrap">
                      <input type="checkbox" id="answer-input-24" />
                      <label htmlFor="answer-input-24" className="answer-item">
                        <div className="answer-item-left">
                          <div className="answer-display">
                            Tôi có thể đặt khách sạn khác hoặc ngày khác với
                            việc đóng băng giá khách sạn của tôi không?
                          </div>
                          <div className="answer-hide">
                            Một khi đã được mua, Đóng băng Giá cả không thể được
                            áp dụng cho khách sạn hoặc ngày khác. Nếu không còn
                            muốn mua phòng đó nữa, quý khách có thể để Đóng băng
                            Giá cả hết hạn nhưng tiền đặt cọc là khoản mua không
                            hoàn tiền.
                          </div>
                        </div>
                        <div className="answer-item-right">
                          <div className="answer-item-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="answer-wrap">
                    <input type="checkbox" id="answer-input-25" />
                    <label htmlFor="answer-input-25" className="answer-item">
                      <div className="answer-item-left">
                        <div className="answer-display">
                          Có giới hạn về số tiền một lần đóng băng giá khách sạn
                          sẽ bù lấp không?
                        </div>
                        <div className="answer-hide">
                          Có, giới hạn tăng giá được áp dụng cho mỗi lần Đóng
                          băng Giá khách sạn. Nếu có sự tăng giá về đơn đặt
                          phòng của quý khách, Hopper sẽ trả phí cho việc tăng
                          đến giới hạn tối đa được chỉ báo tại thời điểm đặt
                          phòng, chưa bao gồm thuế và phí dịch vụ. Giới hạn tăng
                          giá được làm rõ trước khi mua và sẽ được trình bày lại
                          trên màn hình xác nhận. Nếu giá tăng hơn giới hạn tối
                          đa đã quy định, quý khách sẽ trả giá hiện hành trừ đi
                          giới hạn tăng.
                        </div>
                      </div>
                      <div className="answer-item-right">
                        <div className="answer-item-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-down"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="answer-wrap">
                    <input type="checkbox" id="answer-input-26" />
                    <label htmlFor="answer-input-26" className="answer-item">
                      <div className="answer-item-left">
                        <div className="answer-display">
                          Tôi có thể hủy đóng băng giá khách sạn của tôi không?
                        </div>
                        <div className="answer-hide">
                          Tiền đặt cọc Đóng băng Giá cả là khoản mua không hoàn
                          tiền. Nếu quý khách quyết định không quy đổi Đóng băng
                          Giá cả trước khi hết hạn, tiền đặt cọc sẽ bị mất. Nếu
                          quý khách đặt phòng từ một lần Đóng băng Giá cả hiện
                          có và quý khách chọn hủy phòng của mình, xin lưu ý
                          rằng tiền đặt cọc Đóng băng Giá cả vẫn không được
                          hoàn.
                        </div>
                      </div>
                      <div className="answer-item-right">
                        <div className="answer-item-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-down"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="answer-wrap">
                    <input type="checkbox" id="answer-input-27" />
                    <label htmlFor="answer-input-27" className="answer-item">
                      <div className="answer-item-left">
                        <div className="answer-display">
                          Làm thế nào để tôi mua đóng băng giá khách sạn?
                        </div>
                        <div className="answer-hide">
                          Khi lựa chọn phòng khách sạn, quý khách sẽ thấy lựa
                          chọn đóng băng giá. Chỉ cần nhấn vào nút Đóng băng Giá
                          cả và hoàn tất các bước để mua. Sau khi mua Đóng băng
                          Giá cả, lúc ấy quý khách sẽ thấy nó trên website của
                          <span>Tai</span> trên trang Đơn đặt chỗ của tôi.
                        </div>
                      </div>
                      <div className="answer-item-right">
                        <div className="answer-item-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-down"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="answer-wrap">
                    <input type="checkbox" id="answer-input-28" />
                    <label htmlFor="answer-input-28" className="answer-item">
                      <div className="answer-item-left">
                        <div className="answer-display">
                          Làm thế nào để tôi dùng đóng băng giá khách sạn của
                          tôi?
                        </div>
                        <div className="answer-hide">
                          Khi thanh toán tiền đặt cọc để đóng băng giá khách
                          sạn, quý khách sẽ thấy Đóng băng Giá cả trên
                          <span>Tai</span> trên trang Đơn đặt chỗ của tôi.{" "}
                          <br />
                          -- Phòng đóng băng giá của quý khách sẽ xuất hiện
                          trong mục các đơn đặt chỗ sắp tới. Để hoàn tất việc
                          đặt phòng Đóng băng Giá cả, hãy nhấn vào “Đặt phòng
                          đóng băng giá của quý khách”. Xin lưu ý rằng nếu quý
                          khách cố gắng đặt phòng từ bất kỳ khu vực nào khác
                          trên nền tảng thì Đóng băng Giá cả của quý khách sẽ
                          không được áp dụng. <br />
                          -- Sau khi nhấn vào “Đặt phòng đóng băng giá của quý
                          khách”, nó sẽ cho thấy chi tiết đặt phòng để quý khách
                          xem lại trước khi mua <br />
                          -- Một khi đã kiểm tra hết mọi thứ và đã sẵn sàng để
                          đặt phòng, quý khách có thể bấm vào cuối đơn đặt phòng
                          đóng băng giá của mình để thanh toán và đảm bảo phòng
                          khách sạn của mình.
                        </div>
                      </div>
                      <div className="answer-item-right">
                        <div className="answer-item-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-down"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="answer-wrap">
                    <input type="checkbox" id="answer-input-29" />
                    <label htmlFor="answer-input-29" className="answer-item">
                      <div className="answer-item-left">
                        <div className="answer-display">
                          Tôi nên làm gì nếu việc đặt phòng đóng băng giá khách
                          sạn của tôi thất bại?
                        </div>
                        <div className="answer-hide">
                          Nếu quý khách dùng Đóng băng Giá cả để đặt phòng khách
                          sạn và việc đặt phòng thất bại do không sẵn có phòng,
                          chúng tôi sẽ tự động bắt đầu hoàn tiền với Hopper và
                          quý khách sẽ nhận được tiền đặt cọc trở lại vào phương
                          thức thanh toán ban đầu.
                        </div>
                      </div>
                      <div className="answer-item-right">
                        <div className="answer-item-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-down"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="answer-wrap">
                    <input type="checkbox" id="answer-input-30" />
                    <label htmlFor="answer-input-30" className="answer-item">
                      <div className="answer-item-left">
                        <div className="answer-display">
                          Tôi có thể được hoàn tiền đặt cọc đóng băng giá khách
                          sạn của tôi không?
                        </div>
                        <div className="answer-hide">
                          Trong hầu hết các trường hợp, tiền đặt cọc Đóng băng
                          Giá cả là khoản mua không hoàn tiền. Điều này có nghĩa
                          là nếu quý khách quyết định không hoàn tất việc đặt
                          phòng, Đóng băng Giá cả sẽ hết hạn và tiền đặt cọc của
                          quý khách sẽ bị mất. Nếu quý khách đặt phòng từ một
                          lần Đóng băng Giá cả hiện có và quý khách chọn hủy
                          phòng của mình, xin lưu ý rằng tiền đặt cọc Đóng băng
                          Giá cả vẫn không được hoàn. Tuy nhiên, trong trường
                          hợp hiếm hoi phát sinh một trong các tình huống dưới
                          đây, quý khách có thể đủ điều kiện để được hoàn tiền
                          đặt cọc Đóng băng Giá cả của mình: <br />- Nếu khách
                          sạn mà quý khách mua Đóng băng Giá cả không còn phòng
                          tại thời điểm đặt phòng. <br />- Nếu khách sạn hủy
                          phòng của quý khách.
                        </div>
                      </div>
                      <div className="answer-item-right">
                        <div className="answer-item-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-down"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="answer-wrap">
                    <input type="checkbox" id="answer-input-31" />
                    <label htmlFor="answer-input-31" className="answer-item">
                      <div className="answer-item-left">
                        <div className="answer-display">
                          Tôi có thể mua đóng băng giá khách sạn cho hơn một
                          phòng không?
                        </div>
                        <div className="answer-hide">
                          Được. Quý khách có thể đóng băng nhiều phòng cùng một
                          lúc. Chỉ cần chọn số lượng phòng quý khách muốn đóng
                          băng giá cả trên trang thông tin chi tiết của chỗ nghỉ
                          và bấm vào Đóng băng giá cả.
                        </div>
                      </div>
                      <div className="answer-item-right">
                        <div className="answer-item-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-down"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="answer-wrap">
                    <input type="checkbox" id="answer-input-32" />
                    <label htmlFor="answer-input-32" className="answer-item">
                      <div className="answer-item-left">
                        <div className="answer-display">
                          Nếu giá khách sạn giảm sau khi mua đóng băng giá khách
                          sạn thì giá thấp hơn có được thực hiện không?
                        </div>
                        <div className="answer-hide">
                          Nếu quý khách đã sẵn sàng để hoàn tất đặt phòng Đóng
                          băng Giá cả và giá của khách sạn thấp hơn giá quý
                          khách đã đóng băng thì tiền đặt cọc sẽ được áp dụng
                          cho mức giá khách sạn thấp hơn.
                        </div>
                      </div>
                      <div className="answer-item-right">
                        <div className="answer-item-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-down"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <div id="6" className="question-answer-item">
                  <div className="question-answer-header">COVID-19</div>
                  <div className="answer-list">
                    <div className="answer-wrap">
                      <input type="checkbox" id="answer-input-33" />
                      <label htmlFor="answer-input-33" className="answer-item">
                        <div className="answer-item-left">
                          <div className="answer-display">
                            Tôi có thể đổi hoặc hủy chỗ của mình do COVID-19
                            được không?
                          </div>
                          <div className="answer-hide">
                            Bất kỳ thay đổi nào quý khách muốn tạo ra cho việc
                            đặt chỗ của mình phụ thuộc vào các chính sách đặt
                            chỗ. Do tác động hiện nay của COVID-19, một số điểm
                            đến nhất định tiếp tục áp đặt và sửa đổi những hạn
                            chế đối với việc đi lại. Vui lòng kiểm tra để xem
                            liệu điểm đến của quý khách có bất kỳ giới hạn đi
                            lại nào không trước khi đặt chỗ với <span>Tai</span>
                            .
                          </div>
                        </div>
                        <div className="answer-item-right">
                          <div className="answer-item-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="answer-wrap">
                      <input type="checkbox" id="answer-input-34" />
                      <label htmlFor="answer-input-34" className="answer-item">
                        <div className="answer-item-left">
                          <div className="answer-display">
                            Nếu tôi đã đặt chỗ ở qua <span>Tai</span> thì làm
                            sao tôi có thể kiểm tra chính sách hủy của mình?
                          </div>
                          <div className="answer-hide">
                            Nếu quý khách đang sử dụng ứng dụng
                            <span>Tai</span> thì hãy đăng nhập và nhấn vào biểu
                            tượng Đặt chỗ ở phía dưới màn hình. Sau đó, hãy chọn
                            đơn đặt phòng của quý khách và chính sách hủy của
                            quý khách sẽ được hiển thị trong Điều kiện đặt
                            phòng. Nếu quý khách đang sử dụng website của
                            <span>Tai</span> thì hãy đăng nhập và chọn Đơn đặt
                            chỗ của tôi từ lệnh đơn. Sau đó, hãy bấm vào Sửa đơn
                            đặt phòng và kiểm tra phần Điều kiện đặt phòng để
                            biết chính sách hủy của quý khách.
                          </div>
                        </div>
                        <div className="answer-item-right">
                          <div className="answer-item-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="answer-wrap">
                      <input type="checkbox" id="answer-input-35" />
                      <label htmlFor="answer-input-35" className="answer-item">
                        <div className="answer-item-left">
                          <div className="answer-display">
                            Nếu tôi đã đặt trọn gói qua <span>Tai</span> thì làm
                            sao tôi có thể kiểm tra chính sách hủy của mình?
                          </div>
                          <div className="answer-hide">
                            Nếu quý khách đã đặt trọn gói với chúng tôi thì quý
                            khách sẽ nhận được một thư điện tử riêng về chỗ ở
                            của mình. Xin lưu ý rằng các chính sách bỏ phí cho
                            việc đặt chỗ ở của quý khách có thể khác với việc
                            đặt vé máy bay của quý khách.
                          </div>
                        </div>
                        <div className="answer-item-right">
                          <div className="answer-item-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
