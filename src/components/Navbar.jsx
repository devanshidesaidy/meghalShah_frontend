import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
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
              <Typography sx={{ textAlign: "center" }}>Business</Typography>
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
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "4rem",
            justifyContent: "end",
          }}
        >
          <Link to={path.home}>Home</Link>
          <Link to={path.about}>About Me</Link>
          <Link to={path.business}>Business</Link>
          <Link to={path.contact}>Contact Me</Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
