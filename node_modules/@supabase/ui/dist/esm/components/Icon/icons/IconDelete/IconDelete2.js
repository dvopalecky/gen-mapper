import { jsx } from 'react/jsx-runtime';
import Delete from '../../../../node_modules/react-feather/dist/icons/delete.js';
import IconBase from '../../IconBase.js';

function IconDelete(props) {
  return jsx(IconBase, Object.assign({
    icon: Delete
  }, props), void 0);
}

export { IconDelete as default };
