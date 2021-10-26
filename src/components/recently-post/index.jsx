import React from "react";
import Link from "next/link";
import {Avatar, Button, Col, Row, Space, Typography} from "antd";

const RecentlyPost = () => {
    const {Title} = Typography;
    const data = [
        {
            imgAddress: "/img/js.jpg",
            id: 1,
            title: "آموزش async و await در جاوااسکریپت به زبان ساده",
            author: "محمد رودخانه",
            authorImgAddress: "/img/avatar/mohammad.jpg",
            createAt: "4 مهر 1400",
            category: "js",
            time: "2",
            like: "0",
        },
        {
            imgAddress: "/img/swift.png",
            id: 1,
            title: "یک گاز از Swift (#آشنایی)",
            author: "سینا صفری",
            authorImgAddress: "/img/avatar/sina.jpg",
            createAt: "4 مهر 1400",
            category: "swift",
            time: "10",
            like: "8",
        },
        {
            imgAddress: "/img/swift.png",
            id: 1,
            title: "یک گاز از Swift (#آشنایی)",
            author: "سینا صفری",
            authorImgAddress: "/img/avatar/sina.jpg",
            createAt: "4 مهر 1400",
            category: "swift",
            time: "10",
            like: "5",
        },
        {
            imgAddress: "/img/js.jpg",
            id: 1,
            title:
                "آموزش async و await در جاوااسکریپت به زبان سادهآموزش async و await در جاوااسکریپت به زبان ساده",
            author: "محمد رودخانه",
            authorImgAddress: "/img/avatar/mohammad.jpg",
            createAt: "4 مهر 1400",
            category: "js",
            time: "2",
            like: "10",
        },
    ];
    return (
        <Row gutter={[16, 16]}>
            {data.map((item) => (
                <Col xs={{span: 24}} md={{span: 12}} key={item.id}>
                    <article className="article-box bg-white">
                        <div className="d-flex">
                            <div className="article-box-poster">
                                <Link href={"/"}>
                                    <a>
                                        <img src={item.imgAddress} alt="article-img"/>
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href={`/${item.category}`}>
                                    <a>
                                        <span className="tag tag-red">{item.category}</span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div>
                            <div className="article-box-title">
                                <Link href={`posts/${item.category}/${item.title}`}>
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
                                    <Avatar src={item.authorImgAddress}/>
                                    <span className="fw-bold small">{item.author}</span>-
                                    <span className="small">{item.createAt}</span>
                                </Space>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <Space>
                                    <i className="bi bi-clock-history small"/>
                                    <span className="small">خواندن {item.time} دقیقه</span>
                                </Space>
                                <Button type="primary" danger size="small" shape="round">
                                    <Space>
                                        <span className="small">{item.like}</span>
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
