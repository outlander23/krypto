import "./index.css";

import { Footer, Navbar, Service, Transactions, Welcome } from "./components";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Service />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
