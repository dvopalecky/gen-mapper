import { jsx } from 'react/jsx-runtime';
import Instagram from '../../../../node_modules/react-feather/dist/icons/instagram.js';
import IconBase from '../../IconBase.js';

function IconInstagram(props) {
  return jsx(IconBase, Object.assign({
    icon: Instagram
  }, props), void 0);
}

export { IconInstagram as default };
