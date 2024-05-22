import { jsx } from 'react/jsx-runtime';
import Power from '../../../../node_modules/react-feather/dist/icons/power.js';
import IconBase from '../../IconBase.js';

function IconPower(props) {
  return jsx(IconBase, Object.assign({
    icon: Power
  }, props), void 0);
}

export { IconPower as default };
