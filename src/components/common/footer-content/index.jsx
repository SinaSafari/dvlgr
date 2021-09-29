import React from "react";
import Link from "next/Link";
import {Col, Row, Space} from "antd";


const FooterContent = () => {
    return (
        <Row justify="center">
            <Col xs={{span: 23}}
                 md={{span: 20}}>
                <div className="d-flex justify-content-between">
                    <div>
                        ساخته شده توسط تیم *قهوت با من*
                    </div>
                    <Space size="large">
                        <Link href={'/'}>
                            <a>
                                <i className="bi bi-instagram"/>
                            </a>
                        </Link>
                        <Link href={'/'}>
                            <a>
                                <i className="bi bi-twitter"/>
                            </a>
                        </Link>
                    </Space>
                </div>
            </Col>
        </Row>
    )
}
export default FooterContent;