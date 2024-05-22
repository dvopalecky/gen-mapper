import { jsx } from 'react/jsx-runtime';
import Cast from '../../../../node_modules/react-feather/dist/icons/cast.js';
import IconBase from '../../IconBase.js';

function IconCast(props) {
  return jsx(IconBase, Object.assign({
    icon: Cast
  }, props), void 0);
}

export { IconCast as default };
