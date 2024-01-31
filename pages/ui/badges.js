import { useState, useEffect } from "react";
import { Badge, Button, Card, CardBody, CardTitle, Row, Col } from "reactstrap";

const Badges = () => {
  //declaring state to retrive data from db

  
  const [loading, setLoading] = useState(true);
  const [suggestions, setSuggestions] = useState([]);
  let OTCSTicket1 = "";
  const[selectedProductNames ,setSelectedProductNames]=useState("");
  const [formData, setFormData] = useState({
    ContactName: "",
    ProductName: [],
    ContactDesignation:"",
    Department: "",
    Address: "",
    City: "",
    State: "",
    PostalCode: "",
    Country: "",
    Phone: "",
    Mobile: "",
    Email: "",
    Fax: "",
    LinkedIn: "",
    Influential: "",
    ReportingManager: "",
    PreviousOrganisationName: "",
    JoinDate: "",
    EndDate: "",
    CreatedBy: "",
    CreatedOn: "",
   //ModifiedBy: "",
    //ModifiedOn: "",
    OrgName: "",
    OrgDesc: "",
    Size: "",
    OrgAddress: "",
    OrgCity: "",
    OrgState: "",
    OrgCountry: "",
    OrgPhone: "",
    OrgPostalCode: "",
    OrgMobile: "",
    OrgEmail: "",
    OrgFax: "",
    OrgWebsite: "",
    OrgLinkedIn: "",
    BusinessPartner: "",
    Sector: "",
    Industry: "",
    OrgCrtBy: "",
    OrgCrtOn: "",
    //OrgModBy: "",
    //OrgModOn: "",
    AccountManager: [],
    Vertical: [],
    Lead: "",
    IntroducedBy: [],
    RelationshipStatus: [],
    DiscoveredThrough: "",
    //StatusFlag: "",
    Comment: "",
    FactCrtBy: "",
    FactCrtOn: "",
    //FactModBy: "",
    //FactModOn: "",
    DecisionMaker: "",
    Search:""
  });

  const auth = async () => {
    try {
      const resp = await fetch(
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

      if (resp.ok) {
        // Handle successful authentication response here

        OTCSTicket1 = await resp.json();
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

  const handleInputChangeforContact = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
   
    //api call for suggetions in contact name
    const suggetionDropdown = async () => {
      await auth();

      // Check if the value is empty before making the API call
      if (value.trim() === "") {
        return;
      }

      try {
        const response4 = await fetch(
          `http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/1270805?Format=webreport&ContactName=${encodeURIComponent(
            value
          )}`,

          {
            method: "GET",
            headers: {
              OTCSTicket: OTCSTicket1.ticket,
            },
          }
        );
        if (response4.ok) {
          const data4 = await response4.json();
          console.log(data4);
          const userExists = data4.exists;
          if (Array.isArray(data4) && data4.length > 0) {
            //const responseid=data4.ContanctID
            const fetchedSuggestions = data4;

            console.log(fetchedSuggestions);

            setSuggestions(fetchedSuggestions);
          } else if (userExists) {
            alert(`User with name ${value} already exists.`);
          } else {
            console.log(`User with name ${value} does not exist.`);
          }
        } else {
          console.error("Error fetching data:", response4.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const debounceTimer = setTimeout(() => {
      suggetionDropdown();
    }, 200);

    return () => clearTimeout(debounceTimer);
  };

  //update handle input according  to search field

  

  const handleSuggestionClick = (selectedSuggestion) => {
    const {
      ContactName,
      ContactDesignation,
      Department,
      Address,
      City,
      State,
      PostalCode,
      Country,
      Phone,
      Mobile,
      Email,
      LinkedIn,
      ProductName,
      JoinDate,
      CreatedBy,
      PreviousOrganisationName,
      ReportingManager,
      Fax,
      Lead,
      Influential,
      OrgName,
      OrgDesc,
      Size,
      OrgAddress,
      OrgCity,
      OrgState,
      OrgPostalCode,
      OrgCountry,
      OrgPhone,
      OrgEmail,
      OrgFax,
      OrgLinkedIn,
      OrgWebsite,
      BusinessPartner,
      Sector,
      Industry,
      DecisionMaker,
      IntroducedBy,
      RelationshipStatus,
      DiscoveredThrough,
      Search
    } = selectedSuggestion;

    // Convert the JoinDate to MM-DD-YYYY format
    // const joinDateObject = new Date(JoinDate);
    // console.log(joinDateObject);
    // const formattedJoinDate = joinDateObject.toLocaleDateString("en-GB");
    // const formattedJoinDate1 = formattedJoinDate.split("/").join("-");
    // console.log(formattedJoinDate1);

    const joinDateObject = new Date(JoinDate);
    console.log(joinDateObject);

    const formattedJoinDate = joinDateObject.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });

    const formattedJoinDate1 = formattedJoinDate.split("/").join("-");
    console.log(formattedJoinDate1);

    const confirmation = window.confirm(`Do you mean ${ContactName}?`);
    if (confirmation) { 
      if (
        suggestions &&
        Array.isArray(suggestions) &&
        suggestions.length > 0
      ) {
        // Update state variables with values from the first selectedSuggestion
        const firstSuggestion = suggestions[0];
  
         //const productNameValues = Array.from(new Set((firstSuggestion.ProductName || "").split(",").map((value) => value.trim())));
         const productNameValues =(firstSuggestion.ProductName || "")
        console.log('productNameValues:', productNameValues);
   
         setSelectedProductNames(productNameValues); 


         //
       //store the key value pair of accoutn manager and vertical into data 
const data =firstSuggestion.AccountManagerVerticalData;


// Function to get unique entries with account manager as key and vertical as value
const getUniqueEntries = (data) => {
  const uniqueEntries = {};
  
  data.forEach((item) => {
      const accountManager = Object.keys(item)[0];
      console.log(accountManager);
      const vertical = item[accountManager];
      console.log(vertical);
      
      // Using account manager as key and vertical as value
      uniqueEntries[accountManager] = vertical;
  }); 
   console.log(uniqueEntries)
  
  // Convert the unique entries back to an array of objects
  const uniqueArray = Object.entries(uniqueEntries).map(([accountManager, vertical]) => ({
      [accountManager]: vertical
  }));

  return uniqueArray;
};

// Get unique entries from your data array
const uniqueJsonArray = getUniqueEntries(data);

console.log(uniqueJsonArray);
 
// Initialize arrays to store account managers and verticals
const accountManagersArray = [];
const verticalArray = [];
 
 // Extract account managers and verticals from uniqueJsonArray
uniqueJsonArray.forEach((entry) => {
  const accountManager = Object.keys(entry)[0];
  const vertical = entry[accountManager];

  if (accountManager.trim() !== "" && vertical.trim() !== "") {
      accountManagersArray.push(accountManager);
      verticalArray.push(vertical);
  }
});  
    
 const AccountManagerForContact = accountManagersArray.join(",");
  const VerticalForContact = verticalArray.join(",");
// Set state for account managers and verticals
setAccountManager(AccountManagerForContact);
setVertical(VerticalForContact);




 //code for introuduced by started 
//setting value for indtroduced by and relationship status using key value pair 
const dataIR =firstSuggestion.IntroducedByRelationshipData;
// Function to get unique entries with introduced by realtionship status 
const getUniqueEntries1 = (dataIR) => {
  const uniqueEntries1 = {};
  
  dataIR.forEach((item) => {
      const introducedBy = Object.keys(item)[0];
      console.log(introducedBy);
      const relationshipStatus = item[introducedBy];
      console.log(relationshipStatus);
      
      // Using account manager as key and vertical as value
      uniqueEntries1[introducedBy] = relationshipStatus;
  }); 
   console.log(uniqueEntries1)
  
  // Convert the unique entries back to an array of objects
  const uniqueArray1 = Object.entries(uniqueEntries1).map(([introducedBy, relationshipStatus]) => ({
      [introducedBy]: relationshipStatus
  }));

  return uniqueArray1;
}; 

// Get unique entries from your data array
const uniqueJsonArray1 = getUniqueEntries1(dataIR);

console.log(uniqueJsonArray1);
 
// Initialize arrays to store introudced by and realtionship status 
const introducedByArray = [];
const relationshipStatusArray = [];
 
 // Extract introudced by and realtionship status from uniqueJsonArray
uniqueJsonArray1.forEach((entry) => {
  const introducedBy = Object.keys(entry)[0];
  const relationshipStatus = entry[introducedBy];

  if (introducedBy.trim() !== "" && introducedBy.trim() !== "") {
      introducedByArray.push(introducedBy);
      relationshipStatusArray.push(relationshipStatus);
  }
}); 
 
 const IntroducedByForContact = introducedByArray.join(",");
 const RelationshipStatusByContact = relationshipStatusArray.join(",");
// Set state for introducedBy and relationshipStatus 

setIntroducedBy(IntroducedByForContact);
setRelationshipStatus(RelationshipStatusByContact);



      }
      setFormData({
        ...formData,
        ContactName: selectedSuggestion.ContactName,
        ContactDesignation,
        Department,
        Address,
        City,
        State,
        PostalCode,
        Country,
        Phone,
        Mobile,
        Email,
        LinkedIn,
        JoinDate: formattedJoinDate1,
        ReportingManager,
        Fax,
        Lead,
        Influential,
        CreatedBy,
        OrgName,
        ProductName,
        OrgDesc,
        Size,
        OrgAddress,
        OrgCity,
        OrgState,
        OrgPostalCode,
        OrgCountry,
        OrgPhone,
        OrgEmail,
        OrgFax,
        OrgLinkedIn,
        OrgWebsite,
        BusinessPartner,
        Sector,
        Industry,
        PreviousOrganisationName,
        DecisionMaker,
        IntroducedBy,
        RelationshipStatus,
        DiscoveredThrough,
        Search
       // AccountManager,
       // Vertical,
     
      });

    
    }

    setSuggestions([]); // Clear suggestions after selection if desired
  };
  
   
  const [AccountManager, setAccountManager] = useState("");
  const [Vertical, setVertical] = useState("");
  const [IntroducedBy, setIntroducedBy] = useState("");
  const [RelationshipStatus, setRelationshipStatus] = useState("");
  //
  useEffect(() => {

    
    if (
      suggestions &&
      Array.isArray(suggestions) &&
      suggestions.length > 0
    ) {
      // // Update state variables with values from the first selectedSuggestion
       const firstSuggestion = suggestions[0];

      //  //const productNameValues = Array.from(new Set((firstSuggestion.ProductName || "").split(",").map((value) => value.trim())));
      //  const productNameValues =(firstSuggestion.ProductName || "")
      // console.log('productNameValues:', productNameValues);
 
      //  setSelectedProductNames(productNameValues); 
       // Set other states as needed

       

      
 
    }
 
    
          
  }, [suggestions]);
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      {formData ? (
        <>
          <Row>
            {/* <h5 className="mb-3">Contact Detail<i className="bi bi-pencil-fill p-2" title="Edit Details"></i><nav className="navbar navbar-light bg-light">
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
  
</nav> </h5>  */}
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-3">
                Contact Detail
                <i className="bi bi-person-fill p-2 custom-smaller-pencil" title="Edit Details"></i>
              </h5>
              {/* <form className="form-inline">
                <div className="input-group">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-append mx-2">
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </div>
                </div>
              </form> */}
              <div style={{"margin-right":"100px"}}>
              <form className="form-inline">
                <div className="input-group">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    name="Search"
                    id="ContactName"
                    aria-label="Search"
                    value={formData.Search}
                    onChange={handleInputChangeforContact}
                
                  />

                  {/* Check if suggestions should be displayed */}
                  {formData.Search &&
                    formData.Search.length >= 4 &&
                    suggestions.length > 0 && (
                      <div className="suggestions-container">
                        {/* Map through suggestions and render suggestion elements */}
                        {suggestions.slice(0, 1).map((suggestion, index) => (
                          <div
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                          >
                            {suggestion.ContactName}
                          </div>
                        ))}
                      </div>
                    )}

                  <div className="input-group-append mx-2">
                    {/* Button or other elements can be added here */}
                  </div>
                </div>
              </form>
            </div>
            </div>

            <div className="col-12 col-md-12 col-lg-3 detailpage">
              <div className="card">
                <div className="p-4 card-body">
                  <div className="text-center mt-4">
                    <img
                      alt=""
                      loading="lazy"
                      width="150"
                      height="150"
                      decoding="async"
                      data-nimg="1"
                      className="rounded-circle"
                      src="https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_640.png"
                    />
                    <h4 className="mt-2 mb-0 card-title">
                      {formData.ContactName}
                    </h4>
                    <div className="text-muted card-subtitle">
                      {formData.ContactDesignation === "?"
                        ? ""
                        : formData.ContactDesignation}
                    </div>
                    <div className="text-muted card-subtitle">
                      {formData.Department === "?" ? "" : formData.Department}
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-9">
              <div className="card">
                <h6 className="border-bottom px-4 py-3 mb-0 card-title">
                  Personal Details
                </h6>
                <div className="border-top p-4 card-body">
                  <div className="col-sm-12 row">
                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Contact Name
                      </div>
                      <p className="card-title">
                        {formData.ContactName === "?"
                          ? "NA"
                          : formData.ContactName}
                      </p>
                    </div>
                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Contact Designation
                      </div>
                      <p className="card-title">
                        {formData.ContactDesignation === "?"
                          ? "NA"
                          : formData.ContactDesignation}
                      </p>
                    </div>
                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Department
                      </div>
                      <p className="card-title">
                        {formData.Department === "?"
                          ? "NA"
                          : formData.Department}{" "}
                      </p>
                    </div>

                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Address
                      </div>
                      <p className="card-title">
                        {formData.Department === "?"
                          ? "NA"
                          : formData.Department}
                      </p>
                    </div>
                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">City</div>
                      <p className="card-title">
                        {formData.City === "?" ? "NA" : formData.City}
                      </p>
                    </div>
                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">State</div>
                      <p className="card-title">
                        {formData.State === "?" ? "NA" : formData.State}
                      </p>
                    </div>

                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Postal Code
                      </div>
                      <p className="card-title">
                        {formData.PostalCode === "?"
                          ? "NA"
                          : formData.PostalCode}
                      </p>
                    </div>
                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Country
                      </div>
                      <p className="card-title">
                        {formData.Country === "?" ? "NA" : formData.Country}
                      </p>
                    </div>

                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Mobile
                      </div>
                      <p className="card-title">
                        {formData.Mobile === "?" ? "NA" : formData.Mobile}
                      </p>
                    </div>

                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">Email</div>
                      <p className="card-title">
                        {formData.Email === "?" ? "NA" : formData.Email}
                      </p>
                    </div>

                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Join Date
                      </div>
                      <p className="card-title">
                        {formData.JoinDate === "?" ? "NA" : formData.JoinDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h6 className="border-bottom px-4 py-3 mb-0 card-title">
                  More Details
                </h6>
                <div className="border-top p-4 card-body">
                  <div className="col-sm-12 row">
                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Influential
                      </div>
                      <p className="card-title">
                        {formData.Influential === "?"
                          ? "NA"
                          : formData.Influential}{" "}
                      </p>
                    </div>

                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Reporting Manager
                      </div>
                      <p className="card-title">
                        {formData.ReportingManager === "?"
                          ? "NA"
                          : formData.ReportingManager}
                      </p>
                    </div>
                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">Lead</div>
                      <p className="card-title">
                        {formData.Lead === "?" ? "NA" : formData.Lead}
                      </p>
                    </div>
                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Decision Maker
                      </div>
                      <p className="card-title">
                        {formData.DecisionMaker === "?"
                          ? "NA"
                          : formData.DecisionMaker}
                      </p>
                    </div>
                     
 
                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Introduced By
                      </div>
                      <p className="card-title">
                      {IntroducedBy
                          ? Array.from(
                              new Set(
                               IntroducedBy.split(",").map(
                                  (manager) => manager.trim()
                                )
                              )
                            ).join(", ")
                          : ""}
                        
                      </p>
                    </div>
                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Relationship Status
                      </div>
                      <p className="card-title">
                      {RelationshipStatus
                          ? Array.from(
                              new Set(
                                RelationshipStatus.split(",").map(
                                  (manager) => manager.trim()
                                )
                              )
                            ).join(", ")
                          : ""}
                      </p>
                    </div>
                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Discovered Through
                      </div>
                      <p className="card-title">
                        {formData.DiscoveredThrough === "?"
                          ? "NA"
                          : formData.DiscoveredThrough}
                      </p>
                    </div>

                    {/* <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Product
                      </div>
                      <p className="card-title">
                        {formData.ProductName === "?"
                          ? "NA"
                          : formData.ProductName}
                      </p>
                    </div>  */}

                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Product
                      </div>
                      <p className="card-title">
                     
                        {selectedProductNames
                          ? Array.from(
                              new Set(
                                selectedProductNames.split(",").map((product) =>
                                  product.trim()
                                )
                              )
                            ).join(", ")
                          : ""}
                      </p>
                    </div>


                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Created By
                      </div>
                      <p className="card-title">
                        {formData.CreatedBy === "?" ? "NA" : formData.CreatedBy}
                      </p>
                    </div>
                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Created On
                      </div>
                      <p className="card-title">
                        {formData.CreatedOn === "?" ? "NA" : formData.CreatedOn}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h6 className="border-bottom px-4 py-3 mb-0 card-title">
                  Organisation Details
                </h6>
                <div className="border-top p-4 card-body">
                  <div className="col-sm-12 row">
                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Orginisation Name
                      </div>
                      <p className="card-title">
                        {formData.OrgName === "?" ? "NA" : formData.OrgName}
                      </p>
                    </div>
                    <div className="col-sm-12 p-1 col-md-8">
                      <div className="text-muted fs-6 card-subtitle">
                        Orginisation Description
                      </div>
                      <p className="card-title">
                        {formData.OrgDesc === "?" ? "NA" : formData.OrgDesc}{" "}
                      </p>
                    </div>
                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Department
                      </div>
                      <p className="card-title">
                        {formData.Department === "?"
                          ? "NA"
                          : formData.Department}
                      </p>
                    </div>

                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Address
                      </div>
                      <p className="card-title">
                        {formData.OrgAddress === "?"
                          ? "NA"
                          : formData.OrgAddress}
                      </p>
                    </div>
                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">City</div>
                      <p className="card-title">
                        {formData.OrgCity === "?" ? "NA" : formData.OrgCity}
                      </p>
                    </div>
                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">State</div>
                      <p className="card-title">
                        {formData.OrgState === "?" ? "NA" : formData.OrgState}
                      </p>
                    </div>

                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Postal Code
                      </div>
                      <p className="card-title">
                        {formData.OrgPostalCode === "?"
                          ? "NA"
                          : formData.OrgPostalCode}
                      </p>
                    </div>
                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Country
                      </div>
                      <p className="card-title">
                        {formData.OrgCountry === "?"
                          ? "NA"
                          : formData.OrgCountry}
                      </p>
                    </div>
                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">Phone</div>
                      <p className="card-title">
                        {formData.OrgPhone === "?" ? "NA" : formData.OrgPhone}
                      </p>
                    </div>

                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">Email</div>
                      <p className="card-title">
                        {formData.OrgEmail === "?" ? "NA" : formData.OrgEmail}
                      </p>
                    </div>
                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">Fax</div>
                      <p className="card-title">
                        {formData.OrgFax === "?" ? "NA" : formData.OrgFax}
                      </p>
                    </div>

                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Website
                      </div>
                      <p className="card-title">
                        {formData.OrgWebsite === "?"
                          ? "NA"
                          : formData.OrgWebsite}
                      </p>
                    </div>
                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        LinkedIn
                      </div>
                      <p className="card-title">
                        {formData.OrgLinkedIn === "?"
                          ? "NA"
                          : formData.OrgLinkedIn}
                      </p>
                    </div>
                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Previous Organisation Name
                      </div>
                      <p className="card-title">
                        {formData.PreviousOrganisationName === "?"
                          ? "NA"
                          : formData.PreviousOrganisationName}
                      </p>
                    </div>

                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Business Partner
                      </div>
                      <p className="card-title">
                        {formData.BusinessPartner === "?"
                          ? "NA"
                          : formData.BusinessPartner}
                      </p>
                    </div>

                    {/* <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Account Manager
                      </div>
                      <p className="card-title">
                        {formData.AccountManager === "?"
                          ? "NA"
                          : formData.AccountManager}
                      </p>
                    </div> */}

                    {/* <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Account Managers
                      </div>
                      {AccountManager.map((manager, index) => (
                        <p key={index} className="card-title">
                          {manager}
                        </p>
                      ))}
                    </div> */}

                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Account Managers
                      </div>
                      <p className="card-title">
                       
                        {AccountManager
                          ? Array.from(
                              new Set(
                               AccountManager.split(",").map(
                                  (manager) => manager.trim()
                                )
                              )
                            ).join(", ")
                          : ""}
                      
                      </p>
                    </div>

                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Vertical
                      </div>
                      <p className="card-title">
                        {/* {formData.Vertical === "?" ? "NA" : formData.Vertical}{" "} */}
 
                        {Vertical
                          ? Array.from(
                              new Set(
                               Vertical.split(",").map((manager) =>
                                  manager.trim()
                                )
                              )
                            ).join(", ")
                          : ""} 
                      </p>
                    </div>

                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Sector
                      </div>
                      <p className="card-title">
                        {formData.Sector === "?" ? "NA" : formData.Sector}
                      </p>
                    </div>
                    <div className="col-sm-12 p-1 col-md-4">
                      <div className="text-muted fs-6 card-subtitle">
                        Industry
                      </div>
                      <p className="card-title">
                        {formData.Industry === "?" ? "NA" : formData.Industry}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </>
      ) : (
        <p style={{ textAlign: "center" }}>No data available</p>
      )}
    </div>
  );
};

export default Badges;
