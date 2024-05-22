import { jsx } from 'react/jsx-runtime';
import Rewind from '../../../../node_modules/react-feather/dist/icons/rewind.js';
import IconBase from '../../IconBase.js';

function IconRewind(props) {
  return jsx(IconBase, Object.assign({
    icon: Rewind
  }, props), void 0);
}

export { IconRewind as default };
