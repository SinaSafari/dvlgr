import React from "react";
import {Col, Row, Space, Switch} from "antd";
import Link from 'next/link'

const Menu = () => {
    const setThem = (checked) => {
        if (!checked) {
            localStorage.setItem('them', 'dark')
        } else {
            localStorage.setItem('them', 'light')
        }
    }
    return (
        <Row justify="center">
            <Col  xs={{span: 23}}
                  md={{span: 20}}>
                <Row>
                    <Col span={18} className="menubar">
                        <Space size="large">
                            <img src="./logo.svg"
                                 alt="logo"/>
                            <Link href={'/'}>
                                <a className="menubar-item">
                                    خانه
                                </a>
                            </Link>
                            <Link href={'/about-us'}>
                                <a className="menubar-item">
                                    درباره ما
                                </a>
                            </Link>
                            <Link href={'/contact-us'}>
                                <a className="menubar-item">
                                    تماس با ما
                                </a>
                            </Link>
                        </Space>
                    </Col>
                    <Col span={6} align="end">
                        <Switch
                            onChange={setThem}
                            checkedChildren={<i className="bi bi-sun-fill text-warning"/>}
                            unCheckedChildren={<i className=" bi bi-moon-fill text-primary"/>}
                            defaultChecked
                        />
                    </Col>
                </Row>
            </Col>
        </Row>

    )
}
export default Menu;