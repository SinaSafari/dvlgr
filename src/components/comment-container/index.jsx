import React from "react";
import {Alert, Button, Comment, Divider, Typography} from "antd";


const CommentContainer = () => {
    const {Title, Text} = Typography;
    return (
        <>
            <Divider dashed id="comment"/>
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
                <Divider dashed/>
                <Comment
                    className="w-100"
                    actions={[
                        <span key="comment-nested-reply-to">
                <i className="bi bi-reply"/>
              </span>,
                        <span key="comment-nested-Like">
                <i className="bi bi-heart"/>
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
                  <i className="bi bi-heart"/>
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
                  <i className="bi bi-heart"/>
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
                <i className="bi bi-reply"/>
              </span>,
                        <span key="comment-nested-Like">
                <i className="bi bi-heart"/>
              </span>,
                    ]}
                    className="w-100"
                    author={"سینا صفری"}
                    avatar={"../../img/avatar/sina.jpg"}
                    content={<p>با شررررررررررررررررفترین!</p>}
                    datetime={new Date().toLocaleString()}
                />
            </div>
        </>
    )
}
export default CommentContainer;