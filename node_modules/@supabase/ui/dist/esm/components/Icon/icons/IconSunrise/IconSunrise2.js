import { jsx } from 'react/jsx-runtime';
import Sunrise from '../../../../node_modules/react-feather/dist/icons/sunrise.js';
import IconBase from '../../IconBase.js';

function IconSunrise(props) {
  return jsx(IconBase, Object.assign({
    icon: Sunrise
  }, props), void 0);
}

export { IconSunrise as default };
