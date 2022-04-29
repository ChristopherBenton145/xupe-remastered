function multiClouds(position, rotation, color, height) {
  const styles = `
    max-height: ${height};
    ${position};
    transform: rotate(${rotation});
    fill: ${color};
  `;

  return `
  <svg style='${styles}' class='divider' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500.01 129" preserveAspectRatio="none">
  <defs>
      <style>
        .cls-1 {
            opacity: 0.5;
        }
      </style>
  </defs>
  <title>Faded Clouds</title>
  <path class="cls-1" d="M453.5,113a34.31,34.31,0,0,0-15.78,3.82,34.49,34.49,0,0,0-57.58-7.56,34.49,34.49,0,0,0-41.71,9.86,34.51,34.51,0,1,0,15.14,53.76,34.51,34.51,0,0,0,38.29-10.14,34.5,34.5,0,0,0,30.42-.56A34.5,34.5,0,1,0,453.5,113Z" transform="translate(0 -71)" />
  <path class="cls-1" d="M219.5,95a48.63,48.63,0,0,0-12.38,1.6,48.47,48.47,0,0,0-59.41-9.36A48.49,48.49,0,0,0,67.13,99.93a48.51,48.51,0,1,0,27.74,65.14,48.55,48.55,0,0,0,40.42-3.31,48.53,48.53,0,0,0,48.59,14.64A48.5,48.5,0,1,0,219.5,95Z" transform="translate(0 -71)" />
  <circle cx="119.88" cy="93.42" r="13.88" />
  <circle cx="136.25" cy="84.88" r="13.88" />
  <rect y="93" width="500" height="36" />
  <circle cx="151.92" cy="90.58" r="13.88" />
  <circle cx="161.88" cy="99.12" r="13.88" />
  <circle cx="402.58" cy="101.32" r="23.58" />
  <circle cx="425.4" cy="79.8" r="23.58" />
  <circle cx="453.62" cy="81.88" r="23.58" />
  <ellipse cx="476.14" cy="92.24" rx="23.86" ry="23.58" />
  <circle cx="331.36" cy="91.68" r="34.12" />
  <circle cx="286.18" cy="67.7" r="34.12" />
  <circle cx="246.26" cy="91.4" r="34.12" />
  <circle cx="76.88" cy="94.74" r="13.74" />
  <circle cx="59.49" cy="85.13" r="13.74" />
  <circle cx="43.49" cy="81.13" r="13.74" />
  <circle cx="28.49" cy="86.13" r="13.74" />
  <circle cx="14.49" cy="95.13" r="13.74" />
  <circle cx="100.55" cy="91.6" r="11.6" />
  <circle cx="197.18" cy="91.02" r="23.58" />
  <circle cx="365.49" cy="89.13" r="23.58" />
  </svg>
  `
}

export default multiClouds;
