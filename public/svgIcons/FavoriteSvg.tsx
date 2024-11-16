import React from "react";
import { IconProps } from "../../src/types/IconType";

const FavoriteSvg = ({height, width} : IconProps) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={height}
      height={width}
      // className="h-4 w-4 md:h-[100px] md:w-[100px]"
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M1340 4705 c-198 -32 -427 -126 -589 -242 -664 -479 -785 -1423 -263
-2049 75 -91 2009 -1987 2043 -2003 25 -13 33 -13 58 0 34 16 1967 1911 2041
2000 153 184 257 405 306 654 27 135 25 386 -5 525 -41 194 -103 345 -204 498
-328 497 -928 739 -1455 586 -236 -68 -418 -181 -613 -377 l-99 -101 -99 101
c-55 55 -133 125 -173 155 -286 216 -620 305 -948 253z m396 -169 c262 -56
498 -207 692 -441 41 -49 88 -96 103 -104 43 -22 73 -2 161 104 237 287 532
445 858 461 318 16 637 -113 880 -356 423 -421 488 -1081 157 -1577 -36 -54
-98 -133 -139 -175 -99 -105 -1880 -1848 -1888 -1848 -7 0 -1800 1754 -1893
1853 -299 315 -414 769 -302 1187 129 478 523 833 1011 910 80 12 273 5 360
-14z"
        />
      </g>
    </svg>
  );
};

export default FavoriteSvg;
