import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
// Routes
import AuthRoutes from "./components/auth/AuthRoutes";
import videoRoutes from "./components/video/VideoRoutes";
import userRoutes from "./components/user/UserRoutes";
// -- Redux --
import { Provider } from "react-redux";
import store from "./store";

// localstorage
import { initUserTheme } from "./utils/localStorage";

import NotFound from "./NotFound";
import "./components/css/bootstrap.css";

import UserModal from "./components/ModalBody/UserModal";
import NotificationModal from "./components/ModalBody/NotificationModal";
import Alert from "./utils/Alert";

function App() {
  React.useEffect(() => {
    initUserTheme();
  }, []);

  // React-H1 #7 => Don't include routes through components, Switch needs the Routes direcly as its Child

  // However when i use this same route **/user/:userId/videos/edit/:section** from the **UserRoutes** component the routes in **VideoRoutes** don't work & i can't see anything on the screen

  const routeRenderer = (route, i) => {
    return route["exact"] ? (
      <Route key={i} exact path={route.path} component={route.component}>
        {/* <route.component /> */}
      </Route>
    ) : (
      <Route key={i} path={route.path} component={route.component}>
        {/* <route.component /> */}
      </Route>
    );
  };

  return (
    <Provider store={store}>
      <div className="App loader">
        <Router>
          <React.Suspense fallback={<></>}>
            <Switch>
              {/* Keep the order of routes same */}
              {/* <Route exact path="/" component={VideoHome}></Route> */}
              {/* Temporary */}
              <Redirect exact from="/" to="/videos" />

              {/* <Route
                exact
                path="/user/:userId/videos/edit/:section"
                render={(props) => <VideoChannels {...props} />}
              /> */}
              {/* <UserRoutes /> */}

              {videoRoutes.map(routeRenderer)}
              {userRoutes.map(routeRenderer)}

              {/* <Route
                exact
                path="/video/upload"
                component={(props) => <Upload {...props} />}
              />
              <Route
                exact
                path="/video/:videoId"
                component={(props) => <Single {...props} />}
              />
              <Route
                exact
                path="/video/playlist/:playlistId"
                render={(props) => <Playlist {...props} />}
              /> */}
              <AuthRoutes />

              <Route component={NotFound} />
            </Switch>
          </React.Suspense>
          <UserModal />
          <NotificationModal />
        </Router>
        {/* Don't lazy-load this modal as a function chks for a particular element in the modal */}
      </div>
    </Provider>
  );
}

export default App;
