// The Site Footer

import { Link as RouterLink } from 'react-router-dom';

export default function Footer() {

  return (
    <footer className="footer">
      <p className="headerText">
        Copyright ©{" "}
        <RouterLink to={"/"}>
          <span className="font-logo">WedLoc</span>
        </RouterLink>{" "}
        2023
      </p>
    </footer>
  );
}
