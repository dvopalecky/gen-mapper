import { jsx } from 'react/jsx-runtime';
import Plus from '../../../../node_modules/react-feather/dist/icons/plus.js';
import IconBase from '../../IconBase.js';

function IconPlus(props) {
  return jsx(IconBase, Object.assign({
    icon: Plus
  }, props), void 0);
}

export { IconPlus as default };
