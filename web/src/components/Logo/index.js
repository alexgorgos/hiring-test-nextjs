import Link from "next/link";

import styles from "./Logo.module.css";

const Logo = ({ className, color }) => {
  return (
    <Link href="/">
      <a
        title="Planet Caravans"
        className={`logo ${styles.logo} ${className ? className : ""}`}
      >
        <svg
          width="145"
          height="33"
          viewBox="0 0 145 33"
          fill={color}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M138.55 0.32381H138.09V2.55V3.52143H137.379V2.55V0.32381H137.003H136V0H139.511V0.32381H138.55Z"
            fill={color}
          />
          <path
            d="M143.984 3.52143V2.50952V0.890476L142.814 3.48095H142.563L141.393 0.890476V2.34762V3.52143H141.058V2.34762V0.890476V0H141.727L142.897 2.59048L144.068 0H144.737V0.890476V2.50952V3.48095H143.984V3.52143Z"
            fill={color}
          />
          <path
            d="M7.17947 2.2681C7.79962 2.84719 8.13355 3.7882 8.13355 5.18767C8.13355 6.0563 7.94273 6.80429 7.5611 7.35925C7.20332 7.93834 6.75013 8.25201 6.22539 8.42091C5.65294 8.61394 4.91352 8.61394 3.93559 8.61394H3.02921V1.37533C3.29158 1.35121 3.62551 1.35121 4.031 1.35121C5.55753 1.35121 6.58317 1.66488 7.17947 2.2681ZM10.7334 7.62466C11.1628 6.85255 11.3774 5.98391 11.3774 4.99464C11.3774 3.86059 11.0674 2.89544 10.3995 2.12332C9.75549 1.37533 8.92067 0.796246 7.91888 0.506703C6.94095 0.217158 5.55753 0.0241284 3.76862 0.0241284H0V4.89812V13.3432V18H3.02921V9.82038H4.57959C6.51161 9.82038 7.96659 9.74799 8.80141 9.3378C9.61238 8.92761 10.2802 8.39678 10.7334 7.62466Z"
            fill={color}
          />
          <path
            d="M34.1203 18V16.7936H24.651V0.0241284H21.598V4.68096V13.2225V18H34.1203Z"
            fill={color}
          />
          <path
            d="M52.1505 10.4477H47.1177L49.5983 4.22252L52.1505 10.4477ZM58.519 18L50.9817 0.0241284H50.0992L42.7528 18H44.2793L46.7122 11.6059H52.6037L53.844 14.622C53.844 14.622 54.2256 15.5389 55.2036 18H58.519Z"
            fill={color}
          />
          <path
            d="M82.466 18V3.54692V0.0241284H81.1541V3.35389V12.5952L71.8518 0.0241284H68.7988V4.46381V13.4638V17.5657H69.9675V13.4638V2.58177L81.5596 18H82.466Z"
            fill={color}
          />
          <path
            d="M103.782 1.20643V0H93.1675V4.60858V10.9786V12.0161V13.2225V17.9759H103.734V16.7936H98.1764H96.2444V13.2225V12.0161V11.3646V10.9786V9.14477H97.7471H101.182V7.96247H97.6755H96.2444V5.13941V4.63271V1.20643H98.2241H103.782Z"
            fill={color}
          />
          <path
            d="M130 1.20643L129.976 0.0241284H112.707L112.66 1.20643H117.549H119.767V13.1019V18H122.821V13.1019V1.20643H125.349H130Z"
            fill={color}
          />
          <path
            d="M32.8555 31.9476C32.3121 32.5143 31.6433 32.7976 30.9326 32.7976C30.2638 32.7976 29.6786 32.5547 29.1352 32.069C28.6336 31.5833 28.3828 31.0166 28.3828 30.3285C28.3828 29.6809 28.6336 29.0738 29.1352 28.5881C29.6368 28.1024 30.222 27.8595 30.9326 27.8595C31.7269 27.8595 32.3539 28.1428 32.7719 28.7095L32.1031 29.2357C31.7687 28.8309 31.3507 28.6285 30.9326 28.6285C30.5146 28.6285 30.0966 28.7905 29.7622 29.1143C29.4278 29.4381 29.2188 29.8428 29.2188 30.2881C29.2188 30.7738 29.386 31.1786 29.7204 31.5024C30.0548 31.8262 30.4728 31.9881 30.9326 31.9881C31.1417 31.9881 31.3925 31.9476 31.6015 31.8262C31.8105 31.7047 32.0195 31.5833 32.1867 31.3809L32.8555 31.9476Z"
            fill={color}
          />
          <path
            d="M38.9167 31.6643L38.4569 32.7167H37.5791L39.9199 27.7786L42.2608 32.7167H41.383L40.9231 31.6643H38.9167ZM39.9199 29.4381L39.2511 30.9357H40.5887L39.9199 29.4381Z"
            fill={color}
          />
          <path
            d="M49.0739 27.9404C49.5755 27.9404 49.9517 28.0619 50.2861 28.3047C50.5787 28.5476 50.7459 28.9119 50.7459 29.3166C50.7459 29.6404 50.6623 29.9238 50.4533 30.1666C50.2443 30.4095 50.0353 30.5714 49.7845 30.6523L50.8713 32.7166H49.9517L48.9067 30.7333H47.9871V32.7166H47.1929V27.9404H49.0739ZM47.9453 30.0047H49.1157C49.3665 30.0047 49.5755 29.9642 49.7427 29.8428C49.8681 29.7214 49.9517 29.5595 49.9517 29.3571C49.9517 29.1547 49.8681 28.9928 49.7427 28.8714C49.5755 28.75 49.4083 28.7095 49.1157 28.7095H47.9871L47.9453 30.0047Z"
            fill={color}
          />
          <path
            d="M56.9323 31.6643L56.4725 32.7167H55.5947L57.9356 27.7786L60.2764 32.7167H59.3986L58.9388 31.6643H56.9323ZM57.9356 29.4381L57.2668 30.9357H58.6044L57.9356 29.4381Z"
            fill={color}
          />
          <path
            d="M64.3315 27.9404H65.2512L66.6724 31.138L68.0936 27.9404H69.0132L66.6724 32.838L64.3315 27.9404Z"
            fill={color}
          />
          <path
            d="M74.489 31.6643L74.0292 32.7167H73.1514L75.4922 27.7786L77.833 32.7167H76.9134L76.4536 31.6643H74.489ZM75.4922 29.4381L74.8234 30.9357H76.161L75.4922 29.4381Z"
            fill={color}
          />
          <path
            d="M86.1095 27.9405H86.9455V32.8381L83.5596 29.6V32.6762H82.7236V27.7786L86.1095 31.0167V27.9405Z"
            fill={color}
          />
          <path
            d="M93.5079 30.531C92.7555 30.2477 92.3375 29.8024 92.3375 29.1143C92.3375 28.75 92.4629 28.4262 92.7555 28.1834C93.0481 27.9405 93.3825 27.8191 93.8005 27.8191C94.3022 27.8191 94.8874 27.981 95.5144 28.3453L95.1382 29.0334C94.6366 28.75 94.2186 28.6286 93.9259 28.6286C93.6751 28.6286 93.4661 28.6691 93.3825 28.7905C93.2571 28.9119 93.2153 29.0334 93.2153 29.1548C93.2153 29.3977 93.3407 29.5596 93.6333 29.681L94.5948 30.0453C95.3054 30.3286 95.6816 30.7739 95.6816 31.381C95.6816 31.8262 95.5144 32.15 95.2218 32.3929C94.8874 32.6358 94.5112 32.7572 94.0095 32.7572C93.7587 32.7572 93.4661 32.6762 93.0899 32.5953C92.7137 32.4739 92.3793 32.3119 92.0449 32.1096L92.4211 31.4215C93.0481 31.7858 93.5915 31.9881 94.0095 31.9881C94.2604 31.9881 94.4694 31.9072 94.5948 31.8262C94.7202 31.7048 94.8038 31.5834 94.8038 31.381C94.8038 31.0977 94.5948 30.8953 94.2186 30.7739L93.5079 30.531Z"
            fill={color}
          />
        </svg>
      </a>
    </Link>
  );
};

export default Logo;