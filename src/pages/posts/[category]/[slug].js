import { useRouter } from "next/dist/client/router";
import {
  Alert,
  Breadcrumb,
  Button,
  Col,
  Comment,
  Divider,
  Row,
  Space,
  Typography,
} from "antd";
import HeaderPost from "@/components/single-post/header-post";
import React from "react";
import Link from "next/link";
import { MDRenderer } from "@/components/editor/MDRenderer";
import CommentContainer from "@/components/comment-container";
import BreadcrumbContainer from "@/components/breadcrumb-container";

export default function BlogDetailsPage(props) {
  const { data } = props;
  const router = useRouter();

  const { Title, Text } = Typography;

  const related = [
    {
      title: "تفاوت var و let و const در جاوا اسکریپت ES6",
      author: "محمد رودخانه",
      createdAt: "1 مرداد 1400",
      timeToRead: "4",
    },
    {
      title: " چطوری متوجه بشیم یک رشته با یک مقدار خاص شروع میشه؟",
      author: "محمد رودخانه",
      createdAt: "1 شهریور 1400",
      timeToRead: "1",
    },
    {
      title: "چطوری فاصله‌ها (Space) رو از یک رشته حذف کنیم؟",
      author: "سینا صفری",
      createdAt: "1 مهر 1400",
      timeToRead: "1",
    },
  ];

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <BreadcrumbContainer router={router} />
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 17 }}>
        <div className="box">
          <HeaderPost data={data} />
          <article className="w-100">
            <MDRenderer md={data.content} />
          </article>

          <div>
            <Space>
              <span>برچسب‌ها:</span>
              <span className="tag tag-gray">#تست</span>
              <span className="tag tag-gray">#تست</span>
            </Space>
          </div>
        </div>
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 7 }}>
        <Title level={4} className="title">
          مطالب مرتبط
        </Title>
        {related.map((item, index) => (
          <div key={index} className="box-side">
            <div className="fw-bolder">
              <Text>{item.title}</Text>
            </div>
            <div className="small">
              <Text>{item.author}</Text>
            </div>
            <div className="d-flex justify-content-between small">
              <Text>{item.createdAt}</Text>
              <Space>
                <i className="bi bi-clock-history" />
                <span>خواندن {item.timeToRead} دقیقه</span>
              </Space>
            </div>
          </div>
        ))}

        <div className="box mt-3 align-items-center flex-column">
          <Title level={5}>ما را در شبکه‌های اجتماعی دنبال کنید</Title>
          <div
            className="d-flex mt-3
                    "
          >
            <Link href="/">
              <a>
                <div className="social-media">
                  <i className="bi bi-twitter" />
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="social-media">
                  <i className="bi bi-instagram" />
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="social-media">
                  <i className="bi bi-github" />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 17 }}>
        <CommentContainer />
      </Col>
    </Row>
  );
}

/**
 *
 * @param
    {
        import('next').GetServerSidePropsContext
    }
    ctx
 * @returns
    {
        import('next').GetServerSidePropsResult
    }
 */

export async function getServerSideProps(ctx) {
  const res = await fetch(`http://localhost:3000/api/posts/${ctx.params.slug}`);
  const jsonres = await res.json();
  return {
    props: {
      // md: markdown,
      data: jsonres.data,
    },
  };
}
