import { AccountCircle } from "@mui/icons-material";
import { Button, Dialog, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const UserProfile = () => {
  const [open, setOpen] = useState(false);

  const handleSignout = () => {
    // Add signout logic here
    setOpen(false);
  };

  return (
    <div className="">
      <IconButton onClick={() => setOpen(true)}>
        <AccountCircle />
      </IconButton>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Typography variant="h6">User Profile</Typography>
        <Link href="/Login">
          <Button onClick={handleSignout}>Sign Out</Button>
        </Link>
      </Dialog>
    </div>
  );
};

export default UserProfile;
