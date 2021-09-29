import React from "react";
import {Col, Row, Space} from "antd";
import Slider from "react-slick";
import Link from 'next/Link'

const Featured = () => {

    const settings = {
        rtl: true,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            <Col className="d-flex">
                <article className="article">
                    <Link href={'/'}>
                        <a className="article-link">
                            <div className="article-info bg-yellow">1</div>
                            <div className="article-bg"/>
                        </a>
                    </Link>
                </article>
                <article className="article">
                    <Link href={'/'}>
                        <a className="article-link">
                            <div className="article-info bg-blue">2</div>
                            <div className="article-bg"/>
                        </a>
                    </Link>
                </article>
            </Col>
            <Col className="d-flex">
                <article className="article">
                    <Link href={'/'}>
                        <a className="article-link">
                            <div className="article-info bg-purple">3</div>
                            <div className="article-bg"/>
                        </a>
                    </Link>
                </article>
                <article className="article">
                    <Link href={'/'}>
                        <a className="article-link">
                            <div className="article-info bg-blue">4</div>
                            <div className="article-bg"/>
                        </a>
                    </Link>
                </article>
            </Col>

        </Slider>
    )
}
export default Featured;