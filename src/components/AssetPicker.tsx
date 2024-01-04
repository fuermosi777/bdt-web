import {
  Box,
  Card,
  CardContent,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormLabel,
  ModalClose,
  Radio,
  RadioGroup,
  Sheet,
  Typography,
} from "@mui/joy";
import React from "react";
import { Literal } from "../constants/literals.ts";
import { packagePresets } from "../constants/presets.ts";
import { ShoppingBag } from "react-feather";
import { PackageAsset, PackageType } from "../interfaces/PackagePreset.ts";
import { useDesignerStore } from "../stores/DesignerStore.ts";

const AssetPicker = (props: { assets: PackageAsset[] }) => {
  const selectedAsset = useDesignerStore((s) => s.asset);
  const setAsset = useDesignerStore((s) => s.setAsset);
  const setLeftDrawer = useDesignerStore((s) => s.setLeftDrawer);
  return (
    <Sheet
      sx={{
        borderRadius: "md",
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        height: "100%",
        overflow: "auto",
      }}
    >
      <DialogTitle>{Literal.PickAsset}</DialogTitle>
      <ModalClose />
      <Divider />
      <DialogContent sx={{ gap: 2 }}>
        <FormControl>
          <FormLabel sx={{ typography: "title-md", fontWeight: "bold" }}>
            Property type
          </FormLabel>
          <RadioGroup
            value={selectedAsset?.id}
            onChange={(event) => {
              let asset = props.assets.filter(
                (asset) => asset.id === event.target.value
              );
              if (asset.length > 0) {
                setAsset(asset[0]);
                setLeftDrawer(false);
              }
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                gap: 1.5,
              }}
            >
              {packagePresets[0].assets.map((asset) => {
                let selected = asset.id === selectedAsset?.id;
                return (
                  <Card
                    key={asset.id}
                    sx={{
                      boxShadow: "none",
                      "&:hover": { bgcolor: "background.level1" },
                    }}
                  >
                    <CardContent>
                      <ShoppingBag />
                      <Typography level="title-md">
                        {PackageType.label(asset.type)}
                      </Typography>
                    </CardContent>
                    <Radio
                      disableIcon
                      overlay
                      checked={selected}
                      variant="outlined"
                      color="neutral"
                      value={asset.id}
                      sx={{ mt: -2 }}
                      slotProps={{
                        action: {
                          sx: {
                            ...(selected && {
                              borderWidth: 2,
                              borderColor:
                                "var(--joy-palette-primary-outlinedBorder)",
                            }),
                            "&:hover": {
                              bgcolor: "transparent",
                            },
                          },
                        },
                      }}
                    />
                  </Card>
                );
              })}
            </Box>
          </RadioGroup>
        </FormControl>
      </DialogContent>
    </Sheet>
  );
};

export default AssetPicker;
