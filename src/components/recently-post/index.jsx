import React from "react";
import Link from "next/link";
import {Avatar, Button, Col, Row, Space, Typography} from "antd";


const RecentlyPost = ({data}) => {
    const {Title} = Typography;
    //   const data = [
    //     {
    //       imgAddress: "/img/js.jpg",
    //       id: 1,
    //       title: "آموزش async و await در جاوااسکریپت به زبان ساده",
    //       author: "محمد رودخانه",
    //       authorImgAddress: "/img/avatar/mohammad.jpg",
    //       createAt: "4 مهر 1400",
    //       category: "js",
    //       time: "2",
    //       like: "0",
    //     },
    //     {
    //       imgAddress: "/img/swift.png",
    //       id: 1,
    //       title: "یک گاز از Swift (#آشنایی)",
    //       author: "سینا صفری",
    //       authorImgAddress: "/img/avatar/sina.jpg",
    //       createAt: "4 مهر 1400",
    //       category: "swift",
    //       time: "10",
    //       like: "8",
    //     },
    //     {
    //       imgAddress: "/img/swift.png",
    //       id: 1,
    //       title: "یک گاز از Swift (#آشنایی)",
    //       author: "سینا صفری",
    //       authorImgAddress: "/img/avatar/sina.jpg",
    //       createAt: "4 مهر 1400",
    //       category: "swift",
    //       time: "10",
    //       like: "5",
    //     },
    //     {
    //       imgAddress: "/img/js.jpg",
    //       id: 1,
    //       title:
    //         "آموزش async و await در جاوااسکریپت به زبان سادهآموزش async و await در جاوااسکریپت به زبان ساده",
    //       author: "محمد رودخانه",
    //       authorImgAddress: "/img/avatar/mohammad.jpg",
    //       createAt: "4 مهر 1400",
    //       category: "js",
    //       time: "2",
    //       like: "10",
    //     },
    //   ];

    console.log(data);
    return (
        <Row gutter={[16, 16]}>
            {data.map((item) => (
                <Col xs={{span: 24}} md={{span: 12}} key={item.id}>
                    <article className="article-box">
                        <div className="d-flex">
                            <div className="article-box-poster">
                                <Link href={`/posts/${item.category.title}/${item.slug}`}>
                                    <a>
                                        <img
                                            src={item.hero_image === "test.png" && "/img/swift.png"}
                                            alt={item.title}
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href={`/posts/${item.category.title}`}>
                                    <a>
                                        <span className="tag tag-red">{item.category.name}</span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div>
                            <div className="article-box-title">
                                <Link href={`posts/${item.category.title}/${item.title}`}>
                                    <a className="text-dark">
                                        <Title
                                            level={5}
                                            ellipsis={{rows: 2}}
                                            className="fw-bolder"
                                        >
                                            {item.title}
                                        </Title>
                                    </a>
                                </Link>
                            </div>

                            <div>
                                <Space>
                                    <Avatar
                                        src={item.authorImgAddress || "/img/avatar/mohammad.jpg"}
                                    />
                                    <span className="fw-bold small">{item.author.fullname}</span>-
                                    <span className="small">{item.created_at}</span>
                                </Space>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <Space>
                                    <i className="bi bi-clock-history small"/>
                                    <span className="small">خواندن {item.time || 2} دقیقه</span>
                                </Space>
                                <Button type="primary" danger size="small" shape="round">
                                    <Space>
                                        <span className="small">{item.like || "0"}</span>
                                        <i className="bi bi-heart-fill small"/>
                                    </Space>
                                </Button>
                            </div>
                        </div>
                    </article>
                </Col>
            ))}
        </Row>
    );
};
export default RecentlyPost;
