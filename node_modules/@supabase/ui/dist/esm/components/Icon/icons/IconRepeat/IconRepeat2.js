import { jsx } from 'react/jsx-runtime';
import Repeat from '../../../../node_modules/react-feather/dist/icons/repeat.js';
import IconBase from '../../IconBase.js';

function IconRepeat(props) {
  return jsx(IconBase, Object.assign({
    icon: Repeat
  }, props), void 0);
}

export { IconRepeat as default };
