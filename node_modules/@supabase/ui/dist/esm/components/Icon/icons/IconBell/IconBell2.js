import { jsx } from 'react/jsx-runtime';
import Bell from '../../../../node_modules/react-feather/dist/icons/bell.js';
import IconBase from '../../IconBase.js';

function IconBell(props) {
  return jsx(IconBase, Object.assign({
    icon: Bell
  }, props), void 0);
}

export { IconBell as default };
