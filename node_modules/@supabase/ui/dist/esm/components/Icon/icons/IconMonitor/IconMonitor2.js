import { jsx } from 'react/jsx-runtime';
import Monitor from '../../../../node_modules/react-feather/dist/icons/monitor.js';
import IconBase from '../../IconBase.js';

function IconMonitor(props) {
  return jsx(IconBase, Object.assign({
    icon: Monitor
  }, props), void 0);
}

export { IconMonitor as default };
