// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import {useState} from "react";
// Ibeauty Admin Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Ibeauty Admin Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import ImageInput from "components/MDFileInput";

function Company() {
  const [logoImage, setLogoImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const handleLogoImageChange = (event) => {
    setLogoImage(event.target.files[0]);
  };

  const handleCoverImageChange = (event) => {
    setCoverImage(event.target.files[0]);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Add Company
                </MDTypography>
              </MDBox>
              <MDBox pt={4} pb={4} px={25}>
                <MDBox component="form" role="form">
                  <MDBox mb={2}>
                    <MDInput
                      type="text"
                      label="Name"
                      variant="standard"
                      fullWidth
                    />
                  </MDBox>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                  <MDBox mb={2}>
                    <ImageInput
                      label="Cover Image"
                      onChange={handleCoverImageChange}
                    />
                  </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <MDBox mb={2}>
                    <ImageInput
                      label="Logo Image"
                      onChange={handleLogoImageChange}
                    />
                  </MDBox>
                    </Grid>
                  </Grid>
                    
                  <MDBox display="flex" alignItems="center" ml={-1}>
                  </MDBox>
                  <MDBox mt={4} mb={1}>
                    <MDButton variant="gradient" color="info" fullWidth>
                      Add Company
                    </MDButton>
                  </MDBox>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Company;
