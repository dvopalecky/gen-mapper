import { jsx } from 'react/jsx-runtime';
import TrendingUp from '../../../../node_modules/react-feather/dist/icons/trending-up.js';
import IconBase from '../../IconBase.js';

function IconTrendingUp(props) {
  return jsx(IconBase, Object.assign({
    icon: TrendingUp
  }, props), void 0);
}

export { IconTrendingUp as default };
