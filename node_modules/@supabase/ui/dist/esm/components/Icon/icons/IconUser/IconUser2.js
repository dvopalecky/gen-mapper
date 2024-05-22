import { jsx } from 'react/jsx-runtime';
import User from '../../../../node_modules/react-feather/dist/icons/user.js';
import IconBase from '../../IconBase.js';

function IconUser(props) {
  return jsx(IconBase, Object.assign({
    icon: User
  }, props), void 0);
}

export { IconUser as default };
