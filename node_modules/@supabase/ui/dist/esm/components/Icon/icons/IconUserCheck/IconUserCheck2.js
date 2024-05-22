import { jsx } from 'react/jsx-runtime';
import UserCheck from '../../../../node_modules/react-feather/dist/icons/user-check.js';
import IconBase from '../../IconBase.js';

function IconUserCheck(props) {
  return jsx(IconBase, Object.assign({
    icon: UserCheck
  }, props), void 0);
}

export { IconUserCheck as default };
