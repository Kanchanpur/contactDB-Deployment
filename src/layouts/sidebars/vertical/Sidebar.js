import { Button, Nav, NavItem } from "reactstrap";
import Logo from "../../logo/Logo";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  {
    title: "Dashboard",
    href: "/",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Add Contact",
    href: "/ui/forms",
    icon: "bi bi-person-fill",
  },
  {
    title: "Update Contact",
    href: "/ui/updateForm",
    icon: "bi bi-pencil-fill",
    
  },
  {
    title: "Contact Details",
    href: "/ui/badges",
    icon: "bi bi-person-check",
  },
  {
    title: "Information Report",
    href: "/ui/tables",
    icon: "bi bi-filter-square",
  },
  {
    title: "Events",
    href: "/",
    icon: "bi bi-calendar3",
  },
  {
    title: "Search",
    href: "/ui/searchTable",
    icon: "bi bi-search",
  },
  
];

const Sidebar = ({ showMobilemenu }) => {
  let curl = useRouter();
  const location = curl.pathname;

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        {/* <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={showMobilemenu}
        ></Button> */}
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link href={navi.href}>
                <a
                  className={
                    location === navi.href
                      ? "text-primary nav-link py-3"
                      : "nav-link text-secondary py-3"
                  }
                >
                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block">{navi.title}</span>
                </a>
              </Link>
            </NavItem>
          ))}
         
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
