import { jsx } from 'react/jsx-runtime';
import Watch from '../../../../node_modules/react-feather/dist/icons/watch.js';
import IconBase from '../../IconBase.js';

function IconWatch(props) {
  return jsx(IconBase, Object.assign({
    icon: Watch
  }, props), void 0);
}

export { IconWatch as default };
