import { jsx } from 'react/jsx-runtime';
import AlignJustify from '../../../../node_modules/react-feather/dist/icons/align-justify.js';
import IconBase from '../../IconBase.js';

function IconAlignJustify(props) {
  return jsx(IconBase, Object.assign({
    icon: AlignJustify
  }, props), void 0);
}

export { IconAlignJustify as default };
