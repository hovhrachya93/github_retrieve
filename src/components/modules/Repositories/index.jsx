import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Table, Pagination } from 'react-bootstrap';
import moment from 'moment';

const Repositories = ({ repositoriesInfo }) => {
  const paginationItems = [];
  const numberPerPage = 5;
  const [activePage, setActivePage] = useState(0);
  const amountPages = repositoriesInfo.length / numberPerPage;
  const repoInfoTemp = repositoriesInfo.slice(
    activePage,
    activePage + numberPerPage
  );

  const changeDate = (date) => moment(date).format('DD/MM/YYYY');
  const addPageNumbers = () => {
    for (let number = 0; number <= amountPages; number++) {
      paginationItems.push(
        <Pagination.Item
          key={number}
          active={number === activePage}
          data-page={number}
        >
          {number + 1}
        </Pagination.Item>
      );
    }
  };
  addPageNumbers();
  return (
    <>
      {repositoriesInfo.length === 0 ? (
        <h1 className='text-info'>User has not public repositories</h1>
      ) : (
        <div className='overflow-auto'>
          <Table bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Created at</th>
                <th>repository url</th>
              </tr>
            </thead>
            <tbody>
              {repoInfoTemp.map((i, index) => (
                <tr key={index}>
                  <td>{1 + index + activePage * numberPerPage}</td>
                  <td>{i.name}</td>
                  <td>{changeDate(i.created_at)}</td>
                  <td
                    style={{ cursor: 'pointer' }}
                    className='text-primary'
                    onClick={() => {
                      window.open(`${i.html_url}`, '_blank');
                    }}
                  >
                    {i.html_url}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Pagination
              onClick={(e) => {
                if (!isNaN(parseInt(e.target.getAttribute('data-page')))) {
                  setActivePage(parseInt(e.target.getAttribute('data-page')));
                }
              }}
            >
              {paginationItems}
            </Pagination>
          </div>
        </div>
      )}
    </>
  );
};

Repositories.propTypes = {
  repositoriesInfo: PropTypes.array,
};

export default Repositories;
