import { jsx } from 'react/jsx-runtime';
import StopCircle from '../../../../node_modules/react-feather/dist/icons/stop-circle.js';
import IconBase from '../../IconBase.js';

function IconStopCircle(props) {
  return jsx(IconBase, Object.assign({
    icon: StopCircle
  }, props), void 0);
}

export { IconStopCircle as default };
