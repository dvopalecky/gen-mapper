import { jsx } from 'react/jsx-runtime';
import Percent from '../../../../node_modules/react-feather/dist/icons/percent.js';
import IconBase from '../../IconBase.js';

function IconPercent(props) {
  return jsx(IconBase, Object.assign({
    icon: Percent
  }, props), void 0);
}

export { IconPercent as default };
