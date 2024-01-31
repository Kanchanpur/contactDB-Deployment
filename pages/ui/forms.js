import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

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
//declaring global varible for ticket 
let OTCSTicket1 = "";

  // Function to get the current date in MM/DD/YYYY format
  const getCurrentDate = () => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const year = today.getFullYear();

    return `${month}/${day}/${year}`;
  };


const Forms = () => {
  //submit handler code for Contact Details
  const [formData, setFormData] = useState({
    ContactName: "",
    ProductName: [""],
    ContactDesignation: "",
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
    CreatedOn: getCurrentDate(),
    ModifiedBy: "",
    ModifiedOn: "",
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
    OrgModBy: "",
    OrgModOn: "",
    AccountManager: [],
    Vertical: [],
    Lead: "",
    IntroducedBy: [],
    RelationshipStatus: [],
    DiscoveredThrough: "",
    OtherValue: "",
    StatusFlag: "1",
    Comment: "",
    FactCrtBy: "",
    FactCrtOn: "",
    FactModBy: "",
    FactModOn: "",
    DecisionMaker: "",
  });

  //define router
  const router = useRouter();

  //Update contact form
  const [isFormEnabled, setIsFormEnabled] = useState(true);
  //dynamically generating product dropdown

  const [isFormValid, setIsFormValid] = useState(false);

  const [ProductOptions, setProductOptions] = useState([]);

  //state declaration for suggetions in contact details

  const [suggestions, setSuggestions] = useState([]);

  //state declaration for org suggestions
  const [suggestions1, setSuggestions1] = useState([]);

  //CreatedOn field fetching dynamically

  const [contactNameDisabled, setContactNameDisabled] = useState(false);

  const [orgNameDisabled, setOrgNameDisabled] = useState(false);

  //const [isValidEmail,setValidEmail]=useState(true);

  const [isIntroducedByFilled, setIsIntroducedByFilled] = useState(false);

  // const getCurrentDate = () => {
  //   const currentDate = new Date();
  //   const formattedDate = `${currentDate.getDate()}-${
  //     currentDate.getMonth() + 1
  //   }-${currentDate.getFullYear()}`;
  //   return formattedDate;
  // };

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
  
  // api for product dropdow

  useEffect(() => {
    // setFormData({
    //   ...formData,
    //   CreatedOn: getCurrentDate(),
    // });
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

    if (name === "DiscoveredThrough") {
      // Check if the selected option is "Other"
      if (value === "Other") {
        setFormData({
          ...formData,
          [name]: value,
          OtherValue: "", // Clear OtherValue when "Other" is selected
        });
      } else {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else if (name === "OtherValue") {
      setFormData({
        ...formData,
        DiscoveredThrough: "Other",
        OtherValue: value,
      });
    }
  };
 
   
   //state declaration for submit validation 

   const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleInputChangeforContact = (e) => {
    const { name, value } = e.target;
  
    // Validate Contact Name
    const isContactNameValid = isFormSubmitted || value.trim().length >= 3;
  
    setFormData({
      ...formData,
      [name]: value,
    });
  
    // Disable the submit button if Contact Name is not valid
    setIsFormValid(isContactNameValid);
  
    // API call for suggestions in contact name
    const suggetionDropdown = async () => {
      await auth();
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
          const fetchedSuggestions = data4;
          console.log(fetchedSuggestions);
          const userExists = data4.exists;
  
          setSuggestions(fetchedSuggestions);
  
          if (userExists) {
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
    } = selectedSuggestion;

    // Convert the JoinDate to DD-MM-YYYY format
    const joinDateObject = new Date(JoinDate);
    console.log(joinDateObject);
    const formattedJoinDate = joinDateObject.toLocaleDateString("en-GB");
    const formattedJoinDate1 = formattedJoinDate.split("/").join("-");
    console.log(formattedJoinDate1);

    // const confirmation = window.confirm(`Do you mean ${ContactName}?`);
    // const confirmation = window.confirm(
    //   `Do you mean ${selectedSuggestion.ContactName}?`
    // );
         window.alert(`${selectedSuggestion.ContactName}`+" is aleardy Exist !!" );
  //   if (confirmation) {
  //     setFormData({
  //       ...formData,
  //       ContactName: selectedSuggestion.ContactName || "",
  //       ContactDesignation,
  //       Department,
  //       Address,
  //       City,
  //       State,
  //       PostalCode,
  //       Country,
  //       Phone,
  //       Mobile,
  //       Email,
  //       //PreviousOrgName,
  //       LinkedIn,
  //       JoinDate: formattedJoinDate1,
  //       ReportingManager,
  //       Fax,
  //       Lead,
  //       Influential,
  //       CreatedBy,
  //       OrgName,
  //       ProductName,
  //       OrgDesc,
  //       Size,
  //       OrgAddress,
  //       OrgCity,
  //       OrgState,
  //       OrgPostalCode,
  //       OrgCountry,
  //       OrgPhone,
  //       OrgEmail,
  //       OrgFax,
  //       OrgLinkedIn,
  //       OrgWebsite,
  //       BusinessPartner,
  //       Sector,
  //       Industry,
  //       PreviousOrganisationName,
  //       DecisionMaker,
  //       IntroducedBy,
  //       RelationshipStatus,
  //       DiscoveredThrough,
  //     });

  //     // Navigate to updateForm with ContactName as a query parameter
  //     router.push({
  //       pathname: "updateForm",
  //       query: { contactName: selectedSuggestion.ContactName },
  //     });

  //     setIsUserInput(true);
  //     setContactNameDisabled(true);
  //     setIsFormEnabled(false);

  //     // router.push({
  //     //   pathname: 'updateForm',
  //     //   query: { initialFormData: JSON.stringify(formData) }, // Pass the form data as a query parameter
  //     // });

  //     //router.push('updateForm');
  //   }

  //   setSuggestions([]); // Clear suggestions after selection if desired
   };

  //handle suggetion for organisation
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


    // Cleanup function for clearing the timeout
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

  //api validataion for mobile number already exist

  const [mobileNumberExists, setMobileNumberExists] = useState(false);
 
   
  const handleMobileNumberChange = async (event) => {
    const number = event.target.value;
    setFormData({ ...formData, Mobile: number });

    if (number === "") {
      setMobileNumberExists(false);
      return;
    } 
   
  
     

    // Make a GET request to check if the mobile number exists
    try {
      const response = await fetch(
        `http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/1262274?format=webreport&ContactMobile=${number}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            OTCSTicket: OTCSTicket1.ticket,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        //setMobileNumberExists(true);
        if (data.Exist === "NotExists.") {
          setMobileNumberExists(false);
        } else {
          setMobileNumberExists(true);
        }
      } else {
        // Handle errors, if any
        console.error("Error checking mobile number existence");
      }
    } catch (error) {
      // Handle network errors
      console.error("Network error:", error);
    }
  };

  //vaidation checks for email

  const [EmailExists, setEmailExists] = useState(false);

  const handleEmailChange = async (event) => {
    const email = event.target.value;
    setFormData({ ...formData, Email: email });

    if (email === "") {
      setEmailExists(false);
      return;
    } 

     
 

    // Make a GET request to check if the mobile number exists
    try {
      const response = await fetch(
        `http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/1261620?format=webreport&ContactEmail=${email}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            OTCSTicket: OTCSTicket1.ticket,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        //setMobileNumberExists(true);
        if (data.Exist === "NotExists.") {
          setEmailExists(false);
        } else {
          setEmailExists(true);
        }
      } else {
        // Handle errors, if any
        console.error("Error checking Email existence");
      }
    } catch (error) {
      // Handle network errors
      console.error("Network error:", error);
    }
  };

  


  //org phone validation

  const [OrgPhoneExists, setOrgPhoneExists] = useState(false);

  const handleOrgPhoneChange = async (event) => {
    const OrgPhone = event.target.value;
    setFormData({ ...formData, OrgPhone: OrgPhone });

    if (OrgPhone === "") {
      setOrgPhoneExists(false);
      return;
    }

    // Make a GET request to check if the mobile number exists
    try {
      const response = await fetch(
        `http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/1261844?format=webreport&OrgPhone=${OrgPhone}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            OTCSTicket: OTCSTicket1.ticket,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        //setMobileNumberExists(true);
        if (data.OrgPhoneStatus === "NotExists.") {
          setOrgPhoneExists(false);
        } else {
          setOrgPhoneExists(true);
        }
      } else {
        // Handle errors, if any
        console.error("Error checking Organisation phone existence");
      }
    } catch (error) {
      // Handle network errors
      console.error("Network error:", error);
    }
  };

  //org organisation  email validation

  const [OrgEmail, setOrgEmailExists] = useState(false);

  const handleOrgEmailChange = async (event) => {
    const OrgEmail = event.target.value;
    setFormData({ ...formData, OrgEmail: OrgEmail });

    if (OrgEmail === "") {
      setOrgEmailExists(false);
      return;
    }

    // Make a GET request to check if the mobile number exists
    try {
      const response = await fetch(
        `http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/1269324?format=webreport&OrgEmail=${OrgEmail}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            OTCSTicket: OTCSTicket1.ticket,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        //setMobileNumberExists(true);
        if (data.OrgEmailStatus === "NotExists.") {
          setOrgEmailExists(false);
        } else {
          setOrgEmailExists(true);
        }
      } else {
        // Handle errors, if any
        console.error("Error checking Organisation Email existence");
      }
    } catch (error) {
      // Handle network errors
      console.error("Network error:", error);
    }
  };

  //
  const insertContact = async () => {
    try {
      const paramKey = formData;
      const paramKey2 = JSON.stringify(paramKey);
      console.log(paramKey2);
      const paramKey1 = "webreport";
      //console.log(formdataArr);
      const response = await fetch(
        `http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/1252362?Format=${paramKey1}&requestJSON=${paramKey2}`,
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
        console.log("Data inserted successfully", responseData);
      } else {
        // Handle authentication error here
        console.error("Data insertion failed");
      }
    } catch (error) {
      // Handle network errors or other exceptions here

      console.error("Error occurred while insertation:", error);
    }
  };  


  const handleSubmit = async (e) => {
    e.preventDefault();
     
   
      
      insertContact();

  // Check if either email or mobile field is non-empty
  if (formData.Email.trim() === '' && formData.Mobile.trim() === '') {
    // Display an error message or handle the situation as needed
    window.alert('Please fill in either email or mobile number field.');
    return;
  }
    //insertformData();
    showSuccessAlert();

    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  //
  const handleCancel = () => {
    const emptyFormData = Object.fromEntries(
      Object.keys(formData).map((key) => [key, ""])
    );

    //setformData(emptyformData);

    setContactNameDisabled(false);
    setOrgNameDisabled(false);
    setIsFormEnabled(true);
    setFormData(emptyFormData);
    handleCancelClick();
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  //account manager

  // const [formGroups, setFormGroups] = useState([
  //   { id: 1, label: "Account Manager", value: "" },
  // ]);

  // const addFormGroup = () => {
  //   const newId = formGroups.length + 1;
  //   setFormGroups([
  //     ...formGroups,
  //     {
  //       id: newId,
  //       label: `Account Manager`,
  //       value: formData.AccountManager[newId - 1] || "",
  //     },
  //   ]);
  // };

  // const removeFormGroup = (id) => {
  //   setFormGroups((prevGroups) =>
  //     prevGroups.filter((group) => group.id !== id)
  //   );
  // };

  // const handleChange = (id, value) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     AccountManager: [
  //       ...prevData.AccountManager.slice(0, id - 1),
  //       value,
  //       ...prevData.AccountManager.slice(id),
  //     ],
  //   }));

  //   setFormGroups((prevGroups) =>
  //     prevGroups.map((group) => (group.id === id ? { ...group, value } : group))
  //   );
  // };

  // //vertical
  // const [formGroups3, setFormGroups3] = useState([
  //   { id: 1, label: "Vertical", value: "" },
  // ]);

  // const addFormGroup3 = () => {
  //   const newId = formGroups3.length + 1;
  //   setFormGroups3([
  //     ...formGroups3,
  //     {
  //       id: newId,
  //       label: `Vertical`,
  //       value: formData.Vertical[newId - 1] || "",
  //     },
  //   ]);
  // };

  // const removeFormGroup3 = (id) => {
  //   setFormGroups3((prevGroups) =>
  //     prevGroups.filter((group) => group.id !== id)
  //   );
  // };

  // const handleChange3 = (id, value) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     Vertical: [
  //       ...prevData.Vertical.slice(0, id - 1),
  //       value,
  //       ...prevData.Vertical.slice(id),
  //     ],
  //   }));

  //   setFormGroups3((prevGroups) =>
  //     prevGroups.map((group) => (group.id === id ? { ...group, value } : group))
  //   );
  // };

  {
    /*updated code for formgroup  */
  }

  // const [formGroups, setFormGroups] = useState([
  //   // Initialize with an empty form group
  //   { id: 1, accountManager: "", vertical: "" },
  // ]);

  // const handleChange = (id, value) => {
  //   // Update the state for the specified form group
  //   setFormGroups((prevGroups) =>
  //     prevGroups.map((group) =>
  //       group.id === id ? { ...group, accountManager: value } : group
  //     )
  //   ); // Update the formData state
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     AccountManager: formGroups.map((group) => group.accountManager),
  //   }));
  // };

  // const handleChange3 = (id, value) => {
  //   // Update the state for the specified form group
  //   setFormGroups((prevGroups) =>
  //     prevGroups.map((group) =>
  //       group.id === id ? { ...group, vertical: value } : group
  //     )
  //   );
  //   // Update the formData state
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     Vertical: formGroups.map((group) => group.vertical),
  //   }));
  // };

  // const removeFormGroup = (id) => {
  //   // Remove the specified form group
  //   setFormGroups((prevGroups) =>
  //     prevGroups.filter((group) => group.id !== id)
  //   );
  // };

  // const addFormGroup = () => {
  //   // Add a new form group with empty values
  //   setFormGroups((prevGroups) => [
  //     ...prevGroups,
  //     { id: prevGroups.length + 1, accountManager: "", vertical: "" },
  //   ]);
  // }; 


  const [formGroups, setFormGroups] = useState([
    { id: 1, accountManager: "", vertical: "" },
  ]);
  
  const handleChange = (id, value) => {
    setFormGroups((prevGroups) =>
      prevGroups.map((group) =>
        group.id === id ? { ...group, accountManager: value } : group
      )
    );
    setFormData((prevData) => ({
      ...prevData,
      AccountManager: formGroups.map((group) => (group.accountManager ? group.accountManager : "")),
    }));
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
   setFormGroups((prevGroups) => prevGroups.filter((group) => group.id !== id));
  };
  
  const addFormGroup = () => {

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
   setFormGroupsI((prevGroups) => prevGroups.filter((group) => group.id !== id));
  };
  
  const addFormGroupI = () => {

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
    // Extract values from selected options array
    const selectedValues = Array.from(
      selectedOptions,
      (option) => option.value
    );
     
       // Set the value to [""] if no option is selected
  //const updatedValue = selectedValues.length > 0 ? selectedValues : [""];  

    setFormData((prevData) => ({
      ...prevData,
      [id]: selectedValues,
    }));
  };

  // const addFormGroup2 = () => {
  //   const newId = formGroups1.length + 1;
  //   setFormGroups1([
  //     ...formGroups1,
  //     {
  //       id: newId,
  //       label: `Product`,
  //       value: formData.ProductName[newId - 1] || "",
  //     },
  //   ]);
  // };

  // const removeFormGroup1 = (id) => {
  //   setFormGroups1((prevGroups) =>
  //     prevGroups.filter((group) => group.id !== id)
  //   );
  // };

  // const handleChangeTemp = (id, value) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     ProductName: [
  //       ...prevData.ProductName.slice(0, id - 1),
  //       value,
  //       ...prevData.ProductName.slice(id),
  //     ],
  //   }));

  //   setFormGroups1((prevGroups) =>
  //     prevGroups.map((group) => (group.id === id ? { ...group, value } : group))
  //   );
  // };

  return (
    <Row>
      <h5 className="mb-3">New Contact <i className="bi bi-person-plus-fill p-2"> </i></h5> 
    <div className="form-container">
      <label for="formFileSm"> OR : Add Excel:</label>
      <input className="form-control form-control-sm" id="formFileSm" type="file" accept=".xlsx, .xls" />
    </div>
      <Col>
        <Form className="row" onSubmit={handleSubmit}>
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-person me-2"> </i>
              Personal Details
            </CardTitle>
            <CardBody className="row">
          

              <FormGroup className="col-3">
                <Label for="ContactName">Contact Name</Label>
                <Input
                  id="ContactName"
                  name="ContactName"
                  placeholder="Contact Name"
                  type="text"
                  value={formData.ContactName}
                  onChange={handleInputChangeforContact}
                  disabled={contactNameDisabled}
                />
                {formData.ContactName.trim().length >= 3 &&
                  suggestions.length > 0 && (
                    <div>
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
              </FormGroup> 




              <FormGroup className="col-3">
                <Label for="OrginisationName">Orginisation Name</Label>
                <Input
                  id="OrginisationName"
                  name="OrgName"
                  placeholder="Orginisation Name"
                  type="text"
                  value={formData.OrgName}
                  onChange={handleInputChangeforOrg}
                  disabled={formData.OrgName && isUserInput}
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
                  value={formData.ContactDesignation}
                  onChange={handleInputChange}
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
                  value={formData.Department}
                  onChange={handleInputChange}
                  //disabled={formData.Department && !isUserInput}
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
                  value={formData.City}
                  onChange={handleInputChange}
                  //disabled={formData.City && !isUserInput}
                />
              </FormGroup>

              <FormGroup className="col-3">
                <Label for="State">State</Label>
                <Input
                  id="State"
                  name="State"
                  placeholder="State"
                  type="text"
                  value={formData.State}
                  onChange={handleInputChange}
                  //disabled={formData.State && !isUserInput}
                />
              </FormGroup>
              <FormGroup className="col-3">
                <Label for="PostalCode">Postal Code</Label>
                <Input
                  id="PostalCode"
                  name="PostalCode"
                  placeholder="PostalCode"
                  type="text"
                  value={formData.PostalCode}
                  onChange={handleInputChange}
                  //disabled={formData.PostalCode && !isUserInput}
                />
              </FormGroup>

              <FormGroup className="col-3">
                <Label for="Country">Country</Label>
                <Input
                  id="Country"
                  name="Country"
                  placeholder="Country"
                  type="text"
                  value={formData.Country}
                  onChange={handleInputChange}
                  //disabled={formData.Country && !isUserInput}
                />
              </FormGroup>
              <FormGroup className="col-3">
                <Label for="Phone">Phone</Label>
                <Input
                  id="Phone"
                  name="Phone"
                  placeholder="Phone"
                  type="text"
                  value={formData.Phone}
                  onChange={handleInputChange}
                  // disabled={formData.Phone && !isUserInput}
                />
              </FormGroup>

              <FormGroup className="col-3">
                <Label for="Mobile">Mobile</Label>
                <Input
                  id="Mobile"
                  name="Mobile"
                  placeholder="Mobile"
                  type="text"
                  value={formData.Mobile}
                  //onChange={handleInputChange}
                  onChange={handleMobileNumberChange}
                  //disabled={formData.Mobile && !isUserInput}
                />

                {mobileNumberExists && (
                  <p style={{ color: "red" }}>
                    This mobile number already exists in the database.
                  </p>
                )}
              </FormGroup>
              <FormGroup className="col-3">
                <Label for="Email">Email</Label>
                <Input
                  id="Email"
                  name="Email"
                  placeholder="Email Address"
                  type="Email"
                  value={formData.Email}
                  onChange={handleEmailChange}
                  //disabled={formData.Email && !isUserInput}
                />
                {EmailExists && (
                  <p style={{ color: "red" }}>
                    This Email already exists in the system.
                  </p>
                )}
              </FormGroup>
              <FormGroup className="col-3">
                <Label for="Fax">Fax</Label>
                <Input
                  id="Fax"
                  name="Fax"
                  placeholder="Fax"
                  type="text"
                  value={formData.Fax}
                  onChange={handleInputChange}
                  //disabled={formData.Fax && !isUserInput}
                />
              </FormGroup>

              <FormGroup className="col-3">
                <Label for="LinkedIn">LinkedIn</Label>
                <Input
                  id="LinkedIn"
                  name="LinkedIn"
                  placeholder="LinkedIn"
                  type="text"
                  value={formData.LinkedIn}
                  onChange={handleInputChange}
                  //disabled={formData.LinkedIn && !isUserInput}
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
                  placeholder="dd-mm-yyyy"
                  type="date"
                  value={formData.JoinDate}
                  onChange={handleInputChange}
                  //disabled={formData.JoinDate && !isUserInput}
                />
              </FormGroup>

              <FormGroup className="col-3">
                <Label for="Influential">Influential</Label>
                <Input
                  id="Influential"
                  name="Influential"
                  type="select"
                  value={formData.Influential}
                  onChange={handleInputChange}
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
                  value={formData.ReportingManager}
                  onChange={handleInputChange}
                  // disabled={formData.ReportingManager && !isUserInput}
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
                  value={formData.PreviousOrganisationName}
                  onChange={handleInputChange}
                  // disabled={formData.PreviousOrganisationName && !isUserInput}
                />
              </FormGroup>

              {/* <FormGroup className="col-3">
                <Label for="Lead">Lead/Opportunity</Label>
                <Input
                  id="Lead"
                  name="Lead"
                  placeholder="Lead"
                  type="text"
                  value={formData.Lead}
                  onChange={handleInputChange}
                />
              </FormGroup> */}

              <FormGroup className="col-3">
                <Label for="DecisionMaker">Decision Maker</Label>
                <Input
                  id="DecisionMaker"
                  name="DecisionMaker"
                  placeholder="Decision Maker"
                  type="select"
                  value={formData.DecisionMaker}
                  onChange={handleInputChange}
                >
                  <option>--Select--</option>
                  <option>Yes</option>
                  <option>No</option>
                </Input>
              </FormGroup>

              
              <FormGroup className="col-3">
                <Label for="DiscoveredThrough">Discovered Through</Label>
                <Input
                  id="DiscoveredThrough"
                  name="DiscoveredThrough"
                  type="select"
                  value={formData.DiscoveredThrough}
                  onChange={handleInputChange}
                >
                  <option>--Select--</option>
                  <option>Event</option>
                  <option>LinkedIn </option>
                  <option>News Papar</option>
                  <option>Business Card</option>
                  <option>Other</option>
                </Input>

                {/* Conditionally render the text input for "Other" */}
                {formData.DiscoveredThrough === "Other" && (
                  <Input
                    className=" other my-2"
                    id="OtherValue"
                    name="OtherValue"
                    type="text"
                    placeholder="Enter other value"
                    value={formData.OtherValue}
                    onChange={handleInputChange}
                  />
                )}
              </FormGroup>

              {/* {formGroups1.map((group) => (
                <FormGroup key={group.id} className="col-3">
                  <Label for={`field-${group.id}`}>{group.label}</Label>
                  <Input
                    id={`field-${group.id}`}
                    className="formaccount inputaccount"
                    name={`field-${group.id}`}
                    placeholder={group.label}
                    type="select"
                    value={group.value}
                    onChange={(e) => handleChange2(group.id, e.target.value)}
                  >
                    <option>--Select--</option>
                    {ProductOptions.map((product) => (
                      <option
                        key={product.ProductID}
                        value={product.ProductName}
                      >
                        {product.ProductName}
                      </option>
                    ))}
                  </Input>
                  {formGroups1.length > 1 ? (
                    <i
                      className="bi bi-x-circle-fill redclose"
                      onClick={() => removeFormGroup1(group.id)}
                    ></i>
                  ) : null}
                </FormGroup>
              ))}
             */}

              {/* updated Product field */}
              {formGroups1.map((group) => (
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
                  value="Admin"
                  onChange={handleInputChange}
                  disabled
                />
              </FormGroup>

              <FormGroup className="col-3">
                <Label for="CreatedOn">Created On</Label>
                <Input
                  id="CreatedOn"
                  name="CreatedOn"
                  placeholder="Created On "
                  type="text"
                  value={formData.CreatedOn}
                  onChange={handleInputChange}
                  disabled
                />
              </FormGroup> 
              

              <FormGroup className="col-3">
                <Label for="Comment">Comments</Label>
                <Input
                  id="Comment"
                  name="Comment"
                  placeholder="Commets"
                  type="textarea"
                  value={formData.Comment}
                  onChange={handleInputChange}
                  //disabled={formData.Comment && !isUserInput}
                />
              </FormGroup>

              {/* <div className="col-5 row subgroupaccount">
                <FormGroup className="col">
                  <Label for="IntroducedBy">Introduced By</Label>
                  <Input
                    id="IntroducedBy"
                    name="IntroducedBy"
                    placeholder="Introduced By"
                    type="text"
                    value={formData.IntroducedBy}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <div className="col">
                  {formData.IntroducedBy.trim() !== "" && (
                    <FormGroup className="col">
                      <Label for="RelationshipStatus">
                        Relationship Status
                      </Label>
                      <Input
                        id="RelationshipStatus"
                        name="RelationshipStatus"
                        type="select"
                        value={formData.RelationshipStatus}
                        onChange={handleInputChange}
                      >
                        <option>--Select--</option>
                        <option>Acquainted</option>
                        <option>Good</option>
                        <option>Excellent</option>
                      </Input>
                    </FormGroup>
                  )}
                </div>
              </div> */} 

               {/* trail code for indroduced by and relationship status */}

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
                  value={formData.OrgName}
                  onChange={handleInputChangeforOrg}
                  disabled={formData.OrgName && isUserInput}
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
                  value={formData.OrgDesc}
                  onChange={handleInputChange}
                  disabled={formData.OrgDesc && isUserInput}
                />
              </FormGroup>

              {/* <FormGroup className="col-3">
                <Label for="EndDate">End Date</Label>
                <Input
                  id="EndDate"
                  name="EndDate"
                  type="date"
                  value={formData.EndDate}
                  onChange={handleInputChange}
                  disabled
                />
              </FormGroup> */}
              <FormGroup className="col-3">
                <Label for="Size">Size</Label>
                <Input
                  id="Size"
                  name="Size"
                  placeholder="Size"
                  type="text"
                  value={formData.Size}
                  onChange={handleInputChange}
                  disabled={formData.Size && isUserInput}
                />
              </FormGroup>

              <FormGroup className="col-3">
                <Label for="Address1">Address</Label>
                <Input
                  id="Address1"
                  name="OrgAddress"
                  placeholder="Address"
                  type="text"
                  value={formData.OrgAddress}
                  onChange={handleInputChange}
                  disabled={formData.OrgAddress && isUserInput}
                />
              </FormGroup>
              <FormGroup className="col-3">
                <Label for="City1">City</Label>
                <Input
                  id="City1"
                  name="OrgCity"
                  placeholder="City"
                  type="text"
                  value={formData.OrgCity}
                  onChange={handleInputChange}
                  disabled={formData.OrgCity && isUserInput}
                />
              </FormGroup>

              <FormGroup className="col-3">
                <Label for="State1">State</Label>
                <Input
                  id="State1"
                  name="OrgState"
                  placeholder="State"
                  type="text"
                  value={formData.OrgState}
                  onChange={handleInputChange}
                  disabled={formData.OrgState && isUserInput}
                />
              </FormGroup>
              <FormGroup className="col-3">
                <Label for="PostalCode1">Postal Code</Label>
                <Input
                  id="PostalCode1"
                  name="OrgPostalCode"
                  placeholder="PostalCode"
                  type="text"
                  value={formData.OrgPostalCode}
                  onChange={handleInputChange}
                  disabled={formData.OrgPostalCode && isUserInput}
                />
              </FormGroup>

              <FormGroup className="col-3">
                <Label for="Country1">Country</Label>
                <Input
                  id="Country1"
                  name="OrgCountry"
                  placeholder="Country"
                  type="text"
                  value={formData.OrgCountry}
                  onChange={handleInputChange}
                  disabled={formData.OrgCountry && isUserInput}
                />
              </FormGroup>
              <FormGroup className="col-3">
                <Label for="Phone1">Phone</Label>
                <Input
                  id="Phone1"
                  name="OrgPhone"
                  placeholder="Phone"
                  type="text"
                  value={formData.OrgPhone}
                  onChange={handleOrgPhoneChange}
                  disabled={formData.OrgPhone && isUserInput}
                />
                {OrgPhoneExists && (
                  <p style={{ color: "red" }}>
                    This Phone number already exists in the database.
                  </p>
                )}
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
                  value={formData.OrgEmail}
                  onChange={handleOrgEmailChange}
                  disabled={formData.OrgEmail && isUserInput}
                />
                {OrgEmail && (
                  <p style={{ color: "red" }}>
                    This Email already exists in the database.
                  </p>
                )}
              </FormGroup>
              <FormGroup className="col-3">
                <Label for="Fax1">Fax</Label>
                <Input
                  id="Fax1"
                  name="OrgFax"
                  placeholder="Fax"
                  type="text"
                  value={formData.OrgFax}
                  onChange={handleInputChange}
                  disabled={formData.OrgFax && isUserInput}
                />
              </FormGroup>
              <FormGroup className="col-3">
                <Label for="Website1">Website</Label>
                <Input
                  id="Website1"
                  name="OrgWebsite"
                  placeholder="Website"
                  type="text"
                  value={formData.OrgWebsite}
                  onChange={handleInputChange}
                  disabled={formData.OrgFax && isUserInput}
                />
              </FormGroup>
              <FormGroup className="col-3">
                <Label for="LinkedIn1">LinkedIn</Label>
                <Input
                  id="LinkedIn1"
                  name="OrgLinkedIn"
                  placeholder="LinkedIn"
                  type="text"
                  value={formData.OrgLinkedIn}
                  onChange={handleInputChange}
                  disabled={formData.OrgLinkedIn && isUserInput}
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
                      checked={formData.BusinessPartner === "yes"}
                      onChange={handleBusinessPartnerChange}
                      disabled={formData.BusinessPartner && isUserInput}
                    />
                    <Label> yes</Label>
                  </div>

                  <div>
                    <Input
                      name="BusinessPartner"
                      type="radio"
                      value="no"
                      checked={formData.BusinessPartner === "no"}
                      onChange={handleBusinessPartnerChange}
                      disabled={formData.BusinessPartner && isUserInput}
                    />
                    <Label> No</Label>
                  </div>
                </div>
              </FormGroup>


              <FormGroup className="col-3">
                <Label for="Sector">Sector</Label>
                <div className="displayflex">
                  <div className="mr-2">
                    <Input
                      name="Sector"
                      type="radio"
                      value="Public"
                      checked={formData.Sector === "Public"}
                      onChange={handleSector}
                      //onChange={handleInputChangeforOrg}
                      disabled={formData.Sector && isUserInput}
                    />
                    <Label>Public</Label>
                  </div>

                  <div>
                    <Input
                      name="Sector"
                      type="radio"
                      value="Private"
                      checked={formData.Sector === "Private"}
                      onChange={handleSector}
                      //onChange={handleInputChangeforOrg}
                      disabled={formData.Sector && isUserInput}
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
                  value={formData.Industry}
                  onChange={handleInputChange}
                  disabled={formData.Industry && isUserInput}
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
              //onClick={handleSubmit}
              className="btn btn-primary mr-2"
              disabled={formData.ContactName.trim().length < 3 || formData.ContactName.trim().length === 0}
            >
              Submit
            </Button>
            <Button type="button" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default Forms;
