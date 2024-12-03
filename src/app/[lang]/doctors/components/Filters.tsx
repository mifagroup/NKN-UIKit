"use client";
import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const categories = [
  {
    id: 1,
    name: "زنان، زایمان و نازایی",
  },
  {
    id: 2,
    name: "چشم پزشکی",
  },
  {
    id: 3,
    name: "گوارش و معده",
  },
  {
    id: 4,
    name: "کلیه و مجاری ادراری",
  },
  {
    id: 5,
    name: "غدد و متابولیسم",
  },
  {
    id: 6,
    name: "قلب و عروق",
  },
  {
    id: 7,
    name: "داخلی",
  },
  {
    id: 8,
    name: "دهان و دندان",
  },
  {
    id: 9,
    name: "پوست و مو",
  },
  {
    id: 10,
    name: "جراحی",
  },
  {
    id: 11,
    name: "اطفال، کودکان و نوزادان",
  },
  {
    id: 12,
    name: "روانپزشکی",
  },
  {
    id: 13,
    name: "ریه و دستگاه تنفسی",
  },
  {
    id: 14,
    name: "گوش، حلق و بینی",
  },
  {
    id: 15,
    name: "بیهوشی و مراقبت های ویژه",
  },
  {
    id: 16,
    name: "خون، سرطان و آنکولوژی",
  },
  {
    id: 17,
    name: "زنان، زایمان و نازایی",
  },
  {
    id: 18,
    name: "چشم پزشکی",
  },
  {
    id: 19,
    name: "گوارش و معده",
  },
  {
    id: 20,
    name: "کلیه و مجاری ادراری",
  },
  {
    id: 21,
    name: "غدد و متابولیسم",
  },
  {
    id: 22,
    name: "قلب و عروق",
  },
  {
    id: 23,
    name: "داخلی",
  },
  {
    id: 24,
    name: "دهان و دندان",
  },
  {
    id: 25,
    name: "پوست و مو",
  },
  {
    id: 26,
    name: "جراحی",
  },
  {
    id: 27,
    name: "اطفال، کودکان و نوزادان",
  },
  {
    id: 28,
    name: "روانپزشکی",
  },
  {
    id: 29,
    name: "ریه و دستگاه تنفسی",
  },
  {
    id: 30,
    name: "گوش، حلق و بینی",
  },
  {
    id: 31,
    name: "بیهوشی و مراقبت های ویژه",
  },
  {
    id: 32,
    name: "خون، سرطان و آنکولوژی",
  },
];

const genders = [
  {
    id: 1,
    name: "مرد",
  },
  {
    id: 2,
    name: "زن",
  },
  {
    id: 3,
    name: "هر دو",
  },
];

const profissions = [
  {
    id: 1,
    name: "کارشناس",
  },
  {
    id: 2,
    name: "کارشناس ارشد",
  },
  {
    id: 3,
    name: "متخصص دکتری",
  },
  {
    id: 4,
    name: "دکترای تخصصی",
  },
  {
    id: 5,
    name: "فوق تخصص",
  },
  {
    id: 6,
    name: "فلوشیپ",
  },
  {
    id: 7,
    name: "درجه علمی",
  },
];

const Filters = () => {
  const [activeProfissions, setActiveProfissions] = React.useState<number[]>(
    []
  );

  const [activeProfissionTypes, setActiveProfissionTypes] = React.useState<
    number[]
  >([]);

  return (
    <div className="bg-white flex flex-col w-[252px] rounded-[16px] h-fit">
      <span className="border-b border-b-[#D9D9D9] text-[14px] font-semibold text-black p-[22px]">
        تخصص ها
      </span>
      <div className="py-[30px]">
        <div className="px-2 max-h-[345px] overflow-y-scroll flex flex-col gap-y-[1.5px]">
          {categories?.map((cat) => (
            <FormControlLabel
              control={
                <Checkbox
                  className="!p-0"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      width: "15px",
                      height: "15px",
                      marginX: "5px",
                    },
                  }}
                  onChange={() => {
                    if (activeProfissions?.includes(cat.id)) {
                      setActiveProfissions(
                        activeProfissions.filter((item) => item !== cat.id)
                      );
                    } else {
                      setActiveProfissions([...activeProfissions, cat.id]);
                    }
                  }}
                />
              }
              slotProps={{
                typography: {
                  fontSize: "12px",
                  fontWeight: activeProfissions?.includes(cat.id)
                    ? "500"
                    : "200",
                },
              }}
              className="!m-0"
              label={cat.name}
              key={cat.id}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-x-2.5 p-[22px] border-y border-y-[#ECECEC]">
        <span className="text-[14px] font-semibold text-black">جنس پزشک</span>
        <div className="flex items-center">
          {genders?.map((gender) => (
            <FormControlLabel
              control={
                <Checkbox
                  className="!p-0"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      width: "15px",
                      height: "15px",
                      marginX: "5px",
                    },
                  }}
                />
              }
              slotProps={{
                typography: {
                  fontSize: "12px",
                  fontWeight: "300",
                },
              }}
              className="!m-0"
              label={gender.name}
              key={gender.id}
            />
          ))}
        </div>
      </div>
      <span className="border-b border-b-[#D9D9D9] text-[14px] font-semibold text-black p-[22px]">
        سطح تحصیلات
      </span>
      <div className="py-[30px]">
        <div className="px-2 flex flex-col gap-y-[1.5px]">
          {profissions?.map((profission) => (
            <FormControlLabel
              control={
                <Checkbox
                  className="!p-0"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      width: "15px",
                      height: "15px",
                      marginX: "5px",
                    },
                  }}
                  onChange={() => {
                    if (activeProfissionTypes?.includes(profission.id)) {
                      setActiveProfissionTypes(
                        activeProfissionTypes.filter(
                          (item) => item !== profission.id
                        )
                      );
                    } else {
                      setActiveProfissionTypes([
                        ...activeProfissionTypes,
                        profission.id,
                      ]);
                    }
                  }}
                />
              }
              slotProps={{
                typography: {
                  fontSize: "12px",
                  fontWeight: activeProfissionTypes?.includes(profission.id)
                    ? "500"
                    : "200",
                },
              }}
              className="!m-0"
              label={profission.name}
              key={profission.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
