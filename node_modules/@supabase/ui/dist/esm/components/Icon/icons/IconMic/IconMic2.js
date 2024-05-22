import { jsx } from 'react/jsx-runtime';
import Mic from '../../../../node_modules/react-feather/dist/icons/mic.js';
import IconBase from '../../IconBase.js';

function IconMic(props) {
  return jsx(IconBase, Object.assign({
    icon: Mic
  }, props), void 0);
}

export { IconMic as default };
