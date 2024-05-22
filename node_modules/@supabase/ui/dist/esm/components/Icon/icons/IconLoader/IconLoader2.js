import { jsx } from 'react/jsx-runtime';
import Loader from '../../../../node_modules/react-feather/dist/icons/loader.js';
import IconBase from '../../IconBase.js';

function IconLoader(props) {
  return jsx(IconBase, Object.assign({
    icon: Loader
  }, props), void 0);
}

export { IconLoader as default };
