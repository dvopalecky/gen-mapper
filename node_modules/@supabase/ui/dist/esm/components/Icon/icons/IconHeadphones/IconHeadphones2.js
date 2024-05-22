import { jsx } from 'react/jsx-runtime';
import Headphones from '../../../../node_modules/react-feather/dist/icons/headphones.js';
import IconBase from '../../IconBase.js';

function IconHeadphones(props) {
  return jsx(IconBase, Object.assign({
    icon: Headphones
  }, props), void 0);
}

export { IconHeadphones as default };
