import { Box, Typography } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import SectionContainer from '../../components/SectionContainer/SectionContainer';

import AskQuoteFormPageLogic from './AskQuoteFormPageLogic';

function AskQuoteFormPage(props) {
  const {} = AskQuoteFormPageLogic();
  return (
    <>
      <Navbar noNavLinks />
      <SectionContainer
        fullHeight
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Typography>Hellfdasfsdafiodshafjkl dsaghjldfo</Typography>
      </SectionContainer>
    </>
  );
}

export default AskQuoteFormPage;
