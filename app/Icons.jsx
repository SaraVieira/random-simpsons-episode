export const Star = () => (
  <svg
    height="24px"
    width="24px"
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 0 333 333"
    x="0px"
    y="0px"
    fillRule="evenodd"
    clipRule="evenodd"
  >
    <g>
      <path
        fill="#ffe54c"
        d="M210 121l-31 -97c-4,-12 -21,-12 -25,0l-31 97 -102 0c-13,0 -18,16 -8,23l83 60 -32 97c-4,12 10,22 20,15l83 -60 82 60c10,7 24,-3 20,-15l-31 -97 82 -60c11,-7 5,-23 -7,-23l-103 0z"
      ></path>
    </g>
  </svg>
);

export const Tomato = () => (
  <svg
    height="24px"
    width="24px"
    fill="#000000"
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 50 50"
    enableBackground="new 0 0 50 50"
  >
    <g>
      <g>
        <path
          d="M44.53,31.84c0,9.14-9.3,17.16-19.91,17.16C14.06,49,5.47,41.31,5.47,31.84c0-4.54,2.01-8.91,5.51-12.22    c1.08779,0.9467,2.27719,1.6515,3.58,2.14c-0.16,0.09-0.33,0.17-0.49,0.25c-1.23,0.58-1.98,1.83-1.9,3.24    c0.1,1.36,0.99,2.51,2.26,2.92c3.62069,1.2413,7.58179,0.9023,10.58-1.22c1.77,1.26,3.97,1.94,6.34,1.94    c2.90429,0,6.325-0.7394,6.48-3.64c0.11-1.36-0.66-2.66-1.88-3.23c-0.17-0.09-0.33-0.17-0.5-0.26c0.49-0.19,0.97-0.41,1.43-0.66    c0.69-0.36,1.34-0.8,1.96-1.32C42.45,23.1,44.53,27.42,44.53,31.84z"
          fill="#de5353"
        ></path>
      </g>
      <path
        d="M37.93,17.91c-0.6,0.56-1.26,1.04-1.98,1.42c-1.64,0.9-3.47,1.28-5.29,1.13c1.36,1.48,2.84,2.6,4.43,3.36   c0.49,0.23,0.79,0.74,0.75,1.28c-0.03,0.54-0.39,1.01-0.9,1.18c-1.21,0.41-2.43,0.61-3.59,0.61c-2.49,0-4.75-0.9-6.34-2.58   c-2.35,2.47-6.15,3.25-9.94,1.97c-0.52-0.17-0.87-0.64-0.91-1.18c-0.03-0.54,0.27-1.05,0.76-1.28c1.59-0.76,3.07-1.89,4.43-3.36   c-2.58711,0.2-5.24811-0.6467-7.27-2.55c-0.39-0.37-0.52-0.93-0.33-1.44c0.68459-1.9018,2.77629,0.495,10.45-3.88   c0.03-0.02,0.06-0.04,0.1-0.06c0.2-0.13,0.45-0.24,0.71-0.35V4.12c0-1.72,1.4-3.12,3.12-3.12c1.73,0,3.13,1.41,3.13,3.13   c0,1.4379-1.31451,3.0747-1.63,8.35c0.05,0.03,0.09,0.05,0.14,0.08c0.01,0.01,0.03,0.02,0.04,0.03c3.28,1.88,6.39,2.89,9.27,3.02   c0.53,0.02,1,0.36,1.18,0.86C38.45,16.98,38.32,17.54,37.93,17.91z"
        fill="#333131"
      ></path>
    </g>
  </svg>
);

export const Waves = () => {
  return (
    <div style={{ position: "fixed", width: "100vw", zIndex: 0, bottom: 0 }}>
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" x1="1%" y1="58%" x2="99%" y2="42%">
            <stop offset="5%" stop-color="#009dae88"></stop>
            <stop offset="95%" stop-color="#71dfe788"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,600 C 0,600 0,200 0,200 C 57.73122238586156,172.6172680412371 115.46244477172311,145.23453608247422 172,133 C 228.5375552282769,120.76546391752579 283.8814432989691,123.67912371134022 340,149 C 396.1185567010309,174.32087628865978 453.01178203240056,222.04896907216497 522,230 C 590.9882179675994,237.95103092783503 672.0714285714286,206.125 743,210 C 813.9285714285714,213.875 874.7025036818851,253.45103092783506 926,261 C 977.2974963181149,268.54896907216494 1019.1185567010307,244.07087628865978 1070,217 C 1120.8814432989693,189.92912371134022 1180.8232695139911,160.26546391752578 1244,157 C 1307.1767304860089,153.73453608247422 1373.5883652430043,176.8672680412371 1440,200 C 1440,200 1440,600 1440,600 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>

        <defs>
          <linearGradient id="gradient" x1="1%" y1="58%" x2="99%" y2="42%">
            <stop offset="5%" stop-color="#009daeff"></stop>
            <stop offset="95%" stop-color="#71dfe7ff"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,600 C 0,600 0,400 0,400 C 63.30430780559645,365.139911634757 126.6086156111929,330.279823269514 178,355 C 229.3913843888071,379.720176730486 268.8698453608248,464.02061855670104 335,468 C 401.1301546391752,471.97938144329896 493.9120029455081,395.6377025036819 557,384 C 620.0879970544919,372.3622974963181 653.4821428571428,425.4285714285714 712,434 C 770.5178571428572,442.5714285714286 854.1594256259207,406.64801178203237 920,403 C 985.8405743740793,399.35198821796763 1033.8801546391753,427.97938144329896 1094,439 C 1154.1198453608247,450.02061855670104 1226.3199558173785,443.4344624447718 1286,434 C 1345.6800441826215,424.5655375552282 1392.8400220913109,412.28276877761414 1440,400 C 1440,400 1440,600 1440,600 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          class="transition-all duration-300 ease-in-out delay-150 path-1"
        ></path>
      </svg>
    </div>
  );
};
