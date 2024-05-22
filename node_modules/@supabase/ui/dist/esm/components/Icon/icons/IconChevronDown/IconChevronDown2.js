import { jsx } from 'react/jsx-runtime';
import ChevronDown from '../../../../node_modules/react-feather/dist/icons/chevron-down.js';
import IconBase from '../../IconBase.js';

function IconChevronDown(props) {
  return jsx(IconBase, Object.assign({
    icon: ChevronDown
  }, props), void 0);
}

export { IconChevronDown as default };
