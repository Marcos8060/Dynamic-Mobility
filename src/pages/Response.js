import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
];


const Response = () => {
  const classes = useStyles();

  return (
    <>
    <div className='bg-gray h-100v'>
    <div className='w-10/12 mx-auto pt-20'>
      <h1 className='font-press-start font-bold text-center text-4xl mb-3 underline'>View Survey Results</h1>
      <TableContainer component={Paper} className='shadow-2xl'>
        <Table className={classes.table} aria-label="caption table">
          <caption>A basic table example with a caption</caption>
          <TableHead>
            <TableRow>
              <TableCell>Survey Id</TableCell>
              <TableCell align="right">Question one</TableCell>
              <TableCell align="right">Question Two</TableCell>
              <TableCell align="right">Question Three</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  29
                </TableCell>
                <TableCell align="right">Hello my name</TableCell>
                <TableCell align="right">Second Question</TableCell>
                <TableCell align="right">Third Question</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </div>
    </>
  )
}

export default Response