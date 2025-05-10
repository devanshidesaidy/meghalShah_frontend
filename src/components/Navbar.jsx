import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Popover from "@mui/material/Popover";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { color, path } from "../constant";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileBusinessOpen, setMobileBusinessOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setMobileBusinessOpen(false);
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <AppBar
      position="fixed"
      sx={{
        px: 3,
        background: scrolled ? "black" : "transparent",
        transition: "background 0.6s ease-in-out",
        boxShadow: "none",
        zIndex: 1300,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          justifyContent: { xs: "space-between", md: "space-around" },
          color: color.greenFont,
        }}
      >
        {/* Logo */}
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          LOGO
        </Typography>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="#"
          sx={{
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          LOGO
        </Typography>

        {/* Mobile Menu */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            sx={{ display: { xs: "block", md: "none" } }}
            PaperProps={{
              sx: {
                width: "250px", // Fixed width
                overflowY: "auto",
                backgroundColor: "#000", // Optional: match your design
                color: "#fff", // Optional
                p: 1, // Optional padding
              },
            }}
          >
            <MenuItem
              onClick={() => {
                handleCloseNavMenu();
                navigate(path.home);
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  width: "100%",
                  fontFamily: "JosefinSans",
                }}
              >
                Home
              </Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleCloseNavMenu();
                navigate(path.about);
              }}
            >
              <Typography sx={{ textAlign: "center", width: "100%" }}>
                About
              </Typography>
            </MenuItem>

            {/* Business with Submenu */}
            <MenuItem
              onClick={() => setMobileBusinessOpen(!mobileBusinessOpen)}
              sx={{ justifyContent: "center", ml: 5 }}
            >
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                Business{" "}
                {mobileBusinessOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </Typography>
            </MenuItem>
            {mobileBusinessOpen && (
              <>
                <MenuItem
                  sx={{ pl: 4, justifyContent: "center" }}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("/msaca");
                  }}
                >
                  MSACA Bizzsolve LLP
                </MenuItem>
                <MenuItem
                  sx={{ pl: 4, justifyContent: "center" }}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("/credorbit");
                  }}
                >
                  Credorbit Technologies
                </MenuItem>
              </>
            )}

            <MenuItem
              onClick={() => {
                handleCloseNavMenu();
                navigate(path.contact);
              }}
            >
              <Typography sx={{ textAlign: "center", width: "100%" }}>
                Contact
              </Typography>
            </MenuItem>
          </Menu>
        </Box>

        {/* Desktop Menu */}
        <Grid
          className="li"
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "4rem",
            justifyContent: "end",
          }}
        >
          <Link
            className={`nav-link ${
              location.pathname === path.home ? "active" : ""
            }`}
            to={path.home}
          >
            Home
          </Link>
          <Link
            className={`nav-link ${
              location.pathname === path.about ? "active" : ""
            }`}
            to={path.about}
          >
            About Me
          </Link>
          <Box
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            sx={{ position: "relative", cursor: "pointer" }}
          >
            <Typography sx={{ color: color.white, fontSize: "18px" }}>
              Business
            </Typography>
            <Popover
              id="mouse-over-popover"
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
              onClose={handlePopoverClose}
              disableRestoreFocus
              PaperProps={{
                sx: {
                  mt: 1,
                  px: 2,
                  py: 1,
                  backgroundColor: "#2E3D44",
                  color: "#fff",
                  boxShadow: 3,
                  maxWidth: "90vw",
                },
              }}
            >
              <Grid sx={{ display: "flex", flexDirection: "column" }}>
                <Link
                  className={`nav-link ${
                    location.pathname === path.business ? "active" : ""
                  }`}
                  to={path.business}
                  onClick={() => navigate("/msaca")}
                  style={{ textDecoration: "none" }}
                >
                  <Typography sx={{ my: 0.5 }}>MSACA Bizzsolve LLP</Typography>
                </Link>
                <Link
                  className={`nav-link ${
                    location.pathname === path.business2 ? "active" : ""
                  }`}
                  to={path.business2}
                  onClick={() => navigate("/credorbit")}
                  style={{ textDecoration: "none" }}
                >
                  <Typography sx={{ mb: 0.5, mt: 2 }}>
                    Credorbit Technologies
                  </Typography>
                </Link>
              </Grid>
            </Popover>
          </Box>
          <Link
            className={`nav-link ${
              location.pathname === path.contact ? "active" : ""
            }`}
            to={path.contact}
          >
            Contact Me
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
