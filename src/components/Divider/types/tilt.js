function tilt(position, rotation, color, height) {
  const styles = `
    height: ${height};
    ${position};
    transform: rotate(${rotation});
    fill: ${color};
  `;
  
  return `
  <svg style='${styles}' class='divider' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 82" preserveAspectRatio="none">
    <defs>
        <style>
            .cls-2 {
                opacity: 0.5;
            }
        </style>
    </defs>
    <title>Faded Tilt</title>
    <polygon points="0 16 500 59 500 82 0 82 0 16" />
    <polygon class="cls-2" points="0 0 500 59 500 82 0 82 0 0" />
</svg>
  `
}
  
export default tilt;
  