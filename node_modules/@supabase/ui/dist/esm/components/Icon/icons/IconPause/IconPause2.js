import { jsx } from 'react/jsx-runtime';
import Pause from '../../../../node_modules/react-feather/dist/icons/pause.js';
import IconBase from '../../IconBase.js';

function IconPause(props) {
  return jsx(IconBase, Object.assign({
    icon: Pause
  }, props), void 0);
}

export { IconPause as default };
