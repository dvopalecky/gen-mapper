import { jsx } from 'react/jsx-runtime';
import Tablet from '../../../../node_modules/react-feather/dist/icons/tablet.js';
import IconBase from '../../IconBase.js';

function IconTablet(props) {
  return jsx(IconBase, Object.assign({
    icon: Tablet
  }, props), void 0);
}

export { IconTablet as default };
