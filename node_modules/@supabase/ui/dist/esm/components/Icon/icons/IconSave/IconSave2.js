import { jsx } from 'react/jsx-runtime';
import Save from '../../../../node_modules/react-feather/dist/icons/save.js';
import IconBase from '../../IconBase.js';

function IconSave(props) {
  return jsx(IconBase, Object.assign({
    icon: Save
  }, props), void 0);
}

export { IconSave as default };
