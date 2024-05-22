import { jsx } from 'react/jsx-runtime';
import Pocket from '../../../../node_modules/react-feather/dist/icons/pocket.js';
import IconBase from '../../IconBase.js';

function IconPocket(props) {
  return jsx(IconBase, Object.assign({
    icon: Pocket
  }, props), void 0);
}

export { IconPocket as default };
