import { jsx } from 'react/jsx-runtime';
import GitCommit from '../../../../node_modules/react-feather/dist/icons/git-commit.js';
import IconBase from '../../IconBase.js';

function IconGitCommit(props) {
  return jsx(IconBase, Object.assign({
    icon: GitCommit
  }, props), void 0);
}

export { IconGitCommit as default };
