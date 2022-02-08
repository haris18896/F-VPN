import React, { useState, useEffect } from 'react'

import Moment from 'moment'

import { useDispatch, useSelector } from 'react-redux'
import {
  handleFetchTickets,
  handlePageChangeListCloseTickets,
  handleSelectChangeListCloseTickets,
} from '../../redux/actions/ticket/index'
import { RESET_LIST_TICKETS_LIST_STATE } from '../../redux/actions/actionTypes/ticket'

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'

import Loader from '../../components/loader/Loader'
import NoActiveComplaints from '../../components/NoActiveComplaints/NoActiveComplaints'
import { SupportTicket } from '../../css/Dashboard/SupportTicket/SupportTicket.js'

const columns = [
  { id: 'ID', label: 'ID' },
  { id: 'Complaints_Date', label: 'Complaints Date' },
  { id: 'Subject', label: 'Subject' },
  { id: 'Description', label: 'Description', minWidth: 200 },
  { id: 'Severity', label: 'Severity' },
  { id: 'Status', label: 'Status' },
]

export default function ActiveComplaintsTable() {
  const classes = SupportTicket()

  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const { fetchCloseTicketsInProcess, closeTicketsListData, limit, page } = useSelector(state => state.ticketList)

  const [pageNum, setPageNum] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  useEffect(() => {
    if (page && limit && user.id) {
      dispatch(handleFetchTickets(page, limit, 'opened'))
    }
    return () => {
      dispatch({ type: RESET_LIST_TICKETS_LIST_STATE })
    }
  }, [])

  const handlePage = page => {
    dispatch(handlePageChangeListCloseTickets(page, limit, 'opened'))
    setPageNum(page)
  }

  const handleSelectList = event => {
    dispatch(handleSelectChangeListCloseTickets(event.target.value, limit, 'opened'))
    setRowsPerPage(+event.target.value)
    setPageNum(0)
  }

  return (
    <div className={classes.Active__complaints__table}>
      <h3>Active Complaints</h3>
      <>
        {fetchCloseTicketsInProcess ? (
          <Loader />
        ) : closeTicketsListData?.supportTickets.length >= 1 ? (
          <Paper sx={{ width: '100%', overflow: 'auto', boxShadow: 'none' }}>
            <TableContainer sx={{ overflowX: 'auto', overFlowY: 'hidden' }}>
              <Table stickyHeader aria-label='sticky table' className={classes.Main__Table}>
                <TableHead>
                  <TableRow>
                    {columns.map(column => (
                      <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {closeTicketsListData?.supportTickets.map(ticket => (
                    <TableRow key={ticket._id}>
                      <TableCell>{ticket._id}</TableCell>
                      <TableCell>{Moment(ticket.openedAt).format('DD-MM-YYYY')}</TableCell>
                      <TableCell>{ticket.subject}</TableCell>
                      <TableCell style={{ maxWidth: '80px' }}>{ticket.message}</TableCell>
                      <TableCell>{ticket.severity}</TableCell>
                      <TableCell>{ticket.status === 'opened' ? <p className={classes.chip}>{ticket.status}</p> : ''}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 50, 100]}
              rowsPerPage={rowsPerPage}
              component='div'
              count={closeTicketsListData?.supportTicketsCount}
              page={pageNum}
              onPageChange={handlePage}
              onRowsPerPageChange={handleSelectList}
            />
          </Paper>
        ) : (
          <NoActiveComplaints />
        )}
      </>
    </div>
  )
}
