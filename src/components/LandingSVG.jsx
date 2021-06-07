import React from "react";

const LandingSVG = () => {
  return (
    <div className="col-md-6 col-sm-12">
      <svg
        width="80%"
        height="auto"
        viewBox="0 0 71 68"
        className="landingSVG float-none float-md-start"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="36.5"
          cy="34"
          rx="34.5"
          ry="34"
          className="land-circle-back"
        />
        <defs>
          <pattern
            id="pattern-cubes"
            x="0"
            y="126"
            patternUnits="userSpaceOnUse"
            width="3.9375"
            height="6.25"
            viewBox="0 0 10 16"
          >
            <g id="cube">
              <path class="left-shade" d="M0 0l5 3v5l-5 -3z" />
              <path class="right-shade" d="M10 0l-5 3v5l5 -3" />
            </g>
            <use x="5" y="8" href="#cube" />
            <use x="-5" y="8" href="#cube" />
          </pattern>
          <filter id="white-shadow">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="0.5"
              flood-color="#fab2fa"
            />
          </filter>
        </defs>
        <ellipse
          fill="url(#pattern-cubes)"
          cx="36.5"
          cy="34"
          rx="34.5"
          ry="34"
          className="land-circle"
        />
        <path
          d="M15.6783 29.8621C16.8259 30.636 16.8869 32.3033 15.7991 33.1591L6.99295 40.0866C6.48856 40.4833 6.48317 41.2458 6.98189 41.6497L15.8261 48.8118C16.9071 49.6872 16.8341 51.3585 15.6808 52.1363V52.1363C14.921 52.6486 13.9149 52.6004 13.2076 52.0178L2.77888 43.4278C1.33273 42.2366 1.32015 40.026 2.75265 38.8184L13.2211 29.9938C13.9187 29.4057 14.9218 29.3519 15.6783 29.8621V29.8621Z"
          className="chevron-left"
        />
        <path
          d="M20.3217 29.8621C19.1741 30.636 19.1131 32.3033 20.2009 33.1591L29.0071 40.0866C29.5114 40.4833 29.5168 41.2458 29.0181 41.6497L20.1739 48.8118C19.0929 49.6872 19.1659 51.3585 20.3192 52.1363V52.1363C21.079 52.6486 22.0851 52.6004 22.7924 52.0178L33.2211 43.4278C34.6673 42.2366 34.6798 40.026 33.2473 38.8184L22.7789 29.9938C22.0813 29.4057 21.0782 29.3519 20.3217 29.8621V29.8621Z"
          className="chevron-right"
        />
        <rect
          x="51"
          y="40"
          width="14"
          height="25"
          rx="3"
          className="mobile-border"
        />
        <path
          d="M60.5 41H62C63.1046 41 64 41.8954 64 43V62C64 63.1046 63.1046 64 62 64H54C52.8954 64 52 63.1046 52 62V43C52 41.8954 52.8954 41 54 41H55.5L56.5 41.5111H59.5L60.5 41Z"
          className="mobile-screen"
        />
        <path
          d="M60.9509 55H55.0469L57.9989 48.601L60.9509 55ZM55.5689 54.667H60.4289L57.9989 49.393L55.5689 54.667Z"
          className="svgText"
        />
        <rect
          x="54"
          y="63"
          width="8"
          height="0.5"
          rx="0.25"
          className="mobile-swipe"
        />
        <rect
          x="24"
          y="4"
          width="45"
          height="22"
          rx="1.5"
          className="desktop-screen"
        />
        <path
          d="M47.849 26L49 30.5H44L44.9623 26H47.849Z"
          className="desktop-stand"
        />
      </svg>
    </div>
  );
};

export default LandingSVG;
