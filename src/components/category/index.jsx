import React from "react";
import {Col, Divider, Space, Typography} from "antd";
import Link from "next/link";

const Category = () => {
    const {Title} = Typography;
    const data = [
        {title: "js", count: 20},
        {title: "c#", count: 30},
        {title: "swift", count: 10},
        {title: "rect", count: 13},
        {title: "angular", count: 20},
        {title: "vue", count: 3},
        {title: "ui/ux", count: 40},
        {title: "general", count: 88},
    ];
    return (
        <>
            <div className="box">
                <div className="w-100">
                    <Title level={5} className="text-center">
                        دسته بندی ها
                    </Title>
                    <Divider dashed/>
                </div>
                {data.map((item, index) => (
                    <Link href={`/posts/${item.title}`} key={index}>
                        <a className="tag tag-large tag-gray mb-2 me-2">
                            <Space>
                                <span>{item.title}</span>
                                <span>({item.count})</span>
                            </Space>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    );
};
export default Category;
