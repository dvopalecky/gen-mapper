import { jsx } from 'react/jsx-runtime';
import Dribbble from '../../../../node_modules/react-feather/dist/icons/dribbble.js';
import IconBase from '../../IconBase.js';

function IconDribbble(props) {
  return jsx(IconBase, Object.assign({
    icon: Dribbble
  }, props), void 0);
}

export { IconDribbble as default };
