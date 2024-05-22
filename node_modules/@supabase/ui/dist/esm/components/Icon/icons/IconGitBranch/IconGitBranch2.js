import { jsx } from 'react/jsx-runtime';
import GitBranch from '../../../../node_modules/react-feather/dist/icons/git-branch.js';
import IconBase from '../../IconBase.js';

function IconGitBranch(props) {
  return jsx(IconBase, Object.assign({
    icon: GitBranch
  }, props), void 0);
}

export { IconGitBranch as default };
