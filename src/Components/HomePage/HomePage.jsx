import React from "react";
import { Grid } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import HomeSection from "../HomeSection/HomeSection";

export default function HomePage() {
  return (
    <Grid container spacing={4} alignItems="flex-start" className="px-5 lg:px-36" sx={{ borderLeft: '1px solid #eff3f4', borderRight: '1px solid #eff3f4' }}>
      {/* Left Sidebar: Hidden on xs, visible on lg+ */}
      <Grid item xs={0} lg={3} sx={{ 
        display: { xs: "none", lg: "block" }, 
        height: '100vh',
        borderRight: '1px solid #eff3f4',
        paddingRight: 2
      }}>
        <Navigation />
      </Grid>
      {/* Main Content: Full width on mobile, centered on desktop */}
      <Grid item xs={12} lg={6} sx={{ 
        minHeight: '100vh',
      }}>
        <HomeSection />
      </Grid>
      {/* Right Sidebar: Hidden on xs, visible on lg+ */}
      <Grid item xs={0} lg={3} sx={{ 
        display: { xs: "none", lg: "block" }, 
        height: '100vh',
        borderLeft: '1px solid #eff3f4',
        paddingLeft: 2
      }}>
        <div style={{ width: '100%' }}>
          <p>right</p>
        </div>
      </Grid>
    </Grid>
  );
}
