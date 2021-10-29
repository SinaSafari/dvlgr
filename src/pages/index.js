import Featured from "@/components/featured";
import { Col, Divider, Row, Typography } from "antd";
import RecentlyPost from "@/components/recently-post";
import { NextSeo } from "next-seo";
import { NextSeoHomePageProps } from "@/lib/seo/index";
import Category from "@/components/category";
import { getPopularCategories } from "@/server/repositories/category";
import { getFeaturedPosts, latestPosts } from "@/server/repositories/posts";

export default function Home({ data }) {
  const { Title } = Typography;

  console.table(data);
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
          <Category data={data.topCategories} />
          {JSON.stringify(data)}
        </Col>
        <Col span={24}>
          <Title level={2} className="title mt-5">
            آخرین نوشته ها
          </Title>
          <RecentlyPost data={data.latestPosts} />
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
  // const topCategories = await getPopularCategories();
  // const featuredPosts = await getFeaturedPosts();
  // const latestPostsData = await latestPosts();

  // console.log(latestPostsData);

  const res = await fetch("http://localhost:3000/api/hello");
  const jsonres = await res.json();
  return {
    props: {
      data: jsonres.data,

      // logos: logos.sort(() => Math.random() - 0.5),
    },
  };
}
