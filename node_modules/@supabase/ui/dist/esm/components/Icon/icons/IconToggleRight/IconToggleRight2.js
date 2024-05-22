import { jsx } from 'react/jsx-runtime';
import ToggleRight from '../../../../node_modules/react-feather/dist/icons/toggle-right.js';
import IconBase from '../../IconBase.js';

function IconToggleRight(props) {
  return jsx(IconBase, Object.assign({
    icon: ToggleRight
  }, props), void 0);
}

export { IconToggleRight as default };
