function typeDrip(customStyles = ``, properties = {}) {
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
    <svg style="${styles}" class='divider' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 78.26" preserveAspectRatio="none">
      <title>Drip</title>
      <path d="M0,181.36c35.21,0,8.49-59.62,32.49-59.62S34.91,174,54.08,174s2.41-44.68,22.79-44.68,1.29,63.8,23.63,64c16.67.15,5.8-58.86,26.33-58.86,23.25,0,.6,36.83,21.43,36.83s9.82-48.91,27.32-48.91-9.2,56.75,17.51,56.75-2.86-51.47,23.1-51.47.9,33.25,23.39,33.25c17.59,0,11.25-16.34,24.23-16.34,22.27,0-.07,45.43,23.62,45.43S283.84,130,309.8,130s1.95,49.66,22,49.66,4.92-41.21,22.62-41.21c22,0-1.28,48.76,21.85,48.76,23.8,0-.88-54.29,27.13-54.29,23.54,0,3.95,53.44,27.38,53.67,28,.29.77-58.35,27.64-58.35s7.66,62.66,29.64,62.66c11.19,0,11.91-14.11,11.91-14.11V200H0Z" transform="translate(0 -121.74)" />
    </svg>
  `;
}

export default typeDrip;
