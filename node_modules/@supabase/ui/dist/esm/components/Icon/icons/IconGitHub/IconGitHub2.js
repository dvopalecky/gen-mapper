import { jsx } from 'react/jsx-runtime';
import GitHub from '../../../../node_modules/react-feather/dist/icons/github.js';
import IconBase from '../../IconBase.js';

function IconGitHub(props) {
  return jsx(IconBase, Object.assign({
    icon: GitHub
  }, props), void 0);
}

export { IconGitHub as default };
