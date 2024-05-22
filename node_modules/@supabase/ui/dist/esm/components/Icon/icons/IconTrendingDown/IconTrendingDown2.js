import { jsx } from 'react/jsx-runtime';
import TrendingDown from '../../../../node_modules/react-feather/dist/icons/trending-down.js';
import IconBase from '../../IconBase.js';

function IconTrendingDown(props) {
  return jsx(IconBase, Object.assign({
    icon: TrendingDown
  }, props), void 0);
}

export { IconTrendingDown as default };
