import { jsx } from 'react/jsx-runtime';
import ChevronsRight from '../../../../node_modules/react-feather/dist/icons/chevrons-right.js';
import IconBase from '../../IconBase.js';

function IconChevronsRight(props) {
  return jsx(IconBase, Object.assign({
    icon: ChevronsRight
  }, props), void 0);
}

export { IconChevronsRight as default };
