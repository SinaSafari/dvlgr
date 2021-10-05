import React from "react";
import {Avatar, Button, Col, Divider, Space, Typography} from "antd";


const HeaderPost = () => {
    const {Title} = Typography;
    return (
        <Col span={24}>
            <div>
                <span className="tag tag-red">Js</span>
            </div>
            <Title level={4} className="fw-bolder">
                آموزش async و await در جاوااسکریپت به زبان ساده
            </Title>
            <div className="d-flex justify-content-between align-items-end w-100">
                <div>
                    <Space>
                        <Avatar src={`../../img/avatar/mohammad.jpg`} size="large"/>
                        <div>
                            <div>
                                <span className="fw-bold small">{'محمد رودخانه'}</span>
                            </div>
                            <div>
                                <Space>
                                    <span className="small">{'4 مهر 1400'}</span>
                                    -
                                    <Space>
                                        <i className="bi bi-clock-history small"/>
                                        <span className="small">خواندن {'6'} دقیقه</span>
                                    </Space>
                                </Space>
                            </div>
                        </div>
                    </Space>
                </div>
                <div>
                    <Space>
                        <Button type="primary" danger size="small" shape="round">
                            <Space>
                                <span className="small">{'7'}</span>
                                <i className="bi bi-heart-fill small"/>
                            </Space>
                        </Button>
                        <Button type="primary" danger size="small" shape="round"
                                onClick={() => document.getElementById('comment').scrollIntoView({ behavior: 'smooth' })}>
                            <Space>
                                <span className="small">{'15'}</span>
                                <i className="bi bi-chat-square-dots-fill"/>
                            </Space>
                        </Button>
                        <Divider type="vertical" dashed/>
                        <Button type="dashed" size="small" shape="circle">
                            <Space>
                                <i className="bi bi-share-fill"/>
                            </Space>
                        </Button>
                    </Space>
                </div>
            </div>
            <Divider dashed/>
        </Col>
    )
}

export default HeaderPost;