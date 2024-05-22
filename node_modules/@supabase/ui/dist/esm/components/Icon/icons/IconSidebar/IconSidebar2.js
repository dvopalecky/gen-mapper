import { jsx } from 'react/jsx-runtime';
import Sidebar from '../../../../node_modules/react-feather/dist/icons/sidebar.js';
import IconBase from '../../IconBase.js';

function IconSidebar(props) {
  return jsx(IconBase, Object.assign({
    icon: Sidebar
  }, props), void 0);
}

export { IconSidebar as default };
