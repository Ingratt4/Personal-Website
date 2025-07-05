import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description"; // for resume

const Blurb = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 12, px: 2 }}>
      <Paper
        elevation={6}
        sx={{
          color: "white",
          backgroundColor: "#121212",
          padding: 4,
          maxWidth: 700,
          borderRadius: 3,
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Hi, I'm Cameron Ingratta
        </Typography>
        <Typography variant="h6" gutterBottom>
          I’m a recent Computer Science graduate from the University of Windsor
          with a passion for building engaging web experiences and solving
          real-world problems through software.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Currently building a money-making guide app for OSRS, exploring modern
          web tools like React, TypeScript, and Node. I love combining clean UI
          with smart backend logic.
        </Typography>

        {/* Link Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 4,
            mt: 4,
          }}
        >
          <Link
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noopener"
            color="inherit"
            underline="none"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <GitHubIcon />
            GitHub
          </Link>

          <Link
            href="https://www.linkedin.com/in/YOUR_LINKEDIN/"
            target="_blank"
            rel="noopener"
            color="inherit"
            underline="none"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <LinkedInIcon />
            LinkedIn
          </Link>

          <Link
            href="/resume.pdf" // or your actual hosted resume URL
            target="_blank"
            rel="noopener"
            color="inherit"
            underline="none"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <DescriptionIcon />
            Resume
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default Blurb;
