import { jsx } from 'react/jsx-runtime';
import ShoppingBag from '../../../../node_modules/react-feather/dist/icons/shopping-bag.js';
import IconBase from '../../IconBase.js';

function IconShoppingBag(props) {
  return jsx(IconBase, Object.assign({
    icon: ShoppingBag
  }, props), void 0);
}

export { IconShoppingBag as default };
