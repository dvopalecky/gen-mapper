import { jsx } from 'react/jsx-runtime';
import Trash from '../../../../node_modules/react-feather/dist/icons/trash.js';
import IconBase from '../../IconBase.js';

function IconTrash(props) {
  return jsx(IconBase, Object.assign({
    icon: Trash
  }, props), void 0);
}

export { IconTrash as default };
