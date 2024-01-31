import ProjectTable from "../../src/components/dashboard/ProjectTable";
import { useState, useEffect, useMemo } from "react";
//import { Card, CardBody, CardTitle, CardSubtitle, Table } from 'reactstrap';
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  CardSubtitle,
  FormText,
} from "reactstrap";

const SearchTable = () => { 

  const [globalSearch, setGlobalSearch] = useState(''); 

  const[ProductOptions, setProductOptions]=useState([]);

  const [formValues, setFormValues] = useState({
    Organizations: "",
    ContactName: "",
    Designation: "",
    department:"",
    currentlyInBussiness: "",
    Sector: "",
    Industry: "",
    ProductNames: ""
   
  });

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [organizationOptions, setOrganizationOptions] = useState([]);
  const [contactOptions, setContactOptions] = useState([]);
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [filter, setFilter] = useState("");
  const[filterContact, setFilterContact]=useState("");
  const[filterDept, setFilterDept]=useState(""); 
  
   const [sector ,selectedSector]=useState('');

  //search functionality for orgnisation contact and department
  const [filteredOrganizations, setFilteredOrganizations] = useState([]);
  const [selectedOrganization, setSelectedOrganization] = useState('');
  const [filteredContact, setFilteredContact] = useState([]);
  const [selectedContact, setSelectedContact] = useState('');

  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [filterDepartment, setFilteredDepartment] = useState([]);

  const fetchData = async () => {
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

        //api for organisation dropdown
        const response = await fetch(
          `http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/1676247?Format=webreport`,
          {
            method: "GET",
            headers: {
              OTCSTicket: authData.ticket,
            },
          }
        );

        if (response.ok) {
          const org = await response.json();
          console.log(org);
          //setData(org);
          setOrganizationOptions(org);
        } else {
          console.error("View data API failed");
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

  //search functionality for organisation

  // const filteredOrganizations = organizationOptions.filter(org =>
  //   org.OrgName.toLowerCase().includes(filter.toLowerCase())
  // );

  // const handleFilterChange = (e) => {
  //   setFilter(e.target.value);
  // };

  // const filteredOrganizations = organizationOptions.filter(org =>
  //   org.OrgName.toLowerCase().includes(filter.toLowerCase())
  // );

  const [isOpen, setIsOpen] = useState(false);

  const [isOpenContact, setIsOpenContact] = useState(false);
  
  const [isOpenDept, setIsOpenDept] = useState(false);



  const handleFilterChange = (e) => {
     
    const inputFilter = e.target.value;
    setFilter(inputFilter);
    //setFilter(e.target.value); 
    // const filteredOrgs = organizationOptions.filter((org) =>
    //   org.OrgName.toLowerCase().includes(inputFilter.toLowerCase())
    // ); 

    // setFilteredOrganizations(filteredOrgs); 

    if (inputFilter === '') {
      setFilteredOrganizations([]);
      setSelectedOrganization('');
    } else {
      // Otherwise, filter the organizations
      const filteredOrgs = organizationOptions.filter((org) =>
        org.OrgName.toLowerCase().includes(inputFilter.toLowerCase())
      );
      setFilteredOrganizations(filteredOrgs);
    }

  };

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (orgName) => {
    setSelectedOrganization(orgName);
    setFilter(orgName);
    setIsOpen(false);
    // Add any additional logic for handling the selected option
  };

  const filteredOrganizations1 = organizationOptions.filter((org) =>
  org.OrgName.toLowerCase().includes(filter.toLowerCase())
);

  
 
  //contact name 

  const handleToggleDropdown1 = () => {
    setIsOpenContact(!isOpenContact);
  };

  const handleSelectOptionContact = (contactName) => {
    setSelectedContact(contactName);
    setFilterContact(contactName);
    setIsOpenContact(false);
    
  }; 

  
  const handleFilterChange1 = (e) => { 

    const inputFilter1 = e.target.value;
    setFilterContact(inputFilter1);
    if (inputFilter1 === '') {
      setFilteredContact([]);
      setSelectedContact('');
    } else {
      // Otherwise, filter the organizations
    const filteredContact = contactOptions.filter((con) =>
       con.ContactName.toLowerCase().includes(inputFilter1.toLowerCase())
     ); 

     setFilteredContact(filteredContact); 
    }

  };   
    
  const filteredContact1 = contactOptions.filter((contact) =>
  contact.ContactName.toLowerCase().includes(filterContact.toLowerCase())
);
    
  
 

  //search box for department     
  const handleFilterChange2 = (e) => {
     
    const inputFilter2 = e.target.value; 
    setFilterDept(inputFilter2);

    if (inputFilter2 === '') {
      setFilteredDepartment([]);
      setSelectedDepartment('');
    } else {
      // Otherwise, filter the organizations
    const filteredDepartment = departmentOptions.filter((con) =>
       con.Department.toLowerCase().includes(inputFilter2.toLowerCase())
     ); 

     setFilteredDepartment(filteredDepartment); 
    }



  };

  const handleToggleDropdown2 = () => {
    setIsOpenDept(!isOpenDept);
  };

  const handleSelectOptionDepartment = (Department) => {
    setSelectedDepartment(Department)
    setFilterDept(Department);
    setIsOpenDept(false);
    // Add any additional logic for handling the selected option
  };

  const filteredDepartment =departmentOptions.filter((dept) =>
    dept.Department.toLowerCase().includes(filterDept.toLowerCase())
  ); 
   
  

  const inlineStyles = {
    borderRadius: "5px",
    position: "relative",
  };
  
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
  

  useEffect(() => {
    const fetchData1 = async () => {
      try {
        await auth();
        //const format3 = "webreport";
        const Res = await fetch(
          `http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/1676720?Format=webreport&selectedOrganization=${selectedOrganization}`,
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
          setContactOptions(resData);
        } else {
          // Handle authentication error here

          console.error("Contact Dropdown api failed");
        }
      } catch (error) {
        // Handle network errors or other exceptions here
        console.error("Contact Dropdown api failed", error);
      }
    };

    // Call the fetchData function
    fetchData1();
  }, [selectedOrganization]); // 


  const fetchDataDept = async () => {
    try {
      await auth();
      //const format3 = "webreport";
      const Res = await fetch(
        `http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/1676281?Format=webreport`,
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
        const resDept = await Res.json(); // Parse JSON response
        console.log(resDept);
        setDepartmentOptions(resDept);
      } else {
        // Handle authentication error here

        console.error("Product api failed");
      }
    } catch (error) {
      // Handle network errors or other exceptions here
      console.error("Product api failed:", error);
    }
  };
   

  //api for product drropdown

  useEffect(() => {
   
    const fetchProductDropDown = async () => {
      try {
        await auth();
        const format3 = "webreport";
        const Res = await fetch(
          `http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/965676?Format=${format3}`,
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
          setProductOptions(resData);
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
    fetchProductDropDown();
  }, []); //


      
 
  

  useEffect(() => {
    fetchData();
    fetchDataDept();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    })); 
     
    
  };  
    
   //passing handle downlaod from project table as a props 
   
   

  

  const handleSearch = (e) => {
    e.preventDefault();
    // Use formValues to perform the search (e.g., make an API request or filter client-side data)
    console.log("Search:", formValues); 

    console.log("Search:", {
      selectedOrganization,
      selectedContact,
      selectedDepartment,
      ...formValues,
    });
     
     //selectedSector(formValues.Sector);
    // setSelectedContact(formValues.ContactName);
    // setSelectedDepartment(formValues.department);
      

  };

  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      <Row>
        <div className="displayflex">
          <h5 className="col-md-9">Search</h5>
          <div className="col-md-3 titlegrp2">
            {" "}
            <i className="bi bi-search searchicontitle"></i>
            <input
              name="text"
              placeholder="Search"
              className="form-control"
              style={{ marginBottom: "20px"  }}
              value={globalSearch}
              onChange={(e) => setGlobalSearch(e.target.value)}
            />
          </div>
        </div>

        <Col>
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card> 
              
          {/* <Card style={{ marginBottom: "10px" }}> 
        {/* <CardBody>
      <CardSubtitle className="mt-2 text-muted" tag="h6">
        <span className="reportIcons"><i className="bi bi-printer-fill" title="Printer"></i></span> 
        <span className="reportIcons" ><i className="bi bi-download" title="Download"></i></span> 
        <span className="reportIcons"><i className="bi bi-envelope" title="Email"></i></span>
        </CardSubtitle>
        </CardBody> */}
        {/* </Card>  */}
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-person me-2"> </i>
              Search Details
            </CardTitle>
            <CardBody>
              <Form className="row" >
     
                <FormGroup className="col-3">
                  <div className="custom-dropdown-container">
                    <label htmlFor="organization" className="form-label">Organization</label>
                    <div
                      className="custom-dropdown"
                      onClick={handleToggleDropdown}
                    >
                      <div className={`dropdown-arrow ${isOpen ? "open" : ""}`}>
                      {/* <i className="bi bi-chevron-down"></i> */}
                      </div>
                      <input
                        type="text"
                        id="organization"
                        placeholder="--Select Organisation--"
                        value={filter}
                        className="form-select"
                        onChange={handleFilterChange}
                        onClick={handleToggleDropdown}
                        // style={{ width: "300px" }}
                      />
                      {isOpen && (
                        <div className="dropdown-options">
                          {filteredOrganizations1.map((org,index) => (
                            <div
                              key={index}
                              className="dropdown-option"
                              onClick={() => handleSelectOption(org.OrgName)}
                            >
                              {org.OrgName}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </FormGroup>

                {/* <FormGroup className="col-3">
                  {/* <Label for="ContactName">Contact Name</Label>
                <Input
                  id="ContactName"
                  name="ContactName"
                  type="select"
                >
                  <option>--Select--</option>
                  <option></option>
                  <option></option>
                  <option></option>
                </Input>
              </FormGroup>
              <FormGroup className="col-3">
                <Label for="Designation">Designation</Label>
                <Input
                  id="Designation"
                  name="Designation"
                  type="select"
                >
                  <option>--Select--</option> */}
                {/* </Input> */}

                {/* <Label for="ContactName">ContactName</Label>
                  <Input
                    type="select"
                    name="ContactName"
                    id="ContactName"
                    value={formValues.ContactName}
                    onChange={handleInputChange}
                  >
                    <option value="">--Select Contacts--</option>
                    {contactOptions.map((contact) => (
                      <option
                        key={contact.ContactName}
                        value={contact.ContactName}
                      >
                        {contact.ContactName}
                      </option>
                    ))}
                  </Input> 
                </FormGroup> */}

                {/* contact name drropdown */}

                <FormGroup className="col-3">
                  <div className="custom-dropdown-container">
                    <label htmlFor="ContactName" className="form-label">Contact Name</label>
                    <div
                      className="custom-dropdown"
                      onClick={handleToggleDropdown1}
                    >
                      <div className={`dropdown-arrow ${isOpenContact ? "open" : ""}`}>
                      {/* <i className="bi bi-chevron-down"></i> */}
                      </div>
                      <input
                        type="text"
                        id="ContactName"
                        placeholder="--Select--"
                        value={filterContact}
                        className="form-select"
                        onChange={handleFilterChange1}
                        onClick={handleToggleDropdown1}
                        // style={{ width: "300px" }}
                      />
                      {isOpenContact && (
                        <div className="dropdown-options">
                          {filteredContact1.map((contact,index) => (
                            <div
                              key={index}
                              className="dropdown-option"
                              onClick={() => handleSelectOptionContact(contact.ContactName)}
                            >
                              {contact.ContactName}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </FormGroup> 

                {/* <FormGroup className="col-3">
                   <Label for="department">Department</Label>
                  <Input
                    type="select"
                    name="department"
                    id="department"
                    value={formValues.department}
                    onChange={handleInputChange}
                  >
                    <option value="">--Select--</option>
                    {departmentOptions.map((dept) => (
                      <option
                        key={dept.Department}
                        value={dept.Department}
                      >
                        {dept.Department}
                      </option>
                    ))}
                  </Input> 
                </FormGroup> */}
                 
                 <FormGroup className="col-3">
                  <div className="custom-dropdown-container">
                    <label htmlFor="Department" className="form-label">Department</label>
                    <div
                      className="custom-dropdown"
                      onClick={handleToggleDropdown2}
                    >
                      <div className={`dropdown-arrow ${isOpenDept ? "open" : ""}`}>
                      {/* <i className="bi bi-chevron-down"></i> */}
                      </div>
                      <input
                        type="text"
                        id="Department"
                        placeholder="--Select--"
                        value={filterDept}
                        className="form-select"
                        onChange={handleFilterChange2}
                        onClick={handleToggleDropdown2}
                        // style={{ width: "300px" }}
                      />
                      {isOpenDept && (
                        <div className="dropdown-options">
                          {filteredDepartment.map((dept,index) => (
                            <div
                              key={index}
                              className="dropdown-option"
                              onClick={() => handleSelectOptionDepartment(dept.Department)}
                            >
                              {dept.Department}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </FormGroup>   




                <FormGroup className="col-3">
                  <Label for="currentlyInBussiness">Bussiness Partner</Label>
                  <Input
                    id="currentlyInBussiness"
                    name="currentlyInBussiness"
                    type="select" 
                    onChange={handleInputChange}
                    value={formValues.currentlyInBussiness}
                    //style={{ width: "300px" }}
                  >
                    <option value={""}>--Select--</option>
                    <option value={"yes"}>Yes</option>
                    <option value={"no"}>No</option>
                  </Input>
                </FormGroup>

                <FormGroup className="col-3">
                  <Label for="Sector">Sector</Label>
                  <Input id="Sector"
                   name="Sector"
                  type="select"
                  onChange={handleInputChange}
                  value={formValues.Sector}
                  //style={{ width: "300px" }}
                   >
                    <option value={""}>--Select--</option>
                    <option>Public</option>
                    <option>Private</option> 
                    
                  </Input>

                </FormGroup>

                <FormGroup className="col-3">
                  <Label for="Industry">Industry</Label>
                  <Input id="Industry"
                   name="Industry" 
                   type="select"
                   value={formValues.Industry}
                   onChange={handleInputChange}
                    
                    //style={{ width: "300px" }} 
                    >
                    {" "}
                    <option value={""}>--Select--</option>
                    <option>Financial Services</option>
                    <option>Airlines and Aviation</option>
                    <option>Banking</option>
                    <option>Telecommunications</option>
                    <option>Hospitals and Health Care</option>
                    <option>Museums</option>
                    <option>Maritime Transportation</option>
                    <option>Airlines and Aviation</option>
                  </Input>
                </FormGroup>

                {/* <FormGroup className="col-3">
                  <Label for="ProductName">Product Name</Label>
                  <Input id="ProductName" name="ProductNames" type="select"  style={{ width: "300px" }} >
                    <option>--Select--</option>
                    <option>Enterprise Content Management</option>
                    <option>ArcGIS Pro</option>
                    <option>Alfabet</option>
                    <option>TeamSite</option>
                    <option>Appworks</option>
                    <option>Enterprise data Catalog</option>
                    <option>Axon</option>
                  </Input>
                </FormGroup> */} 

                <FormGroup className="col-3">
                  <Label for="ProductNames">Product Name</Label>
                  <Input
                    id="ProductNames"
                    className="formaccount inputaccount"
                    name="ProductNames"
                    placeholder="ProductNames"
                    type="select"
                    value={formValues.ProductNames}
                    onChange={handleInputChange}
                    //style={{ width: "300px" }}
                  >
                    <option value={""}>--Select--</option>
                    {ProductOptions.map((product) => (
                      <option
                        key={product.ProductID}
                        value={product.ProductName}
                      >
                        {product.ProductName}
                      </option>
                    ))}
                  </Input>
                 
                </FormGroup>



                
                {/* <FormGroup className="col-3">
                <Label for="Event">Event</Label>
                <Input
                  id="Event"
                  name="Event"
                  type="select"
                >
                  <option>--Select--</option>
                  <option>Acquainted</option>
                  <option>Good</option>
                  <option>Excellent</option>
                </Input>
              </FormGroup> */} 
               <div>
                <Button type="submit" onClick={handleSearch}  className="btn btn-primary mr-2">Search</Button>
                <Button>Cancel</Button>
              </div>
              </Form>
             
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12" style={{maxWidth: "1372px"}}>
        <ProjectTable 
        selectedOrganization={selectedOrganization}
        selectedContact={selectedContact}
        selectedDepartment={selectedDepartment}
        selectedSector={formValues.Sector}
        selectedIndustry={formValues.Industry}
        selectedBusinesspartner={formValues.currentlyInBussiness}
        globalSearch={globalSearch}
        selectedProduct={formValues.ProductNames}
        />
      </Col>

      {/* --------------------------------------------------------------------------------*/}
      {/* table-2*/}
      {/* --------------------------------------------------------------------------------*/}
    </Row>
  );
};

export default SearchTable;
