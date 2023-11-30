import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Pagination,
  TableRow,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from 'UI/themes/light-themes';

export const TablePaper = styled(Paper)`
  padding: ${({ theme }) => theme.spacing(0, 4)};
`;

export const TableStyled = styled(Table)`
  &.MuiTable-root {
    border-collapse: separate;
    border-spacing: ${({ theme }) => theme.spacing(0, 3)};
  }
`;

export const TableHeadStyled = styled(TableHead)`
  text-transform: uppercase;
  .MuiTableCell-root {
    font-weight: bold;
  }
`;

export const TableBodyStyled = styled(TableBody)`
  .MuiTableRow-root {
    background-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;

export const TableCellStyled = styled(TableCell)`
  &.MuiTableCell-root {
    border: none;
    padding: ${({ theme }) => theme.spacing(1, 4)};
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;
export const TablePaginationStyled = styled(Pagination)`
  display: flex;
  justify-content: flex-end;
  margin: ${({ theme }) => theme.spacing(4)};
`;
export const TableContainerStyled = styled(TableContainer)``;
export const TableRowStyled = styled(TableRow)``;