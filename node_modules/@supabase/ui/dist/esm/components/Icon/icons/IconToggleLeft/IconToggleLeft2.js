import { jsx } from 'react/jsx-runtime';
import ToggleLeft from '../../../../node_modules/react-feather/dist/icons/toggle-left.js';
import IconBase from '../../IconBase.js';

function IconToggleLeft(props) {
  return jsx(IconBase, Object.assign({
    icon: ToggleLeft
  }, props), void 0);
}

export { IconToggleLeft as default };
