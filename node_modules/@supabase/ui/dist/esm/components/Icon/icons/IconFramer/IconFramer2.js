import { jsx } from 'react/jsx-runtime';
import Framer from '../../../../node_modules/react-feather/dist/icons/framer.js';
import IconBase from '../../IconBase.js';

function IconFramer(props) {
  return jsx(IconBase, Object.assign({
    icon: Framer
  }, props), void 0);
}

export { IconFramer as default };
