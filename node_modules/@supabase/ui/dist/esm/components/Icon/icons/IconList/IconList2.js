import { jsx } from 'react/jsx-runtime';
import List from '../../../../node_modules/react-feather/dist/icons/list.js';
import IconBase from '../../IconBase.js';

function IconList(props) {
  return jsx(IconBase, Object.assign({
    icon: List
  }, props), void 0);
}

export { IconList as default };
