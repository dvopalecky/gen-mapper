import { jsx } from 'react/jsx-runtime';
import RotateCw from '../../../../node_modules/react-feather/dist/icons/rotate-cw.js';
import IconBase from '../../IconBase.js';

function IconRotateCw(props) {
  return jsx(IconBase, Object.assign({
    icon: RotateCw
  }, props), void 0);
}

export { IconRotateCw as default };
