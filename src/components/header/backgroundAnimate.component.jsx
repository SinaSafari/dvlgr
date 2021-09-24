import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { UncontrolledTooltip } from "reactstrap";

const BackgroundAnimate = ({ logos }) => {
  const circleLine = useRef(null);
  const circleLine2 = useRef(null);

  useEffect(() => {
    gsap.from(circleLine.current, {
      transformOrigin: "center",
      rotation: 360,
      duration: 140,
      repeat: -1,
      ease: "linear",
    });
    gsap.from(circleLine2.current, {
      transformOrigin: "center",
      rotation: -360,
      duration: 150,
      repeat: -1,
      ease: "linear",
    });
  }, [circleLine, circleLine2]);
  return (
    <div className="svg-background">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 946">
        <g id="orbits">
          <g
            id="orbit_1"
            data-name="orbit 1"
            transform="translate(48 -638)"
            fill="none"
            stroke="#506cf1"
            strokeLinecap="round"
            strokeWidth="3"
            strokeDasharray="8 10"
            opacity="0.2"
          >
            <circle
              cx="637.5"
              cy="637.5"
              r="636.5"
              fill="none"
              ref={circleLine}
            />
          </g>
          <g
            id="orbit_2"
            data-name="orbit 2"
            transform="translate(-218 -904)"
            fill="none"
            stroke="#506cf1"
            strokeLinecap="round"
            strokeWidth="3"
            strokeDasharray="8 10"
            opacity="0.2"
          >
            <circle
              cx="903.5"
              cy="903.5"
              r="902.5"
              fill="none"
              ref={circleLine2}
            />
          </g>
        </g>
        <g id="planets">
          <circle
            id="planet_1"
            className="cls-4"
            cx="175.5"
            cy="741.5"
            r="11"
          />
          <circle
            id="planet_2"
            className="cls-4"
            cx="1311.5"
            cy="646.5"
            r="11"
          />
          <circle
            id="planet_3"
            className="cls-4"
            cx="1311.5"
            cy="123.5"
            r="11"
          />
          <circle
            id="planet_4"
            className="cls-4"
            cx="454.5"
            cy="871.5"
            r="26"
          />
          <circle
            id="planet_5"
            className="cls-4"
            cx="880.5"
            cy="606.5"
            r="19"
          />
          <circle
            id="planet_6"
            className="cls-4"
            cx="1547.5"
            cy="262.5"
            r="24"
          />
          <circle
            id="planet_7"
            className="cls-4"
            cx="107.5"
            cy="267.5"
            r="16"
          />
        </g>

        <g id="back_pics">
          <path
            id="back_pic_6"
            className="cls-4"
            d="M1406.92,477a52.72,52.72,0,0,0-52.92,52.5h0A52.7,52.7,0,0,0,1406.92,582h0a52.5,52.5,0,1,0,0-105Z"
          />
          <ellipse
            id="back_pic_5"
            className="cls-4"
            cx="1036.36"
            cy="528.59"
            rx="38.36"
            ry="38.1"
          />
          <path
            id="back_pic_4"
            className="cls-4"
            d="M1086.08,761.5A42.91,42.91,0,0,0,1043,804.24h0a43.08,43.08,0,1,0,43.08-42.74Z"
          />
          <path
            id="back_pic_1"
            className="cls-4"
            d="M280.44,451.42a35.16,35.16,0,1,0,0,70.31h0a35.29,35.29,0,0,0,35.43-35.16h0a35.29,35.29,0,0,0-35.43-35.15Z"
          />
          <ellipse
            id="back_pic_3"
            className="cls-4"
            cx="608.03"
            cy="901.67"
            rx="37.59"
            ry="37.33"
          />
          <path
            id="back_pic_2"
            className="cls-4"
            d="M559.35,576.62a43.19,43.19,0,0,0-43.35,43h0a43.18,43.18,0,0,0,43.35,43h0a43.18,43.18,0,0,0,43.35-43h0A43.18,43.18,0,0,0,559.35,576.62Z"
          />
        </g>
        <g id="pics">
          <image
            href={logos[0].url}
            width="71.61"
            height="71.04"
            transform="translate(1004 492)"
          />
          <image
            href={logos[1].url}
            width="79"
            height="79"
            transform="translate(1050 763)"
          />
          <image
            href={logos[2].url}
            width="98"
            height="98"
            transform="translate(1363 477)"
          />
          <image
            href={logos[3].url}
            width="65"
            height="65"
            transform="translate(250 453)"
          />
          <image
            href={logos[4].url}
            width="70"
            height="70"
            transform="translate(576 865)"
          />
          <image
            href={logos[5].url}
            id="pic5"
            width="80"
            height="80"
            transform="translate(521 579)"
          />
          <UncontrolledTooltip placement="top" target={`pic5`}>
            <p>{logos[5].name}</p>
            <p>{logos[5].description}</p>
          </UncontrolledTooltip>
        </g>
      </svg>
    </div>
  );
};
export default BackgroundAnimate;
