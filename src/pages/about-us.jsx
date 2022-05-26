import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import useTranslation from 'next-translate/useTranslation';
import Link from '../common/components/NextChakraLink';
import getMarkDownContent from '../common/components/MarkDownParser/markdown';
import MarkDownParser from '../common/components/MarkDownParser';

export const getStaticProps = async ({ locale }) => {
  const fileLanguage = {
    en: 'ABOUT.md',
    es: 'ABOUT.es.md',
  };
  const results = await fetch(
    `https://raw.githubusercontent.com/breatheco-de/app/main/${fileLanguage[locale]}`,
  )
    .then((res) => res.text())
    .catch((err) => console.error(err));

  const markdownContent = getMarkDownContent(results);
  return {
    props: {
      fallback: false,
      data: markdownContent.content,
    },
  };
};

const AboutUs = ({ data }) => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation(['common']);

  return (
    <Box
      height="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding="35px 0 0 0"
      margin={{ base: '0', md: '0 10% 0 10%' }}
    >
      <Link
        href="/"
        display="inline-block"
        padding={{ base: '0px 10px 15px 10px', md: '0' }}
        w="auto"
        borderRadius="15px"
        color="blue.default"
      >
        {`← ${t('common:backToHome')}`}
      </Link>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        flex="1"
        margin={{ base: '0', md: '4% 10% 0 10%' }}
      >
        <Box
          padding="28px 32px"
          borderRadius="3px"
          background={useColorModeValue('#F2F6FA', 'featuredDark')}
          width="100%"
          className={`markdown-body ${colorMode === 'light' ? 'light' : 'dark'}`}
          transition="background .2s ease"
        >
          <MarkDownParser content={data} />
        </Box>
      </Box>
    </Box>
  );
};

AboutUs.propTypes = {
  data: PropTypes.string.isRequired,
};

export default AboutUs;