import { jsx } from 'react/jsx-runtime';
import PlusSquare from '../../../../node_modules/react-feather/dist/icons/plus-square.js';
import IconBase from '../../IconBase.js';

function IconPlusSquare(props) {
  return jsx(IconBase, Object.assign({
    icon: PlusSquare
  }, props), void 0);
}

export { IconPlusSquare as default };
