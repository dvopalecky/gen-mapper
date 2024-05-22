import { jsx } from 'react/jsx-runtime';
import Database from '../../../../node_modules/react-feather/dist/icons/database.js';
import IconBase from '../../IconBase.js';

function IconDatabase(props) {
  return jsx(IconBase, Object.assign({
    icon: Database
  }, props), void 0);
}

export { IconDatabase as default };
