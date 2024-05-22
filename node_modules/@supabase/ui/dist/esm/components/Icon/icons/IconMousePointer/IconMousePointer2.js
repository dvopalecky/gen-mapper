import { jsx } from 'react/jsx-runtime';
import MousePointer from '../../../../node_modules/react-feather/dist/icons/mouse-pointer.js';
import IconBase from '../../IconBase.js';

function IconMousePointer(props) {
  return jsx(IconBase, Object.assign({
    icon: MousePointer
  }, props), void 0);
}

export { IconMousePointer as default };
