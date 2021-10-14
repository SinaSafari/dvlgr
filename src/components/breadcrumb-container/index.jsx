import React from "react";
import {Breadcrumb} from "antd";


const BreadcrumbContainer = ({router}) => {
    const {Item} = Breadcrumb;
    return (
        <div className="box">
            <Breadcrumb>
                <Item href={`/`}>
                    <i className="bi bi-house-door-fill"/>
                </Item>
                <Item href={`/posts/${router.query.category}`}>
                    <span>{router.query.category}</span>
                </Item>
                <Item>{router.query.slug}</Item>
            </Breadcrumb>
        </div>
    )
}
export default BreadcrumbContainer;