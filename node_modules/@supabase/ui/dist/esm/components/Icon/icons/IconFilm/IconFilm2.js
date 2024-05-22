import { jsx } from 'react/jsx-runtime';
import Film from '../../../../node_modules/react-feather/dist/icons/film.js';
import IconBase from '../../IconBase.js';

function IconFilm(props) {
  return jsx(IconBase, Object.assign({
    icon: Film
  }, props), void 0);
}

export { IconFilm as default };
