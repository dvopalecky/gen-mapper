import { jsx } from 'react/jsx-runtime';
import Tag from '../../../../node_modules/react-feather/dist/icons/tag.js';
import IconBase from '../../IconBase.js';

function IconTag(props) {
  return jsx(IconBase, Object.assign({
    icon: Tag
  }, props), void 0);
}

export { IconTag as default };
