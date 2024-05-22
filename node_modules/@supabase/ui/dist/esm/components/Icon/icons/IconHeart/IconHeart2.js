import { jsx } from 'react/jsx-runtime';
import Heart from '../../../../node_modules/react-feather/dist/icons/heart.js';
import IconBase from '../../IconBase.js';

function IconHeart(props) {
  return jsx(IconBase, Object.assign({
    icon: Heart
  }, props), void 0);
}

export { IconHeart as default };
