function waves(position, rotation, color, height) {
  const styles = `
    max-height: ${height};
    ${position};
    transform: rotate(${rotation});
    fill: ${color};
  `;
  
  return `
  </svg>
  <svg style='${styles}' class='divider' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
  <path fill-opacity="1" d="M0,32L48,53.3C96,75,192,117,288,122.7C384,128,480,96,576,122.7C672,149,768,235,864,250.7C960,267,1056,213,1152,202.7C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
  </svg>
  `
}
  
  export default waves;
  