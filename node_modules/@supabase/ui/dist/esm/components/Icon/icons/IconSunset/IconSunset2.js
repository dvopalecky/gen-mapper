import { jsx } from 'react/jsx-runtime';
import Sunset from '../../../../node_modules/react-feather/dist/icons/sunset.js';
import IconBase from '../../IconBase.js';

function IconSunset(props) {
  return jsx(IconBase, Object.assign({
    icon: Sunset
  }, props), void 0);
}

export { IconSunset as default };
