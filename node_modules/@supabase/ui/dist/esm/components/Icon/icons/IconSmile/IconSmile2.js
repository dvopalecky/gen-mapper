import { jsx } from 'react/jsx-runtime';
import Smile from '../../../../node_modules/react-feather/dist/icons/smile.js';
import IconBase from '../../IconBase.js';

function IconSmile(props) {
  return jsx(IconBase, Object.assign({
    icon: Smile
  }, props), void 0);
}

export { IconSmile as default };
