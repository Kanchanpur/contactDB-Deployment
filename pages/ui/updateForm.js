import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { useLocation, Link, BrowserRouter as Router } from "react-router-dom";
//import Select from 'react-select';
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
  FormText,
} from "reactstrap";

const showSuccessAlert = () => {
  Swal.fire({
    icon: "success",
    title: "Success!",
    text: "Data submitted successfully!",
  });
};

const handleCancelClick = () => {
  Swal.fire({
    icon: "success",
    title: "Success",
    text: "Data cleared successfully",
    confirmButtonText: "OK",
  });
};

let OTCSTicket1 = "";
const UpdateForms = () => {

  const [initialFormData, setIntialFormData] = useState({
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
    OldContactName: "",
    OldEmail: "",
    OldMobile: "",
    OldOrgName:"",
    OldOrgEmail:"",
    OldOrgPhone:"",
    //AccountManagerVerticalData:[]
  });

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

  //submit handler code for Contact Details
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
    OldContactName: "",
    OldEmail: "",
    OldMobile: "",
    OldOrgName:"",
    OldOrgEmail:"",
    OldOrgPhone:"",
    Search:""
    //AccountManagerVerticalData:[]
  });

  const router = useRouter();

  // const { query } = router;

  //const [selectedSuggestion, setSelectedSuggestion] = useState(null);
 
   //api call when data is coming from new contact form 
  // useEffect(() => {
  //   // Fetch additional data using ContactName from the query parameter
  //   const fetchData = async () => {
  //     await auth();
  //     try {
  //       const response = await fetch(
  //         `http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/1270805?Format=webreport&ContactName=${encodeURIComponent(
  //           query.contactName
  //         )}`,
  //         {
  //           method: "GET",
  //           headers: {
  //             OTCSTicket: OTCSTicket1.ticket,
  //           },
  //         }
  //       );

  //       if (response.ok) {
  //         const data = await response.json();
  //         console.log(data);
  //         setSelectedSuggestion(data); 
  //       } else {
  //         console.error("Error fetching data:", response.statusText);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   if (query && query.contactName) {
  //     fetchData();
  //   }
  // }, [query.contactName, router]);

  // State variables for form fields
  const [contactName, setContactName] = useState("");
  const [contactDesignation, setContactDesignation] = useState("");
  const [Department, setDepartment] = useState("");
  const [Address, setAddress] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [PostalCode, setPostalCode] = useState("");
  const [Country, setCountry] = useState("");
  const [Phone, setPhone] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Email, setEmail] = useState("");
  const [Fax, setFax] = useState("");
  const [LinkedIn, setLinkedIn] = useState("");
  const [Influential, setInfluential] = useState("");
  const [ReportingManager, setReportingManager] = useState("");
  const [PreviousOrganisationName, setPreviousOrganisationName] = useState("");
  const [JoinDate, setJoinDate] = useState("");
  const [EndDate, setEndDate] = useState("");
  const [CreatedBy, setCreatedBy] = useState("");
  const [ModifiedBy, setModifiedBy] = useState("");
  const [OrgName, setOrgName] = useState("");
  const [OrgDesc, setOrgDesc] = useState("");
  const [Size, setSize] = useState("");
  const [OrgCity, setOrgCity] = useState("");
  const [OrgAddress, setOrgAddress] = useState("");
  const [OrgState, setOrgState] = useState("");
  const [OrgPostalCode, setOrgPostalCode] = useState("");
  const [OrgCountry, setOrgCountry] = useState("");
  const [OrgPhone, setOrgPhone] = useState("");
  const [OrgEmail, setOrgEmail] = useState("");
  const [OrgFax, setOrgFax] = useState("");
  const [OrgWebsite, setOrgWebsite] = useState("");
  const [OrgLinkedIn, setOrgLinkedIn] = useState("");
  const [BusinessPartner, setBusinessPartner] = useState("");
  const [Sector, setSector] = useState("");
  const [Industry, setIndustry] = useState("");
  const [OrgCrtBy, setOrgCrtBy] = useState("");
  const [OrgModBy, setOrgModBy] = useState("");
  const [Vertical, setVertical] = useState("");
  const [Lead, setLead] = useState("");
  const [IntroducedBy, setIntroducedBy] = useState("");
  const [RelationshipStatus, setRelationshipStatus] = useState("");
  const [DiscoveredThrough, setDiscoveredThrough] = useState("");
  const [DecisionMaker, setDecisionMaker] = useState("");
  const [Comment, setComment] = useState("");
  const [AccountManager, setAccountManager] = useState([]);
  const [selectedProductNames, setSelectedProductNames] = useState([]);
  // ... (other form fields)


  // useEffect(() => {
  //   // Check if selectedSuggestion is available and it's an array with at least one element
  //   if (
  //     selectedSuggestion &&
  //     Array.isArray(selectedSuggestion) &&
  //     selectedSuggestion.length > 0
  //   ) {
  //     // Update state variables with values from the first selectedSuggestion
  //     const firstSuggestion = selectedSuggestion[0];

  //     setContactName(firstSuggestion.ContactName || "");
  //     setContactDesignation(firstSuggestion.ContactDesignation || "");
  //     setDepartment(firstSuggestion.Department || "");
  //     setAddress(firstSuggestion.Address || "");
  //     setCity(firstSuggestion.City || "");
  //     setState(firstSuggestion.State || "");
  //     setPostalCode(firstSuggestion.PostalCode || "");
  //     setCountry(firstSuggestion.Country || "");
  //     setPhone(firstSuggestion.Phone);
  //     setMobile(firstSuggestion.Mobile || "");
  //     setEmail(firstSuggestion.Email || "");
  //     setFax(firstSuggestion.Fax || "");
  //     setLinkedIn(firstSuggestion.LinkedIn || "");
  //     setInfluential(firstSuggestion.Influential || "");
  //     setReportingManager(firstSuggestion.ReportingManager || "");
  //     setPreviousOrganisationName(
  //       firstSuggestion.PreviousOrganisationName || ""
  //     );
  //     setJoinDate(
  //       new Date(firstSuggestion.JoinDate)
  //         .toLocaleDateString("en-GB")
  //         .split("/")
  //         .join("-") || ""
  //     );
  //     setEndDate(
  //       new Date(firstSuggestion.EndDate)
  //         .toLocaleDateString("en-GB")
  //         .split("/")
  //         .join("-") || ""
  //     );
  //     setCreatedBy(firstSuggestion.CreatedBy || "");
  //     setModifiedBy(firstSuggestion.ModifiedBy || "");
  //     setOrgName(firstSuggestion.OrgName || "");
  //     setOrgDesc(firstSuggestion.OrgDesc || "");
  //     setSize(firstSuggestion.Size || "");
  //     setOrgAddress(firstSuggestion.OrgAddress || "");
  //     setOrgCity(firstSuggestion.OrgCity || "");
  //     setOrgState(firstSuggestion.OrgState || "");
  //     setOrgPostalCode(firstSuggestion.OrgPostalCode || "");
  //     setOrgCountry(firstSuggestion.OrgCountry || "");
  //     setOrgPhone(firstSuggestion.OrgPhone || "");
  //     setOrgEmail(firstSuggestion.OrgEmail || "");
  //     setOrgFax(firstSuggestion.OrgFax || "");
  //     setOrgWebsite(firstSuggestion.OrgWebsite || "");
  //     setOrgLinkedIn(firstSuggestion.OrgLinkedIn || "");
  //     setBusinessPartner(firstSuggestion.BusinessPartner || "");
  //     setSector(firstSuggestion.Sector || "");
  //     setIndustry(firstSuggestion.Industry || "");
  //     setComment(firstSuggestion.Comment || "");
  //     setVertical(firstSuggestion.Vertical || "");
  //     setLead(firstSuggestion.Lead || "");
  //     setIntroducedBy(firstSuggestion.IntroducedBy || "");
  //     setRelationshipStatus(firstSuggestion.RelationshipStatus || "");
  //     setDiscoveredThrough(firstSuggestion.setDiscoveredThrough || "");
  //     setDecisionMaker(firstSuggestion.DecisionMaker || "");

  //     // //handle multiselect field product name
  //     // const productNameValues = (firstSuggestion.ProductName || "")
  //     //   .split(",")
  //     //   .map((value) => value.trim());
  //     // setSelectedProductNames(productNameValues);
  //     // // ... (update other form fields)

  //     // //handle multiselect field account manager
  //     // const apiAccountManagers = firstSuggestion.AccountManager || []; 

  //     // //handle apiVertical 
  //     // const apiVertical =firstSuggestion.Vertical || [];
      
  //     // const verticalArray = apiVertical.split(",").map((vertical)=>vertical.trim());

  //     //  console.log(verticalArray);
      
  //     // const accountManagersArray = apiAccountManagers
  //     //   .split(",")
  //     //   .map((manager) => manager.trim());

  //     // setAccountManager(accountManagersArray); 
  //     // setVertical(verticalArray);
    
          

  //     // const obj=[];


  //     //   for(var i =0 ; i <accountManagersArray.length; i++){
        
  //     //      obj.push({ id: i+1, accountManager: accountManagersArray[i], vertical: verticalArray[i] })
  //     //   }
        
  //     //   setFormGroups(obj); 



  //   }
  // }, [selectedSuggestion]); 


    // useEffect(() => {
      
    //   setFormGroups( [
    //     // Initialize with an empty form group
    //     { id: 1, accountManager: "Abc", vertical: "" },
    //     { id: 2, accountManager: "EFG", vertical: "" }
    //   ])
    
        
    // }, [])
    

  // Initialize the formGroups state with the API response

  //dynamically generating product dropdown

  const [ProductOptions, setProductOptions] = useState([]);

  //state declaration for suggetions in contact details

  const [suggestions, setSuggestions] = useState([]);

  //state declaration for org suggestions
  const [suggestions1, setSuggestions1] = useState([]);

  //CreatedOn field fetching dynamically

  const [contactNameDisabled, setContactNameDisabled] = useState(false);

  const [orgNameDisabled, setOrgNameDisabled] = useState(false);

  //const [isValidEmail,setValidEmail]=useState(true);

  const getCurrentDate = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getFullYear()}`;
    return formattedDate;
  };

  const handleBusinessPartnerChange = (e) => {
    setFormData({
      ...formData,
      BusinessPartner: e.target.value,
    });
  };
  const handleSector = (e) => {
    setFormData({
      ...formData,
      Sector: e.target.value,
    });
  };

  //axio api for product dropdow

  useEffect(() => {
    setFormData({
      ...formData,
      CreatedOn: getCurrentDate(),
    });
    const fetchData1 = async () => {
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
    fetchData1();
  }, []); //

  //
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [multiProduct, setMultiProduct] = useState(null);

  const [oldContactName, setOldContactName] = useState("");
  const [oldEmail, setOldEmail] = useState("");
  const [oldMobile, setOldMobile] = useState("");
  const [oldOrgName, setOldOrgName] = useState("");
  const [oldOrgEmail, setOldOrgEmail] = useState("");
  const [oldOrgPhone, setOldOrgPhone] = useState("");

  const clearPreviousData = () => {
    setSuggestions([]);
    setMultiProduct([]);
    setFormData({
      ...initialFormData,
      AccountManager: [],
      Vertical: [],
      IntroducedBy: [],
      RelationshipStatus: [],
      IntroducedByRelationshipData: [],
      AccountManagerVerticalData:[],
    });
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
    if (value.trim() === '') {
      clearPreviousData();
      setFormData(initialFormData);
      setSuggestions([]);
      setSelectedProductNames([]);
      setAccountManager([]);
      setVertical([]);
      setIntroducedBy([]);
      setRelationshipStatus([]);
      setFormGroups([]);
      setFormGroupsI([]);

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
            // Access properties from the first object in the array
            const { ContactName, Email,Mobile,OrgName,OrgPhone,OrgEmail } = data4[0];
            setOldContactName(ContactName);
            setOldEmail(Email);
            setOldMobile(Mobile);
            setOldOrgName(OrgName);
            setOldOrgPhone(OrgPhone);
            setOldOrgEmail(OrgEmail);

         
          //const responseid=data4.ContanctID
          const fetchedSuggestions = data4;

          console.log(fetchedSuggestions);
         
          
          setSuggestions(fetchedSuggestions);
          setMultiProduct(data4);
       
        } 
          else if (userExists) {
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

   
   
   



  const [isUserInput, setIsUserInput] = useState(false);
  //this is for product name also we can use also we can use this effect for other multifield values

 
  useEffect(() => {

    
    if (
      suggestions &&
      Array.isArray(suggestions) &&
      suggestions.length > 0
    ) {
      // Update state variables with values from the first selectedSuggestion
      const firstSuggestion = suggestions[0];

      const productNameValues = Array.from(new Set((firstSuggestion.ProductName || "").split(",").map((value) => value.trim())));

      console.log('productNameValues:', productNameValues);
 
       setSelectedProductNames(productNameValues); 
       // Set other states as needed

       

      
 
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

// Set state for account managers and verticals
setAccountManager(accountManagersArray);
setVertical(verticalArray);

// Create form groups using the extracted data
const obj = accountManagersArray.map((accountManager, i) => ({
    id: i + 1,
    accountManager: accountManager,
    vertical: verticalArray[i]
}));

// Set the form groups state
setFormGroups(obj); 


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

// Set state for introducedBy and relationshipStatus 

setIntroducedBy(introducedByArray);
setRelationshipStatus(relationshipStatusArray);

// Create form groups using the extracted data
const obj1 = introducedByArray.map((introducedBy, i) => ({
    id: i + 1,
    introducedBy: introducedBy,
    relationshipStatus: relationshipStatusArray[i]
}));

// Set the form groups state
setFormGroupsI(obj1);



 }
 
    
          
  }, [suggestions]);
    
 




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
      ProductName:[],
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
      Comment
  
    } = selectedSuggestion; 
     
    setOldEmail(Email);
    setOldContactName(ContactName);
     setOldMobile(Mobile);
     setOldOrgName(OrgName);
     setOldOrgPhone(OrgPhone);
     setOldOrgEmail(OrgEmail);
    // Convert the JoinDate to MM-DD-YYYY format
    // const joinDateObject = new Date(JoinDate);
    // console.log(joinDateObject);
    // const formattedJoinDate = joinDateObject.toLocaleDateString("en-GB");
    // const formattedJoinDate1 = formattedJoinDate.split("/").join("-");
    // console.log(formattedJoinDate1);


    const joinDateObject = new Date(JoinDate);
    console.log(joinDateObject);

  const formattedJoinDate = joinDateObject.toLocaleDateString("en-US", {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  });

    const formattedJoinDate1 = formattedJoinDate.split("/").join("-");
    console.log(formattedJoinDate1);


    
    const confirmation = window.confirm(`Do you mean ${ContactName}?`); 
 
    if (confirmation) {
     
     
      //
      const productNameArray = [...new Set(selectedSuggestion.ProductName.split(',').map(item => item.trim()))];

      console.log(productNameArray);

     

    const verticalArray = [...new Set(selectedSuggestion.Vertical.split(',').map(item => item.trim()))];



        // Ensure exactly two unique values for Vertical

    let uniqueVerticals = verticalArray;
    if (uniqueVerticals.length < 2) {
      uniqueVerticals = [...uniqueVerticals, ...uniqueVerticals ];
    }
    uniqueVerticals = uniqueVerticals.slice(0, 2);

    const accountManagersArray =[...new Set(selectedSuggestion.AccountManager.split(',').map(item => item.trim()))];
    console.log(accountManagersArray);

    
     //unique arrays for introducedBy and Realtionship status 

     const introducedByArray =[...new Set(selectedSuggestion.IntroducedBy.split(',').map(item => item.trim()))];

     //unique value set for relationshipStatus
        
     const relationshipStatusArray = [...new Set(selectedSuggestion.RelationshipStatus.split(',').map(item => item.trim()))];

            // Ensure exactly two unique values for Vertical

    let uniqueRelationshipStatus = relationshipStatusArray;
    if (uniqueRelationshipStatus.length < 2) {
      uniqueRelationshipStatus = [...uniqueRelationshipStatus, ...uniqueRelationshipStatus ];
    }
    uniqueRelationshipStatus = uniqueRelationshipStatus.slice(0, 2);

    console.log(uniqueRelationshipStatus)

       
       //if (!arraysEqual(verticalArray, formData.Vertical)) {
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
        ProductName:selectedProductNames,
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
        IntroducedBy:introducedByArray,
        RelationshipStatus:uniqueRelationshipStatus,
        DiscoveredThrough,
        AccountManager:accountManagersArray,
        Vertical:uniqueVerticals,
        OldContactName:oldContactName,
        OldEmail: oldEmail,
        OldMobile: oldMobile,
        OldOrgName:oldOrgName,
       OldOrgEmail:oldOrgEmail,
       OldOrgPhone:oldOrgPhone,
       Comment
       //IntroducedByRelationshipData
      });
     

    
      setIsUserInput(true);
      setContactNameDisabled(true);
      setIsFormEnabled(false);
    }

    setSuggestions([]); // Clear suggestions after selection if desired

  

  };  

    

  // //handle suggetion for organisation
  const handleInputChangeforOrg = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    //api call for suggetions in org name
    const suggetionDropdown1 = async () => {
      await auth();
      try {
        const response5 = await fetch(
          `http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/1229297?Format=webreport&OrgName=${encodeURIComponent(
            value
          )}`,

          {
            method: "GET",
            headers: {
              OTCSTicket: OTCSTicket1.ticket,
            },
          }
        );
        if (response5.ok) {
          const data5 = await response5.json();
          console.log(data5);
          const fetchedSuggestions1 = data5;
          console.log(fetchedSuggestions1);
          const OrgExist = data5.exists;

          setSuggestions1(fetchedSuggestions1);

          if (OrgExist) {
            console.log(`User with name ${value} already exists.`);
          } else {
            console.log(`User with name ${value} does not exist.`);
          }
        } else {
          console.error("Error fetching data:", response5.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const debounceTimer = setTimeout(() => {
      suggetionDropdown1();
    }, 200);
    return () => clearTimeout(debounceTimer);
  };

  //const [isUserInput, setisUserInput] = useState(false);
  const handleSuggestionClick1 = (selectedSuggestion1) => {
    const {
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
    } = selectedSuggestion1;

    const confirmation = window.confirm(`Do you mean ${OrgName}?`);
    if (confirmation) {
     
      setFormData({
        ...formData,
        OrgName: selectedSuggestion1.OrgName,
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
      });

      setIsUserInput(true);
      setOrgNameDisabled(true);
      setIsFormEnabled(false);
    }

    setSuggestions1([]); // Clear suggestions after selection if desired
  };

 

   //update contact api 
  const UpdateContact = async () => {
    try { 

      const paramKey = formData; 
      const paramKey2 = JSON.stringify(paramKey);
      console.log(paramKey2);
      const paramKey1 = "webreport";
      //console.log(formdataArr);
      const response = await fetch(
        `http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/1674626?Format=${paramKey1}&requestJSON=${paramKey2}`,
        {
          method: "GET",
          headers: {
            OTCSTicket: OTCSTicket1.ticket,
          },
        }
      );
      if (response.ok) {
        // Handle successful authentication response here
        const responseData = await response.json(); // Parse JSON response
        console.log("Data Updated successfully", responseData);
      } else {
        // Handle authentication error here
        console.error("Data Updated failed");
      }
    } catch (error) {
      // Handle network errors or other exceptions here

      console.error("Error occurred while Updatation:", error);
    }
  };
  




  
  
  const handleCancel = () => {
    const emptyFormData = Object.fromEntries(
      Object.keys(formData).map((key) => [key, ""])
    );

  //   //setformData(emptyformData);

  //   setContactNameDisabled(false);
  //   setOrgNameDisabled(false);
  //   setIsFormEnabled(true);
     setFormData(emptyFormData);

     setFormData(initialFormData);
     setSuggestions([]);
     setSelectedProductNames([]);
     setAccountManager([]);
     setVertical([]);
    
    // handleCancelClick();
    // setTimeout(() => {
    //   router.push("/");
    // }, 2000);
     // Show SweetAlert with OK button
  Swal.fire({
    title: 'Data Cleared!',
    text: 'Your form data has been cancelled.',
    icon: 'success',
    confirmButtonText: 'OK',
  }).then((result) => {
    // Navigate to another page if the user clicks OK
    if (result.isConfirmed || result.dismiss === Swal.DismissReason.backdrop) {
      router.push("/");
    }
  });
   };



  {
    /*updated code for formgroup  */
  }

 // const [formGroups, setFormGroups] = useState([]);
  
  // const [formGroups, setFormGroups] = useState([
  //   // Initialize with an empty form group
  //    { id: 1, accountManager: "", vertical:"" },
  // ]);

  // const handleChange = (id, value) => {
  //   // Update the state for the specified form group  
  //   setFormGroups((prevGroups) =>
  //     prevGroups.map((group) =>
  //       group.id === id ? { ...group, accountManager: value.trim() } : group
  //     )
  //   ); // Update the formData state
    
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     AccountManager: formGroups.map((group) => group.accountManager),
  //   })); 


  // };
    
  // useEffect(() => {
  //   // Log the updated Vertical values whenever formGroups changes
  //   console.log("Updated Vertical Values:", formGroups.map((group) => group.vertical.trim()));
  // }, [formGroups]);
  

  // const handleChange3 = (id, value) => {
  //   // Update the state for the specified form group
  //   console.log("Value before trim vertical:", value);


  //   setFormGroups((prevGroups) =>
  //     prevGroups.map((group) =>
  //       group.id === id ? { ...group, vertical: value.trim() } : group
  //     )
  //   ); 
    
  //   console.log("Vertical Values:", formGroups.map((group) => group.vertical));
     
  //     setFormData((prevData) => ({
  //       ...prevData,
  //      Vertical: formGroups.map((group) => group.vertical.trim()),
  //     }));

  //   // Update the formData state
  // };
   
  // const removeFormGroup = (id) => { 

  //   if (!isFormEnabled) {
  //       return;
  //   }
  //   // Remove the specified form group
  //   // setFormGroups((prevGroups) =>
  //   //   prevGroups.filter((group) => group.id !== id)
     
  //   // );
  //   setFormGroups((prevGroups) => {
  //     const updatedGroups = prevGroups.filter((group) => group.id !== id);
  //     return updatedGroups;
  //   });
   
  // };

  // const addFormGroup = () => {
  //   // Add a new form group with empty values
  //   if (!isFormEnabled) {
  //     return;
  // }
  //   setFormGroups((prevGroups) => [
  //     ...prevGroups,
  //     { id: prevGroups.length + 1, accountManager: "", vertical:"" },
  //   ]);
  // };


   
//test 
 

const [formGroups, setFormGroups] = useState([
  { id: 1, accountManager: "", vertical: "" },
]);

const handleChange = (id, value) => {
  setFormGroups((prevGroups) =>
    prevGroups.map((group) =>
      group.id === id ? { ...group, accountManager: value } : group
    )
  );
};

const handleChange3 = (id, value) => {
  setFormGroups((prevGroups) =>
    prevGroups.map((group) =>
      group.id === id ? { ...group, vertical: value ? value : "" } : group
    )
  );

  setFormData((prevData) => ({
    ...prevData,
    Vertical: formGroups.map((group) => (group.vertical ? group.vertical : "")),
  }));
};

const removeFormGroup = (id) => {
  if (!isFormEnabled) {
    return;
  }

  setFormGroups((prevGroups) => prevGroups.filter((group) => group.id !== id));
};

const addFormGroup = () => {
  if (!isFormEnabled) {
    return;
  }

  setFormGroups((prevGroups) => [
    ...prevGroups,
    { id: prevGroups.length + 1, accountManager: "", vertical: "" },
  ]);
};

useEffect(() => {
  setFormData({
    ...formData,
    AccountManager: formGroups.map((group) => group.accountManager),
    Vertical: formGroups.map((group) => (group.vertical ? group.vertical : "")),
  });
}, [formGroups]);


 
  //trial code for introduced by and relationship status 
  const [formGroupsI, setFormGroupsI] = useState([
    { id: 1, introducedBy: "", relationshipStatus: "" },
  ]);
  
  const handleChangeI = (id, value) => {
    setFormGroupsI((prevGroups) =>
      prevGroups.map((group) =>
        group.id === id ? { ...group, introducedBy: value } : group
      )
    );
    setFormData((prevData) => ({
      ...prevData,
      IntroducedBy: formGroupsI.map((group) => (group.introducedBy ? group.introducedBy : "")),
    }));
  };
  
  const handleChangeR = (id, value) => {

    setFormGroupsI((prevGroups) =>
      prevGroups.map((group) =>
        group.id === id ? { ...group, relationshipStatus: value ? value : "" } : group
      )
    );
  
    setFormData((prevData) => ({
      ...prevData,
      RelationshipStatus: formGroupsI.map((group) => (group.relationshipStatus ? group.relationshipStatus : "")),
    }));
  };
  
  const removeFormGroupI = (id) => { 
    if(!isFormEnabled){
      return;
    }
   setFormGroupsI((prevGroups) => prevGroups.filter((group) => group.id !== id));
  };
  
  const addFormGroupI = () => {
    if(!isFormEnabled){
      return;
    }
    setFormGroupsI((prevGroups) => [
      ...prevGroups,
      { id: prevGroups.length + 1, introducedBy: "", relationshipStatus: "" },
    ]);
  }; 
 
  useEffect(() => {
    setFormData({
      ...formData,
      IntroducedBy: formGroupsI.map((group) => group.introducedBy),
      RelationshipStatus: formGroupsI.map((group) => (group.relationshipStatus ? group.relationshipStatus : "")),
    });
  }, [formGroupsI]);
 


   
  
  
  

  //product
  const [formGroups1, setFormGroups1] = useState([
    { id: "ProductName", label: "Product", value: [] },
  ]);

  const handleChange2 = (id, selectedOptions) => {
    const selectedValues = Array.from(
      selectedOptions,
      (option) => option.value
    ); 

    console.log(selectedValues);
    setFormData({
      ...formData,
      [id]: selectedValues,
    });
    setSelectedProductNames(selectedValues);
    // setSelectedProductNames({
    //   ...selectedProductNames,
    //   [groupId]: selectedValues,
    // });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
   console.log("handle submit is working !!!");
    UpdateContact();
    //insertformData();
    //showSuccessAlert();

    // setTimeout(() => {
    //   router.push("/");
    // }, 2000);
       
    // console.log("UpdateformData:", {
    //     Department,
    //   ...formData
 
    // });
    // Show SweetAlert with OK button and a custom message
  Swal.fire({
    title: 'Data Updated!',
    text: 'Your form data has been updated.',
    icon: 'success',
    confirmButtonText: 'OK',
  }).then((result) => {
    // Navigate to another page if the user clicks OK
    if (result.isConfirmed || result.dismiss === Swal.DismissReason.backdrop) {
      router.push("/");
    }
  });
      
 

  };  
  


  //togglling form on the basis of prompt 
  const [isFormEnabled, setIsFormEnabled] = useState(false);

  const toggleForm = () => {
    const shouldEnableForm = window.confirm("Do you want to edit this form?");
    if (shouldEnableForm) {
      setIsFormEnabled(!isFormEnabled);
    }
  };

  return (
    <Row>
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="mb-3">
          Update Form{" "}
          <i
            className="bi bi-pencil-fill p-2 custom-smaller-pencil"
            title="Edit Details"
            onClick={toggleForm}
            style={{ cursor: "pointer" }}
          ></i>
        </h5>
        <div style={{"margin-right":"100px"}}>
        <form className="form-inline">
  <div className="input-group">
    <input
      className="form-control"
      type="search"
      placeholder="Search"
      name="Search"
      id="Search"
      aria-label="Search"
      value={formData.Search}
      onChange={handleInputChangeforContact}
      //disabled={!isFormEnabled}
    />

    {/* Check if suggestions should be displayed */}
    {formData.Search && formData.Search.length >= 4 && suggestions.length > 0 && (
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

      <Col>
        <Form className="row" onSubmit={handleSubmit} >
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-person me-2"> </i>
              Personal Details
            </CardTitle>
            <CardBody className="row" >
              {/* <FormGroup className="col-3">
                <Label for="ContactName">Contact Name</Label>
                <Input
                  id="ContactName"
                  name="ContactName"
                  placeholder="Contact Name"
                  type="text"
                  value={formData.ContactName}
                  onChange={handleInputChange}
                />
              </FormGroup>   */}

              {/* contact name for suggetions */}

              <FormGroup className="col-3">
                <Label for="ContactName">Contact Name</Label>
                <Input
                  id="ContactName"
                  name="ContactName"
                  placeholder="Contact Name"
                  type="text"
                  //value={formData.ContactName}
                  value={isUserInput ? formData.ContactName : contactName}
                 // onChange={(e) => setContactName(e.target.value)}
                 onChange={(e) =>
                  isUserInput
                    ? handleInputChange(e)
                    : setContactName(e.target.value)
                } 
                  disabled={!isFormEnabled}
                />
                {/* {suggestions.length > 0 && (
                  <div>
                    {suggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        {suggestion.ContactName}
                      </div>
                    ))}
                  </div>
                )} */}
              </FormGroup> 

              <FormGroup className="col-3">
                <Label for="OrginisationName">Orginisation Name</Label>
                <Input
                  id="OrginisationName"
                  name="OrgName"
                  placeholder="Orginisation Name"
                  type="text"
                  value={isUserInput ? formData.OrgName : OrgName}
                  onChange={handleInputChangeforOrg}
                  disabled={!isFormEnabled}
                />
                {suggestions1.length > 0 && (
                  <div>
                    {suggestions1.slice(0,1).map((suggestion1, index) => (
                      <div
                        key={index}
                        onClick={() => handleSuggestionClick1(suggestion1)}
                      >
                        {suggestion1.OrgName}
                      </div>
                    ))}
                  </div>
                )}
              </FormGroup>

              <FormGroup className="col-3">
                <Label for="Contactdesignation">Contact Designation</Label>
                <Input
                  id="Contactdesignation"
                  name="ContactDesignation"
                  placeholder="Contact Designation"
                  type="text"
                  value={
                    isUserInput
                      ? formData.ContactDesignation
                      : contactDesignation
                  }
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setContactDesignation(e.target.value)
                  }
                  disabled={!isFormEnabled}
                  //disabled={formData.ContactDesignation && isUserInput}
                />
              </FormGroup>

              <FormGroup className="col-3">
                <Label for="Department">Department</Label>
                <Input
                  id="Department"
                  name="Department"
                  placeholder="Department"
                  type="text"
                  value={isUserInput ? formData.Department : Department}
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setDepartment(e.target.value)
                  }
                  disabled={!isFormEnabled}
                />
              </FormGroup>

              {/* <FormGroup className="col-3">
                <Label for="Address">Address</Label>
                <Input
                  id="Address"
                  name="Address"
                  placeholder="Address"
                  type="text"
                  value={formData.Address}
                  onChange={handleInputChange}
                  disabled={formData.ContactDesignation && isUserInput}
                />
              </FormGroup> */}
              <FormGroup className="col-3">
                <Label for="City">City</Label>
                <Input
                  id="City"
                  name="City"
                  placeholder="City"
                  type="text"
                  value={isUserInput ? formData.City : City}
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput ? handleInputChange(e) : setCity(e.target.value)
                  }
                  disabled={!isFormEnabled}
                />
              </FormGroup>

              <FormGroup className="col-3">
                <Label for="State">State</Label>
                <Input
                  id="State"
                  name="State"
                  placeholder="State"
                  type="text"
                  value={isUserInput ? formData.State : State}
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setState(e.target.value)
                  }
                  disabled={!isFormEnabled}
                />
              </FormGroup>
              <FormGroup className="col-3">
                <Label for="PostalCode">Postal Code</Label>
                <Input
                  id="PostalCode"
                  name="PostalCode"
                  placeholder="PostalCode"
                  type="text"
                  value={isUserInput ? formData.PostalCode : PostalCode}
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setPostalCode(e.target.value)
                  }
                  disabled={!isFormEnabled}
                />
              </FormGroup>

              <FormGroup className="col-3">
                <Label for="Country">Country</Label>
                <Input
                  id="Country"
                  name="Country"
                  placeholder="Country"
                  type="text"
                  value={isUserInput ? formData.Country : Country}
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setCountry(e.target.value)
                  }
                  disabled={!isFormEnabled}
                />
              </FormGroup>
              <FormGroup className="col-3">
                <Label for="Phone">Phone</Label>
                <Input
                  id="Phone"
                  name="Phone"
                  placeholder="Phone"
                  type="text"
                  value={isUserInput ? formData.Phone : Phone}
                  // onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setPhone(e.target.value)
                  }
                  disabled={!isFormEnabled}
                />
              </FormGroup>

              <FormGroup className="col-3">
                <Label for="Mobile">Mobile</Label>
                <Input
                  id="Mobile"
                  name="Mobile"
                  placeholder="Mobile"
                  type="text"
                  value={isUserInput ? formData.Mobile : Mobile}
                  // onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setMobile(e.target.value)
                  }
                  //onChange={handleMobileNumberChange}
                  disabled={!isFormEnabled}
                />
                {/* {mobileNumberExists && (
                  <p style={{ color: "red" }}>
                    This mobile number already exists in the database.
                  </p>
                )} */}
              </FormGroup>
              <FormGroup className="col-3">
                <Label for="Email">Email</Label>
                <Input
                  id="Email"
                  name="Email"
                  placeholder="Email Address"
                  type="Email"
                  value={isUserInput ? formData.Email : Email}
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setEmail(e.target.value)
                  }
                  // onChange={handleEmailChange}
                  disabled={!isFormEnabled}
                />
                {/* {EmailExists && (
                  <p style={{ color: "red" }}>
                    This Email already exists in the system.
                  </p>
                )} */}
              </FormGroup>
              <FormGroup className="col-3">
                <Label for="Fax">Fax</Label>
                <Input
                  id="Fax"
                  name="Fax"
                  placeholder="Fax"
                  type="text"
                  value={isUserInput ? formData.Fax : Fax}
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput ? handleInputChange(e) : setFax(e.target.value)
                  }
                  disabled={!isFormEnabled}
                />
              </FormGroup>

              <FormGroup className="col-3">
                <Label for="LinkedIn">LinkedIn</Label>
                <Input
                  id="LinkedIn"
                  name="LinkedIn"
                  placeholder="LinkedIn"
                  type="text"
                  value={isUserInput ? formData.LinkedIn : LinkedIn}
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setLinkedIn(e.target.value)
                  }
                  disabled={!isFormEnabled}
                />
              </FormGroup>
            </CardBody>
          </Card>

          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-person me-2"> </i>
              More Details
            </CardTitle>
            <CardBody className="row">
              <FormGroup className="col-3">
                <Label for="JoinDate">Join Date</Label>
                <Input
                  id="JoinDate"
                  name="JoinDate"
                  placeholder={"mm-dd-yyyy" }
                  type={"text"}
                  value={formData.JoinDate}
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setJoinDate(e.target.value)
                  }
                  disabled={!isFormEnabled}
                />
              </FormGroup>

              <FormGroup className="col-3">
                <Label for="Influential">Influential</Label>
                <Input
                  id="Influential"
                  name="Influential"
                  type="select"
                  value={isUserInput ? formData.Influential : Influential}
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setInfluential(e.target.value)
                  }
                  disabled={!isFormEnabled}
                >
                  <option>--Select--</option>
                  <option>Yes</option>
                  <option>No</option>
                </Input>
              </FormGroup>

              <FormGroup className="col-3">
                <Label for="ReportingManager">Reporting Manager</Label>
                <Input
                  id="ReportingManager"
                  name="ReportingManager"
                  placeholder="Reporting Manager"
                  type="text"
                  value={
                    isUserInput ? formData.ReportingManager : ReportingManager
                  }
                  // onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setReportingManager(e.target.value)
                  }
                  disabled={!isFormEnabled}
                />
              </FormGroup>
              <FormGroup className="col-3">
                <Label for="PreviousOrganisationName">
                  Previous Organisation Name
                </Label>
                <Input
                  id="PreviousOrganisationName"
                  name="PreviousOrganisationName"
                  placeholder="Previous Organisation Name"
                  type="text"
                  value={
                    isUserInput
                      ? formData.PreviousOrganisationName
                      : PreviousOrganisationName
                  }
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setPreviousOrganisationName(e.target.value)
                  }
                  disabled={!isFormEnabled}
                />
              </FormGroup>

              {/* <FormGroup className="col-3">
                <Label for="Lead">Lead/Opportunity</Label>
                <Input
                  id="Lead"
                  name="Lead"
                  placeholder="Lead"
                  type="text"
                  value={Lead}
                  onChange={handleInputChange}
                  disabled={!isFormEnabled}
                />
              </FormGroup> */}

              <FormGroup className="col-3">
                <Label for="DecisionMaker">Decision Maker</Label>
                <Input
                  id="DecisionMaker"
                  name="DecisionMaker"
                  placeholder="Decision Maker"
                  type="select"
                  value={isUserInput ? formData.DecisionMaker : DecisionMaker}
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setDecisionMaker(e.target.value)
                  }
                  disabled={!isFormEnabled}
                >
                  <option>--Select--</option>
                  <option>Yes</option>
                  <option>No</option>
                </Input>
              </FormGroup>

              {/* <FormGroup className="col-3">
                <Label for="IntroducedBy">Introduced By</Label>
                <Input
                  id="IntroducedBy"
                  name="IntroducedBy"
                  placeholder="Introduced By"
                  type="text"
                  value={isUserInput ? formData.IntroducedBy : IntroducedBy}
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setIntroducedBy(e.target.value)
                  }
                  disabled={!isFormEnabled}
                />
              </FormGroup>
              <FormGroup className="col-3">
                <Label for="RelationshipStatus">Relationship Status</Label>
                <Input
                  id="RelationshipStatus"
                  name="RelationshipStatus"
                  type="select"
                  value={
                    isUserInput
                      ? formData.RelationshipStatus
                      : RelationshipStatus
                  }
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setRelationshipStatus(e.target.value)
                  }
                  disabled={!isFormEnabled}
                >
                  <option>--Select--</option>
                  <option>Acquainted</option>
                  <option>Good</option>
                  <option>Excellent</option>
                </Input>
              </FormGroup> */} 

                 {/* trail code for indroduced by and relationship status */}

              
              <FormGroup className="col-3">
                <Label for="DiscoveredThrough">Discovered Through</Label>
                <Input
                  id="DiscoveredThrough"
                  name="DiscoveredThrough"
                  type="select"
                  value={
                    isUserInput ? formData.DiscoveredThrough : DiscoveredThrough
                  }
                  // onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setDiscoveredThrough(e.target.value)
                  }
                  disabled={!isFormEnabled}
                >
                  <option>--Select--</option>
                  <option>Event</option>
                  <option>LinkedIn </option>
                  <option>News Papar</option>
                  <option>Business Card</option>
                  <option>Other</option>
                </Input>
              </FormGroup>

              {/* updated Product field */}
              {/* {formGroups1.map((group) => (
                <FormGroup key={group.id} className="col-3">
                  <Label for={`field-${group.id}`}>{group.label}</Label>
                  <Input
                    id={`field-${group.id}`}
                    className="formaccount inputaccount"
                    name={`field-${group.id}`}
                    placeholder={group.label}
                    type="select"
                    multiple
                    value={formData[group.id]}
                    onChange={(e) =>
                      handleChange2(group.id, e.target.selectedOptions)
                    }
                    disabled={!isFormEnabled}
                  >
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
              ))} */}

              {formGroups1.map((group,index) => (
                <FormGroup key={group.id} className="col-3">
                  <Label for={`field-${group.id}`}>{group.label}</Label>
                  <Input
                    id={`field-${group.id}`}
                    className="formaccount inputaccount"
                    name={`field-${group.id}`}
                    placeholder={group.label}
                    type="select"
                    multiple
                    value={selectedProductNames}
                   
                    onChange={(e) =>
                      handleChange2(group.id, e.target.selectedOptions)
                    }
                    disabled={!isFormEnabled}
                  >
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
              ))} 

              <FormGroup className="col-3">
                <Label for="Createdby">Created By</Label>
                <Input
                  id="Createdby"
                  name="CreatedBy"
                  placeholder="Created By"
                  type="text"
                  value={isUserInput ? formData.CreatedBy : CreatedBy}
                  // onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setCreatedBy(e.target.value)
                  }
                  disabled={!isFormEnabled}
                />
              </FormGroup>

              {/* <FormGroup className="col-3">
                <Label for="CreatedOn">Created On</Label>
                <Input
                  id="CreatedOn"
                  name="CreatedOn"
                  placeholder="Created On "
                  type="text"
                  value={CreatedOn}
                  onChange={handleInputChange}
                  disabled
                />
              </FormGroup> */} 
              
              {formGroupsI.map((group) => (
                <div key={group.id} className="col-5 row subgroupaccount">
                  <FormGroup className="col">
                    <Label for={`field-${group.id}`}>Introduced By</Label>
                    <Input
                      id={`field-${group.id}`}
                      className="formaccount inputaccount"
                      name={`field-${group.id}`}
                      placeholder="Introduced By"
                      type="text"
                      value={group.introducedBy}
                      onChange={(e) => handleChangeI(group.id, e.target.value)}
                      disabled={!isFormEnabled}
                    />
                  </FormGroup>

                  <FormGroup className="col">
                    <Label for={`field-${group.id}`}>Relationship Status</Label>
                    <Input
                      id={`field-${group.id}`}
                      name={`field-${group.id}`}
                      placeholder="Relationship Status"
                      type="select"
                      value={group.relationshipStatus}
                      onChange={(e) => handleChangeR(group.id, e.target.value)}
                      disabled={!isFormEnabled}
                    >
                      <option value={""}>--Select--</option>
                        <option>Acquainted</option>
                        <option>Good</option>
                        <option>Excellent</option>
                      </Input>
                  </FormGroup>

                  {formGroupsI.length > 1 ? (
                    <i
                      className="bi bi-backspace-fill redclose"
                      onClick={() => removeFormGroupI(group.id)}
                    ></i>
                  ) : null}
                </div>
              ))}

              <div className="addbtndetails">
                <div
                  className="bi bi-plus-circle-fill me-2 addmore"
                  onClick={addFormGroupI}
                ></div>
              </div> 

              <FormGroup className="col-3">
                <Label for="Comment">Comments</Label>
                <Input
                  id="Comment"
                  name="Comment"
                  placeholder="Comments"
                  type="textarea"
                  value={isUserInput ? formData.Comment : Comment}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setComment(e.target.value)
                  }
                  disabled={!isFormEnabled}
                />
              </FormGroup>

            </CardBody>
          </Card>

          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-person me-2"> </i>
              Orginisation Details
            </CardTitle>
            <CardBody className="row">
              <FormGroup className="col-3">
                <Label for="OrginisationName">Orginisation Name</Label>
                <Input
                  id="OrginisationName"
                  name="OrgName"
                  placeholder="Orginisation Name"
                  type="text"
                  value={isUserInput ? formData.OrgName : OrgName}
                  onChange={handleInputChangeforOrg}
                  disabled={!isFormEnabled}
                />
                {suggestions1.length > 0 && (
                  <div>
                    {suggestions1.map((suggestion1, index) => (
                      <div
                        key={index}
                        onClick={() => handleSuggestionClick1(suggestion1)}
                      >
                        {suggestion1.OrgName}
                      </div>
                    ))}
                  </div>
                )}
              </FormGroup>

              <FormGroup className="col-6">
                <Label for="OrginisationDescription">
                  Orginisation Description
                </Label>
                <Input
                  id="OrginisationDescription"
                  name="OrgDesc"
                  placeholder="Orginisation Description"
                  type="text"
                  value={isUserInput ? formData.OrgDesc : OrgDesc}
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setOrgDesc(e.target.value)
                  }
                  disabled={!isFormEnabled}
                />
              </FormGroup>

              <FormGroup className="col-3">
                <Label for="EndDate">End Date</Label>
                <Input
                  id="EndDate"
                  name="EndDate"
                  type={!isFormEnabled ? "text" : "date"}
                  value={EndDate}
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setEndDate(e.target.value)
                  }
                  disabled={!isFormEnabled}
                />
              </FormGroup>
              <FormGroup className="col-3">
                <Label for="Size">Size</Label>
                <Input
                  id="Size"
                  name="Size"
                  placeholder="Size"
                  type="text"
                  value={isUserInput ? formData.Size : Size}
                  // onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput ? handleInputChange(e) : setSize(e.target.value)
                  }
                  disabled={!isFormEnabled}
                />
              </FormGroup>

              <FormGroup className="col-3">
                <Label for="Address1">Address</Label>
                <Input
                  id="Address1"
                  name="OrgAddress"
                  placeholder="Address"
                  type="text"
                  value={isUserInput ? formData.OrgAddress : OrgAddress}
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setOrgAddress(e.target.value)
                  }
                  disabled={!isFormEnabled}
                />
              </FormGroup>
              <FormGroup className="col-3">
                <Label for="City1">City</Label>
                <Input
                  id="City1"
                  name="OrgCity"
                  placeholder="City"
                  type="text"
                  value={isUserInput ? formData.OrgCity : OrgCity}
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setOrgCity(e.target.value)
                  }
                  disabled={!isFormEnabled}
                />
              </FormGroup>

              <FormGroup className="col-3">
                <Label for="State1">State</Label>
                <Input
                  id="State1"
                  name="OrgState"
                  placeholder="State"
                  type="text"
                  value={isUserInput ? formData.OrgState : OrgState}
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setOrgState(e.target.value)
                  }
                  disabled={!isFormEnabled}
                />
              </FormGroup>
              <FormGroup className="col-3">
                <Label for="PostalCode1">Postal Code</Label>
                <Input
                  id="PostalCode1"
                  name="OrgPostalCode"
                  placeholder="PostalCode"
                  type="text"
                  value={isUserInput ? formData.OrgPostalCode : OrgPostalCode}
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setOrgPostalCode(e.target.value)
                  }
                  disabled={!isFormEnabled}
                />
              </FormGroup>

              <FormGroup className="col-3">
                <Label for="Country1">Country</Label>
                <Input
                  id="Country1"
                  name="OrgCountry"
                  placeholder="Country"
                  type="text"
                  value={isUserInput ? formData.OrgCountry : OrgCountry}
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setOrgCountry(e.target.value)
                  }
                  disabled={!isFormEnabled}
                />
              </FormGroup>
              <FormGroup className="col-3">
                <Label for="Phone1">Phone</Label>
                <Input
                  id="Phone1"
                  name="OrgPhone"
                  placeholder="Phone"
                  type="text"
                  value={isUserInput ? formData.OrgPhone : OrgPhone}
                  //onChange={handleOrgPhoneChange}
                  // onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setOrgPhone(e.target.value)
                  }
                  disabled={!isFormEnabled}
                />
                {/* {OrgPhoneExists && (
                  <p style={{ color: "red" }}>
                    This Phone number already exists in the database.
                  </p>
                )} */}
              </FormGroup>

              {/* <FormGroup className="col-3">
                <Label for="Mobile1">Mobile</Label>
                <Input
                  id="Mobile1"
                  name="OrgMobile"
                  placeholder="Mobile"
                  type="text"
                  value={formData.OrgMobile}
                  onChange={handleInputChange}
                />
              </FormGroup> */}
              <FormGroup className="col-3">
                <Label for="Email1">Email</Label>
                <Input
                  id="Email1"
                  name="OrgEmail"
                  placeholder="Email Address"
                  type="Email"
                  value={isUserInput ? formData.OrgEmail : OrgEmail}
                  //nChange={handleOrgEmailChange}
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setOrgEmail(e.target.value)
                  }
                  disabled={!isFormEnabled}
                />
                {/* {OrgEmail && (
                  <p style={{ color: "red" }}>
                    This Email already exists in the database.
                  </p>
                )} */}
              </FormGroup>
              <FormGroup className="col-3">
                <Label for="Fax1">Fax</Label>
                <Input
                  id="Fax1"
                  name="OrgFax"
                  placeholder="Fax"
                  type="text"
                  value={isUserInput ? formData.OrgFax : OrgFax}
                  // onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setOrgFax(e.target.value)
                  }
                  disabled={!isFormEnabled}
                />
              </FormGroup>
              <FormGroup className="col-3">
                <Label for="Website1">Website</Label>
                <Input
                  id="Website1"
                  name="OrgWebsite"
                  placeholder="Website"
                  type="text"
                  value={isUserInput ? formData.OrgWebsite : OrgWebsite}
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setOrgWebsite(e.target.value)
                  }
                  disabled={!isFormEnabled}
                />
              </FormGroup>
              <FormGroup className="col-3">
                <Label for="LinkedIn1">LinkedIn</Label>
                <Input
                  id="LinkedIn1"
                  name="OrgLinkedIn"
                  placeholder="LinkedIn"
                  type="text"
                  value={isUserInput ? formData.OrgLinkedIn : OrgLinkedIn}
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setOrgLinkedIn(e.target.value)
                  }
                  disabled={!isFormEnabled}
                />
              </FormGroup>

              <FormGroup className="col-3">
                <Label for="BusinessPartner">Business Partner</Label>
                <div className="displayflex">
                  <div className="mr-2">
                    <Input
                      name="BusinessPartner"
                      type="radio"
                      value="yes"
                      checked={
                        isUserInput
                          ? formData.BusinessPartner === "yes"
                          : BusinessPartner === "yes"
                      }
                      onChange={handleBusinessPartnerChange}
                      disabled={!isFormEnabled}
                    />
                    <Label> yes</Label>
                  </div>

                  <div>
                    <Input
                      name="BusinessPartner"
                      type="radio"
                      value="no"
                      checked={
                        isUserInput
                          ? formData.BusinessPartner === "no"
                          : BusinessPartner === "no"
                      }
                      onChange={handleBusinessPartnerChange}
                      disabled={!isFormEnabled}
                    />
                    <Label> No</Label>
                  </div>
                </div>
              </FormGroup>

              {/* <FormGroup className="col-3">
                <Label for="AccountManager">Account Manager</Label>
                <Input
                  id="AccountManager"
                  className="formaccount"
                  name="AccountManager"
                  placeholder="Account Manager"
                  type="text"
                  value={formData.AccountManager}
                  onChange={handleInputChange}
                />
                <div className="bi bi-plus-circle-fill me-2 addmore"> </div>
              </FormGroup> */}

              <FormGroup className="col-3">
                <Label for="Sector">Sector</Label>
                <div className="displayflex">
                  <div className="mr-2">
                    <Input
                      name="Sector"
                      type="radio"
                      value="Public"
                      checked={
                        isUserInput
                          ? formData.Sector === "Public"
                          : Sector === "Public"
                      }
                      onChange={handleSector}
                      //onChange={handleInputChangeforOrg}
                      disabled={!isFormEnabled}
                    />
                    <Label>Public</Label>
                  </div>

                  <div>
                    <Input
                      name="Sector"
                      type="radio"
                      value="Private"
                      checked={
                        isUserInput
                          ? formData.Sector === "Private"
                          : Sector === "Private"
                      }
                      onChange={handleSector}
                      //onChange={handleInputChangeforOrg}
                      disabled={!isFormEnabled}
                    />
                    <Label>Private</Label>
                  </div>
                </div>
              </FormGroup>

              <FormGroup className="col-3">
                <Label for="Industry">Industry</Label>
                <Input
                  id="Industry"
                  name="Industry"
                  type="select"
                  value={isUserInput ? formData.Industry : Industry}
                  //onChange={handleInputChange}
                  onChange={(e) =>
                    isUserInput
                      ? handleInputChange(e)
                      : setIndustry(e.target.value)
                  }
                  disabled={!isFormEnabled}
                >
                  <option>--Select--</option>
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
              <FormGroup className="col-9"></FormGroup>

              {/* {formGroups.map((group) => (
                <div key={group.id} className="col-5 row subgroupaccount">
                  <FormGroup className="col">
                    <Label for={`field-${group.id}`}>Account Manager</Label>
                    <Input
                      id={`field-${group.id}`}
                      className="formaccount inputaccount"
                      name={`field-${group.id}`}
                      placeholder="Account Manager"
                      type="text"
                      value={group.value}
                      onChange={(e) => handleChange(group.id, e.target.value)}
                    />
                  </FormGroup>

                  
                    <FormGroup className="col">
                      <Label for={`field-${group.id}`}>Vertical</Label>
                      <Input
                        id={`field-${group.id}`}
                        name={`field-${group.id}`}
                        placeholder="Vertical"
                        type="text"
                        value={group.value}
                        onChange={(e) =>
                          handleChange3(group.id, e.target.value)
                        }
                      />
                    </FormGroup>
        
                  {formGroups.length > 1 ? (
                    <i
                      className="bi bi-backspace-fill redclose"
                      onClick={() => removeFormGroup(group.id)}
                    ></i>
                  ) : null}
                </div>
              ))}

              <div className="addbtndetails">
                <div
                  className="bi bi-plus-circle-fill me-2 addmore"
                  onClick={addFormGroup}
                ></div>
              </div> */}

              {formGroups.map((group) => (
                <div key={group.id} className="col-5 row subgroupaccount">
                  <FormGroup className="col">
                    <Label for={`field-${group.id}`}>Account Manager</Label>
                    <Input
                      id={`field-${group.id}`}
                      className="formaccount inputaccount"
                      name={`field-${group.id}`}
                      placeholder="Account Manager"
                      type="text"
                      value={group.accountManager}
                      onChange={(e) => handleChange(group.id, e.target.value)}
                      disabled={!isFormEnabled}
                    />
                  </FormGroup>

                  <FormGroup className="col">
                    <Label for={`field-${group.id}`}>Vertical</Label>
                    <Input
                      id={`field-${group.id}`}
                      name={`field-${group.id}`}
                      placeholder="Vertical"
                      type="text"
                      value={group.vertical}
                      onChange={(e) => handleChange3(group.id, e.target.value)}
                      disabled={!isFormEnabled}
                    />
                  </FormGroup>

                  {formGroups.length > 1 ? (
                    <i
                      className="bi bi-backspace-fill redclose"
                      onClick={() => removeFormGroup(group.id)}
                    ></i>
                  ) : null}
                </div>
              ))}

              <div className="addbtndetails">
                <div
                  className="bi bi-plus-circle-fill me-2 addmore"
                  onClick={addFormGroup}
                ></div>
              </div>
            </CardBody>
          </Card>
          <div>
            <Button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary mr-2"
            >
              Submit
            </Button>
            <Button type="button" onClick={handleCancel}>Cancel</Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default UpdateForms;
