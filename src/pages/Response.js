import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Response = () => {
  const classes = useStyles();

  const responses = useSelector((store) => store)
  console.log(responses)

  

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
              <TableCell className='uppercase'>Survey Id</TableCell>
              <TableCell align="right" className='uppercase'>What is the Name of the Farmer</TableCell>
              <TableCell align="right" className='uppercase'>What is the gender of the farmer</TableCell>
              <TableCell align="right" className='uppercase'>What is the size of the farm in hectares</TableCell>
            </TableRow>
          </TableHead>
          {responses.responses.map((response) =>(
            <TableBody key={response.id}>
            <TableRow>
              <TableCell component="th" scope="row">
                {response.id}
              </TableCell>
              <TableCell align="center">{response.question1}</TableCell>
              <TableCell align="center">{response.question2}</TableCell>
              <TableCell align="center">{response.question3}(ha)</TableCell>
            </TableRow>
        </TableBody>
          ))}
        </Table>
      </TableContainer>
      <Link to='/survey'>
        <button className='bg-blue text-white p-2 mt-2 rounded'>Return to Survey</button>
      </Link>
      
    </div>
    </div>
    </>
  )
}

export default Response