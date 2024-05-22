import { jsx } from 'react/jsx-runtime';
import Edit from '../../../../node_modules/react-feather/dist/icons/edit.js';
import IconBase from '../../IconBase.js';

function IconEdit(props) {
  return jsx(IconBase, Object.assign({
    icon: Edit
  }, props), void 0);
}

export { IconEdit as default };
