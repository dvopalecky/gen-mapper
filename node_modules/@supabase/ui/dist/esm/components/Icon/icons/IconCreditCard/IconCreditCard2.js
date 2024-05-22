import { jsx } from 'react/jsx-runtime';
import CreditCard from '../../../../node_modules/react-feather/dist/icons/credit-card.js';
import IconBase from '../../IconBase.js';

function IconCreditCard(props) {
  return jsx(IconBase, Object.assign({
    icon: CreditCard
  }, props), void 0);
}

export { IconCreditCard as default };
