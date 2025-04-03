import { Container, Divider } from "@mui/material";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

import Summary from "./components/Summary";
import About from "./components/About";
import CustomDivider from "./components/CustomDivider";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="lg"
        sx={{ textAlign: { xs: "center", sm: "left" }, my: "20px" }}
      >
        <Summary />

        <CustomDivider label={"About Me"} />

        <About />

        <CustomDivider label={"Projects"} />

        <Projects />

        <CustomDivider label={"Skills"} />

        <Skills />

        <CustomDivider label={"Experience"} />

        <Experience />

        <CustomDivider label={"Education"} />

        <Education />

        <Divider sx={{ my: "15px" }} />

        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
