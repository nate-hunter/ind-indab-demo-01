import { Switch, Route } from "react-router-dom";

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Home from './pages/home';
import Login from './pages/login';
import AssetMgmt from "./pages/assetMgmt";
import BillingProcessing from "./pages/billingProcessing";
import PartnerResources from "./pages/partnerResources";
import Loading from "./pages/loading";

const appStyle = {
  container: {
    display: 'flex',
    // marginTop: '15px',
  }
}

function App() {
  return (
    <>
      <Topbar />
      <div style={appStyle.container}>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/account/login" component={Login} />
          <Route path="/assetMgmt" component={AssetMgmt} />
          <Route path="/billing" component={BillingProcessing} />
          <Route path="/partnerResources" component={PartnerResources} />
          <Route path="/loading" component={Loading} />
        </Switch>
      </div>
    </>
  );
}

export default App;
