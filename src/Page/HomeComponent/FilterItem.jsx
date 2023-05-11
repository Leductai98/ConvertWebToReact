import React from "react";

export default function FilterItem({ data, urlImage }) {
  return (
    <>
      <div className="room__des-header">
        <div className="header-name">
          <p>
            ${"{"}item.name{"}"}
          </p>
        </div>
        <div className="header-info">
          <div className="row g-0 align-items-end">
            <div className="col-10 col-md-2 d-flex align-items-end justify-content-start">
              <div className="rating d-flex gap-2 align-items-end justify-content-start">
                <div className="rating-icon d-flex align-items-center">
                  <img src="./assets/image/Star.jpg" alt="" />
                </div>
                <div className="rating-text">
                  ${"{"}item.rate{"}"}
                </div>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-block d-flex align-items-end justify-content-start">
              <div className="info-status">
                <span className="house">
                  ${"{"}item.status{"}"} |
                </span>
                <span className="location">
                  ${"{"}item.location{"}"}
                </span>
              </div>
            </div>
            <div className="col-1 col-md-2 d-flex align-items-end justify-content-end">
              <div className="share">
                <div className="share-icon">
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                      display: "block",
                      fill: "none",
                      height: 16,
                      width: 16,
                      stroke: "currentcolor",
                      strokeWidth: 2,
                      overflow: "visible",
                    }}
                  >
                    <g fill="none">
                      <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9" />
                      <path d="M16 3v23V3z" />
                      <path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13" />
                    </g>
                  </svg>
                </div>
                <div className="share-text d-none d-md-block">Chia sẻ</div>
              </div>
            </div>
            <div className="col-1 col-md-2 d-flex align-items-end justify-content-end">
              <div className="save">
                <div className="save-icon" style={{ color: "none" }}>
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                      display: "block",
                      fill: "none",
                      height: 16,
                      width: 16,
                      stroke: "currentcolor",
                      strokeWidth: 2,
                      overflow: "visible",
                    }}
                  >
                    <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" />
                  </svg>
                </div>
                <div className="save-text d-none d-md-block">Lưu</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="room__picture">
        <input type="checkbox" id="picture-list" />
        <div className="room__picture-list-wrap">
          <label htmlFor="picture-list" className="cover-detail-close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              fill="white"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </label>
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img
                  src="${urlRoomInfoPicture + item.picture[0].link}"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="${urlRoomInfoPicture + item.picture[1].link}"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="${urlRoomInfoPicture + item.picture[2].link}"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="${urlRoomInfoPicture + item.picture[3].link}"
                  alt=""
                />
              </div>
              <div className="swiper-slide" id="picture-1">
                <img
                  src="${urlRoomInfoPicture + item.picture[4].link}"
                  alt=""
                />
              </div>
            </div>
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
            <div className="swiper-pagination" />
          </div>
        </div>
        <div className="row g-1">
          <div htmlFor="picture-list" className="col-12 col-md-6 picture-right">
            <label htmlFor="picture-list" className="picture-big">
              <img
                src="${
            urlRoomInfoPicture + item.picture[0].link
          }"
                alt=""
              />
            </label>
          </div>
          <div className="col-6 d-none d-md-block picture-left">
            <div className="row g-1">
              <div className="col-lg-6 d-none d-lg-block">
                <label htmlFor="picture-list" className="picture-small">
                  <img
                    src="${
                urlRoomInfoPicture + item.picture[1].link
              }"
                    alt=""
                  />
                </label>
              </div>
              <div className="col-md-12 col-lg-6">
                <label
                  htmlFor="picture-list"
                  className="picture-small border-picture-top"
                >
                  <img
                    src="${
                urlRoomInfoPicture + item.picture[2].link
              }"
                    alt=""
                  />
                </label>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <label htmlFor="picture-list" className="picture-small">
                  <img
                    src="${
                urlRoomInfoPicture + item.picture[3].link
              }"
                    alt=""
                  />
                </label>
              </div>
              <div className="col-md-12 col-lg-6">
                <label
                  htmlFor="picture-list"
                  className="picture-small border-picture-bot"
                >
                  <img
                    src="${
                urlRoomInfoPicture + item.picture[4].link
              }"
                    alt=""
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="room__info">
        <div className="row justify-content-between">
          <div className="col-12 col-md-7">
            <div className="row">
              <div className="col-12">
                <div className="info-name">
                  <div className="name">
                    <h5>
                      ${"{"}item.name{"}"}
                    </h5>
                  </div>
                  <div className="name-info">
                    <span className="name-info-guest">
                      ${"{"}item.guest{"}"}
                    </span>{" "}
                    |
                    <span className="name-info-bedroom">
                      ${"{"}item.room[0]{"}"}
                    </span>{" "}
                    |
                    <span className="name-info-bed">
                      ${"{"}item.room[1]{"}"}
                    </span>{" "}
                    |
                    <span className="name-info-bathroom">
                      ${"{"}item.room[2]{"}"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="info-feature-list">
                  ${"{"}getFeature(item.feature){"}"}
                </div>
              </div>
              <div className="col-12">
                <div className="info-cover">
                  <div className="info-cover-header">
                    <span>Tai</span>cover
                  </div>
                  <div className="info-cover-des">
                    Mọi đặt phòng đều được bảo vệ miễn phí trong trường hợp Chủ
                    nhà hủy, thông tin nhà/phòng cho thuê không chính xác và
                    những vấn đề khác như sự cố trong quá trình nhận phòng.
                  </div>
                  <label htmlFor="cover-input" className="info-cover-more">
                    Tìm hiểu thêm
                  </label>
                </div>
                <input type="checkbox" id="cover-input" />
                <label htmlFor="cover-input" className="info-cover-overlay" />
                <div className="info-cover-detail">
                  <label htmlFor="cover-input" className="cover-detail-close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      fill="currentColor"
                      className="bi bi-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </label>
                  <div className="detail-wrap">
                    <div className="cover-detail-header">
                      <div className="detail-header-icon">
                        <span>Tai</span>cover
                      </div>
                      <div className="detail-header-text">
                        <span>Tai</span>Cover là chương trình bảo vệ toàn diện,
                        được áp dụng miễn phí với mọi đặt phòng.
                      </div>
                    </div>
                    <div className="cover-detail-list">
                      <div className="cover-detail-item">
                        <div className="detail-item-header">
                          Bảo đảm bảo vệ đặt phòng
                        </div>
                        <div className="detail-item-text">
                          Trong trường hợp hãn hữu khi Chủ nhà cần hủy đặt phòng
                          của bạn trong vòng 30 ngày trước ngày nhận phòng,
                          chúng tôi sẽ tìm cho bạn một chỗ ở tương tự hoặc tốt
                          hơn, hoặc sẽ hoàn tiền cho bạn.
                        </div>
                      </div>
                      <div className="cover-detail-item">
                        <div className="detail-item-header">
                          Bảo đảm nhận phòng
                        </div>
                        <div className="detail-item-text">
                          Nếu bạn không thể nhận phòng và Chủ nhà không thể giải
                          quyết vấn đề này, chúng tôi sẽ tìm cho bạn một chỗ ở
                          tương tự hoặc tốt hơn có thời gian ở tương đương, hoặc
                          chúng tôi sẽ hoàn tiền cho bạn.
                        </div>
                      </div>
                      <div className="cover-detail-item">
                        <div className="detail-item-header">
                          Bảo đảm chi phí tương xứng
                        </div>
                        <div className="detail-item-text">
                          Trong thời gian ở, nếu bạn nhận thấy chỗ ở không đúng
                          như quảng cáo, ví dụ như tủ lạnh ngừng hoạt động và
                          Chủ nhà không thể dễ dàng khắc phục vấn đề này, hoặc
                          số phòng ngủ ít hơn so với thông tin trên mục cho
                          thuê, thì bạn sẽ có 3 ngày để báo cáo vấn đề. Khi đó,
                          chúng tôi sẽ tìm cho bạn một chỗ ở tương tự hoặc tốt
                          hơn, hoặc chúng tôi sẽ hoàn tiền cho bạn.
                        </div>
                      </div>
                      <div className="cover-detail-item">
                        <div className="detail-item-header">
                          Đường dây an toàn 24 giờ
                        </div>
                        <div className="detail-item-text">
                          Nếu cảm thấy không an toàn, bạn sẽ được ưu tiên liên
                          hệ với nhân viên hỗ trợ an toàn được đào tạo đặc biệt
                          của chúng tôi, bất kể ngày đêm.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="info-sleep">
                  <div className="info-sleep-header">Nơi bạn ngủ nghỉ</div>
                  <div className="info-sleep-list">
                    <div className="row gy-4 gx-4">
                      ${"{"}getBedRoom(item.bedroom){"}"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="info-utinity">
                  <div className="utinity-des">Nơi này có những gì cho bạn</div>
                  <div className="utinity-list">
                    <div className="row gy-3 justify-content-between">
                      ${"{"}getUtinity(item.utinity){"}"}
                    </div>
                  </div>
                  <button className="utinity-more d-none">
                    Hiển thị tất cả 36 tiện nghi
                  </button>
                </div>
              </div>
              <div className="col-12">
                <div className="info-cancel">
                  <div className="cancel-header">Chính sách hủy</div>
                  <div className="cancel-des">
                    Bạn được hoàn tiền nếu hủy phòng này hay không sẽ phụ thuộc
                    vào chính sách của chủ nhà. <br />
                    Hãy đọc toàn bộ chính sách hủy của Chủ nhà.
                  </div>
                  <label htmlFor="cancel-input" className="cancel-more">
                    <span className="text">Hiển thị thêm</span>
                    <img src="./assets/image/Frame (13).png" alt="" />
                  </label>
                </div>
                <input type="checkbox" id="cancel-input" />
                <label htmlFor="cancel-input" className="info-cover-overlay" />
                <div className="info-cancel-detail">
                  <label htmlFor="cancel-input" className="cover-detail-close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      fill="currentColor"
                      className="bi bi-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </label>
                  <div className="detail-wrap">
                    <div
                      className="cover-detail-header"
                      style={{ borderBottom: "none" }}
                    >
                      <div className="detail-header-text">
                        Trước khi bạn đặt phòng/đặt chỗ, hãy đảm bảo chính sách
                        hủy của Chủ nhà/Người tổ chức này phù hợp với bạn. Xin
                        lưu ý rằng chính sách Trường hợp bất khả kháng của
                        <span>Tai</span> không áp dụng cho các trường hợp hủy vì
                        ốm bệnh hoặc gián đoạn đi lại do dịch COVID-19.
                      </div>
                    </div>
                    <div className="cover-detail-list">
                      <div className="cover-detail-item w-100">
                        <div className="detail-item-header">
                          Hủy muộn nhất vào ngày
                        </div>
                        <div className="detail-item-content">
                          <div className="detail-item-date">
                            ${"{"}new Date().toLocaleDateString(){"}"}
                          </div>
                          <div className="detail-item-text">
                            Hoàn tiền đầy đủ: Được hoàn lại 100% số tiền bạn đã
                            thanh toán.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="info-rules">
                  <div className="rules-des">Nội quy nhà</div>
                  <div className="rules-list">
                    <div className="rules-item">Nhận phòng sau 11:00</div>
                    <div className="rules-item">Trả phòng trước 12:00</div>
                    <div className="rules-item">
                      Tối đa ${"{"}item.guest{"}"}
                    </div>
                  </div>
                  <label htmlFor="rules-input" className="rules-more">
                    <span>Hiển thị thêm</span>
                    <img src="./assets/image/Frame (13).png" alt="" />
                  </label>
                  <input type="checkbox" id="rules-input" />
                  <label htmlFor="rules-input" className="info-cover-overlay" />
                  <div className="info-rules-detail">
                    <label htmlFor="rules-input" className="cover-detail-close">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        fill="currentColor"
                        className="bi bi-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </label>
                    <div className="detail-wrap">
                      <div
                        className="cover-detail-header"
                        style={{ borderBottom: "none" }}
                      >
                        <div className="detail-header-icon">Nội quy nhà</div>
                        <div className="detail-header-text">
                          Hãy thực hiện theo các quy tắc này để là một vị khách
                          có ý thức và tránh mọi sự cố trong thời gian ở.
                        </div>
                      </div>
                      <div className="cover-detail-list">
                        <div className="cover-detail-item w-100">
                          <div className="detail-item-header">
                            Khách được ở lại
                          </div>
                          <div className="detail-item-content">
                            <div className="content-wrap">
                              <div className="content-icon">
                                <svg
                                  viewBox="0 0 32 32"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                  role="presentation"
                                  focusable="false"
                                  style={{
                                    display: "block",
                                    height: 24,
                                    width: 24,
                                    fill: "currentcolor",
                                  }}
                                >
                                  <path d="M22 5a6 6 0 0 1 3.643 10.768 9.003 9.003 0 0 1 5.353 7.967L31 24h-2a7.002 7.002 0 0 0-5.999-6.929v-2.197A4.002 4.002 0 0 0 22 7a4 4 0 0 0-3.679 5.574A4.991 4.991 0 0 1 21 17a4.986 4.986 0 0 1-1.599 3.665 9.003 9.003 0 0 1 5.595 8.07L25 29h-2a7.002 7.002 0 0 0-5.999-6.929v-2.242a3.001 3.001 0 1 0-2 0L15 22.071a7.002 7.002 0 0 0-5.996 6.688L9 29H7a9.003 9.003 0 0 1 5.6-8.335 5 5 0 0 1 1.077-8.093A4 4 0 1 0 9 14.874v2.197a7.002 7.002 0 0 0-5.996 6.688L3 24H1a9.002 9.002 0 0 1 5.357-8.232A6 6 0 1 1 15.917 10h.166A6.002 6.002 0 0 1 22 5z" />
                                </svg>
                              </div>
                              <div className="detail-item-text">
                                Tối đa ${"{"}
                                item.guest
                                {"}"}
                              </div>
                            </div>
                            <div className="content-wrap">
                              <div className="content-icon">
                                <svg
                                  viewBox="0 0 32 32"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                  role="presentation"
                                  focusable="false"
                                  style={{
                                    display: "block",
                                    height: 24,
                                    width: 24,
                                    fill: "currentcolor",
                                  }}
                                >
                                  <path d="M13.693 13.934a4 4 0 0 1 5.283.595l.292.366 4.768 6.755a4 4 0 0 1 .596 3.342 4.004 4.004 0 0 1-4.496 2.913l-.403-.084-3.474-.932a1 1 0 0 0-.518 0l-3.474.932a4 4 0 0 1-2.941-.347l-.401-.249a4.004 4.004 0 0 1-1.19-5.207l.229-.368 4.768-6.755a4 4 0 0 1 .961-.96zm3.756 1.889a2 2 0 0 0-2.979.09l-.104.136-4.838 6.861a2 2 0 0 0 2.048 3.017l.173-.038 3.992-1.07a1 1 0 0 1 .518 0l3.964 1.063.143.034a2 2 0 0 0 2.132-2.963l-4.947-7.014zM27 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM5 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm22 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm6-10a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm10 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM11 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                                </svg>
                              </div>
                              <div className="detail-item-text">
                                Được phép mang theo thú cưng
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="cover-detail-item w-100">
                          <div className="detail-item-header">
                            Hoạt động được cho phép
                          </div>
                          <div className="detail-item-content">
                            <div className="content-wrap">
                              <div className="content-icon">
                                <svg
                                  viewBox="0 0 32 32"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                  role="presentation"
                                  focusable="false"
                                  style={{
                                    display: "block",
                                    height: 24,
                                    width: 24,
                                    fill: "currentcolor",
                                  }}
                                >
                                  <path d="m15.9999.3335c8.6524795 0 15.6667 7.01422051 15.6667 15.6667 0 8.6524795-7.0142205 15.6667-15.6667 15.6667-8.65247949 0-15.6667-7.0142205-15.6667-15.6667 0-8.65247949 7.01422051-15.6667 15.6667-15.6667zm0 2c-7.54790999 0-13.6667 6.11879001-13.6667 13.6667 0 7.54791 6.11879001 13.6667 13.6667 13.6667 7.54791 0 13.6667-6.11879 13.6667-13.6667 0-7.54790999-6.11879-13.6667-13.6667-13.6667zm1.0001 3v10.0895l8.7375978 5.0444733-.9999956 1.7320534-9.7376022-5.6219748v-11.2440519z" />
                                </svg>
                              </div>
                              <div className="detail-item-text">
                                Nhận phòng sau 11:00
                              </div>
                            </div>
                            <div className="content-wrap">
                              <div className="content-icon">
                                <svg
                                  viewBox="0 0 32 32"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                  role="presentation"
                                  focusable="false"
                                  style={{
                                    display: "block",
                                    height: 24,
                                    width: 24,
                                    fill: "currentcolor",
                                  }}
                                >
                                  <path d="m15.9999.3335c8.6524795 0 15.6667 7.01422051 15.6667 15.6667 0 8.6524795-7.0142205 15.6667-15.6667 15.6667-8.65247949 0-15.6667-7.0142205-15.6667-15.6667 0-8.65247949 7.01422051-15.6667 15.6667-15.6667zm0 2c-7.54790999 0-13.6667 6.11879001-13.6667 13.6667 0 7.54791 6.11879001 13.6667 13.6667 13.6667 7.54791 0 13.6667-6.11879 13.6667-13.6667 0-7.54790999-6.11879-13.6667-13.6667-13.6667zm1.0001 3v10.0895l8.7375978 5.0444733-.9999956 1.7320534-9.7376022-5.6219748v-11.2440519z" />
                                </svg>
                              </div>
                              <div className="detail-item-text">
                                Trả phòng trước 12:00
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div id="date" className="info-date">
                  <div className="date-header">Chọn ngày nhận phòng</div>
                  <div className="date-des">
                    Thêm ngày đi để biết giá chính xác
                  </div>
                  <input
                    className="input__in"
                    id="myID"
                    type="text"
                    placeholder="Chọn ngày"
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-lg-4">
            <div className="info-booking-mobile">
              <div className="container d-flex justify-content-between align-items-center">
                <div className="booking-mobile-left">
                  <div className="booking-mobile-money">
                    <span>
                      ${"{"}item.price{"}"}
                    </span>{" "}
                    / đêm
                  </div>
                  <div className="booking-mobile-time">
                    <a href="#date" className="time-mobile">
                      <span className="time-mobile-in" />
                      <span> - </span>
                      <span className="time-mobile-out" />
                    </a>
                  </div>
                </div>
                <div className="booking-mobile-right">
                  <a href="./payment.html">
                    <button className="booking-mobile-btn">Đặt phòng</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="info-booking">
              <div className="booking-money-rate">
                <div className="booking-money">
                  <span>
                    đ ${"{"}
                    item.price
                    {"}"}
                  </span>
                  /đêm
                </div>
                <div className="booking-rate">
                  <div className="booking-rate-icon">
                    <img src="./assets/image/Star (2).png" alt="" />
                  </div>
                  <div className="booking-rate-des">
                    ${"{"}item.rate{"}"}
                  </div>
                </div>
              </div>
              <div className="booking-form">
                <div className="time">
                  <div className="time-check-in">
                    <label htmlFor="in" className="check-in">
                      <span className="come">Nhận </span>phòng
                    </label>
                    <input
                      className="in"
                      type="text"
                      name=""
                      id="in"
                      placeholder="Thêm ngày"
                      autoComplete="off"
                    />
                  </div>
                  <div className="time-check-out">
                    <label htmlFor="out" className="check-out">
                      <span className="leave">Trả</span> phòng
                    </label>
                    <input
                      type="text"
                      name=""
                      id="out"
                      className="input__out"
                      placeholder="Thêm ngày"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="guest-wrap">
                  <input type="checkbox" name="" id="guest-menu-input" />
                  <label
                    className="guest-menu-overlay"
                    htmlFor="guest-menu-input"
                  />
                  <div className="guest-menu">
                    <div className="guest-list">
                      <div className="guest-item">
                        <div className="item-left">
                          <div className="item-left-header">Người lớn</div>
                          <div className="item-left-des">
                            Từ 13 tuổi trở lên
                          </div>
                        </div>
                        <div className="item-right">
                          <div className="item-right-reduce" data-type="adult">
                            -
                          </div>
                          <div
                            className="item-right-quantity"
                            data-type="adult"
                            data-max="${parseInt(item.guest)}"
                          >
                            1
                          </div>
                          <div
                            className="item-right-increase"
                            data-type="adult"
                          >
                            +
                          </div>
                        </div>
                      </div>
                      <div className="guest-item">
                        <div className="item-left">
                          <div className="item-left-header">Trẻ em</div>
                          <div className="item-left-des">Độ tuổi 2 - 12</div>
                        </div>
                        <div className="item-right">
                          <div className="item-right-reduce" data-type="child">
                            -
                          </div>
                          <div
                            className="item-right-quantity"
                            data-type="child"
                            data-max="${parseInt(item.guest) - 1}"
                          >
                            0
                          </div>
                          <div
                            className="item-right-increase"
                            data-type="child"
                          >
                            +
                          </div>
                        </div>
                      </div>
                      <div className="guest-item">
                        <div className="item-left">
                          <div className="item-left-header">Em bé</div>
                          <div className="item-left-des">Dưới 2 tuổi</div>
                        </div>
                        <div className="item-right">
                          <div className="item-right-reduce" data-type="baby">
                            -
                          </div>
                          <div
                            className="item-right-quantity"
                            data-type="baby"
                            data-max={5}
                          >
                            0
                          </div>
                          <div className="item-right-increase" data-type="baby">
                            +
                          </div>
                        </div>
                      </div>
                      <div className="guest-item">
                        <div className="item-left">
                          <div className="item-left-header">Thú cưng</div>
                          <div className="item-left-des" />
                        </div>
                        <div className="item-right">
                          <div className="item-right-reduce" data-type="pet">
                            -
                          </div>
                          <div
                            className="item-right-quantity"
                            data-type="pet"
                            data-max={5}
                          >
                            0
                          </div>
                          <div className="item-right-increase" data-type="pet">
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                    <label
                      htmlFor="guest-menu-input"
                      className="guest-menu-close"
                    >
                      Đóng
                    </label>
                  </div>
                  <label className="guest" htmlFor="guest-menu-input">
                    <div className="guest-header">Khách</div>
                    <div className="guest-input">
                      <div className="guest-count">
                        <span className="guest-adult-child">1 khách </span>
                        <span className="guest-baby">, 1 em bé</span>
                        <span className="guest-pet">, 1 thú cưng</span>
                      </div>
                      <img src="./assets/image/Frame (14).png" alt="" />
                    </div>
                  </label>
                </div>
                <a href="./payment.html">
                  {" "}
                  <button className="order-room">Đặt phòng</button>
                </a>
                <div className="cost-wrap">
                  <div className="cost-list">
                    <div className="cost-item">
                      <div className="calc-wrap">
                        <input type="checkbox" id="calc-input-room" />
                        <label htmlFor="calc-input-room" className="calc-item">
                          <span className="cost-night">
                            đ ${"{"}item.price{"}"}
                          </span>{" "}
                          x<span className="count-night">1 đêm</span>
                        </label>
                        <label
                          htmlFor="calc-input-room"
                          className="calc-overlay-room"
                        />
                        <div className="item-small-des">
                          <label
                            htmlFor="calc-input-room"
                            className="small-des-close"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={25}
                              height={25}
                              fill="currentColor"
                              className="bi bi-x"
                              viewBox="0 0 16 16"
                            >
                              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                          </label>
                          <div className="small-des-text">Phí thuê phòng</div>
                        </div>
                      </div>
                      <div data-type="night" className="total-item">
                        ${"{"}item.price{"}"}
                      </div>
                    </div>
                    <div className="cost-item">
                      <div className="calc-wrap">
                        <input type="checkbox" id="calc-input-clean" />
                        <label htmlFor="calc-input-clean" className="calc-item">
                          <span className="cost-night">Phí vệ sinh </span>
                        </label>
                        <label
                          htmlFor="calc-input-clean"
                          className="calc-overlay-clean"
                        />
                        <div className="item-small-des">
                          <label
                            htmlFor="calc-input-clean"
                            className="small-des-close"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={25}
                              height={25}
                              fill="currentColor"
                              className="bi bi-x"
                              viewBox="0 0 16 16"
                            >
                              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                          </label>
                          <div className="small-des-text">
                            Khoản phí một lần do chủ nhà tính để trang trải chi
                            phí vệ sinh chỗ của họ.
                          </div>
                        </div>
                      </div>
                      <div data-type="clean" className="total-item">
                        đ 200,000
                      </div>
                    </div>
                    <div className="cost-item">
                      <div className="calc-wrap">
                        <input type="checkbox" id="calc-input" />
                        <label htmlFor="calc-input" className="calc-item">
                          <span className="cost-night">
                            Phí dịch vụ <span className="cost-icon">Tai</span>
                          </span>
                        </label>
                        <label htmlFor="calc-input" className="calc-overlay" />
                        <div className="item-small-des">
                          <label
                            htmlFor="calc-input"
                            className="small-des-close"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={25}
                              height={25}
                              fill="currentColor"
                              className="bi bi-x"
                              viewBox="0 0 16 16"
                            >
                              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                          </label>
                          <div className="small-des-text">
                            Điều này giúp chúng tôi vận hành nền tảng của mình
                            và cung cấp các dịch vụ như hỗ trợ 24/7 trong chuyến
                            đi của bạn.
                          </div>
                        </div>
                      </div>
                      <div data-type="service" className="total-item">
                        ${"{"}( Number(item.price.split(",").join("")) * 0.1
                        ).toLocaleString(){"}"}
                      </div>
                    </div>
                  </div>
                  <div className="total">
                    <div className="total-des">Tổng</div>
                    <div className="total-cost">
                      đ ${"{"}Number( item.price.split(",").join("") * 1.1 +
                      200000 ).toLocaleString(){"}"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
