import { jsx } from 'react/jsx-runtime';
import ShoppingCart from '../../../../node_modules/react-feather/dist/icons/shopping-cart.js';
import IconBase from '../../IconBase.js';

function IconShoppingCart(props) {
  return jsx(IconBase, Object.assign({
    icon: ShoppingCart
  }, props), void 0);
}

export { IconShoppingCart as default };
