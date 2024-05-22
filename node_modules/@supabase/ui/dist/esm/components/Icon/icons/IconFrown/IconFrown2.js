import { jsx } from 'react/jsx-runtime';
import Frown from '../../../../node_modules/react-feather/dist/icons/frown.js';
import IconBase from '../../IconBase.js';

function IconFrown(props) {
  return jsx(IconBase, Object.assign({
    icon: Frown
  }, props), void 0);
}

export { IconFrown as default };
