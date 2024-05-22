import { jsx } from 'react/jsx-runtime';
import Trash2 from '../../../../node_modules/react-feather/dist/icons/trash-2.js';
import IconBase from '../../IconBase.js';

function IconTrash2(props) {
  return jsx(IconBase, Object.assign({
    icon: Trash2
  }, props), void 0);
}

export { IconTrash2 as default };
