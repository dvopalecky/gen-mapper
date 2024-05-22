import { jsx } from 'react/jsx-runtime';
import Menu from '../../../../node_modules/react-feather/dist/icons/menu.js';
import IconBase from '../../IconBase.js';

function IconMenu(props) {
  return jsx(IconBase, Object.assign({
    icon: Menu
  }, props), void 0);
}

export { IconMenu as default };
