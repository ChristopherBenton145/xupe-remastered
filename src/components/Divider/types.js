import multiClouds from './types/multiClouds';

function dividerTypes(type, position, rotation, color, height) {
  switch (type) {
    case ('multiClouds'): return multiClouds(position, rotation, color, height);
    default: return '';
  }
}

export default dividerTypes;
