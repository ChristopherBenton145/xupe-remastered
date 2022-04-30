function typeClouds(customStyles = ``, properties = {}) {
  let styles = `
    height: ${properties.height};
    transform: rotate(${properties.rotation});
    fill: ${properties.color};
    ${customStyles}
  `;

  if (properties.position == 'top') styles += `top: -1px;`;
  if (properties.position == 'middle') styles += `top: 50%;`;
  if (properties.position == 'bottom') styles += `bottom: -1px;`;

  return `
  <svg style="${styles}" class='divider' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500.01 95.43" preserveAspectRatio="none">
    <title>Clouds</title>
    <circle cx="119.88" cy="59.85" r="13.88" />
    <circle cx="136.25" cy="51.31" r="13.88" />
    <rect y="59.43" width="500" height="36" />
    <circle cx="151.92" cy="57.01" r="13.88" />
    <circle cx="161.88" cy="65.55" r="13.88" />
    <circle cx="402.58" cy="67.75" r="23.58" />
    <circle cx="425.4" cy="46.23" r="23.58" />
    <circle cx="453.62" cy="48.31" r="23.58" />
    <ellipse cx="476.14" cy="58.67" rx="23.86" ry="23.58" />
    <circle cx="331.36" cy="58.11" r="34.12" />
    <circle cx="286.18" cy="34.13" r="34.12" />
    <circle cx="246.26" cy="57.83" r="34.12" />
    <circle cx="76.88" cy="61.17" r="13.74" />
    <circle cx="59.49" cy="51.56" r="13.74" />
    <circle cx="43.49" cy="47.56" r="13.74" />
    <circle cx="28.49" cy="52.56" r="13.74" />
    <circle cx="14.49" cy="61.56" r="13.74" />
    <circle cx="100.55" cy="58.03" r="11.6" />
    <circle cx="197.18" cy="57.45" r="23.58" />
    <circle cx="365.49" cy="55.56" r="23.58" />
  </svg>
  `;
}

export default typeClouds;
