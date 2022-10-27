import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "../../pages/AboutPage";
import PostPage from "../PostPage";
import GithubStateLayout from "../shared/GithubStateLayout";


import FeedbackHandle from "../FeedbackHandle";
import React from "react";

function RoutePages() {
  return (
    <Router>
      <Routes>
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/post/:author/:position" element={<PostPage />} />
        <Route exact path="/" element={<FeedbackHandle />} />
      </Routes>
    </Router>
  );
}

export default RoutePages;
