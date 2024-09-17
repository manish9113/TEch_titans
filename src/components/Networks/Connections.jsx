import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Typography,
  Avatar,
  Grid,
  IconButton,
  Button,
} from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const communities = [
  {
    name: "Tech Innovators",
    logoUrl: "/assets/person/1.jpeg", // or an image URL
    followers: 1200,
    rating: 4.5,
    adminName: "Alice Johnson",
    numberOfPersons: 50,
    creationDate: "2023-01-15",
  },
  {
    name: "Data Science Experts",
    logoUrl: "", // or an image URL
    followers: 890,
    rating: 4.0,
    adminName: "Bob Smith",
    numberOfPersons: 30,
    creationDate: "2023-02-10",
  },
  {
    name: "Tech Innovators",
    logoUrl: "/assets/person/1.jpeg", // or an image URL
    followers: 1200,
    rating: 4.5,
    adminName: "Alice Johnson",
    numberOfPersons: 50,
    creationDate: "2023-01-15",
  },
  {
    name: "Data Science Experts",
    logoUrl: "", // or an image URL
    followers: 890,
    rating: 4.0,
    adminName: "Bob Smith",
    numberOfPersons: 30,
    creationDate: "2023-02-10",
  },
  {
    name: "Tech Innovators",
    logoUrl: "/assets/person/1.jpeg", // or an image URL
    followers: 1200,
    rating: 4.5,
    adminName: "Alice Johnson",
    numberOfPersons: 50,
    creationDate: "2023-01-15",
  },
  {
    name: "Data Science Experts",
    logoUrl: "", // or an image URL
    followers: 890,
    rating: 4.0,
    adminName: "Bob Smith",
    numberOfPersons: 30,
    creationDate: "2023-02-10",
  },
  {
    name: "Tech Innovators",
    logoUrl: "/assets/person/1.jpeg", // or an image URL
    followers: 1200,
    rating: 4.5,
    adminName: "Alice Johnson",
    numberOfPersons: 50,
    creationDate: "2023-01-15",
  },
  {
    name: "Data Science Experts",
    logoUrl: "", // or an image URL
    followers: 890,
    rating: 4.0,
    adminName: "Bob Smith",
    numberOfPersons: 30,
    creationDate: "2023-02-10",
  },
  {
    name: "Tech Innovators",
    logoUrl: "/assets/person/1.jpeg", // or an image URL
    followers: 1200,
    rating: 4.5,
    adminName: "Alice Johnson",
    numberOfPersons: 50,
    creationDate: "2023-01-15",
  },
  {
    name: "Data Science Experts",
    logoUrl: "", // or an image URL
    followers: 890,
    rating: 4.0,
    adminName: "Bob Smith",
    numberOfPersons: 30,
    creationDate: "2023-02-10",
  },
  // Add more sample communities if needed
];

function getStars(rating) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<StarIcon key={i} sx={{ color: "#FFD700" }} />);
    } else if (i - rating < 1) {
      stars.push(<StarHalfIcon key={i} sx={{ color: "#FFD700" }} />);
    } else {
      stars.push(<StarBorderIcon key={i} sx={{ color: "#FFD700" }} />);
    }
  }
  return stars;
}

function ConnectionsPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(communities.length / itemsPerPage);

  const navigate = useNavigate();
  const messageHim = () => {
    navigate("/friend");
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const currentItems = communities.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Box
      sx={{
        p: 2,
        height: "80vh",
        width: "96.5%",
        overflowY: "hidden",
        bgcolor: "#f5f5f5",
        position: "relative",
      }}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        My Connections
      </Typography>
      <Grid container spacing={2}>
        {currentItems.map((community, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <Box
              sx={{
                position: "relative",
                width: "230px",
                height: "205px", // Adjust height as needed
                transformStyle: "preserve-3d",
                transition: "transform 0.6s",
                "&:hover .flip-card-inner": {
                  transform: "rotateY(180deg)",
                },
              }}
            >
              <Box
                className="flip-card-inner"
                sx={{
                  position: "absolute",
                  width: "230px",
                  height: "205px",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.6s",
                }}
              >
                {/* Front Side */}
                <Box
                  sx={{
                    position: "absolute",
                    width: "230px",
                    height: "205px",
                    backfaceVisibility: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 2,

                    borderRadius: 1,
                    bgcolor: "#fff",
                    boxShadow: 1,
                    boxSizing: "border-box",
                    textAlign: "center",
                    overflow: "none", // Ensure content fits inside
                  }}
                >
                  <Avatar
                    src={community.logoUrl || <GroupIcon />}
                    alt={community.name}
                    sx={{ width: 80, height: 80, mb: 1, borderRadius: 2 }}
                  />
                  <Typography variant="h6" sx={{ mb: 0.5 }}>
                    {community.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 0.5 }}
                  >
                    {community.followers.toLocaleString()} followers
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    {getStars(community.rating)}
                  </Box>
                </Box>

                {/* Back Side */}
                <Box
                  sx={{
                    position: "absolute",
                    width: "230px",
                    height: "205px",
                    backfaceVisibility: "hidden",
                    backgroundColor: "#fff", // Match the front side color
                    transform: "rotateY(180deg)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 2,
                    boxSizing: "border-box",
                    borderRadius: 1,

                    boxShadow: 1,
                    textAlign: "center",
                    overflow: "none", // Ensure content fits inside
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    Admin: {community.adminName}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {community.numberOfPersons} persons
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Created on:{" "}
                    {new Date(community.creationDate).toLocaleDateString()}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={messageHim}
                  >
                    Message Him
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Pagination Controls */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: -20, // Adjust this value to move pagination further down
          width: "95%",
          p: 2,
         
        }}
      >
        <IconButton onClick={handlePreviousPage} disabled={currentPage === 0}>
          <ChevronLeftIcon />
        </IconButton>
        <Box sx={{ mx: 2 }}>
          {Array.from({ length: totalPages }, (_, index) => (
            <Box
              key={index}
              sx={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: index === currentPage ? "#000" : "#ccc",
                mx: 0.5,
              }}
            />
          ))}
        </Box>
        <IconButton
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default ConnectionsPage;
