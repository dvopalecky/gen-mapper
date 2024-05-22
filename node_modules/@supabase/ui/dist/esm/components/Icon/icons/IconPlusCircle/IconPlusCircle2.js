import { jsx } from 'react/jsx-runtime';
import PlusCircle from '../../../../node_modules/react-feather/dist/icons/plus-circle.js';
import IconBase from '../../IconBase.js';

function IconPlusCircle(props) {
  return jsx(IconBase, Object.assign({
    icon: PlusCircle
  }, props), void 0);
}

export { IconPlusCircle as default };
