import { jsx } from 'react/jsx-runtime';
import RotateCcw from '../../../../node_modules/react-feather/dist/icons/rotate-ccw.js';
import IconBase from '../../IconBase.js';

function IconRotateCcw(props) {
  return jsx(IconBase, Object.assign({
    icon: RotateCcw
  }, props), void 0);
}

export { IconRotateCcw as default };
