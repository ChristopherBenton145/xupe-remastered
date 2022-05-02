function typeWaves(type, customStyles = ``, properties = {}) {
  let styles = `
    height: ${properties.height};
    transform: rotate(${properties.rotation});
    fill: ${properties.color};
    ${customStyles}
  `;

  if (properties.position == 'top') styles += `top: -1px;`;
  if (properties.position == 'middle') styles += `top: 50%;`;
  if (properties.position == 'bottom') styles += `bottom: -1px;`;

  const type1 = `
    <svg style="${styles}" class='divider' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,202.7C672,181,768,107,864,74.7C960,43,1056,53,1152,69.3C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
    </svg>
  `;

  const type2 = `
    <svg style="${styles}" class='divider' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path d="M0,128L48,154.7C96,181,192,235,288,229.3C384,224,480,160,576,122.7C672,85,768,75,864,80C960,85,1056,107,1152,96C1248,85,1344,43,1392,21.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
  `;

  switch (type) {
    case 1: return type1;
    case 2: return type2;
    default: return type1;
  }
}

export default typeWaves;
