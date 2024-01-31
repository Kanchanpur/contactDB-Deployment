import React, { useState,useEffect, useMemo } from 'react';
import { useTable, useGlobalFilter, usePagination } from 'react-table';
import { Card, CardBody, CardTitle, CardSubtitle, Table } from 'reactstrap';
//import Swal from "sweetalert2";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
//import XlsxPopulate from 'xlsx-populate';
import atob from 'atob';
import Swal from 'sweetalert2';




const ProjectTables =({ selectedOrganization, selectedContact, selectedDepartment,selectedSector,selectedIndustry,selectedBusinesspartner,globalSearch,selectedProduct }) => {


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [checkedItems, setCheckedItems] = useState({});
   
  //declaration of EMailList 
  let EmailList; 

  useEffect(() => {
    console.log("Component mounted. checkedItems:", checkedItems);
  }, []);


  const handleCheckboxChange = (id) => {
    console.log("Before: handleCheckboxChange. checkedItems:", checkedItems);
    setCheckedItems((prevCheckedItems) => {
      const newCheckedItems = { ...prevCheckedItems, [id]: !prevCheckedItems[id] };
      console.log("After: handleCheckboxChange. newCheckedItems:", newCheckedItems);
      return newCheckedItems;
    });
  }; 
  
   
   
  
  const handleCheckAll = () => {
    
 // const allChecked = Object.values(checkedItems).every((isChecked) => isChecked);
 const allChecked = Object.values(checkedItems).length > 0 && Object.values(checkedItems).every((isChecked) => isChecked);

  console.log("Before: handleCheckAll. checkedItems:", checkedItems);

  const newCheckedItems = {};
  page.forEach((row) => {
    newCheckedItems[row.id] = !allChecked;
  });
  
  console.log("After: handleCheckAll. newCheckedItems:", newCheckedItems);

  setCheckedItems(newCheckedItems);
  
  };

  
  const handleDownload = async () => { 
    
    const selectedRowsIndices = Object.entries(checkedItems)
    .filter(([_, isChecked]) => isChecked)
    .map(([index]) => Number(index));

  // const selectedRowsJson = selectedRowsIndices.map(index => {
  //   const row = data[index];
  //   const rowJson = {};
  //   Object.keys(row).forEach(key => {
  //     rowJson[key] = row[key];
  //   });
  //   return rowJson.Email;
    
  // });  
    
   EmailList = selectedRowsIndices.map(index => {
    const row = data[index];
    const rowEmail = row.Email; 
    return rowEmail;
  }).join(', ');
  
   
  console.log(EmailList)
  //console.log('Selected Rows (CSV):', selectedRowsCsv);  
  
//
  }; 

   
  const downloadXL = async () => {
     
    await handleDownload();
    try {

      const authResponse = await fetch(
        "http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/auth",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            username: "admin",
            password: "P@ssw0rd",
          }),
        }
      );

      if (authResponse.ok) {
        const authData = await authResponse.json();
        const cleanedEmailList = EmailList.replace(/,\s+/g, ','); 
        if (!cleanedEmailList) {
          // Display a sweet alert for an empty email list
          Swal.fire({
            icon: 'warning',
            title: 'Warning',
            text: 'Please select at least one item.',
          });
          return;
        }
        console.log("EmailList:", cleanedEmailList);
        //api for organisation dropdown
        const response = await fetch(
          `http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/1874804?Format=webreport&EmailList=${encodeURIComponent(cleanedEmailList)}`,
          {
            method: "GET",
            headers: {
              OTCSTicket: authData.ticket,
            },
          }
        );

        if (response.ok) {
          const blob = await response.blob();
          console.log(blob);
            // Create a download link
        const url = window.URL.createObjectURL(blob);
        console.log(url);
        const a = document.createElement("a");
          // Set Content-Type header for the file extension
        const contentType = response.headers.get("Content-Type");
        a.href = url;
        a.download = "EmployeeList.xls"; // You can set the filename here
        a.type = contentType; // Set Content-Type explicitly
        document.body.appendChild(a);
        a.click();

        // Clean up
        window.URL.revokeObjectURL(url);
        
        } else {
          console.error(" Downlaod API failed");
        }
      } else {
        console.error("Authentication API failed");
      }
    } catch (error) {
      console.error("API request failed:", error);
    } finally {
      setLoading(false);
    }
  }; 
 

   
// triggering mail 
// triggering mail 
const downloadFile = async () => {
  await handleDownload();
  try {
    const authResponse = await fetch(
      "http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/auth",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          username: "admin",
          password: "P@ssw0rd",
        }),
      }
    );

    if (authResponse.ok) {
      const authData = await authResponse.json();
      const cleanedEmailList = EmailList.replace(/,\s+/g, ',');
      // if (!cleanedEmailList) {
      //   // Display a sweet alert for an empty email list
      //   Swal.fire({
      //     icon: 'warning',
      //     title: 'Warning',
      //     text: 'Please select at least one item.',
      //   });
      //   return;
      // }
      const response = await fetch(
        `http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/1874804?Format=webreport&EmailList=${encodeURIComponent(cleanedEmailList)}`,
        {
          method: "GET",
          headers: {
            OTCSTicket: authData.ticket,
          },
        }
      );

      if (response.ok) {
        const blob = await response.blob();
       
        console.log(blob);
        return blob;
      } else {
        throw new Error("Download API failed");
      }
    
    } else {
      throw new Error("Authentication API failed");
    }
   
  } catch (error) {
    console.error("Download file error:", error);
    throw error;
  }
 

};


const saveExcelFile = (attachmentBlob, fileName) => {
  try {
    // Use FileSaver.js to save the Blob as a file
    saveAs(attachmentBlob, fileName);

    console.log('Excel file saved successfully');
  } catch (error) {
    console.error('Error saving Excel file:', error);
    throw error;
  }
};
 


// const sendEmailWithAttachment = async (attachmentBlob, fileName) => {
//   try {
//     const emailAddress = 'recipient-email@example.com';
//     const emailSubject = 'Subject of the email';
//     saveExcelFile(attachmentBlob, fileName)

//      // Create a download link for the Blob
//      const attachmentDataUrl = URL.createObjectURL(attachmentBlob);
      
//     // const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
//     //   emailSubject
//     // )}&attachments=${encodeURIComponent(fileName)};${attachmentBlob}`;
//     const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
//       emailSubject
//     )}&attachments=${encodeURIComponent(fileName)};${attachmentDataUrl}`;


//     window.location.href = mailtoLink;
//     // Clean up
//     window.URL.revokeObjectURL(attachmentDataUrl);

//     console.log('Email screen opened with attachment');
//   } catch (error) {
//     console.error('Error opening email client:', error.message);
//     throw error;
//   }
// }; 

// const sendEmailWithAttachment = async (attachmentBlob, fileName) => {
//   try {
//     const emailAddress = 'recipient-email@example.com';
//     const emailSubject = 'Subject of the email';

//     // Convert the attachmentBlob to a data URL
//     const attachmentDataUrl = URL.createObjectURL(attachmentBlob);

//     // Compose the email body with an inline image
//     const emailBody = `
//       Please find the attached file.
//       <br><br>
//       <img src="${attachmentDataUrl}" alt="${fileName}" />
//     `;

//     // Create a mailto link with the composed body
//     const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}&attachments=${attachmentDataUrl}`;

//     // Open the email client
//     window.location.href = mailtoLink;

//     // Clean up
//     window.URL.revokeObjectURL(attachmentDataUrl);

//     console.log('Email screen opened with attachment');
//   } catch (error) {
//     console.error('Error opening email client:', error.message);
//     throw error;
//   }
// };
const sendEmailWithAttachment = async (attachmentBlob, fileName) => {
  try {
    const emailAddress = 'recipient-email@example.com';
    const emailSubject = 'Subject of the email';

    // Create a FormData object to append the attachment
    const formData = new FormData();
    formData.append('attachments', attachmentBlob, fileName);
     
    console.log(formData);
    // Create the mailto link with attachments using FormData
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      emailSubject
    )}&body=Please find the attached file.&attachments=${formData}`;

    // Open the mail client with the mailto link
    window.location.href = mailtoLink;

    console.log('Email screen opened with attachment');
  } catch (error) {
    console.error('Error opening email client:', error.message);
    throw error;
  }
};

const handleMailIconClick = async () => {
  try {
    const attachmentBlob = await downloadFile();

    //const base64Attachment = await convertBlobToBase64(attachmentBlob); 

    // Create a data URL from the blob
   // const attachmentDataUrl = URL.createObjectURL(attachmentBlob);

    // Specify a file name for the attachment
    const fileName =`ContactList.xls`;

    // Call the sendEmailWithAttachment function
    sendEmailWithAttachment(attachmentBlob, fileName);

    console.log('Email screen opened with attachment');
  } catch (error) {
    console.error('Error handling mail icon click:', error);
  }
};


//conversion of pdf 

const downloadPDF = async () => {
  // Your existing code for downloading the Excel file
  await handleDownload();

  try {
    // Your existing authentication code
    const authResponse = await fetch(
      "http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/auth",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          username: "admin",
          password: "P@ssw0rd",
        }),
      }
    );

    if (authResponse.ok) {
      const authData = await authResponse.json();
      const cleanedEmailList = EmailList.replace(/,\s+/g, ','); 
      if (!cleanedEmailList) {
        // Display a sweet alert for an empty email list
        Swal.fire({
          icon: 'warning',
          title: 'Warning',
          text: 'Please select at least one item.',
        });
        return;
      }
      // API for genrate printer 
      const response = await fetch(
        `http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/1874804?Format=webreport&EmailList=${encodeURIComponent(cleanedEmailList)}`,
        {
          method: "GET",
          headers: {
            OTCSTicket: authData.ticket,
          },
        }
      );

      if (response.ok) {


        const blob = await response.blob();
        
        // Convert Excel content to HTML using SheetJS
        const excelData = await blob.arrayBuffer();
        const htmlData = XLSX.read(excelData, { type: "array" });

        // Print button
        const printButton = document.createElement("button");
        printButton.innerText = "Print";
        printButton.onclick = () => printDocument(htmlData);  // Call the print function

        document.body.appendChild(printButton);

         // Convert base64 Excel content to ArrayBuffer
    
   
      } else {
        console.error("Download API failed");
      }
    } else {
      console.error("Authentication API failed");
    }
  } catch (error) {
    console.error("API request failed:", error);
  } finally {
    setLoading(false);
  }
}; 


// Function to print the document
const printDocument = (htmlData) => {
  const printWindow = window.open("", "_blank");
  printWindow.document.write(XLSX.write(htmlData, { bookType: "html", bookSST: true, type: "base64" }));
  printWindow.document.close();
  printWindow.print();
};



  //authentication api 

   //api for contact dropdown
   let OTCSTicket1 = "";
   const auth = async () => {
     try {
       const response1 = await fetch(
         "http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/auth",
         {
           method: "POST",
 
           headers: {
             "Content-Type": "application/x-www-form-urlencoded",
           },
 
           body: new URLSearchParams({
             username: "admin",
             password: "P@ssw0rd",
           }),
         }
       );
 
       if (response1.ok) {
         // Handle successful authentication response here
 
         OTCSTicket1 = await response1.json();
         console.log(JSON.stringify(OTCSTicket1.ticket));
         console.log("Authentication successful", OTCSTicket1);
 
         // Output the response data
       } else {
         // Handle authentication error here
 
         console.error("Authentication failed");
       }
     } catch (error) {
       // Handle network errors or other exceptions here
 
       console.error("Error occurred while authenticating:", error);
     }
   };
 


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
          `http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/1676720?Format=${format}&selectedOrganization=${selectedOrganization}&selectedContact=${selectedContact}&selectedDepartment=${selectedDepartment}&selectedSector=${selectedSector}&selectedIndustry=${selectedIndustry}&selectedBusinesspartner=${selectedBusinesspartner}`,
          {
            method: 'GET',
            headers: {
              OTCSTicket: authData.ticket,
            },
          }
        );

        if (response.ok) {
          const result = await response.json();               
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
  }, [selectedOrganization, selectedContact, selectedDepartment,selectedSector,selectedIndustry,selectedBusinesspartner]);
   
   //global search api 

   useEffect(() => {
    
    const globalSearcBar = async () => {
      try {
        await auth();
        const Res = await fetch(
          `http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/1853021?Format=webreport&globalSearch=${globalSearch}`,
          {
            method: "GET",
            headers: {
              OTCSTicket: OTCSTicket1.ticket,
            },
          }
        );

        if (Res.ok) {
          console.log(Res);
          // Handle successful authentication response here
          const resData = await Res.json(); // Parse JSON response
          console.log(resData);
          setData(resData);
      

        } else {
          // Handle authentication error here

          console.error("Global search api failed");
        }
      } catch (error) {
        // Handle network errors or other exceptions here
        console.error("GLobal Search api failed:", error);
      }
   
  };  // Call the global serach function
    globalSearcBar();
  }, [globalSearch]);  // 

   
     //product APi 
     useEffect(() => {
    
      const ProductDropdown = async () => {
        try {
          await auth();
          const Res = await fetch(
            ` http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/1782625?Format=webreport&selectedProduct=${selectedProduct}`,
            {
              method: "GET",
              headers: {
                OTCSTicket: OTCSTicket1.ticket,
              },
            }
          );
  
          if (Res.ok) {
            console.log(Res);
            // Handle successful authentication response here
            const resData = await Res.json(); // Parse JSON response
            console.log(resData);
            setData(resData);
        
  
          } else {
            // Handle authentication error here
  
            console.error("Product Dropdown api failed");
          }
        } catch (error) {
          // Handle network errors or other exceptions here
          console.error("Product Dropdown Api failed:", error);
        }
     
    };  // Call the global serach function
    ProductDropdown();
    }, [selectedProduct]);  //

    
   
   
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
      initialState: { pageIndex: 0, pageSize: 10 },
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
        <CardTitle tag="h5">Contact Listing</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Overview of the Contact 
        </CardSubtitle>
         <Card>
        <CardBody>
      <CardSubtitle className="mt-2 text-muted" tag="h6">
        <span className="reportIcons" onClick={downloadPDF}><i className="bi bi-printer-fill" title="Printer"></i></span> 
        <span className="reportIcons" onClick={downloadXL} ><i className="bi bi-download" title="Download"></i></span> 
        <span className="reportIcons" onClick={handleMailIconClick}><i className="bi bi-envelope" title="Email"></i></span>
        </CardSubtitle>
        </CardBody>
        </Card>
        <div className="table-responsive">
          {/* Table */}
          <Table {...getTableProps()} className="mt-3 align-middle" borderless>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}><th>
            <input
              type="checkbox"
              //checked={Object.keys(checkedItems).length === page.length}
              checked={Object.values(checkedItems).length >0 && Object.values(checkedItems).every((isChecked) => isChecked)}
           
               onChange={handleCheckAll}
             
              className="form-check-input"
            />
          </th>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                     <td>
              <input
                type="checkbox"
                checked={checkedItems[row.id] || false}
                onChange={() => handleCheckboxChange(row.id)}
                className="form-check-input"
              />
            </td>
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




export default ProjectTables;

