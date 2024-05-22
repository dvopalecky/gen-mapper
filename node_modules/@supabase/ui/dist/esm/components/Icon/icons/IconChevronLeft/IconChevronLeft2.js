import { jsx } from 'react/jsx-runtime';
import ChevronLeft from '../../../../node_modules/react-feather/dist/icons/chevron-left.js';
import IconBase from '../../IconBase.js';

function IconChevronLeft(props) {
  return jsx(IconBase, Object.assign({
    icon: ChevronLeft
  }, props), void 0);
}

export { IconChevronLeft as default };
