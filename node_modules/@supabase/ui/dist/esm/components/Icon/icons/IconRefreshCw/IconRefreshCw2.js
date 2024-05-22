import { jsx } from 'react/jsx-runtime';
import RefreshCw from '../../../../node_modules/react-feather/dist/icons/refresh-cw.js';
import IconBase from '../../IconBase.js';

function IconRefreshCw(props) {
  return jsx(IconBase, Object.assign({
    icon: RefreshCw
  }, props), void 0);
}

export { IconRefreshCw as default };
