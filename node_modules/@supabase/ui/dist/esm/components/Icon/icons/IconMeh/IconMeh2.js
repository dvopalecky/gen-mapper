import { jsx } from 'react/jsx-runtime';
import Meh from '../../../../node_modules/react-feather/dist/icons/meh.js';
import IconBase from '../../IconBase.js';

function IconMeh(props) {
  return jsx(IconBase, Object.assign({
    icon: Meh
  }, props), void 0);
}

export { IconMeh as default };
