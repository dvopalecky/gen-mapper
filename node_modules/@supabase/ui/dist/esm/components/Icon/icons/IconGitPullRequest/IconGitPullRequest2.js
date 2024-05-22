import { jsx } from 'react/jsx-runtime';
import GitPullRequest from '../../../../node_modules/react-feather/dist/icons/git-pull-request.js';
import IconBase from '../../IconBase.js';

function IconGitPullRequest(props) {
  return jsx(IconBase, Object.assign({
    icon: GitPullRequest
  }, props), void 0);
}

export { IconGitPullRequest as default };
