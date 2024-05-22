import { jsx } from 'react/jsx-runtime';
import Server from '../../../../node_modules/react-feather/dist/icons/server.js';
import IconBase from '../../IconBase.js';

function IconServer(props) {
  return jsx(IconBase, Object.assign({
    icon: Server
  }, props), void 0);
}

export { IconServer as default };
