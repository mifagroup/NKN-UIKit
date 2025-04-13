"use client";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Image from "next/image";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

const data = [
  {
    id: 1,
    title: "آموزش مادران باردار",
    image: "/images/service-slide-1.png",
  },
  {
    id: 2,
    title: "خدمات آزمایشگاهی در منزل",
    image: "/images/service-slide-2.png",
  },
  {
    id: 3,
    title: "پرستاری در منزل",
    image: "/images/service-slide-3.png",
  },
  {
    id: 4,
    title: "خدمات پزشکی در منزل",
    image: "/images/service-slide-4.png",
  },
  {
    id: 5,
    title: "اجاره تجهیزات پزشکی",
    image: "/images/service-slide-5.png",
  },
  {
    id: 6,
    title: "فالو آپ و بعد از ترخیص",
    image: "/images/service-slide-6.png",
  },
  {
    id: 7,
    title: "آموزش مادران باردار",
    image: "/images/service-slide-1.png",
  },
  {
    id: 8,
    title: "خدمات آزمایشگاهی در منزل",
    image: "/images/service-slide-2.png",
  },
  {
    id: 9,
    title: "پرستاری در منزل",
    image: "/images/service-slide-3.png",
  },
  {
    id: 10,
    title: "خدمات پزشکی در منزل",
    image: "/images/service-slide-4.png",
  },
  {
    id: 11,
    title: "اجاره تجهیزات پزشکی",
    image: "/images/service-slide-5.png",
  },
  {
    id: 12,
    title: "فالو آپ و بعد از ترخیص",
    image: "/images/service-slide-6.png",
  },
];

const RequestService = () => {
  const swiperRef = useRef<SwiperType>();

  const [form, setForm] = useState<{
    name: string;
    gender: string;
    age: string;
    number: string;
    phone: string;
    email: string;
    expertises: number[];
  }>({
    name: "",
    gender: "",
    age: "",
    number: "",
    phone: "",
    email: "",
    expertises: [],
  });

  const handleSubmit = () => {
    if (Object.values(form).some((value) => value === "")) {
      toast.error("لطفا تمامی فیلد ها را پر کنید.");
      return;
    }

    toast.success("درخواست شما با موفقیت ثبت شد.");
    setForm({
      name: "",
      gender: "",
      age: "",
      number: "",
      email: "",
      phone: "",
      expertises: [],
    });
  };

  return (
    <div className="py-[60px] bg-[#EDEDED]">
      <div className="max-w-[1000px] flex flex-col gap-y-10 mx-auto lg:px-0 px-5">
        <div className="flex flex-col gap-y-5">
          <span className="text-[24px] font-black text-[#3E3E3E]">
            فرم درخواست و دریافت خدمات
          </span>
          <span className="text-[15px] text-[#7D7D7D] font-light">
            این مجموعه از به‌روزترین امکانات و تجهیزات حال حاضر دنیا استفاده
            می‌کند و مجهز به بخش‌های تحت نظر یا Day Care است که آماده‌سازی بیمار
            برای عمل جراحی ومراقبت‌های پس از عمل تا ترخیص در آن صورت می‌گیرد.
            این مجموعه شامل کلینیک‌های گوارش، پستان، اورولوژی، داخلی مغز و
            اعصاب، فوق‌تخصص ارتوپدی،{" "}
          </span>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-3 lg:gap-y-5 gap-y-3 border-b border-b-[#ACACAC] pb-10">
          <input
            type="text"
            placeholder="نام و نام خانوادگی"
            className="col-span-1 h-[45px] bg-white text-black px-4 py-3 rounded-[12px] focus-visible:outline-none placeholder:text-black text-sm"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="شماره تماس"
            className="col-span-1 h-[45px] bg-white text-black px-4 py-3 rounded-[12px] focus-visible:outline-none placeholder:text-black text-sm"
            value={form.number}
            onChange={(e) => setForm({ ...form, number: e.target.value })}
          />
          <div className="col-span-1 grid grid-cols-4 gap-3">
            <div
              className={`lg:col-span-1 lg:h-auto h-[44px] col-span-6 rounded-[12px] flex items-center justify-center cursor-pointer ${
                form.gender === "male"
                  ? "bg-primary-main text-white"
                  : "bg-white"
              }`}
              onClick={() => setForm({ ...form, gender: "male" })}
            >
              مرد
            </div>
            <div
              className={`lg:col-span-1 lg:h-auto h-[44px] col-span-6 rounded-[12px] flex items-center justify-center cursor-pointer ${
                form.gender === "female"
                  ? "bg-primary-main text-white"
                  : "bg-white"
              }`}
              onClick={() => setForm({ ...form, gender: "female" })}
            >
              زن
            </div>
            <input
              type="number"
              className="lg:col-span-2 col-span-6 h-[45px] px-4 bg-white rounded-[12px] text-black text-sm flex items-center justify-center placeholder:!text-black"
              placeholder="سن"
              value={form.age}
              onChange={(e) => setForm({ ...form, age: e.target.value })}
            />
          </div>
          <input
            type="text"
            placeholder="ایمیل"
            className="col-span-1 h-[45px] bg-white text-black px-4 py-3 rounded-[12px] focus-visible:outline-none placeholder:text-black text-sm"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="number"
            placeholder="شماره تماس ثابت"
            className="col-span-1 h-[45px] bg-white text-black px-4 py-3 rounded-[12px] focus-visible:outline-none placeholder:text-black text-sm"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            value={form.phone}
          />
          <label
            className="flex justify-between font-light items-center col-span-1 p-3 rounded-[12px] bg-[#D9D9D9]"
            htmlFor="image"
          >
            بارگذاری تصویر
            <Image
              src={"/images/upload-icon.png"}
              alt=""
              height={22}
              width={22}
            />
          </label>

          <input type="file" id="image" className="hidden" />
        </div>
        <div className="flex flex-col gap-y-10">
          <span className="text-xl font-light text-black">
            درخواست و تخصص مورد نظر خود را دقیقا وارد نمایید
          </span>
          <div className="flex items-center gap-x-3 relative lg:w-full w-fit mx-auto">
            <ArrowForwardIosOutlinedIcon
              className="absolute lg:right-[-30px] right-[-50px] cursor-pointer"
              onClick={() => swiperRef.current?.slidePrev()}
            />
            <Swiper
              slidesPerView={6}
              spaceBetween={16}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },

                1024: {
                  slidesPerView: 6,
                },
              }}
              className="lg:max-w-full max-w-[150px]"
            >
              {data?.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`flex flex-col bg-white items-center justify-center h-[182px] rounded-[12px] gap-y-3 ${
                      form.expertises.includes(item.id) &&
                      "border-2 border-primary-main"
                    }`}
                    onClick={() => {
                      if (form.expertises.includes(item.id)) {
                        setForm({
                          ...form,
                          expertises: form.expertises.filter(
                            (id) => id !== item.id
                          ),
                        });
                      } else {
                        setForm({
                          ...form,
                          expertises: [...form.expertises, item.id],
                        });
                      }
                    }}
                  >
                    <div className="border-b border-b-[#8B8B8B] w-full flex justify-center">
                      <Image
                        src={item.image}
                        alt=""
                        width={78}
                        height={78}
                        className="object-contain h-[78px] w-[78px] pb-5"
                      />
                    </div>

                    <span className="text-[11px] text-[#686868] font-black">
                      {item.title}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <ArrowBackIosOutlinedIcon
              className="absolute lg:left-[-30px] left-[-50px] cursor-pointer"
              onClick={() => swiperRef.current?.slideNext()}
            />
          </div>
        </div>
        <button
          className="md:w-[420px] w-[250px] md:h-[62px] h-[50px] bg-primary-main text-white rounded-[12px] md:mr-auto mx-auto"
          onClick={handleSubmit}
        >
          ثبت و ارسال درخواست
        </button>
      </div>
    </div>
  );
};

export default RequestService;
