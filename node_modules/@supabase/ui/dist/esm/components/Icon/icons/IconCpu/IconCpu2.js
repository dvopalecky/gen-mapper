import { jsx } from 'react/jsx-runtime';
import Cpu from '../../../../node_modules/react-feather/dist/icons/cpu.js';
import IconBase from '../../IconBase.js';

function IconCpu(props) {
  return jsx(IconBase, Object.assign({
    icon: Cpu
  }, props), void 0);
}

export { IconCpu as default };
