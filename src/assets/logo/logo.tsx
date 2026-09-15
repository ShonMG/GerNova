import type { SVGAttributes } from "react";

const Logo = (props: SVGAttributes<SVGElement>) => {
  return (
    <div className="flex items-center">
      <svg
        width="230"
        height="64"
        viewBox="0 0 230 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        {/* =========================
            GER NOVA ICON
        ========================== */}

        <g transform="translate(2 10)">
          {/* Main futuristic G */}
          <path
            d="
              M24 4
              C12.95 4 4 12.95 4 24
              C4 35.05 12.95 44 24 44
              C34.2 44 42.65 36.37 43.87 26.5
              H25
              V20.5
              H48
              V24
              C48 37.25 37.25 48 24 48
              C10.75 48 0 37.25 0 24
              C0 10.75 10.75 0 24 0
              C31.7 0 38.55 3.63 42.8 9.25
            "
            fill="url(#gernovaGradient)"
          />

          {/* Inner G detail */}
          <path
            d="
              M24 10
              C16.27 10 10 16.27 10 24
              C10 31.73 16.27 38 24 38
              C29.4 38 34.1 34.94 36.45 30.5
              H24
              V24.5
              H43.5
            "
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white dark:text-gray-950"
          />

          {/* Orange energy accent */}
          <path
            d="M39.5 8.5L45 14"
            stroke="#FF6B00"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <circle
            cx="45"
            cy="14"
            r="2.5"
            fill="#FF6B00"
          />
        </g>

        {/* =========================
            GER NOVA WORDMARK
        ========================== */}

        <text
          x="62"
          y="34"
          fontFamily="Inter, Arial, Helvetica, sans-serif"
          fontSize="27"
          fontWeight="700"
          letterSpacing="-1"
          className="fill-gray-950 dark:fill-white"
        >
          Ger
        </text>

        <text
          x="108"
          y="34"
          fontFamily="Inter, Arial, Helvetica, sans-serif"
          fontSize="27"
          fontWeight="700"
          letterSpacing="-1"
          fill="url(#wordGradient)"
        >
          Nova
        </text>

        {/* =========================
            DIGITAL TECHNOLOGIES
        ========================== */}

        <text
          x="63"
          y="51"
          fontFamily="Inter, Arial, Helvetica, sans-serif"
          fontSize="8.5"
          fontWeight="600"
          letterSpacing="2.2"
          className="fill-gray-500 dark:fill-gray-400"
        >
          DIGITAL TECHNOLOGIES
        </text>

        {/* Small orange accent */}
        <circle
          cx="219"
          cy="48"
          r="2"
          fill="#FF6B00"
        />

        {/* =========================
            GRADIENTS
        ========================== */}

        <defs>
          <linearGradient
            id="gernovaGradient"
            x1="4"
            y1="4"
            x2="46"
            y2="45"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FF6B00" />
            <stop offset="50%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>

          <linearGradient
            id="wordGradient"
            x1="108"
            y1="10"
            x2="165"
            y2="38"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FF6B00" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;