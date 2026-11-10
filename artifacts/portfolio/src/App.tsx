import { Switch, Route, Router as WouterRouter } from "wouter";
import Home from "./pages/Home";
import CV from "./pages/CV";

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/cv" component={CV} />
        <Route component={Home} />
      </Switch>
    </WouterRouter>
  );
}

export default App;
