import React from "react";
import {Col, Row, Space, Switch} from "antd";
import Link from "next/link";

import {Dropdown, Spin} from "antd";
import {DownOutlined} from "@ant-design/icons";
import {AuthMenu} from "./login";
import {useSession, signOut} from "next-auth/client";

const Menu = () => {
    const setThem = (checked) => {
        if (!checked) {
            localStorage.setItem("them", "dark");
            document.documentElement.dataset.theme = "dark";
        } else {
            localStorage.setItem("them", "light");
            document.documentElement.dataset.theme = "light";
        }
    };

    const [session, sessionLoading] = useSession();

    return (
        <Row justify="center">
            <Col xs={{span: 23}} md={{span: 20}}>
                <Row>
                    <Col span={18} className="menubar">
                        <Space size="large">
                            <img src="/logo.svg" alt="logo"/>
                            <Link href={"/"}>
                                <a className="menubar-item">خانه</a>
                            </Link>
                            <Link href={"/about-us"}>
                                <a className="menubar-item">درباره ما</a>
                            </Link>
                            <Link href={"/contact-us"}>
                                <a className="menubar-item">تماس با ما</a>
                            </Link>

                            <Link href={"/contact-us"}>
                                <a className="menubar-item">تماس با ما</a>
                            </Link>

                            {sessionLoading ? (
                                <>
                                    <Spin/>
                                </>
                            ) : (
                                <>
                                    {session ? (
                                        <>
                                            <Link href={"#"} passHref>
                                                <a className="menubar-item" onClick={() => signOut()}>
                                                    خروج
                                                </a>
                                            </Link>
                                        </>
                                    ) : (
                                        <>
                                            <Dropdown overlay={AuthMenu}>
                                                <a
                                                    className="ant-dropdown-link menubar-item"
                                                    onClick={(e) => e.preventDefault()}
                                                >
                                                    ورود <DownOutlined/>
                                                </a>
                                            </Dropdown>
                                        </>
                                    )}
                                </>
                            )}
                        </Space>
                    </Col>
                    <Col span={6} align="end">
                        <span className="switch-them">
                            <Switch
                                onChange={setThem}
                                checkedChildren={<i className="bi bi-sun-fill"/>}
                                unCheckedChildren={
                                    <i className=" bi bi-moon-fill"/>
                                }
                                defaultChecked
                            />
                        </span>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};
export default Menu;
