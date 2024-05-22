import { jsx } from 'react/jsx-runtime';
import Navigation from '../../../../node_modules/react-feather/dist/icons/navigation.js';
import IconBase from '../../IconBase.js';

function IconNavigation(props) {
  return jsx(IconBase, Object.assign({
    icon: Navigation
  }, props), void 0);
}

export { IconNavigation as default };
