import { Box } from '@mui/material';

function SectionDivider(props) {
  const h = props.h || 1;
  var propsWithoutSx = { ...props };
  if (propsWithoutSx.sx) delete propsWithoutSx.sx;
  console.log(props.sx);
  return <Box sx={{ py: 5 * h, ...props.sx }} {...propsWithoutSx} />;
}

export default SectionDivider;
