import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import * as React from 'react';

import { ExerciseShape } from './WorkoutPropTypes';
import theme from '../../theme';

export default function ExercisesTableBrowser({ exercises }) {
  const columns = [
    { id: 'exercise', label: 'Exercise', minWidth: 200 },
    { id: 'sets', label: 'Sets', minWidth: 75 },
    { id: 'reps', label: 'Reps', minWidth: 75 },
    { id: 'rest', label: 'Rest', minWidth: 75 },
    { id: 'duration', label: 'Duration', minWidth: 75 },
    { id: 'intensity', label: 'Intensity', minWidth: 75 },
    { id: 'calories', label: 'Calories', minWidth: 75 },
  ];

  const rows = exercises.map((e) => ({
    exercise: e.exercise,
    sets: e.sets,
    reps: e.reps,
    rest: e.rest,
    duration: e.duration,
    intensity: e.intensity,
    calories: e.calories,
  }));

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{
      width: '95%',
      paddingLeft: '50px',
      paddingRight: '50px',
      overflow: 'hidden',
      boxShadow: 'none',
      backgroundColor: theme.palette.secondary.dark,
    }}
    >
      <TableContainer sx={{ maxHeight: 440, backgroundColor: theme.palette.secondary.dark }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    color: theme.palette.secondary.dark,
                    backgroundColor: theme.palette.secondary.main,
                    borderTopLeftRadius: index === 0 ? '10px' : '0',
                    borderTopRightRadius: index === columns.length - 1 ? '10px' : '0',
                    borderBottom: `1px solid ${theme.palette.secondary.main}`,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.exercise}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          color: theme.palette.secondary.light,
                          borderBottom: `1px solid ${theme.palette.secondary.main}`,
                        }}
                      >
                        {column.format && typeof value === 'number'
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{
          color: theme.palette.secondary.main,
        }}
      />
    </Paper>
  );
}

ExercisesTableBrowser.propTypes = {
  exercises: PropTypes.arrayOf(ExerciseShape).isRequired,
};
