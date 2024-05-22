import { jsx } from 'react/jsx-runtime';
import EyeOff from '../../../../node_modules/react-feather/dist/icons/eye-off.js';
import IconBase from '../../IconBase.js';

function IconEyeOff(props) {
  return jsx(IconBase, Object.assign({
    icon: EyeOff
  }, props), void 0);
}

export { IconEyeOff as default };
