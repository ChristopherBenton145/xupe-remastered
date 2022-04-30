import clouds from './types/clouds';
import waves from './types/waves';
import tilt from './types/tilt';

function dividerTypes(type, position, rotation, color, height) {
  switch (type) {
    case ('clouds'): return clouds(position, rotation, color, height);
    case ('waves'): return waves(position, rotation, color, height);
    case ('tilt'): return tilt(position, rotation, color, height);
    default: return '';
  }
}

export default dividerTypes;
