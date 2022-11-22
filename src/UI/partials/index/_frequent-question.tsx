import {
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import {
  AccordionStyled,
  SectionContainer,
  SectionSubTitle,
  SectionTitle,
  Wave,
} from './_frequent-question.styled';

const questionsList = [
  {
    question: 'Dúvida 1',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    question: 'Dúvida 2',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    question: 'Dúvida 3',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    question: 'Dúvida 4',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

const FrequentQuestion = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  function isOpen(accordionIndex: number): boolean {
    return activeAccordion === accordionIndex;
  }

  function changeOpenAccordion(accordionIndex: number): void {
    if (isOpen(accordionIndex)) {
      setActiveAccordion(0);
    } else {
      setActiveAccordion(accordionIndex);
    }
  }

  function getIcon(accordionIndex: number): string {
    return isOpen(accordionIndex) ? 'twf-minus' : 'twf-plus';
  }
  return (
    <SectionContainer>
      <Wave src={'/img/home/waves.svg'} />
      <Container>
        <SectionTitle>Ainda está com dúvidas?</SectionTitle>
        <SectionSubTitle>Veja abaixo as perguntas frequentes</SectionSubTitle>

        {questionsList.map((item, index) => (
          <AccordionStyled
            key={index}
            expanded={isOpen(index + 1)}
            onChange={() => changeOpenAccordion(index + 1)}
          >
            <AccordionSummary expandIcon={<i className={getIcon(index + 1)} />}>
              <Typography color={'primary'}>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </AccordionStyled>
        ))}
      </Container>
    </SectionContainer>
  );
};

export default FrequentQuestion;
