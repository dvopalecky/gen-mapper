import { jsx } from 'react/jsx-runtime';
import Radio from '../../../../node_modules/react-feather/dist/icons/radio.js';
import IconBase from '../../IconBase.js';

function IconRadio(props) {
  return jsx(IconBase, Object.assign({
    icon: Radio
  }, props), void 0);
}

export { IconRadio as default };
