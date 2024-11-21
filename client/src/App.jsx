import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./Pages/Protected/Home";
import Search from "./Pages/Protected/Search";
import Error from "./Pages/Error";
import Register from "./Pages/Register";
import Protectedlayout from "./Pages/Protected/Protectedlayout";
import { Box } from "@mui/material";
import Profilelayout from "./Pages/Protected/Profile/Profilelayout";
import Threads from "./Pages/Protected/Profile/Threads";
import Replies from "./Pages/Protected/Profile/Replies";
import Repost from "./Pages/Protected/Profile/Repost";
const App = () => {
  const [headerStatus, setHeaderStatus] = useState("visible");
  return (
    <>
      <Box minHeight={"100vh"}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Protectedlayout />}>
              <Route exact path="" element={<Home />} />
              <Route exact path="post/:id" element={<h1>This is a post</h1>} />
              <Route exact path="search" element={<Search />} />
              <Route exact path="profile" element={<Profilelayout />}>
                <Route exact path="threads/:id" element={<Threads />} />
                <Route exact path="replies/:id" element={<Replies />} />
                <Route exact path="repost/:id" element={<Repost />} />
              </Route>
            </Route>

            <Route
              exact
              path="*"
              element={<Error setHeaderStatus={setHeaderStatus} />}
            />
          </Routes>
        </BrowserRouter>
      </Box>
    </>
  );
};

export default App;
