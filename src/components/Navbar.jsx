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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { color, path } from "../constant";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <AppBar
      position="static"
      sx={{
        px: 3,
        // background: location.pathname == "/" ? "none" : "black",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          justifyContent: { xs: "space-between", md: "space-around" },
          color: color.greenFont,
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
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
          href="#app-bar-with-responsive-menu"
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

        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuItem
              onClick={() => {
                handleCloseNavMenu();
                navigate(path.home);
              }}
            >
              <Typography sx={{ textAlign: "center" }}>Home</Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleCloseNavMenu();
                navigate(path.about);
              }}
            >
              <Typography sx={{ textAlign: "center" }}>About</Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleCloseNavMenu();
                navigate(path.business);
              }}
            >
              <Typography
                aria-owns={open ? "mouse-over-popover" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              >
                Business
              </Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleCloseNavMenu();
                navigate(path.contact);
              }}
            >
              <Typography sx={{ textAlign: "center" }}>Contact</Typography>
            </MenuItem>
          </Menu>
        </Box>
        <Grid
          className="li"
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "4rem",
            justifyContent: "end",
          }}
        >
          <Link className={path.home === location.pathname ? "active-nav":""} to={path.home}>
            Home
          </Link>
          <Link className="links" to={path.about}>
            About Me
          </Link>
          <Box
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            sx={{ position: "relative", cursor: "pointer" }}
          >
            <Typography
              sx={{
                color: color.white,
                fontSize: "18px",
              }}
            >
              Business
            </Typography>
            <Grid width={"50%"} position={"relative"} overflow={"hidden"}>
              <Popover
                id="mouse-over-popover"
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center", // Center relative to the anchor
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center", // Popover aligns its center to anchor center
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
                PaperProps={{
                  sx: {
                    mt: 1,
                    px: 2,
                    py: 1,
                    backgroundColor: "#fff",
                    color: "#000",
                    boxShadow: 3,
                    background: "#2E3D44",
                    width: "fit-content",
                  },
                }}
              >
                <Grid
                  className="li"
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <Link
                    className="links"
                    to={path.business}
                    style={{ margin: 10 }}
                    onClick={() => navigate("/msaca")}
                  >
                    MSACA Bizzsolve LLP
                  </Link>
                  <Link
                    className="links"
                    to={path.business2}
                    style={{ margin: 10 }}
                    onClick={() => navigate("/credorbit")}
                  >
                    Credorbit Technologies
                  </Link>
                </Grid>
              </Popover>
            </Grid>
          </Box>
          <Link className="links" to={path.contact}>
            Contact Me
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
