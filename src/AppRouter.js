import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./components/utilities/NavBar";
import Home from "./components/pages/Home";
import Calculator from "./components/pages/Calculator";
import Blog from "./components/pages/Blog";
// import Events from "./components/pages/Events";
import About from "./components/pages/About";
import Budget from "./components/pages/subCalculators/budgetCalc/BudgetMain";
import Networth from "./components/pages/subCalculators/networthCalc/NetworthMain";
// import Retirement from "./components/pages/subCalculators/retirementCalc/RetirementMain";
// import Tuition from "./components/pages/subCalculators/tuitionOOPCalc/TuitionMain";
import Goals from "./components/pages/subCalculators/goalCalc/GoalMain";
import SingleBlogItem from "./components/pages/libraryBlog/SingleBlogItem";
import ContactUs from "./components/pages/ContactUs";
import PageNotFound from "./components/pages/PageNotFound";

const AppRouter = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/calculator" component={Calculator} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={ContactUs} />
      <Route exact path="/budget" component={Budget} />
      <Route exact path="/networth" component={Networth} />
      <Route exact path="/goals" component={Goals} />
      {/* <Route exact path="/tuition" component={Tuition} />
    <Route exact path="/401k" component={Retirement} /> */}
      <Route exact path="/article/:postId" component={SingleBlogItem} />
      {/* <Route exact path="/events" component={Events} /> */}
      <Route path="*" exact={true} component={PageNotFound} />
    </Switch>
  </div>
);

export default AppRouter;
