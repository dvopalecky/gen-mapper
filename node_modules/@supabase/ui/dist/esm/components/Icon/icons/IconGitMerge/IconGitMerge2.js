import { jsx } from 'react/jsx-runtime';
import GitMerge from '../../../../node_modules/react-feather/dist/icons/git-merge.js';
import IconBase from '../../IconBase.js';

function IconGitMerge(props) {
  return jsx(IconBase, Object.assign({
    icon: GitMerge
  }, props), void 0);
}

export { IconGitMerge as default };
