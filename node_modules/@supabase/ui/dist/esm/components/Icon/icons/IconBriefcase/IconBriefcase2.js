import { jsx } from 'react/jsx-runtime';
import Briefcase from '../../../../node_modules/react-feather/dist/icons/briefcase.js';
import IconBase from '../../IconBase.js';

function IconBriefcase(props) {
  return jsx(IconBase, Object.assign({
    icon: Briefcase
  }, props), void 0);
}

export { IconBriefcase as default };
