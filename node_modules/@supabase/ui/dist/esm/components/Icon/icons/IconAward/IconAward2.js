import { jsx } from 'react/jsx-runtime';
import Award from '../../../../node_modules/react-feather/dist/icons/award.js';
import IconBase from '../../IconBase.js';

function IconAward(props) {
  return jsx(IconBase, Object.assign({
    icon: Award
  }, props), void 0);
}

export { IconAward as default };
