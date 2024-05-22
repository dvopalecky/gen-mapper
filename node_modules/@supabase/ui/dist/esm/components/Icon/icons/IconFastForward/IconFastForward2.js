import { jsx } from 'react/jsx-runtime';
import FastForward from '../../../../node_modules/react-feather/dist/icons/fast-forward.js';
import IconBase from '../../IconBase.js';

function IconFastForward(props) {
  return jsx(IconBase, Object.assign({
    icon: FastForward
  }, props), void 0);
}

export { IconFastForward as default };
