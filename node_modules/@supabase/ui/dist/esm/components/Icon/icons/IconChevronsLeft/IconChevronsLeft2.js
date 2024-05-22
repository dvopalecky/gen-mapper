import { jsx } from 'react/jsx-runtime';
import ChevronsLeft from '../../../../node_modules/react-feather/dist/icons/chevrons-left.js';
import IconBase from '../../IconBase.js';

function IconChevronsLeft(props) {
  return jsx(IconBase, Object.assign({
    icon: ChevronsLeft
  }, props), void 0);
}

export { IconChevronsLeft as default };
