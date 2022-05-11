import SimpleBar from "simplebar-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../helpers";
import Main from "../../components/dashboard/profile/Main";
import "simplebar/dist/simplebar.min.css";

function Profile() {
  return (
    <SimpleBar style={{ maxHeight: "100vh" }}>
      <ChakraProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>
          </Switch>
        </Router>
      </ChakraProvider>
    </SimpleBar>
  );
}

export default Profile;
