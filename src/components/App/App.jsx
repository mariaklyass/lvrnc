import React from "react";

import "../../../css/style.css";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import TourPage from "../Tour/TourPage";
import PastTour from "../Tour/PastTour";
import Tracks from "../Tracks/Tracks";
import Lyrics from "../Tracks/Lyrics";
import Albums from "../Tracks/Albums";
import Video from "../Tracks/Video";
import Crew from "../About/Crew";
import News from "../News/News";
import Merch from "../Shop/Merch";
import Contact from "../About/Contact";

const App = () => (
  <div className="app">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tour" element={<TourPage />} />
        <Route path="/tour:prev" element={<PastTour />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/tracks:lyrics" element={<Lyrics />} />
        <Route path="/tracks:albums" element={<Albums />} />
        <Route path="/tracks:video" element={<Video />} />
        <Route path="/about" element={<Crew />} />
        <Route path="/news" element={<News />} />
        {/* <Route path="/news:id" element={<NewsArticle/>}/> */}
        <Route path="/shop" element={<Merch />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </div>
);
export default App;
