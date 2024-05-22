import { jsx } from 'react/jsx-runtime';
import HelpCircle from '../../../../node_modules/react-feather/dist/icons/help-circle.js';
import IconBase from '../../IconBase.js';

function IconHelpCircle(props) {
  return jsx(IconBase, Object.assign({
    icon: HelpCircle
  }, props), void 0);
}

export { IconHelpCircle as default };
