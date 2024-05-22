import { jsx } from 'react/jsx-runtime';
import Hash from '../../../../node_modules/react-feather/dist/icons/hash.js';
import IconBase from '../../IconBase.js';

function IconHash(props) {
  return jsx(IconBase, Object.assign({
    icon: Hash
  }, props), void 0);
}

export { IconHash as default };
