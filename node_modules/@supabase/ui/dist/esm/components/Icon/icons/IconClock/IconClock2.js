import { jsx } from 'react/jsx-runtime';
import Clock from '../../../../node_modules/react-feather/dist/icons/clock.js';
import IconBase from '../../IconBase.js';

function IconClock(props) {
  return jsx(IconBase, Object.assign({
    icon: Clock
  }, props), void 0);
}

export { IconClock as default };
