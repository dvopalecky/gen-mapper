import { jsx } from 'react/jsx-runtime';
import Filter from '../../../../node_modules/react-feather/dist/icons/filter.js';
import IconBase from '../../IconBase.js';

function IconFilter(props) {
  return jsx(IconBase, Object.assign({
    icon: Filter
  }, props), void 0);
}

export { IconFilter as default };
