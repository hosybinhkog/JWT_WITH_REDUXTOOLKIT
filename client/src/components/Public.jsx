import React from "react";
import { Link } from "react-router-dom";

const Public = () => {
  return (
    <section className="public">
      <header>
        <h1>Welcome to Repair Store!</h1>
      </header>
      <main>
        <p>Located in Beutiful Downtown Foo City, Repair Store provider</p>
        <p>&nbsp;</p>
        <address>
          Repair Store <br />
          555 Foo Drive <br />
          Foo City, CA 999999 <br />
          <a href="tal:+15555555555">(555) 55555555</a>
        </address>
      </main>
      <footer>
        <Link to="/login">Emloyee Login</Link>
      </footer>
    </section>
  );
};

export default Public;
