import React, { useEffect, useState } from "react";
import {
  Col,
  Row,
  Typography,
  Radio,
  Space,
  Form,
  Input,
  Button,
  Pagination,
} from "antd";
import { useRouter } from "next/router";
import RecentlyPost from "@/components/recently-post";

const BlogIndexPage = ({ data }) => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [filter, setFilter] = useState("all");
  const { Title, Text } = Typography;
  const onChange = (e) => {
    router.replace({
      query: {
        category: e.target.value,
      },
    });
    setFilter(e.target.value);
  };

  useEffect(() => {
    setFilter(router.query.category);
  }, [router.query.category]);

  const onFinish = (value) => {
    console.log("Finish:", value);
  };
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={{ span: 24 }} md={{ span: 7 }}>
          <div className="py-3">
            <Title level={3} className="title">
              دسته بندی
            </Title>
          </div>
          <div className="box">
            <Radio.Group onChange={onChange} value={filter}>
              <Space direction="vertical">
                {/* <Radio value={"all"}>همه</Radio>
                <Radio value={"js"}>Js</Radio>
                <Radio value={"python"}>Python</Radio>
                <Radio value={"swift"}>Swift</Radio>
                <Radio value={"c-sharp"}>C#</Radio>
                <Radio value={"rect"}>Rect Js</Radio>
                <Radio value={"angular"}>Angular Js</Radio>
                <Radio value={"vue"}>Vue Js</Radio>
                <Radio value={"ui-ux"}>Ui/Ux</Radio>
                <Radio value={"general"}>General</Radio> */}
                {data.categories.map((item) => (
                  <Radio key={item.id} value={item.title}>
                    {item.name}
                  </Radio>
                ))}
              </Space>
            </Radio.Group>
          </div>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 17 }}>
          <Row gutter={[0, 0]}>
            <Col span={24}>
              <div className="box d-flex justify-content-between">
                <div>
                  <Text>
                    <Space>
                      <span>1305</span>
                      <span>مورد یافت شد</span>
                    </Space>
                  </Text>
                </div>
                <div>
                  <Space>
                    <span>مرتب سازی بر اساس:</span>
                    <Radio.Group
                      defaultValue="a"
                      size="small"
                      optionType="button"
                      buttonStyle="solid"
                    >
                      <Radio.Button value="a">جدیدترین</Radio.Button>
                      <Radio.Button value="b">بازدید بیشتر</Radio.Button>
                    </Radio.Group>
                  </Space>
                </div>
              </div>
            </Col>
            <Col span={24}>
              <Row gutter={[16, 32]}>
                <RecentlyPost data={data.posts} />
                <Pagination />
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default BlogIndexPage;

/**
 *
 * @param {import('next').GetServerSidePropsContext} ctx
 * @returns {import('next').GetServerSidePropsResult}
 */
export async function getServerSideProps(ctx) {
  const res = await fetch(
    `http://localhost:3000/api/posts/category?title=${ctx.query.category}`
  );
  const jsonres = await res.json();

  console.log(jsonres.data.posts);
  return {
    props: {
      data: jsonres.data,
    },
  };
}
