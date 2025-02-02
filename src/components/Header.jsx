/* eslint-disable react/prop-types */
import {
  AppBar,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  NotificationsOutlined,
  PersonOutline,
  Search,
  MenuOpen,
  Menu,
} from "@mui/icons-material";
import { useState } from "react";

export function Header({ isOpen, setIsOpen }) {
  return (
    <AppBar
      //   position="static"
      className=" shadow-none border-b border-gray-200 bg-black"
    >
      <Toolbar className="justify-between bg-black">
        {/* <Typography variant="h6" className="text-gray-900">
          Dashboard
        </Typography> */}
        <Box className="flex items-center justify-between p-2">
          <IconButton onClick={() => setIsOpen(!isOpen)} className="ml-auto">
            {isOpen ? (
              <MenuOpen className="text-white" />
            ) : (
              <Menu className="text-white" />
            )}
          </IconButton>
          <Typography
            variant="h5"
            sx={{
              color: "#00E676",
              textShadow: "0 0 2px #00E676, 0 0 20px #00E676, 0 0 40px #00E676",
              fontStyle: "italic",
            }}
            className={`font-bold whitespace-nowrap pl-4`}
          >
            Streamify
          </Typography>
        </Box>

        <Box className="flex items-center gap-4">
          <Box className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <InputBase
              placeholder="Search..."
              className="pl-10 pr-4 py-2 bg-gray-50 rounded-lg w-64"
            />
          </Box>

          <IconButton>
            <NotificationsOutlined className="text-white" />
          </IconButton>

          <IconButton>
            <PersonOutline className="text-white" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
