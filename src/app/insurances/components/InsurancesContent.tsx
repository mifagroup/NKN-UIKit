"use client";

import Image from "next/image";
import {Button, CircularProgress} from "@mui/material";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { useFetch } from "@/utils/clientRequest";
import { components } from "@/lib/api/v1";
import { getHospitalColor } from "@/utils/hospitalHelpers";

const InsurancesContent = () => {
  const outpatientSwiperRefs = useRef<(SwiperType | null)[]>([]);
  const inpatientSwiperRefs = useRef<(SwiperType | null)[]>([]);
  
  // Fetch hospitals data from API
    const { data, isLoading, error } = useFetch().useQuery("get", "/hospitals", {
        params: {
            query: {
                include: "insurances",
            },
        },
    } as any);

  const hospitals: components["schemas"]["HospitalResource"][] = (data as any)?.data || [];

  if (isLoading) {
    return (
      <section className="w-full flex items-center justify-center py-20">
        <CircularProgress />
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full flex items-center justify-center py-20">
        <p className="text-red-500">خطا در بارگذاری اطلاعات بیمارستان‌ها</p>
      </section>
    );
  }

  return (
      <section className="w-full flex flex-col items-center text-center py-10"> {/* Title */}
        <h2
            className="text-xl font-semibold text-gray-800 mb-2">
          بیمه های طرف قرارداد با بیمارستان نیکان
        </h2>
        <p
            className="text-sm text-gray-600">
          با توجه به شرایط متغیر بیمه های تکمیلی، جهت کسب اطلاعات در رابطه با بیمه خود با شماره ۲۹۱۲۲۵۳۷ تماس حاصل
          فرمایید
        </p>
        {hospitals.map((hospital, hospitalIndex) => {
          const outpatientInsurances = (hospital.insurances as any)?.filter((insurance: any) => insurance.is_outpatient) || [];
          const inpatientInsurances = (hospital.insurances as any)?.filter((insurance: any) => insurance.is_inpatient) || [];

          return (
              <div className="hospital" key={hospital.name}>
                {/* Banner */}
                <div className="relative w-full max-w-5xl mt-8 lg:rounded-xl overflow-hidden shadow-md">
                  {/* Background image */}
                  <img
                      src={hospital.cover_image?.original_url || ""}
                      alt={`بنر ${hospital.name}`}
                      className="w-full h-[219px] lg:h-[179px] object-cover"
                  />

                  {/* Overlay */}
                  <div
                      className={`absolute inset-0 flex flex-col justify-between items-center text-white p-10 lg:flex-row`}
                  >
                    {/* Top content (image + title) */}
                    <div className="flex flex-col lg:flex-row items-center text-center lg:text-right gap-3">
                      <img
                          src={hospital.thumbnail?.original_url || ""}
                          alt={hospital.name}
                          width={107}
                          height={90}
                          className="max-h-[63px] max-w-[75px] lg:max-h-[90px] lg:max-w-[107px] lg:mr-5 invert brightness-0"
                      />
                      <h3 className="text-[14px] lg:text-[20px] font-semibold">
                        بیمه های طرف قرارداد با {hospital.name}
                      </h3>
                    </div>

                    {/* Button at the end (bottom on mobile, right on desktop) */}
                    {hospital.insurances_file?.original_url && (
                      <a
                        href={hospital.insurances_file.original_url}
                        className="text-[12px] lg:text-[14px] bg-white text-black font-light px-5 py-1 rounded-[8px]
                hover:bg-gray-100 transition mt-4 lg:mt-0"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        دانلود لیست بیمه این مرکز
                      </a>
                    )}
                  </div>
                </div>
                {/* Outpatient Section */}
                <div className="w-full max-w-5xl mt-5 rounded-md py-3">
                  <h4 className="text-[20px] leading-10 text text-center lg:text-right lg:rounded-[8px]
          text-black font-semibold pr-4"
                      style={{
                          backgroundColor: getHospitalColor(hospital?.name),
                      }}
                  >خدمات سرپایی
                  </h4>
                  <div className="flex items-center justify-between mt-5">
                    <Button
                        className="!min-w-fit !p-0 lg:!block !hidden"
                        onClick={() => {
                          outpatientSwiperRefs.current[hospitalIndex]?.slidePrev();
                        }}
                    >
                      <Image
                          src={"/images/arrow-right.png"}
                          alt="arrow-right"
                          width={6}
                          height={17}
                      />
                    </Button>
                    <Swiper
                        onBeforeInit={(swiper) => {
                          outpatientSwiperRefs.current[hospitalIndex] = swiper;
                        }}
                        loop={true}
                        breakpoints={{
                          0: {
                            slidesPerView: 4, // mobile devices
                            spaceBetween: 10,
                          },
                          640: {
                            slidesPerView: 6, // small tablets
                            spaceBetween: 10,
                          },
                          1024: {
                            slidesPerView: 11, // desktop
                            spaceBetween: 10,
                          },
                        }}
                        pagination={{
                          clickable: true,
                        }}
                        modules={[Navigation]}
                        className="max-w-[1091px] w-[90vw] lg:w-[80vw] justify-items-center items-center "
                    >
                      {outpatientInsurances.map((item: any, index: number) => (
                          <SwiperSlide key={`${item.title}-outpatient-${index}`}>
                            <div
                                className="flex flex-col items-center justify-center p-2 text-gray-700 transition">
                              <div className="w-16 h-16 bg-white flex items-center justify-center">
                                <Image
                                    src={item.logo?.original_url || ""}
                                    alt={item.title}
                                    width={64}
                                    height={64}
                                    className="object-contain"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                      ))}
                    </Swiper>
                    <Button
                        className="!min-w-fit !p-0 lg:!block !hidden"
                        onClick={() => {
                          outpatientSwiperRefs.current[hospitalIndex]?.slideNext();

                        }}
                    >
                      <Image
                          src={"/images/arrow-left.png"}
                          alt="arrow-right"
                          width={6}
                          height={17}
                      />
                    </Button>
                  </div>
                </div>
                {/* Inpatient Section */}
                <div className="w-full max-w-5xl mt-5 rounded-md py-3">
                  <h4 className="text-[20px] leading-10 text text-center lg:text-right lg:rounded-[8px]
          text-gray-800 font-semibold pr-4"
                      style={{
                          backgroundColor: getHospitalColor(hospital?.name),
                      }}
                  >خدمات بستری
                  </h4>
                  <div className="flex items-center justify-between mt-5">
                    <Button
                        className="!min-w-fit !p-0 lg:!block !hidden"
                        onClick={() => {
                          inpatientSwiperRefs.current[hospitalIndex]?.slidePrev();
                        }}
                    >
                      <Image
                          src={"/images/arrow-right.png"}
                          alt="arrow-right"
                          width={6}
                          height={17}
                      />
                    </Button>
                    <Swiper
                        onBeforeInit={(swiper) => {
                          inpatientSwiperRefs.current[hospitalIndex] = swiper;
                        }}
                        loop={true}
                        breakpoints={{
                          0: {
                            slidesPerView: 4, // mobile devices
                            spaceBetween: 10,
                          },
                          640: {
                            slidesPerView: 6, // small tablets
                            spaceBetween: 10,
                          },
                          1024: {
                            slidesPerView: 11, // desktop
                            spaceBetween: 10,
                          },
                        }}
                        pagination={{
                          clickable: true,
                        }}
                        modules={[Navigation]}
                        className="max-w-[1091px] w-[90vw] lg:w-[80vw] justify-items-center items-center "
                    >
                      {inpatientInsurances.map((item: any, index: number) => (
                          <SwiperSlide key={`${item.title}-inpatient-${index}`}>
                            <div
                                className="flex flex-col items-center justify-center p-2 text-gray-700 transition">
                              <div className="w-16 h-16 bg-white flex items-center justify-center">
                                <Image
                                    src={item.logo?.original_url || ""}
                                    alt={item.title}
                                    width={64}
                                    height={64}
                                    className="object-cover"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                      ))}
                    </Swiper>
                    <Button
                        className="!min-w-fit !p-0 lg:!block !hidden"
                        onClick={() => {
                          inpatientSwiperRefs.current[hospitalIndex]?.slideNext();

                        }}
                    >
                      <Image
                          src={"/images/arrow-left.png"}
                          alt="arrow-right"
                          width={6}
                          height={17}
                      />
                    </Button>
                  </div>
                </div>
              </div>
          );
        })}

      </section>
      
  );
};

export default InsurancesContent;
