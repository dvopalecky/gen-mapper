import { jsx } from 'react/jsx-runtime';
import CheckSquare from '../../../../node_modules/react-feather/dist/icons/check-square.js';
import IconBase from '../../IconBase.js';

function IconCheckSquare(props) {
  return jsx(IconBase, Object.assign({
    icon: CheckSquare
  }, props), void 0);
}

export { IconCheckSquare as default };
