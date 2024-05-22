import { jsx } from 'react/jsx-runtime';
import Zap from '../../../../node_modules/react-feather/dist/icons/zap.js';
import IconBase from '../../IconBase.js';

function IconZap(props) {
  return jsx(IconBase, Object.assign({
    icon: Zap
  }, props), void 0);
}

export { IconZap as default };
