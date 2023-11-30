import { Button, TablePropsSizeOverrides } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Table, {
  TableCell,
  TablePagination,
  TableProps,
  TableRow,
} from './Table';

export default {
  title: 'data-display/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => (
  <>
    <Table {...args} />
    <TablePagination count={10} />
  </>
);

export const Default = Template.bind({});

interface TemplatePropsInterface {
  data: string;
  tipo: string;
  comodos: number;
  cidade: string;
}

Default.args = {
  header: ['Data', 'Tipo de Serviço', 'Número de Cômodos', 'Cidade', ''],
  data: [
    {
      data: '05/05/2023',
      tipo: 'Limpeza de Rotina',
      comodos: 4,
      cidade: 'São Bernardo do Campo - SP',
    },
    {
      data: '05/05/2023',
      tipo: 'Limpeza Pesada',
      comodos: 2,
      cidade: 'Santo André - SP',
    },
    {
      data: '05/05/2023',
      tipo: 'Limpeza de Obra',
      comodos: 3,
      cidade: 'São Bernardo do Campo  - SP',
    },
  ] as TemplatePropsInterface[],
  rowElement(_item, index) {
    const item = _item as TemplatePropsInterface;
    return (
      <TableRow key={index}>
        <TableCell>
          <strong>{item.data}</strong>
        </TableCell>
        <TableCell>{item.tipo}</TableCell>
        <TableCell>{item.comodos} cômodos</TableCell>
        <TableCell>{item.cidade}</TableCell>
        <TableCell>
          <Button>Visualizar</Button>
        </TableCell>
      </TableRow>
    );
  },
};
