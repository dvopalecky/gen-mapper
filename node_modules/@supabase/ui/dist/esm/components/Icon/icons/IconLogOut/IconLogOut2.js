import { jsx } from 'react/jsx-runtime';
import LogOut from '../../../../node_modules/react-feather/dist/icons/log-out.js';
import IconBase from '../../IconBase.js';

function IconLogOut(props) {
  return jsx(IconBase, Object.assign({
    icon: LogOut
  }, props), void 0);
}

export { IconLogOut as default };
