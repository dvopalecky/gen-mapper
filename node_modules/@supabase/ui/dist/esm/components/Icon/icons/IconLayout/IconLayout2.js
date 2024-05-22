import { jsx } from 'react/jsx-runtime';
import Layout from '../../../../node_modules/react-feather/dist/icons/layout.js';
import IconBase from '../../IconBase.js';

function IconLayout(props) {
  return jsx(IconBase, Object.assign({
    icon: Layout
  }, props), void 0);
}

export { IconLayout as default };
