import {
  Box,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  Analytics,
  AttachMoney,
  Home,
  MusicNote,
  People,
  Settings,
  VideoLibrary,
  MenuOpen,
  Menu,
} from "@mui/icons-material";
import { useState } from "react";

export function Sidebar({ className, isOpen, setIsOpen }) {
  const menuItems = [
    { text: "Overview", icon: <Home />, path: "/" },
    { text: "Analytics", icon: <Analytics />, path: "/analytics" },
    { text: "Revenue", icon: <AttachMoney />, path: "/revenue" },
    { text: "Content", icon: <VideoLibrary />, path: "/content" },
    { text: "Artists", icon: <MusicNote />, path: "/artists" },
    { text: "Streams", icon: <People />, path: "/streams" },
    { text: "Settings", icon: <Settings />, path: "/settings" },
  ];

  return (
    <>
      {isOpen ? (
        <div className="w-64 h-screen" />
      ) : (
        <div className="w-20 h-screen" />
      )}

      <Box
        className={`
        fixed left-0 top-0 h-screen z-20 bg-white border-r border-gray-200 
        transition-all duration-300 ease-in-out
        ${isOpen ? "w-64" : "w-20"} 
        ${className}
      `}
      >
        <Box className="flex items-center justify-between p-6">
          <Typography
            variant="h5"
            className={`font-bold whitespace-nowrap ${!isOpen && "hidden"}`}
          >
            Streamify
          </Typography>
          <IconButton onClick={() => setIsOpen(!isOpen)} className="ml-auto">
            {isOpen ? <MenuOpen /> : <Menu />}
          </IconButton>
        </Box>
        <List>
          {menuItems.map((item) => (
            <Link
              href={item.path}
              key={item.text}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItem
                className={`
                px-6 py-2 hover:bg-gray-50 cursor-pointer
                ${!isOpen && "justify-center px-2"}
              `}
              >
                <ListItemIcon className={`min-w-0 ${isOpen ? "mr-3" : "mr-0"}`}>
                  {item.icon}
                </ListItemIcon>
                {isOpen && <ListItemText primary={item.text} />}
              </ListItem>
            </Link>
          ))}
        </List>
        <Box className="absolute bottom-0 p-4 w-full border-t border-gray-200">
          <Box className={`flex items-center ${!isOpen && "justify-center"}`}>
            <Box className="w-10 h-10 rounded-full bg-gray-200" />
            {isOpen && (
              <Box className="ml-3">
                <Typography variant="subtitle2">Admin User</Typography>
                <Typography variant="caption" className="text-gray-500">
                  admin@streamify.com
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}
