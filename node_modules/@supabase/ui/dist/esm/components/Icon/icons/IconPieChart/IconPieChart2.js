import { jsx } from 'react/jsx-runtime';
import PieChart from '../../../../node_modules/react-feather/dist/icons/pie-chart.js';
import IconBase from '../../IconBase.js';

function IconPieChart(props) {
  return jsx(IconBase, Object.assign({
    icon: PieChart
  }, props), void 0);
}

export { IconPieChart as default };
