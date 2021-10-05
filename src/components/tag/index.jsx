import React from "react";
import {Col, Divider, Space, Typography} from "antd";
import Link from "next/link";

const Tags = () => {
    const {Title} = Typography;
    const data = [
        {title: "Js", count: 20},
        {title: "C#", count: 30},
        {title: "Swift", count: 10},
        {title: "Rect", count: 13},
        {title: "Angular", count: 20},
        {title: "Vue", count: 3},
        {title: "Ui/Ux", count: 40},
        {title: "General", count: 88},
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
                    <Link href={`/${item.title}`} key={index}>
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
export default Tags;
