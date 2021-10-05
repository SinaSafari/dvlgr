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

export default function BlogDetailsPage(props) {
  const router = useRouter();
  const { Item } = Breadcrumb;
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
        <div className="box">
          <Breadcrumb>
            <Item href={`/`}>
              <i className="bi bi-house-door-fill" />
            </Item>
            <Item href={`/${router.query.category}`}>
              <span>{router.query.category}</span>
            </Item>
            <Item>{router.query.slug}</Item>
          </Breadcrumb>
        </div>
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 17 }}>
        <div className="box">
          <HeaderPost />
          <div>
            <p>
              نکته: برای یادگیری کامل و جزئی بعضی از این موارد نیازمند یک مقاله
              اختصاصی هست. برای آیتم‌هایی که اینجا بررسی می‌کنیم (هر چند خلاصه
              هستن)، تا حد امکان سعی می‌کنم کامل و واضح توضیح بدم که اگه قصد
              یادگیری هم داشته باشین، نیاز شما رو برطرف کنه. و اما تفاوت‌ها. از
              undefined شروع کنیم:
            </p>
            <p>
              ویژگی‌های منحصر به فرد undefined: undefined یک مقدار پیشفرض برای
              متغیرهایی هست که مقدار ندارن. یعنی موقع ساختن این متغیر بهش مقدار
              داده نشده undefined یک خروجی پیشفرض هست برای تابعی که return نداره
              وقتی یک پراپرتی (یا key) از یک آبجکت رو صدا بزنیم که وجود نداره،
              خروجی undefined هست
            </p>
            <p>
              نکته: برای یادگیری کامل و جزئی بعضی از این موارد نیازمند یک مقاله
              اختصاصی هست. برای آیتم‌هایی که اینجا بررسی می‌کنیم (هر چند خلاصه
              هستن)، تا حد امکان سعی می‌کنم کامل و واضح توضیح بدم که اگه قصد
              یادگیری هم داشته باشین، نیاز شما رو برطرف کنه. و اما تفاوت‌ها. از
              undefined شروع کنیم:
            </p>
            <p>
              ویژگی‌های منحصر به فرد undefined: undefined یک مقدار پیشفرض برای
              متغیرهایی هست که مقدار ندارن. یعنی موقع ساختن این متغیر بهش مقدار
              داده نشده undefined یک خروجی پیشفرض هست برای تابعی که return نداره
              وقتی یک پراپرتی (یا key) از یک آبجکت رو صدا بزنیم که وجود نداره،
              خروجی undefined هست
            </p>
            <p>
              نکته: برای یادگیری کامل و جزئی بعضی از این موارد نیازمند یک مقاله
              اختصاصی هست. برای آیتم‌هایی که اینجا بررسی می‌کنیم (هر چند خلاصه
              هستن)، تا حد امکان سعی می‌کنم کامل و واضح توضیح بدم که اگه قصد
              یادگیری هم داشته باشین، نیاز شما رو برطرف کنه. و اما تفاوت‌ها. از
              undefined شروع کنیم:
            </p>
            <p>
              ویژگی‌های منحصر به فرد undefined: undefined یک مقدار پیشفرض برای
              متغیرهایی هست که مقدار ندارن. یعنی موقع ساختن این متغیر بهش مقدار
              داده نشده undefined یک خروجی پیشفرض هست برای تابعی که return نداره
              وقتی یک پراپرتی (یا key) از یک آبجکت رو صدا بزنیم که وجود نداره،
              خروجی undefined هست
            </p>
            <p>
              نکته: برای یادگیری کامل و جزئی بعضی از این موارد نیازمند یک مقاله
              اختصاصی هست. برای آیتم‌هایی که اینجا بررسی می‌کنیم (هر چند خلاصه
              هستن)، تا حد امکان سعی می‌کنم کامل و واضح توضیح بدم که اگه قصد
              یادگیری هم داشته باشین، نیاز شما رو برطرف کنه. و اما تفاوت‌ها. از
              undefined شروع کنیم:
            </p>
            <p>
              ویژگی‌های منحصر به فرد undefined: undefined یک مقدار پیشفرض برای
              متغیرهایی هست که مقدار ندارن. یعنی موقع ساختن این متغیر بهش مقدار
              داده نشده undefined یک خروجی پیشفرض هست برای تابعی که return نداره
              وقتی یک پراپرتی (یا key) از یک آبجکت رو صدا بزنیم که وجود نداره،
              خروجی undefined هست
            </p>
            <p>
              نکته: برای یادگیری کامل و جزئی بعضی از این موارد نیازمند یک مقاله
              اختصاصی هست. برای آیتم‌هایی که اینجا بررسی می‌کنیم (هر چند خلاصه
              هستن)، تا حد امکان سعی می‌کنم کامل و واضح توضیح بدم که اگه قصد
              یادگیری هم داشته باشین، نیاز شما رو برطرف کنه. و اما تفاوت‌ها. از
              undefined شروع کنیم:
            </p>
            <p>
              ویژگی‌های منحصر به فرد undefined: undefined یک مقدار پیشفرض برای
              متغیرهایی هست که مقدار ندارن. یعنی موقع ساختن این متغیر بهش مقدار
              داده نشده undefined یک خروجی پیشفرض هست برای تابعی که return نداره
              وقتی یک پراپرتی (یا key) از یک آبجکت رو صدا بزنیم که وجود نداره،
              خروجی undefined هست
            </p>
            <p>
              نکته: برای یادگیری کامل و جزئی بعضی از این موارد نیازمند یک مقاله
              اختصاصی هست. برای آیتم‌هایی که اینجا بررسی می‌کنیم (هر چند خلاصه
              هستن)، تا حد امکان سعی می‌کنم کامل و واضح توضیح بدم که اگه قصد
              یادگیری هم داشته باشین، نیاز شما رو برطرف کنه. و اما تفاوت‌ها. از
              undefined شروع کنیم:
            </p>
            <p>
              ویژگی‌های منحصر به فرد undefined: undefined یک مقدار پیشفرض برای
              متغیرهایی هست که مقدار ندارن. یعنی موقع ساختن این متغیر بهش مقدار
              داده نشده undefined یک خروجی پیشفرض هست برای تابعی که return نداره
              وقتی یک پراپرتی (یا key) از یک آبجکت رو صدا بزنیم که وجود نداره،
              خروجی undefined هست
            </p>
          </div>

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
        <Divider dashed id="comment" />
        <div className="box">
          <Title level={5}>نظر تو چیه؟!؟</Title>
          <Alert
            className="w-100"
            message="متاسفانه شما لاگین نیستی 😢"
            description={
              <div className="d-flex align-items-center justify-content-between">
                <Text>لطفا برای نوشتن دیدگاه خودت وارد سامانه شو</Text>
                <Button>ورود</Button>
              </div>
            }
            type="warning"
            showIcon
          />
        </div>
        <div className="box mt-3">
          <div className="d-flex justify-content-between align-items-center w-100">
            <div>
              <Title level={5}>نظر دیگران</Title>
            </div>
            <div>
              <text>4</text>
            </div>
          </div>
          <Divider dashed />
          <Comment
            className="w-100"
            actions={[
              <span key="comment-nested-reply-to">
                <i className="bi bi-reply" />
              </span>,
              <span key="comment-nested-Like">
                <i className="bi bi-heart" />
              </span>,
            ]}
            author={"عباس بوعذار"}
            avatar={"../../img/avatar/boazaaaa-1.jpg"}
            content={
              <p>
                سلام خسته نباشید مرسی از مطالب مفید و کاربردی شما میخواستم بدونم
                آیا شما یک منبع فارسی خوب برای یادگیری جاوا اسکریپت که این زبان
                رو با جزئیات کامل(حتی کوچکترین نکات) آموزش داده باشه سراغ دارید
                منظورم اینه که تمام موضوعات و متد ها و بخش و... رو آموزش داده
                باشه
              </p>
            }
            datetime={new Date().toLocaleString()}
          >
            <Comment
              actions={[
                <span key="comment-nested-Like">
                  <i className="bi bi-heart" />
                </span>,
              ]}
              author={"محمد رودخانه ای"}
              avatar={"../../img/avatar/mohammad.jpg"}
              content={<p>نــــــــــــــه خیر!</p>}
              datetime={new Date().toLocaleString()}
            />
            <Comment
              actions={[
                <span key="comment-nested-Like">
                  <i className="bi bi-heart" />
                </span>,
              ]}
              author={"محمد رودخانه ای"}
              avatar={"../../img/avatar/mohammad.jpg"}
              content={<p>یه دونننه «ر» داره 😂</p>}
              datetime={new Date().toLocaleString()}
            />
          </Comment>

          <Comment
            actions={[
              <span key="comment-nested-reply-to">
                <i className="bi bi-reply" />
              </span>,
              <span key="comment-nested-Like">
                <i className="bi bi-heart" />
              </span>,
            ]}
            className="w-100"
            author={"سینا صفری"}
            avatar={"../../img/avatar/sina.jpg"}
            content={<p>با شررررررررررررررررفترین!</p>}
            datetime={new Date().toLocaleString()}
          />
        </div>
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
  const markdown = `
    ## سلام من به تووووو یار قدییییییییمی
    منم همون هوووووادار صمیمی
    ~~~js
    console.log('It works!')
    ~~~
    
    ~~~swift
    // label function
    func someComputation(arrayOfNumbers numbers: [Int]) -> (min: Int, max: Int , sum: Int) {
        var min = numbers[0]
        var max = numbers[0]
        var sum = 0
    
        for num in numbers {
            if num > max {
                max = num
            } else if num < min {
                min = num
            }
            sum += num
        }
    
        return (min, max, sum)
    }
    
    let report = someComputation(arrayOfNumbers: [10, 9, 14, 22])
    print(report.min)
    print(report.max)
    print(report.sum)
    ~~~
    
    - [ ] hello
    - [x] world
    
    
    
    The lift coefficient <span dir="ltr">($C_L$)</span> is a dimensionless coefficient.
    `;
  return {
    props: {
      md: markdown,
    },
  };
}
