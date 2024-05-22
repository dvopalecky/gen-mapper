import { jsx } from 'react/jsx-runtime';
import Gitlab from '../../../../node_modules/react-feather/dist/icons/gitlab.js';
import IconBase from '../../IconBase.js';

function IconGitlab(props) {
  return jsx(IconBase, Object.assign({
    icon: Gitlab
  }, props), void 0);
}

export { IconGitlab as default };
