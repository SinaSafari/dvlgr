import React, {useLayoutEffect, useState} from "react";
import {Button, Col, Drawer, Row, Space, Switch} from "antd";
import Link from "next/link";
import {useSession, signOut} from "next-auth/client";
import {useRouter} from "next/router";

const Menu = () => {
    const router = useRouter();
    const [visible, setVisible] = useState(false);
    const [session, sessionLoading] = useSession();


    const setThem = (checked) => {
        if (!checked) {
            localStorage.setItem("them", "dark");
            document.documentElement.dataset.theme = "dark";
        } else {
            localStorage.setItem("them", "light");
            document.documentElement.dataset.theme = "light";
        }
    };
    useLayoutEffect(() => {
        localStorage.setItem("them", "dark");
        document.documentElement.dataset.theme = "dark";
    }, [])
    const menu = [
        {name: 'خانه', url: '/'},
        {name: 'درباره ما', url: '/d'},
        {name: 'نویسنده ها', url: '/d'},
        {name: 'تماس با ما', url: '/d'},
    ]
    return (
        <>
            <Row justify="center">
                <Col xs={{span: 23}} md={{span: 20}}>
                    <Row>
                        <Col span={18}>
                            <div className="d-flex align-item-center">
                                <div className="d-flex d-lg-none align-items-center">
                                    <svg onClick={() => setVisible(true)}
                                         xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                         className="bi bi-list" viewBox="0 0 16 16">
                                        <path
                                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                    </svg>
                                </div>
                                <div>
                                    <img src="/logo.svg" alt="logo"/>
                                </div>
                                <div className="d-none d-lg-flex">
                                    {menu.map((menu, index) => (
                                        <Link href={menu.url}
                                              key={index}>
                                            <a className="mx-2">
                                            <span className={`menu-item ${router.pathname === menu.url && "active"}`}>
                                                {menu.name}
                                            </span>
                                            </a>
                                        </Link>
                                    ))}
                                </div>
                            </div>


                        </Col>
                        <Col span={6}>
                            <div className="d-flex justify-content-end align-items-center">
                                <div className="switch-them">
                                    <Switch
                                        onChange={setThem}
                                        checkedChildren={<i className="bi bi-sun-fill"/>}
                                        unCheckedChildren={
                                            <i className=" bi bi-moon-fill"/>
                                        }
                                    />
                                </div>
                                <div className="me-3">
                                    {sessionLoading ? (
                                        <Button shape="round"
                                                size="large"
                                                loading/>
                                    ) : (
                                        <>
                                            {session ? (
                                                <Button size="large"
                                                        shape="round"
                                                        onClick={() => signOut()}>
                                                    خروج
                                                </Button>
                                            ) : (
                                                <Button shape="round"
                                                        size="large">
                                                    ورود / ثبت نام
                                                </Button>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Drawer title={
                <div>
                    <img src="/logo.svg" alt="logo"/>
                </div>
            } placement="right" onClose={() => setVisible(false)} visible={visible}>
                <Link href={'/'}>
                    <a>
                        خانه
                    </a>
                </Link>
            </Drawer>
        </>

    );
};
export default Menu;
