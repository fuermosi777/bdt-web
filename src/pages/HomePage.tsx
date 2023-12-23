import React from "react";
import "./HomePage.scss";
import Button from "@mui/joy/Button";
import { useNavigate } from "react-router-dom";
import { Literal } from "../constants/literals.ts";
import { AspectRatio, Box, Container, Typography } from "@mui/joy";

function App() {
  const navigate = useNavigate();

  return (
    <div className="HomePage">
      <Container
        sx={(theme) => ({
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 10,
          gap: 4,
          [theme.breakpoints.up(834)]: {
            flexDirection: "row",
            gap: 6,
          },
          [theme.breakpoints.up(1199)]: {
            gap: 12,
          },
        })}
      >
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            maxWidth: "50ch",
            textAlign: "center",
            flexShrink: 999,
            [theme.breakpoints.up(834)]: {
              minWidth: 420,
              alignItems: "flex-start",
              textAlign: "initial",
            },
          })}
        >
          <Typography color="primary" fontSize="lg" fontWeight="lg">
            定你所想，制你所爱
          </Typography>
          <Typography
            level="h1"
            fontWeight="xl"
            fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
          >
            BDT 白酒定制服务平台
          </Typography>
          <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
            打造企业专属白酒，管理个性设计方案，全链路批量生产，专业包装酒质咨询
          </Typography>
          <Button
            size="lg"
            onClick={() =>
              navigate(Literal.navigationDestination(Literal.StartNewDesign))
            }
          >
            {Literal.StartNewDesign}
          </Button>
        </Box>
        <AspectRatio
          ratio={600 / 520}
          variant="outlined"
          maxHeight={300}
          sx={(theme) => ({
            minWidth: 300,
            alignSelf: "stretch",
            [theme.breakpoints.up(834)]: {
              alignSelf: "initial",
              flexGrow: 1,
              "--AspectRatio-maxHeight": "520px",
              "--AspectRatio-minHeight": "400px",
            },
            borderRadius: "sm",
            bgcolor: "background.level2",
            flexBasis: "50%",
          })}
        >
          <img src="/hero-photo.jpg" alt="" />
        </AspectRatio>
      </Container>
    </div>
  );
}

export default App;
