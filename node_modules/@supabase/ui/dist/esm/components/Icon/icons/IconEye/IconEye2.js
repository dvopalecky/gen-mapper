import { jsx } from 'react/jsx-runtime';
import Eye from '../../../../node_modules/react-feather/dist/icons/eye.js';
import IconBase from '../../IconBase.js';

function IconEye(props) {
  return jsx(IconBase, Object.assign({
    icon: Eye
  }, props), void 0);
}

export { IconEye as default };
