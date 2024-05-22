import { jsx } from 'react/jsx-runtime';
import ChevronsUp from '../../../../node_modules/react-feather/dist/icons/chevrons-up.js';
import IconBase from '../../IconBase.js';

function IconChevronsUp(props) {
  return jsx(IconBase, Object.assign({
    icon: ChevronsUp
  }, props), void 0);
}

export { IconChevronsUp as default };
