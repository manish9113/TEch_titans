// import React from "react";
// import { AppBar, Toolbar, Button, Box } from "@mui/material";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <AppBar position="static" sx={{ backgroundColor: "white" }}>
//       <Toolbar>
//         <Box
//           sx={{ flexGrow: 1, display: "flex", justifyContent: "space-evenly" }}
//         >
//           <Button
//             component={Link}
//             to="/"
//             sx={{ color: "black", fontWeight: "bold", textTransform: "none" }}
//           >
//             Home
//           </Button>
//           <Button
//             component={Link}
//             to="/network"
//             sx={{
//               color: "black",
//               fontWeight: "bold",
//               textTransform: "none",
//               fontSize: 17,
//             }}
//           >
//             Network
//           </Button>
//           <Button
//             component={Link}
//             to="/job-portal"
//             sx={{
//               color: "black",
//               fontWeight: "bold",
//               textTransform: "none",
//               fontSize: 17,
//             }}
//           >
//             Job Portal
//           </Button>
//           <Button
//             component={Link}
//             to="/job-portal"
//             sx={{
//               color: "black",
//               fontWeight: "bold",
//               textTransform: "none",
//               fontSize: 17,
//             }}
//           >
//             Mentorship Program
//           </Button>
//           <Button
//             component={Link}
//             to="/success-stories"
//             sx={{
//               color: "black",
//               fontWeight: "bold",
//               textTransform: "none",
//               fontSize: 17,
//             }}
//           >
//             Success Stories
//           </Button>
//           <Button
//             component={Link}
//             to="/events"
//             sx={{
//               color: "black",
//               fontWeight: "bold",
//               textTransform: "none",
//               fontSize: 17,
//             }}
//           >
//             Events
//           </Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaNetworkWired, FaBriefcase, FaUserGraduate, FaStar, FaCalendarAlt } from 'react-icons/fa';

// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-md">
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         <div className="text-2xl font-bold text-black">
//           <Link to="/" className="flex items-center space-x-2">
//             <FaHome />
//             <span>Home</span>
//           </Link>
//         </div>
//         <div className="flex space-x-6">
//           <Link to="/network" className="flex items-center space-x-1 text-black hover:text-blue-600">
//             <FaNetworkWired />
//             <span>Network</span>
//           </Link>
//           <Link to="/job-portal" className="flex items-center space-x-1 text-black hover:text-blue-600">
//             <FaBriefcase />
//             <span>Job Portal</span>
//           </Link>
//           <Link to="/mentorship-program" className="flex items-center space-x-1 text-black hover:text-blue-600">
//             <FaUserGraduate />
//             <span>Mentorship Program</span>
//           </Link>
//           <Link to="/success-stories" className="flex items-center space-x-1 text-black hover:text-blue-600">
//             <FaStar />
//             <span>Success Stories</span>
//           </Link>
//           <Link to="/events" className="flex items-center space-x-1 text-black hover:text-blue-600">
//             <FaCalendarAlt />
//             <span>Events</span>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaNetworkWired, FaBriefcase, FaUserGraduate, FaStar, FaCalendarAlt } from 'react-icons/fa';

// const Navbar = () => {
//   return (
//     <nav className="bg-blue-800 text-white shadow-md w-full  z-50">
//       <div className="container mx-auto px-6 py-3 flex justify-between items-center">
//         <div className="text-2xl font-bold">
//           <Link to="/" className="flex items-center space-x-2">
//             <FaHome />
//             <span>Home</span>
//           </Link>
//         </div>
//         <div className="flex space-x-6">
//           <Link to="/network" className="flex items-center space-x-1 hover:text-gray-300">
//             <FaNetworkWired />
//             <span>Network</span>
//           </Link>
//           <Link to="/job-portal" className="flex items-center space-x-1 hover:text-gray-300">
//             <FaBriefcase />
//             <span>Job Portal</span>
//           </Link>
//           <Link to="/mentorship-program" className="flex items-center space-x-1 hover:text-gray-300">
//             <FaUserGraduate />
//             <span>Mentorship Program</span>
//           </Link>
//           <Link to="/success-stories" className="flex items-center space-x-1 hover:text-gray-300">
//             <FaStar />
//             <span>Success Stories</span>
//           </Link>
//           <Link to="/events" className="flex items-center space-x-1 hover:text-gray-300">
//             <FaCalendarAlt />
//             <span>Events</span>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaNetworkWired, FaBriefcase, FaUserGraduate, FaStar, FaCalendarAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-100 text-gray-900 shadow-md w-full z-10"> {/* Changed background color to teal */}
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/" className="flex items-center space-x-2">
            <FaHome />
            <span>Home</span>
          </Link>
        </div>
        <div className="flex space-x-6">
          <Link to="/network" className="flex items-center space-x-1 hover:text-gray-300">
            <FaNetworkWired />
            <span>Network</span>
          </Link>
          <Link to="/job-portal" className="flex items-center space-x-1 hover:text-gray-300">
            <FaBriefcase />
            <span>Job Portal</span>
          </Link>
          <Link to="/mentorship-program" className="flex items-center space-x-1 hover:text-gray-300">
            <FaUserGraduate />
            <span>Mentorship Program</span>
          </Link>
          <Link to="/success-stories" className="flex items-center space-x-1 hover:text-gray-300">
            <FaStar />
            <span>Success Stories</span>
          </Link>
          <Link to="/events" className="flex items-center space-x-1 hover:text-gray-300">
            <FaCalendarAlt />
            <span>Events</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
