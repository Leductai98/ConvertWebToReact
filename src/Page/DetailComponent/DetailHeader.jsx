import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DetailContext } from "./DetailContext&Reducer";
import { useBodyScrollLock } from "../../Component";
import { actions } from "./DetailContext&Reducer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function DetailHeader({ data }) {
  const [state, dispatch] = useContext(DetailContext);
  const { userLogin, toast, toastSuccess } = state;
  const [favorite, setFavorite] = useState(false);
  const [isBlocked, toggle] = useBodyScrollLock();
  let favoriteArr =
    localStorage.getItem("favorite") != null
      ? JSON.parse(localStorage.getItem("favorite"))
      : [];

  useEffect(() => {
    favoriteArr =
      localStorage.getItem("favorite") != null
        ? JSON.parse(localStorage.getItem("favorite"))
        : [];

    if (userLogin !== null) {
      if (favoriteArr.length != 0) {
        favoriteArr.forEach((item) => {
          if (item.user == userLogin.name) {
            if (item.name == data.name) {
              setFavorite(true);
            }
          }
        });
      }
    }
  }, [localStorage.getItem("favorite")]);
  const handleFavorite = () => {
    if (userLogin !== null) {
      if (!favorite) {
        setFavorite(true);

        dispatch(
          actions.setToast([
            ...toast,
            {
              id: Math.floor(Math.random() * 1000000),
              status: true,
              name: "Đã thêm vào danh sách yêu thích",
            },
          ])
        );
        let favoriteItem = {
          id: Math.floor(Math.random() * 1000000),
          user: userLogin.name,
          name: data.name,
          picture: `https://api-sandy-zeta.vercel.app${data.picture[0].link}`,
          location: data.location,
          status: data.status,
          price: data.price,
          link: window.location.href,
        };
        favoriteArr.push(favoriteItem);
        localStorage.setItem("favorite", JSON.stringify(favoriteArr));
      } else {
        setFavorite(false);
        dispatch(
          actions.setToast([
            ...toast,
            {
              id: Math.floor(Math.random() * 1000000),
              status: false,
              name: "Đã xóa khỏi danh sách yêu thích",
            },
          ])
        );
        const result = favoriteArr.filter(
          (item) =>
            (item.user !== userLogin.name && item.name !== data.name) ||
            (item.user === userLogin.name && item.name !== data.name) ||
            (item.user !== userLogin.name && item.name === data.name)
        );
        localStorage.setItem("favorite", JSON.stringify(result));
      }
    } else {
      dispatch(
        actions.setToast([
          ...toast,
          {
            id: Math.floor(Math.random() * 1000000),
            status: false,
            name: "Vui lòng đăng nhập để thực hiện chức năng này",
          },
        ])
      );
    }
  };

  return (
    <div className="room__des-header">
      <div className="header-name">
        <p>{data.name}</p>
      </div>
      <div className="header-info">
        <Row className="g-0 align-items-end">
          <Col
            xs={10}
            md={2}
            lg={1}
            className=" d-flex align-items-end justify-content-start"
          >
            <div className="rating d-flex gap-2 align-items-center justify-content-start">
              <div className="rating-icon d-flex align-items-center">
                <img src="/star (3).png" alt="" />
              </div>
              <div className="rating-text">{data.rate}</div>
            </div>
          </Col>
          <Col
            xs={0}
            md={7}
            lg={9}
            className=" d-none d-md-block d-flex align-items-center justify-content-start"
          >
            <div className="info-status">
              <span className="house">{data.status} |</span>
              <span className="location">{data.location}</span>
            </div>
          </Col>
          <Col
            xs={1}
            md={2}
            lg={1}
            className="d-flex align-items-center justify-content-end"
          >
            <label
              htmlFor="share-checkbox"
              className="share"
              onClick={(e) => {
                toggle();
              }}
            >
              <div className="share-icon">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
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
            </label>
            <input type="checkbox" name="" id="share-checkbox" />
            <label
              htmlFor="share-checkbox"
              className="share__menu--overlay"
              onClick={(e) => {
                toggle();
              }}
            ></label>
            <div className="share__menu-wrap">
              <div className="share__menu">
                <label
                  htmlFor="share-checkbox"
                  className="share__menu--close"
                  onClick={(e) => {
                    toggle();
                  }}
                >
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
                <h4>Chia sẻ nơi lưu trú này</h4>
                <div className="share__menu--info">
                  <div className="share__menu--info--picture">
                    <img
                      src={`https://api-sandy-zeta.vercel.app${data.picture[0].link}`}
                      alt=""
                    />
                  </div>
                  <div className="share__menu--info--detail">
                    <div className="share__menu--info--detail--item">
                      {data.name}
                    </div>
                    <div className="share__menu--info--detail--item">
                      <img src="/Star.png" alt="" />
                      <p>{data.rate}</p>
                    </div>
                    <div className="share__menu--info--detail--item">
                      <p>{data.room[0]}</p> <p> {data.room[1]} </p>
                      <p> {data.room[2]} </p>
                    </div>
                  </div>
                </div>
                <div className="share__menu--way">
                  <div
                    className="share__menu--way--item"
                    onClick={() => {
                      window.open(
                        `https://www.facebook.com/sharer.php?u=${encodeURI(
                          location.href
                        )}`,
                        "",
                        "width=800,height=1000"
                      );
                    }}
                  >
                    <div className="share__menu--way--item--picture">
                      <img src="/facebook.png" alt="" />
                    </div>
                    <div className="share__menu--way--item--des">Facebook</div>
                  </div>
                  <div
                    className="share__menu--way--item"
                    onClick={() => {
                      window.open(
                        `https://twitter.com/share?url=${encodeURI(
                          location.href
                        )}`,
                        "",
                        "width=800,height=1000"
                      );
                    }}
                  >
                    <div className="share__menu--way--item--picture">
                      <img src="/twitter.png" alt="" />
                    </div>
                    <div className="share__menu--way--item--des">Twitter</div>
                  </div>
                  <div
                    className="share__menu--way--item"
                    onClick={() => {
                      window.open(
                        `https://www.linkedin.com/shareArticle?url=${encodeURI(
                          location.href
                        )}`,
                        "",
                        "width=800,height=1000"
                      );
                    }}
                  >
                    <div className="share__menu--way--item--picture">
                      <img src="/linkedin.png" alt="" />
                    </div>
                    <div className="share__menu--way--item--des">LinkedIn</div>
                  </div>
                  <div
                    onClick={() => {
                      window.open(
                        `https://api.whatsapp.com/send?text=${encodeURI(
                          data.name
                        )} ${encodeURI(location.href)}`,
                        "",
                        "width=800,height=1000"
                      );
                    }}
                    className="share__menu--way--item"
                  >
                    <div className="share__menu--way--item--picture">
                      <img src="/whatsapp.png" alt="" />
                    </div>
                    <div className="share__menu--way--item--des">WhatsApp</div>
                  </div>{" "}
                  <div
                    onClick={() => {
                      window.open(
                        `https://pinterest.com/pin/create/bookmarklet/?media=${encodeURI(
                          `https://api-sandy-zeta.vercel.app${data.picture[0].link}`
                        )}&url=${encodeURI(
                          location.href
                        )}&is_video=[is_video]&description=${encodeURI(
                          data.name
                        )}`,
                        "",
                        "width=800,height=1000"
                      );
                    }}
                    className="share__menu--way--item"
                  >
                    <div className="share__menu--way--item--picture">
                      <img src="/pinterest.png" alt="" />
                    </div>
                    <div className="share__menu--way--item--des">Pinterest</div>
                  </div>{" "}
                  <div
                    onClick={() => {
                      window.open(
                        `https://reddit.com/submit?url=${encodeURI(
                          location.href
                        )}&title=${encodeURI(data.name)}`,
                        "",
                        "width=800,height=1000"
                      );
                    }}
                    className="share__menu--way--item"
                  >
                    <div className="share__menu--way--item--picture">
                      <img src="/reddit.png" alt="" />
                    </div>
                    <div className="share__menu--way--item--des">Reddit</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col
            xs={1}
            md={1}
            lg={1}
            className="d-flex align-items-end justify-content-end"
          >
            <div className="save" onClick={handleFavorite}>
              <div
                className={`save-icon ${favorite ? "active" : ""}`}
                style={{ color: "none" }}
              >
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
          </Col>
        </Row>
      </div>
    </div>
  );
}
