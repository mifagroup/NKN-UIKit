import { components } from "@/lib/api/v1";
import { Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ShareLink from "@/app/(home)/_components/branchesAddresses/share";

const DoctorItem = ({
  doctor,
}: {
  doctor: components["schemas"]["DoctorResource"];
}) => {
  return (
    <div className="flex md:flex-row flex-col gap-y-4 items-stretch py-5">
      <div className="flex items-center gap-x-3.5 w-full">
        <Link href={`/doctor/${doctor.id}`} className={"!h-[188px] !w-[144px]"}>
          <Image
            src={doctor.image.original_url ?? ""}
            alt="doc"
            width={144}
            height={188}
            className="!h-[188px] !w-[144px] rounded-[17px] max-w-[144px]"
          />
        </Link>
        <div className="flex flex-col w-full">
          <Link
            href={`/doctor/${doctor.id}`}
            className="text-base font-bold text-black"
          >
            {doctor.full_name}
          </Link>
          <span className="text-base font-medium text-black">
            {doctor.sub_title}
          </span>
          <span className="pt-1.5 text-base font-extralight text-black">
            شماره نظام پزشکی: {doctor.code}
          </span>
          <span className="text-base font-extralight text-black pt-4">
            {doctor.short_description}
          </span>
          <div className="flex flex-row justify-between">
            <div className={`pt-[18px] items-center gap-x-1.5`}>
            <span className={`px-3.5 py-1 text-white text-[12px] font-medium  rounded-[8px]  ${
                doctor.hospital?.id == 1 ? "bg-[#E43C7F]" :
                    doctor.hospital?.id == 2  ? "bg-[#F4DE63]": 
                    doctor.hospital?.id == 3 ? "bg-[#4CC5AC]": 
                    doctor.hospital?.id == 4 ? "bg-[#4CB1DD]" : "" 
                
            }`}>
              {doctor.hospital?.name}
            </span>
            </div>
            <div className="pt-[18px] items-center ml-3 gap-x-1.5">
              {doctor.terms?.slice(0, 3)?.map((term) => (
                  <span
                      className="px-3.5 py-1 text-black text-[12px] font-extralight bg-[#F3F3F3] rounded-[8px]"
                      key={term.id}
                  >
                {term.title}
              </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-y-[13px] items-center">
        <Link
          href={doctor.redirect}
          className="text-[12px] font-extralight text-black lg:w-[200px] w-full h-[40px] rounded-[8px] bg-[#B9F4E8] flex items-center justify-center"
          target="_blank"
        >
          تعیین نوبت پزشک
        </Link>
        <button className="text-[12px] font-extralight text-black lg:w-[200px] w-full h-[40px] rounded-[8px] bg-[#ECECEC]">
          ویزیت و مشاوره آنلاین پزشک
        </button>
        <div className="pt-2.5 flex items-center gap-x-[15px] justify-center">
          <Link
            href={`/doctor/${doctor.id}`}
            className="text-[12px] font-extralight text-black"
          >
            بازدید صفحه پزشک
          </Link>
          <Divider orientation="vertical" className="!bg-[#D9D9D9] !w-[1px]" />
          <ShareLink
              url=""
              title={doctor?.full_name}
              label={
                <div className="text-[12px] font-extralight text-black">
                  اشتراک گذاری
                </div>
              }
          />
        </div>
      </div>
    </div>
  );
};

export default DoctorItem;
