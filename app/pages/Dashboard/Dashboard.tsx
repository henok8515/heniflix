"use client";
import React from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { Button, Divider, TextField, Typography } from "@mui/material";

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  let name = [1, 2, 3];

  return (
    <div className="h-screen">
      {/* <SideBar toggleDrawer={toggleDrawer} open={open} /> */}
      <Header toggleDrawer={toggleDrawer} />

      <div className="flex h-full   w-full  ">
        <div className=" w-[300px] shadow-lg  bg-white">sidebar</div>
        <div className="flex flex-col bg-white h-screen shadow-lg  m-2  w-2/3">
          <div className="flex  items-center">
            <TextField
              style={{
                width: "80%",
              }}
              id="outlined-search"
              label="Search field"
              type="search"
            />
            <div className="flex   justify-around mb-2 ml-5 items-center w-1/3">
              <Typography>Export</Typography>
              <Typography>Export</Typography>
              <Button>Add Filter</Button>
            </div>
          </div>
          <Divider />
          <div className="flex m-4 ">
            {name.map((name) => (
              <Card key={name} />
            ))}
          </div>
        </div>
      </div>

      <Divider />
    </div>
  );
};

export default Dashboard;
