import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const cells = [
  { id: 'from', numeric: false, label: 'Қайдан?' },
  { id: 'to', numeric: false, label: 'Қайда?' },
  { id: 'day', numeric: false, label: 'Қай күні?' },
  { id: 'seats', numeric: true, label: 'Бос орын саны' },
  { id: 'price', numeric: true, label: 'Бағасы (тг)' },
  { id: 'user', numeric: false, label: 'Жүргізуші' },
];

export default ({ order, orderBy, handleSort }) => {

  const handleClick = (property) => (event) => {
    handleSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {cells.map((cell) => (
          <TableCell
            key={cell.id}
            align={cell.numeric ? 'right' : 'left'}
            sortDirection={orderBy === cell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === cell.id}
              direction={orderBy === cell.id ? order : 'asc'}
              onClick={handleClick(cell.id)}
            >
              {cell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
