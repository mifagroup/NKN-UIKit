"use client";
import { MenuItem, Select } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

const branches = [
  {
    id: 1,
    title: "بیمارستان نیکان اقدسیه",
    desc: "اقدسیه – ابتدای بلوار ارتش – ورودی اراج – خیابان ٢٢ بهمن – شماره ٦ ",
  },
  {
    id: 2,
    title: "بیمارستان نیکان غرب",
    desc: "اقدسیه – ابتدای بلوار ارتش – ورودی اراج – خیابان ٢٢ بهمن – شماره ٦ ",
  },
  {
    id: 3,
    title: "بیمارستان نیکان حکیمیه",
    desc: "اقدسیه – ابتدای بلوار ارتش – ورودی اراج – خیابان ٢٢ بهمن – شماره ٦ ",
  },
  {
    id: 4,
    title: "بیمارستان نیکان شماره 2",
    desc: "اقدسیه – ابتدای بلوار ارتش – ورودی اراج – خیابان ٢٢ بهمن – شماره ٦ ",
  },
];

const subSections = [
  {
    sectionId: "1",
    items: [
      {
        id: 1,
        title: "پزشک",
      },
      {
        id: 2,
        title: "کارشناس بیهوشی",
      },
      {
        id: 3,
        title: "تکنیسین بیهوشی",
      },
      {
        id: 4,
        title: "کارشناس اتاق عمل",
      },
      {
        id: 5,
        title: "تکنیسین اتاق عمل",
      },
      {
        id: 6,
        title: "سوپروايزر",
      },
      {
        id: 7,
        title: "سرپرستار",
      },
      {
        id: 8,
        title: "کارشناس پرستاری",
      },
      {
        id: 9,
        title: "کارشناس مامایی",
      },
      {
        id: 10,
        title: "کمک بهیار",
      },
      {
        id: 11,
        title: "منشی",
      },
    ],
  },
  {
    sectionId: "2",
    items: [
      {
        id: 1,
        title: "انباردار",
      },
      {
        id: 2,
        title: "کارشناس حسابداری",
      },
      {
        id: 3,
        title: "کارشناس انفورماتیک",
      },
      {
        id: 4,
        title: "کارشناس بهبود کیفیت",
      },
      {
        id: 5,
        title: "کارشناس بهداشت حرفه‌ای",
      },
      {
        id: 6,
        title: "کارشناس بهداشت محیط",
      },
      {
        id: 7,
        title: "کارشناس بیمه",
      },
      {
        id: 8,
        title: "کارشناس پذیرش",
      },
      {
        id: 9,
        title: "کارشناس ترخیص",
      },
      {
        id: 10,
        title: "کارشناس تجهیزات پزشکی",
      },
      {
        id: 11,
        title: "کارشناس تاسیسات",
      },
      {
        id: 12,
        title: "کارشناس تغذیه",
      },
      {
        id: 13,
        title: "مهماندار",
      },
      {
        id: 14,
        title: "کارشناس روابط عمومی",
      },
      {
        id: 15,
        title: "تکنسین CSR",
      },
      {
        id: 16,
        title: "کارشناس پاسخگویی",
      },
      {
        id: 17,
        title: "کارشناس مدارک پزشکی",
      },
      {
        id: 18,
        title: "کارشناس منابع انسانی",
      },
      {
        id: 19,
        title: "منشی",
      },
      {
        id: 20,
        title: "مسئول دفتر",
      },
      {
        id: 21,
        title: "فیلمبردار",
      },
      {
        id: 22,
        title: "کاخدار (خدمات)",
      },
      {
        id: 23,
        title: "متصدی لندری",
      },
      {
        id: 24,
        title: "متصدی انتظامات",
      },
      {
        id: 25,
        title: "متصدی پارکینگ",
      },
    ],
  },
  {
    sectionId: "3",
    items: [
      {
        id: 1,
        title: "تکنسین تصویربرداری",
      },
      {
        id: 2,
        title: "کارشناس تصویربرداری",
      },
      {
        id: 3,
        title: "متصدی پذیرش و صندوق",
      },
      {
        id: 4,
        title: "تایپیست",
      },
      {
        id: 5,
        title: "کارشناس آزمایشگاه",
      },
      {
        id: 6,
        title: "کاردان آزمایشگاه",
      },
      {
        id: 7,
        title: "کارشناس پزشکی هسته‌‌ای",
      },
      {
        id: 8,
        title: "متصدی داروئی بهداشتی",
      },
      {
        id: 9,
        title: "کارشناس داروئی",
      },
      {
        id: 10,
        title: "انباردار",
      },
      {
        id: 11,
        title: "کارشناس فیزیوتراپی",
      },
      {
        id: 12,
        title: "کارشناس شنوایی سنجی",
      },
    ],
  },
];

const Page = () => {
  const [selectedBranch, setSelectedBranch] = React.useState(1);

  const [form, setForm] = useState({
    name: "",
    nid: "",
    gender: "",
    marriageStatus: "",
    nationality: "",
    age: "",
    number: "",
    state: "",
    city: "",
    email: "",
    phone: "",
    section: "1",
    subSection: "1",
    description: "",
    confirm: false,
  });

  const handleSubmit = () => {
    if (!form.confirm) {
      toast.error("لطفا قوانین استخدامی را تایید کنید.");
      return;
    }

    if (Object.values(form).some((value) => value === "")) {
      toast.error("لطفا تمامی فیلد ها را پر کنید.");
      return;
    }

    toast.success("درخواست شما با موفقیت ثبت شد.");
    setForm({
      name: "",
      nid: "",
      gender: "",
      marriageStatus: "",
      nationality: "",
      age: "",
      number: "",
      state: "",
      city: "",
      email: "",
      phone: "",
      section: "1",
      subSection: "1",
      description: "",
      confirm: false,
    });
  };

  return (
    <div className="lg:pt-[57px] pt-[25px] max-w-[790px] mx-auto lg:px-0 px-5">
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col items-center gap-y-1">
          <h1 className="lg:text-xl text-base font-semibold">
            سامانه ثبت درخواست همکاری
          </h1>
          <span className="text-sm font-light">
            تکمیل تمامی فیلد ها برای بررسی بهتر درخواست شما ضروری است
          </span>
        </div>
        <span className="lg:text-xl text-base font-semibold lg:font-light lg:text-right text-center">
          شعبه مورد نظر خود را انتخاب کنید
        </span>
        <div className="py-[38px] border-y border-y-[#ACACAC] grid grid-cols-2 gap-y-6">
          {branches?.map((branch) => (
            <div
              className="flex items-center gap-x-6 cursor-pointer lg:col-span-1 col-span-2"
              key={branch.id}
              onClick={() => setSelectedBranch(branch.id)}
            >
              <div
                className={`w-[22px] h-[22px] rounded-[3px] ${
                  branch.id === selectedBranch ? "bg-[#31D1B0]" : "bg-[#D9D9D9]"
                }`}
              />
              <div className="flex flex-col gap-y-1">
                <span className="text-base font-extrabold text-[#696969]">
                  {branch.title}
                </span>
                <span className="text-xs font-extralight text-[#696969]">
                  {branch.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-5 border-b border-b-[#ACACAC] pb-6">
          <span className="lg:text-xl text-base font-semibold lg:font-light lg:text-right text-center">
            اطلاعات شخصی خود را تکمیل کنید
          </span>
          <div className="grid grid-cols-12 gap-2.5">
            <input
              type="text"
              className="lg:col-span-4 col-span-12 px-3 py-2.5 bg-[#EDEDED] rounded-[5px] focus-visible:outline-none"
              placeholder="نام و نام خانوادگی"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="text"
              className="lg:col-span-4 col-span-12 px-3 py-2.5 bg-[#EDEDED] rounded-[5px] focus-visible:outline-none"
              placeholder="کد ملی"
              value={form.nid}
              onChange={(e) => setForm({ ...form, nid: e.target.value })}
            />
            <div
              className={`lg:col-span-1 lg:h-auto h-[44px] col-span-6 rounded-[5px] flex items-center justify-center cursor-pointer ${
                form.gender === "male"
                  ? "bg-primary-main text-white"
                  : "bg-[#EBEBEB]"
              }`}
              onClick={() => setForm({ ...form, gender: "male" })}
            >
              مرد
            </div>
            <div
              className={`lg:col-span-1 lg:h-auto h-[44px] col-span-6 rounded-[5px] flex items-center justify-center cursor-pointer ${
                form.gender === "female"
                  ? "bg-primary-main text-white"
                  : "bg-[#EBEBEB]"
              }`}
              onClick={() => setForm({ ...form, gender: "female" })}
            >
              زن
            </div>
            <div
              className={`lg:col-span-1 lg:h-auto h-[44px] col-span-6 rounded-[5px] flex items-center justify-center cursor-pointer ${
                form.marriageStatus === "single"
                  ? "bg-primary-main text-white"
                  : "bg-[#EBEBEB]"
              }`}
              onClick={() => setForm({ ...form, marriageStatus: "single" })}
            >
              مجرد
            </div>
            <div
              className={`lg:col-span-1 lg:h-auto h-[44px] col-span-6 rounded-[5px] flex items-center justify-center cursor-pointer ${
                form.marriageStatus === "married"
                  ? "bg-primary-main text-white"
                  : "bg-[#EBEBEB]"
              }`}
              onClick={() => setForm({ ...form, marriageStatus: "married" })}
            >
              متاهل
            </div>
            <input
              type="text"
              className="lg:col-span-2 col-span-6 px-3 py-2.5 bg-[#EDEDED] rounded-[5px] focus-visible:outline-none"
              placeholder="ملیت"
              value={form.nationality}
              onChange={(e) =>
                setForm({ ...form, nationality: e.target.value })
              }
            />
            <input
              type="number"
              className="lg:col-span-2 col-span-6 px-3 py-2.5 bg-[#EDEDED] rounded-[5px] focus-visible:outline-none"
              placeholder="سن"
              value={form.age}
              onChange={(e) => setForm({ ...form, age: e.target.value })}
            />
            <input
              type="number"
              className="lg:col-span-4 col-span-12 px-3 py-2.5 bg-[#EDEDED] rounded-[5px] focus-visible:outline-none"
              placeholder="شماره تماس"
              value={form.number}
              onChange={(e) => setForm({ ...form, number: e.target.value })}
            />
            <input
              type="text"
              className="lg:col-span-2 col-span-6 px-3 py-2.5 bg-[#EDEDED] rounded-[5px] focus-visible:outline-none"
              placeholder="استان"
              value={form.state}
              onChange={(e) => setForm({ ...form, state: e.target.value })}
            />
            <input
              type="text"
              className="lg:col-span-2 col-span-6 px-3 py-2.5 bg-[#EDEDED] rounded-[5px] focus-visible:outline-none"
              placeholder="شهر"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
            />
            <input
              type="text"
              className="lg:col-span-4 col-span-12 px-3 py-2.5 bg-[#EDEDED] rounded-[5px] focus-visible:outline-none"
              placeholder="ایمیل"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              type="text"
              className="lg:col-span-4 col-span-12 px-3 py-2.5 bg-[#EDEDED] rounded-[5px] focus-visible:outline-none"
              placeholder="شماره تماس ثابت"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <label
              className="cursor-pointer lg:col-span-4 col-span-12 flex items-center justify-between py-2.5 px-3 rounded-[5px] bg-[#EEE3CB]"
              htmlFor="national-card"
            >
              <span className="text-sm font-light">
                بارگذاری تصویر کارت ملی
              </span>
              <Image
                src={"/images/upload-icon.png"}
                alt=""
                width={17}
                height={19}
              />
            </label>
            <input type="file" id="national-card" className="hidden" />
          </div>
        </div>
        <div className="flex flex-col gap-y-5 pb-6">
          <span className="lg:text-xl text-base font-semibold lg:font-light lg:text-right text-center">
            درخواست و تخصص مورد نظر خود را دقیقا وارد نمایید
          </span>
          <div className="grid grid-cols-12 gap-4">
            <div className="lg:col-span-4 col-span-12 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-light">واحد مورد نظر:</span>
                <Select
                  slotProps={{
                    input: {
                      style: {
                        minWidth: "120px",
                      },
                    },
                    root: {
                      style: {
                        minWidth: "111px",
                        maxHeight: "26px",
                        border: "none",
                      },
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "& .MuiSelect-select": {
                      maxHeight: "26px !important",
                      backgroundColor: "#F3F3F3",
                      paddingY: "4px",
                      borderRadius: "7px",
                      fontSize: "13px",
                    },
                  }}
                  value={form.section}
                  onChange={(event) =>
                    setForm({ ...form, section: event.target.value })
                  }
                >
                  <MenuItem value={"1"}>درمان</MenuItem>
                  <MenuItem value={"2"}>پشتیبانی</MenuItem>
                  <MenuItem value={"3"}>پاراکلینیک</MenuItem>
                </Select>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-light">زیرمجموعه مورد نظر:</span>
                <Select
                  slotProps={{
                    input: {
                      style: {
                        minWidth: "120px",
                      },
                    },
                    root: {
                      style: {
                        minWidth: "111px",
                        maxHeight: "26px",
                        border: "none",
                      },
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "& .MuiSelect-select": {
                      maxHeight: "26px !important",
                      backgroundColor: "#F3F3F3",
                      paddingY: "4px",
                      borderRadius: "7px",
                      fontSize: "13px",
                    },
                  }}
                  value={form.subSection}
                  onChange={(event) =>
                    setForm({ ...form, subSection: event.target.value })
                  }
                >
                  {subSections
                    ?.filter((item) => item.sectionId === form.section)[0]
                    ?.items?.map((item) => (
                      <MenuItem value={item.id} key={item.id}>
                        {item.title}
                      </MenuItem>
                    ))}
                </Select>
              </div>
              <label
                className="cursor-pointer flex items-center justify-between py-2.5 px-3 rounded-[5px] bg-[#EEE3CB]"
                htmlFor="resume"
              >
                <span className="text-sm font-light">بارگذاری رزومه</span>
                <Image
                  src={"/images/upload-icon.png"}
                  alt=""
                  width={17}
                  height={19}
                />
              </label>
              <input type="file" id="resume" className="hidden" />
            </div>
            <textarea
              name=""
              id=""
              placeholder="توضیحات درخواست خود را بنویسید"
              className="lg:col-span-8 col-span-12 py-1.5 px-3 bg-[#EBEBEB] rounded-[5px] focus-visible:outline-none resize-none lg:h-auto h-[100px]"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
            <div className="col-span-4 lg:block hidden"></div>
            <div className="lg:col-span-8 col-span-12 flex lg:flex-row flex-col gap-y-2 items-center justify-between">
              <div className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  name=""
                  id="confirm"
                  onChange={(e) =>
                    setForm({ ...form, confirm: e.target.checked })
                  }
                  checked={form.confirm}
                />
                <label className="text-xs font-extralight" htmlFor="confirm">
                  با قوانین استخدامی مجموعه درمانی نیکان موافقم
                </label>
              </div>
              <button
                className={`w-[257px] h-[37px] flex justify-center items-center font-extrabold text-xs rounded-[5px] ${
                  form.confirm
                    ? "bg-primary-main text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
                onClick={handleSubmit}
              >
                ثبت درخواست
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
