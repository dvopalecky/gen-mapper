import { jsx } from 'react/jsx-runtime';
import Share from '../../../../node_modules/react-feather/dist/icons/share.js';
import IconBase from '../../IconBase.js';

function IconShare(props) {
  return jsx(IconBase, Object.assign({
    icon: Share
  }, props), void 0);
}

export { IconShare as default };
