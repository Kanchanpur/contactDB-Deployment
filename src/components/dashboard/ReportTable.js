// import Image from "next/image";
// import { Card, CardBody, CardTitle, CardSubtitle, Table, Row } from "reactstrap";
// import user1 from "../../assets/images/users/user1.jpg";
// import user2 from "../../assets/images/users/user2.jpg";
// import user3 from "../../assets/images/users/user3.jpg";
// import user4 from "../../assets/images/users/user4.jpg";
// import user5 from "../../assets/images/users/user5.jpg";

// const tableData = [
//   {
    
//     name: "QF",
//     email: "hgover@gmail.com",
//     project: "Customer1",
//     status: "Yes",
//     weeks: "IT",
//     budget: "Industry1",
//   },
//   {
//     name: "Ashghal",
//     email: "hgover@gmail.com",
//     project: "Customer2",
//     status: "done",
//     weeks: "IT",
//     budget: "Industry2",
//   },
//   {
//     name: "Ashghal",
//     email: "hgover@gmail.com",
//     project: "Customer3",
//     status: "holt",
//     weeks: "Health Care",
//     budget: "Industry3",
//   },
//   {
//     name: "Karamah",
//     email: "hgover@gmail.com",
//     project: "Customer4",
//     status: "pending",
//     weeks: "IT",
//     budget: "Industry4",
//   },
//   {
//     name: "Qatar Cool",
//     email: "hgover@gmail.com",
//     project: "Customer5",
//     status: "done",
//     weeks: "IT",
//     budget: "Industry5",
//   },
  
// ];

// const ProjectTables = () => {
//   return (
//     <div>
//     <Row>
//     <h5 className="mb-3">Information Reports</h5>

    // <Card>
    //   <CardBody>
    //     <CardSubtitle className="mt-2 text-muted" tag="h6">
    //     <span className="reportIcons"><i className="bi bi-printer-fill" title="Printer"></i></span> 
    //     <span className="reportIcons"><i className="bi bi-download" title="Download"></i></span> 
    //     <span className="reportIcons"><i className="bi bi-envelope" title="Email"></i></span>
    //     </CardSubtitle>
//         <div className="table-responsive">
//           <Table className="text-nowrap mt-3 align-middle" borderless>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Organisation</th>

//                 <th style={{ textAlign: "center" }}>Designation</th>
//                 <th>Department</th>
//                 <th>Phone</th>
//                 <th>Mobile</th>
//                 <th>Email</th>
//                 <th>Reporting manager</th>
//                 <th>Influencial</th>
//                 <th>Decision maker</th>
//                 <th>Introduced by</th>
//                 <th>Relationship status</th>

//               </tr>
//             </thead>
//             <tbody>
//               {tableData.map((tdata, index) => (
//                 <tr key={index} className="border-top">
//                   <td>
//                     <div className="d-flex align-items-center p-2">
                     
//                       <div className="ms-3">
//                         <h6 className="mb-0">{tdata.name}</h6>
//                       </div>
//                     </div>
//                   </td>
//                   <td>{tdata.project}</td>
//                   <td style={{ textAlign: "center" }}>
//                   <h6 className="mb-0">Yes</h6>

//                   </td>
//                   <td>{tdata.weeks}</td>
//                   <td>{tdata.budget}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </div>
//       </CardBody>
//     </Card>
//     </Row>
//     </div>
//   );
// };

// export default ProjectTables;

import React, { useState, useEffect, useMemo } from 'react';
import { useTable, useGlobalFilter, usePagination } from 'react-table';
import { Card, CardBody, CardTitle, CardSubtitle, Table } from 'reactstrap';

const ReportTables = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const authResponse = await fetch('http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          username: 'admin',
          password: 'P@ssw0rd',
        }),
      });

      if (authResponse.ok) {
        const authData = await authResponse.json();
        const format = 'webreport';
        const response = await fetch(
          `http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/1126802?Format=${format}`,
          {
            method: 'GET',
            headers: {
              OTCSTicket: authData.ticket,
            },
          }
        );

        if (response.ok) {
          const result = await response.json();
          console.log(result);
          setData(result);
        } else {
          console.error('View data API failed');
        }
      } else {
        console.error('Authentication API failed');
      }
    } catch (error) {
      console.error('API request failed:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const columns = useMemo(
  //   () => [
  //     { Header: 'Contact Name', accessor: 'ContactName' },
  //     { Header: 'Contact Designation', accessor: 'ContactDesignation' },
  //     { Header: 'Department', accessor: 'Department' },
  //     { Header: 'Organization Name', accessor: 'OrgName' },
  //     { Header: 'Influential', accessor: 'Influential' },
  //     { Header: 'Decision Maker', accessor: 'DecisionMaker' },
  //     { Header: 'Introduced By', accessor: 'IntroducedBy' },
  //     { Header: 'Relationship Status', accessor: 'RelationshipStatus' },
  //   ],
  //   []
  // );
   
  const columns = useMemo(
    () => [
      { Header: 'Contact Name', accessor: 'ContactName', sortType: 'alphanumeric' },
      { Header: 'Contact Designation', accessor: 'ContactDesignation', sortType: 'alphanumeric' },
      { Header: 'Mobile', accessor: 'Mobile', sortType: 'alphanumeric' },
      { Header: 'Email', accessor: 'Email', sortType: 'alphanumeric' },
      { Header: 'Department', accessor: 'Department', sortType: 'alphanumeric' },
      { Header: 'Organization Name', accessor: 'OrgName', sortType: 'alphanumeric' },
      { Header: 'Influential', accessor: 'Influential', sortType: 'basic' },
      { Header: 'Decision Maker', accessor: 'DecisionMaker', sortType: 'basic' },
      //{ Header: 'Introduced By:Relationship Status', accessor: 'IntroducedByRelationshipData', sortType: 'basic' },
      { Header: 'Introduced By : Relationship Status', accessor: 'IntroducedByRelationshipData', sortType: 'alphanumeric' }
    ],
    []
  );
  

  //working
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useGlobalFilter,
    usePagination
  );
  

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <CardBody>
        {/* <Card> 
        {/* <CardBody>
      {/* <CardSubtitle className="mt-2 text-muted" tag="h6">
        <span className="reportIcons"><i className="bi bi-printer-fill" title="Printer"></i></span> 
        <span className="reportIcons"><i className="bi bi-download" title="Download"></i></span> 
        <span className="reportIcons"><i className="bi bi-envelope" title="Email"></i></span>
        </CardSubtitle> 
        </CardBody> 
        </Card> */}
        <CardTitle tag="h5">Contact Listing</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Overview of the Contact 
        </CardSubtitle>
        {/* Global Filter (Search Bar) */}
        {/* <input
          type="text"
          placeholder="Search..."
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
        /> */}
        <div className="table-responsive">
          {/* Table */}
          <Table {...getTableProps()} className="mt-3 align-middle" borderless>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} style={{textAlign:"left"}}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()} >
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} style={{textAlign:"left"}} >
                    {row.cells.map((cell) => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        {/* Pagination Controls */}
        <div className="pagination">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </button>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </button>
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageCount}
            </strong>{' '}
          </span>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </button>
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {'>>'}
          </button>
        </div>
      </CardBody>
    </Card>
  );
}; 




export default ReportTables;

