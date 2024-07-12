
import css from './Tooltip.module.scss';

const Tooltip = ({text, x, y }) => {
  return (
    <p className={css.tooltip} style={{ top: y, left: x }}>
      {text}
    </p>
  )
};

export default Tooltip;