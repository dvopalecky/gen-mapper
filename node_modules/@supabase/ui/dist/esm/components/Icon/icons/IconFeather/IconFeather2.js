import { jsx } from 'react/jsx-runtime';
import Feather from '../../../../node_modules/react-feather/dist/icons/feather.js';
import IconBase from '../../IconBase.js';

function IconFeather(props) {
  return jsx(IconBase, Object.assign({
    icon: Feather
  }, props), void 0);
}

export { IconFeather as default };
