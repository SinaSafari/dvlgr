import React from "react";
import Link from "next/Link";
import {Avatar, Button, Col, Row, Space, Typography} from "antd";

const RecentlyPost = () => {
    const {Title, Text} = Typography;
    const data = [
        {
            imgAddress: './img/js.jpg',
            id: 1,
            title: 'آموزش async و await در جاوااسکریپت به زبان ساده',
            author: 'محمد رودخانه',
            authorImgAddress: './img/avatar/mohammad.jpg',
            createAt: '4 مهر 1400',
            category: 'Js',
            time: '2',
            like: '0'
        },
        {
            imgAddress: './img/swift.png',
            id: 1,
            title: 'یک گاز از Swift (#آشنایی)',
            author: 'سینا صفری',
            authorImgAddress: './img/avatar/sina.jpg',
            createAt: '4 مهر 1400',
            category: 'Swift',
            time: '10',
            like: '8'
        },
        {
            imgAddress: './img/swift.png',
            id: 1,
            title: 'یک گاز از Swift (#آشنایی)',
            author: 'سینا صفری',
            authorImgAddress: './img/avatar/sina.jpg',
            createAt: '4 مهر 1400',
            category: 'Swift',
            time: '10',
            like: '5'
        },
        {
            imgAddress: './img/js.jpg',
            id: 1,
            title: 'آموزش async و await در جاوااسکریپت به زبان سادهآموزش async و await در جاوااسکریپت به زبان ساده',
            author: 'محمد رودخانه',
            authorImgAddress: './img/avatar/mohammad.jpg',
            createAt: '4 مهر 1400',
            category: 'Js',
            time: '2',
            like: '10'
        },
    ]
    return (
        <Row gutter={[16, 16]}>
            {data.map(item => (
                <Col xs={{span: 24}}
                     md={{span: 12}} key={item.id}>
                    <article className="article-box">
                        <div className="article-box-poster">
                            <Link href={'/'}>
                                <a>
                                    <img src={item.imgAddress}/>
                                </a>
                            </Link>
                        </div>
                        <div className="me-3 w-100">

                            <Link href={`/${item.category}`}>
                                <a>
                                    <span className="article-box-category">{item.category}</span>
                                </a>
                            </Link>

                            <div className="article-box-title">
                                <Link href={'/'}>
                                    <a>
                                        <Title level={4} ellipsis={{rows: 2}}>
                                            {item.title}
                                        </Title>
                                    </a>
                                </Link>
                            </div>

                            <div>
                                <Space>
                                    <Avatar src={item.authorImgAddress}/>
                                    <span className="fw-bold">{item.author}</span> - <span
                                    className="small">{item.createAt}</span>
                                </Space>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <Space>
                                    <i className="bi bi-clock-history small"/>
                                    <span className="small">
                                        خواندن {item.time} دقیقه
                                    </span>
                                </Space>
                                <Button type="primary"
                                        danger
                                        size="small"
                                        shape="round">
                                    <Space>
                                    <span className="small">
                                            {item.like}
                                    </span>
                                        <i className="bi bi-heart-fill small"/>
                                    </Space>
                                </Button>

                            </div>
                        </div>
                    </article>
                </Col>
            ))}
        </Row>
    )
}
export default RecentlyPost;