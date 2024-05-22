import { jsx } from 'react/jsx-runtime';
import ChevronRight from '../../../../node_modules/react-feather/dist/icons/chevron-right.js';
import IconBase from '../../IconBase.js';

function IconChevronRight(props) {
  return jsx(IconBase, Object.assign({
    icon: ChevronRight
  }, props), void 0);
}

export { IconChevronRight as default };
