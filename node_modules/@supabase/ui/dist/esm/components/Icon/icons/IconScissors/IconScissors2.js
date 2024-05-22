import { jsx } from 'react/jsx-runtime';
import Scissors from '../../../../node_modules/react-feather/dist/icons/scissors.js';
import IconBase from '../../IconBase.js';

function IconScissors(props) {
  return jsx(IconBase, Object.assign({
    icon: Scissors
  }, props), void 0);
}

export { IconScissors as default };
