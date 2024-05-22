import { jsx } from 'react/jsx-runtime';
import Star from '../../../../node_modules/react-feather/dist/icons/star.js';
import IconBase from '../../IconBase.js';

function IconStar(props) {
  return jsx(IconBase, Object.assign({
    icon: Star
  }, props), void 0);
}

export { IconStar as default };
