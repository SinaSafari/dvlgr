import React from "react";
import { Col, Divider, Space, Typography } from "antd";
import Link from "next/link";

const Category = ({ data }) => {
  const { Title } = Typography;

  return (
    <>
      <div className="box">
        <div className="w-100">
          <Title level={5} className="text-center">
            دسته بندی ها
          </Title>
          <Divider dashed />
        </div>
        {data.length === 0 ? (
          <>دسته بندی فعالی وجود ندارد</>
        ) : (
          data.map((item, index) => (
            <Link href={`/posts/${item.title}`} key={index}>
              <a className="tag tag-large tag-gray mb-2 me-2">
                <Space>
                  <span>{item.name}</span>
                  {/* <span>({item.count})</span> */}
                </Space>
              </a>
            </Link>
          ))
        )}
      </div>
    </>
  );
};
export default Category;
