"use client";

import React, { useMemo } from "react";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const LangSwicher: React.FC = () => {
  const { language, setLanguage, direction } = useLanguage();

  const options = useMemo(
    () => [
      {
        value: "fa" as const,
        label: "FA",
        flagSrc: "/images/flags/fa.svg",
        alt: "Iran flag",
      },
      {
        value: "en" as const,
        label: "EN",
        flagSrc: "/images/flags/en.svg",
        alt: "United Kingdom flag",
      },
    ],
    []
  );

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as "fa" | "en";
    setLanguage(value);
  };

  const selectedOption = options.find((option) => option.value === language);
  const isRTL = direction === "rtl";

  return (
    <FormControl size="small" sx={{ minWidth: 90 }}>
      <Select
        value={language}
        onChange={handleChange}
        displayEmpty
        sx={{
          bgcolor: "primary.300",
          color: "secondary.600",
          borderRadius: { xs: "5px", lg: "8px" },
          height: { xs: 25, lg: 43 },
          fontSize: { xs: 10, lg: 16 },
          fontWeight: 600,
          '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
          minWidth: { xs: 64, lg: 100 },
          display: "flex",
          alignItems: "center",
        }}
        renderValue={() =>
          selectedOption ? (
            <Box
              sx={(theme) => ({
                display: "inline-flex",
                alignItems: "center",
                flexDirection: isRTL ? "row-reverse" : "row",
                gap: theme.spacing(1),
              })}
            >
              <Image
                src={selectedOption.flagSrc}
                alt={selectedOption.alt}
                width={18}
                height={12}
              />
              <Typography component="span" fontWeight={600} fontSize="inherit">
                {selectedOption.label}
              </Typography>
            </Box>
          ) : null
        }
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <Box
              sx={(theme) => ({
                display: "flex",
                alignItems: "center",
                flexDirection: isRTL ? "row-reverse" : "row",
                gap: theme.spacing(1.25),
              })}
            >
              <Image
                src={option.flagSrc}
                alt={option.alt}
                width={20}
                height={14}
              />
              <Typography component="span" fontWeight={600}>
                {option.label}
              </Typography>
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LangSwicher;
