import { jsx } from 'react/jsx-runtime';
import ZapOff from '../../../../node_modules/react-feather/dist/icons/zap-off.js';
import IconBase from '../../IconBase.js';

function IconZapOff(props) {
  return jsx(IconBase, Object.assign({
    icon: ZapOff
  }, props), void 0);
}

export { IconZapOff as default };
