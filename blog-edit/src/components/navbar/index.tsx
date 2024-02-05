import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";

export function NavBarComponent({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar className="mb-5" color="dark" dark>
        <NavbarBrand
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          Blog EDIT
        </NavbarBrand>
      </Navbar>
      {children}
    </div>
  );
}
