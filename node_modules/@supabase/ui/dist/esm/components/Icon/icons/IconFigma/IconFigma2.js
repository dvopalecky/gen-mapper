import { jsx } from 'react/jsx-runtime';
import Figma from '../../../../node_modules/react-feather/dist/icons/figma.js';
import IconBase from '../../IconBase.js';

function IconFigma(props) {
  return jsx(IconBase, Object.assign({
    icon: Figma
  }, props), void 0);
}

export { IconFigma as default };
