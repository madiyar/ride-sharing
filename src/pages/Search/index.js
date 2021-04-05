import React, { useEffect } from 'react';
import moment from 'moment';
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow
} from '@material-ui/core';
import TableHead from './TableHead';
import { history } from 'lib/helpers';
import { getComparator, stableSort } from './utils';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTrips } from 'store/trips/actions';
import { Loader } from 'components';

export default ({ type }) => {
  const { cityId } = useParams();
  const dispatch = useDispatch();
  const { data, loading } = useSelector(state => state.trips.trips)
  const [orderBy, setOrderBy] = React.useState(type);
  const [order, setOrder] = React.useState('asc');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = React.useState([]);

  useEffect(() => setOrderBy(type), [type]);

  // get trips
  useEffect(() => {
    if (cityId) {
      const key = `${type}Id`;
      dispatch(getTrips({ [key]: cityId }));
    }
  }, [cityId, type, dispatch]);

  // prepare ROWS from store
  useEffect(() => {
    if (data.length) {
      setRows(data?.map(item => ({
        id: item?.id,
        from: item?.from?.name,
        to: item?.to?.name,
        day: item?.day,
        seats: item?.seats - item?.passengers?.length,
        price: item?.price,
        user: `${item?.driver?.firstName} ${item?.driver?.lastName}`,
      })));
    }
  }, [data]);

  // сортировка
  const handleSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // set rows per page
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <Card style={{ maxWidth: 900, margin: '0 auto' }}>
      <Loader open={loading} />
      <TableContainer>
        <Table size="medium">
          <TableHead order={order} orderBy={orderBy} handleSort={handleSort} />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => (
                <TableRow hover key={i} onClick={() => history.push(`/trip/drivers/${row.id}`)}>
                  <TableCell>{row.from}</TableCell>
                  <TableCell>{row.to}</TableCell>
                  <TableCell>{moment(row.day).format('DD.MM.YY, H:mm')}</TableCell>
                  <TableCell align="right">{row.seats} орын</TableCell>
                  <TableCell align="right">{row.price} тг</TableCell>
                  <TableCell>{row.user}</TableCell>
                </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} align="center" />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        labelRowsPerPage="Жол саны:"
        page={page}
        onChangePage={(e, page) => setPage(page)}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Card>
  );
}
