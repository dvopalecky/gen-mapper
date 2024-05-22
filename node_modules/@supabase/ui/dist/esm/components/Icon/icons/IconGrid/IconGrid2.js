import { jsx } from 'react/jsx-runtime';
import Grid from '../../../../node_modules/react-feather/dist/icons/grid.js';
import IconBase from '../../IconBase.js';

function IconGrid(props) {
  return jsx(IconBase, Object.assign({
    icon: Grid
  }, props), void 0);
}

export { IconGrid as default };
