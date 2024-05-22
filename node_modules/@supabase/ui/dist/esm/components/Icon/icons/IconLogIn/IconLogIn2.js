import { jsx } from 'react/jsx-runtime';
import LogIn from '../../../../node_modules/react-feather/dist/icons/log-in.js';
import IconBase from '../../IconBase.js';

function IconLogIn(props) {
  return jsx(IconBase, Object.assign({
    icon: LogIn
  }, props), void 0);
}

export { IconLogIn as default };
