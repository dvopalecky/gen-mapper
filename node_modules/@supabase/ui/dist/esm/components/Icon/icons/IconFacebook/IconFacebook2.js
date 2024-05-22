import { jsx } from 'react/jsx-runtime';
import Facebook from '../../../../node_modules/react-feather/dist/icons/facebook.js';
import IconBase from '../../IconBase.js';

function IconFacebook(props) {
  return jsx(IconBase, Object.assign({
    icon: Facebook
  }, props), void 0);
}

export { IconFacebook as default };
