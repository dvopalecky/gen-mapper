import { jsx } from 'react/jsx-runtime';
import Trello from '../../../../node_modules/react-feather/dist/icons/trello.js';
import IconBase from '../../IconBase.js';

function IconTrello(props) {
  return jsx(IconBase, Object.assign({
    icon: Trello
  }, props), void 0);
}

export { IconTrello as default };
