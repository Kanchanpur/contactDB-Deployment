import React from 'react';
import {useState,useEffect } from 'react';

import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from 'reactstrap';


 let OTCSTicket1="";
const Feeds = () => {  


  // const FeedData = [
  //   {
  //     title: 'Cras justo odio',
  //     icon: 'bi bi-bell',
  //     color: 'primary',
  //     date: '6 minute ago',
  //     id: 1,
  //   },
  //   {
  //     title: 'New user registered.',
  //     icon: 'bi bi-person',
  //     color: 'info',
  //     date: '6 minute ago',
  //     id: 2,
  //   },
  //   {
  //     title: 'Server #1 overloaded.',
  //     icon: 'bi bi-hdd',
  //     color: 'danger',
  //     date: '6 minute ago',
  //     id: 3,
  //   },
  //   {
  //     title: 'New order received.',
  //     icon: 'bi bi-bag-check',
  //     color: 'success',
  //     date: '6 minute ago',
  //     id: 4,
  //   },
  //   {
  //     title: 'Cras justo odio',
  //     icon: 'bi bi-bell',
  //     color: 'dark',
  //     date: '6 minute ago',
  //     id: 5,
  //   },
  //   {
  //     title: 'Server #1 overloaded.',
  //     icon: 'bi bi-hdd',
  //     color: 'warning',
  //     date: '6 minute ago',
  //     id: 6,
  //   },
  // ];
   
  const [product, setProduct] = useState(null)
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
  //axio api for product dropdow

  useEffect(() => {
    const fetchData1 = async () => {
      try {
        await auth();
        const format3 = "webreport";
        const Res = await fetch(
          `http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/1127021?Format=${format3}`,
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
          setProduct(resData);
        } else {
          // Handle authentication error here

          console.error("Product api failed");
        }
      } catch (error) {
        // Handle network errors or other exceptions here
        console.error("Product api failed:", error);
      }
    };

    // Call the fetchData function
    fetchData1();
  }, []); // 


  return ( 
    <div>

{product ? (
      <> 

    <Card>
      <CardBody>
        <CardTitle tag="h5">Products</CardTitle>
        
        <div className='displayflex'>
          
        <CardSubtitle className="mb-2 text-muted width50" tag="h6">
          Products Name
        </CardSubtitle>
        <CardSubtitle className="mb-2 text-muted width50 textright" tag="h6">
          Products Users
        </CardSubtitle>
        </div>
        
        <ListGroup flush className="mt-4">
          {product.map((feed) => (
            <ListGroupItem
              key={feed.productName}
              action
              href="/"
              tag="a"
              className="d-flex align-items-center p-3 border-0"
            >
              <Button className="rounded-circle me-3" size="sm" color={feed.color}>
              <i className  ="bi bi-filter-square"></i>
              </Button>
              {feed.productName}
              <small className="ms-auto text-muted text-small">{feed.UserCount}</small>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
    </> 
):(
   <p>Product Unavailable</p>
)}
    </div>
  );
};

export default Feeds;
