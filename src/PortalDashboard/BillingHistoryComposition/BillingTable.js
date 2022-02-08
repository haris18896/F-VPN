import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import Moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'

import Loader from '../../components/loader/Loader'
import download__icon from '../../assets/images/download__icon.svg'
import {
  fetchBillingHistory,
  handleSelectChangeListTransactions,
  handlePageChangeListTransactions,
} from '../../redux/actions/transaction/index'
import { BillingHistory } from '../../css/Dashboard/BillingHistory/BillingHistory'

const columns = [
  { id: 'Date_Bought', label: 'Date Bought' },
  { id: 'Subscription_Type', label: 'Subscription Type' },
  { id: 'Payment_Method', label: 'Payment Method' },
  { id: 'Payment_Status', label: 'Payment Status' },
  { id: 'Expires_ON', label: 'Expires ON' },
  { id: 'Amount', label: 'Amount' },
  { id: 'Download_Invoice', label: 'Download Invoice' },
]

export default function BillingTable() {
  const classes = BillingHistory()

  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const { inProcess, transactionListData, limit, page } = useSelector(state => state.transaction)

  const [pageNum, setPageNum] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  useEffect(() => {
    if (page && limit && user.id) {
      dispatch(fetchBillingHistory(page, limit, user.id))
    }
  }, [page, limit, user.id, dispatch])

  const handlePage = page => {
    dispatch(handlePageChangeListTransactions(page, limit, user.id))
    setPageNum(page)
  }

  const handleSelectList = event => {
    dispatch(handleSelectChangeListTransactions(event.target.value, limit, user.id))

    setRowsPerPage(+event.target.value)
    setPageNum(0)
  }

  return (
    <>
      {inProcess ? (
        <Loader />
      ) : transactionListData?.transactions.length >= 1 ? (
        <Paper sx={{ width: '100%', overflow: 'auto', boxShadow: 'none' }}>
          <TableContainer sx={{ overflowX: 'auto', overFlowY: 'hidden' }}>
            <Table stickyHeader aria-label='sticky table' className={classes.Main__Table}>
              <TableHead>
                <TableRow>
                  {columns.map(column => (
                    <TableCell key={column.id} align='left' style={{ minWidth: column.minWidth }}>
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {transactionListData?.transactions.map(transaction => (
                  <TableRow key={transaction.id} align={transaction.align}>
                    <TableCell>{Moment(transaction?.subscriptionStartTime).format('DD-MM-YYYY')}</TableCell>
                    <TableCell>{transaction?.plan.name}</TableCell>
                    <TableCell>{transaction?.paymentMethod}</TableCell>
                    <TableCell>
                      {transaction?.status === 'succeeded' ? (
                        <span className={classes.chip}>Succeeded</span>
                      ) : (
                        <span className={classes.chipFail}>Failed</span>
                      )}
                    </TableCell>
                    <TableCell>{Moment(transaction?.subscriptionExpiryTime).format('DD-MM-YYYY')}</TableCell>
                    <TableCell>$ {transaction?.totalFee}</TableCell>
                    <TableCell>
                      <Link to='#'>invoice Receipt</Link>{' '}
                      <img className={classes.download__icon} src={download__icon} alt='download icon' />{' '}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50, 100]}
            rowsPerPage={rowsPerPage}
            component='div'
            count={transactionListData?.transactionsCount}
            page={pageNum}
            onPageChange={handlePage}
            onRowsPerPageChange={handleSelectList}
          />
        </Paper>
      ) : (
        <h4>No Record Found</h4>
      )}
    </>
  )
}
