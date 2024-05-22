import { jsx } from 'react/jsx-runtime';
import ZoomIn from '../../../../node_modules/react-feather/dist/icons/zoom-in.js';
import IconBase from '../../IconBase.js';

function IconZoomIn(props) {
  return jsx(IconBase, Object.assign({
    icon: ZoomIn
  }, props), void 0);
}

export { IconZoomIn as default };
