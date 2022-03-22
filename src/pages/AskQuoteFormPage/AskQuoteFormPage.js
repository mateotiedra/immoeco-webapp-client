import { Box, Typography } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import SectionContainer from '../../components/SectionContainer/SectionContainer';
import SectionDivider from '../../components/SectionDivider/SectionDivider';

import AskQuoteFormPageLogic from './AskQuoteFormPageLogic';

function AskQuoteFormPage(props) {
  const {} = AskQuoteFormPageLogic();

  const partContainerStyles = {
    flex: { md: 1, lg: 1 },
  };
  return (
    <>
      <Navbar noNavLinks />
      <SectionDivider
        sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' } }}
      />
      <SectionContainer
        fullHeight
        sx={{
          display: 'flex',
          alignItems: { md: 'center', lg: 'center' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' },
            gap: 5,
          }}
        >
          <Box sx={partContainerStyles}>
            <Typography variant='h3'>Tag line</Typography>
            <Typography variant='h5'>
              Consequat consequat sint consectetur ex mollit laborum eiusmod
              enim aliquip veniam nostrud cillum dolore. Do consequat et
              deserunt commodo culpa mollit incididunt est. Nisi sit qui veniam
              ipsum Lorem cupidatat anim deserunt aliqua cillum sint amet. Minim
              incididunt Lorem laboris laborum quis laborum dolore duis elit
              nulla excepteur.
            </Typography>
          </Box>
          <Box sx={partContainerStyles}>
            <Typography variant='h3'>Tag line</Typography>
            <Typography variant='h5'></Typography>
          </Box>
        </Box>
      </SectionContainer>
    </>
  );
}

export default AskQuoteFormPage;
