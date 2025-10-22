import { components } from "@/lib/api/v1";
import { Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Booking = ({
  doctor,
}: {
  doctor: components["schemas"]["DoctorResource"];
}) => {
  return (
    <div className="mb-[109px] bg-[#19B796] justify-between lg:flex hidden">
      <div className="pr-[140px] pl-[102px] pt-[56px] pb-[68px] flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-1.5">
          <span className="text-[20px] text-white font-black">
            نوبت حضوری {doctor?.full_name} در بیمارستان نیکان
          </span>
          <span className="text-[15px] font-light text-white">
            تهران، اقدسیه ، ابتدای بلوار ارتش، ورودی اراج ، خیابان ۲۲ بهمن ،روبه
            روی بیمارستان نیکان
          </span>
        </div>
        <div className="flex flex-col gap-y-7">
          <div className="flex items-center gap-x-[33px]">
            <div className="flex items-center gap-x-[15px]">
              <Image
                src={"/images/phone-icon.png"}
                alt="phone-icon"
                width={47}
                height={44}
              />
              <span className="text-[15px] font-semibold text-white">
                ۰۲۱۲۹۱۲۹
              </span>
            </div>
            <Divider orientation="vertical" className="!w-[2px] !bg-white" />
            <span className="text-[15px] text-white font-semibold">
              روزها و ساعات پذیرش: همه روزه از ساعت 08:00 الی 24:00
            </span>
          </div>
          {doctor.redirect && (
               <Link
                 href={doctor?.redirect}
                 target="_blank"
                 className="bg-white w-full h-[56px] rounded-[14px] text-[20px] text-[#657975] font-semibold shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex justify-center items-center"
               >
                 تعیین وقت و نوبت از {doctor?.full_name}
               </Link>
          )}
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/images/map.png"}
          alt="map-image"
          width={596}
          height={349}
          className="h-full"
        />
        <button className="w-[219px] h-[52px] bg-primary-main rounded-[9px] text-white font-semibold text-[20px] absolute top-1/2 right-[50%] translate-x-[50%]">
          مسیریابی
        </button>
      </div>
    </div>
  );
};

export default Booking;
