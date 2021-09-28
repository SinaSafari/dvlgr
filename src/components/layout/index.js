import React from "react";
import {Col, Layout, Row} from 'antd';
import Menu from "@/components/common/menu";

const GlobalLayout = ({children}) => {
    const {Header, Content, Footer} = Layout;

    return (
        <Layout className="custom">
            <Header>
                <Menu/>
            </Header>
            <Content className="mt-5">
                <Row justify="center">
                    <Col xs={{span: 23}}
                         md={{span: 20}} >
                        {children}
                    </Col>
                </Row>
            </Content>
            <Footer>

            </Footer>
        </Layout>
    );
};

export default GlobalLayout;
