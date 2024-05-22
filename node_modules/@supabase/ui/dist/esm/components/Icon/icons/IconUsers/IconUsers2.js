import { jsx } from 'react/jsx-runtime';
import Users from '../../../../node_modules/react-feather/dist/icons/users.js';
import IconBase from '../../IconBase.js';

function IconUsers(props) {
  return jsx(IconBase, Object.assign({
    icon: Users
  }, props), void 0);
}

export { IconUsers as default };
