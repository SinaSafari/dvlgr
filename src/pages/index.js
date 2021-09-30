import Featured from "@/components/featured";
import { Col, Divider, Row, Typography } from "antd";
import RecentlyPost from "@/components/recently-post";
import Tags from "@/components/tag";
import { NextSeo } from "next-seo";
import { NextSeoHomePageProps } from "@/lib/seo/index";

export default function Home() {
  const { Title, Text } = Typography;
  return (
    <>
      <NextSeo {...NextSeoHomePageProps()} />
      <Row gutter={[16, 16]}>
        <Col xs={{ span: 24 }} md={{ span: 18 }}>
          <Title level={2} className="title">
            ویژه های این ماه
          </Title>
          <Featured />
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <Tags />
        </Col>
        <Col span={24}>
          <Title level={2} className="title mt-5">
            آخرین نوشته ها
          </Title>
          <RecentlyPost />
        </Col>
      </Row>
    </>
  );
}

/**
 *
 * @param {import('next').GetServerSidePropsContext} ctx
 * @returns {import('next').GetServerSidePropsResult}
 */
export async function getServerSideProps(ctx) {
  return {
    props: {
      // logos: logos.sort(() => Math.random() - 0.5),
    },
  };
}
