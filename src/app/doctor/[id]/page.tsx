import { components } from "@/lib/api/v1";
import { Bio, Booking, DoctorIntro, Patients } from "./components";

const page = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/doctors/${params.id}`,
    {
      cache: "no-cache",
    }
  ).then((res) => res.json());
  const doctor: components["schemas"]["DoctorResource"] = data?.data;
  if (!doctor) {
    return (
      <div className="container flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="container max-w-[990px] lg:pt-[83px] pt-[50px] lg:pb-[109px] pb-[30px]">
        {/* <Search /> */}
        <DoctorIntro doctor={doctor} />
        {doctor?.description ? <Bio doctor={doctor} /> : null}
        {/* <Certifications /> */}
        {/* <Areas /> */}
        {doctor?.portfolio?.length ? <Patients doctor={doctor} /> : null}
        {/* <Prices /> */}
        {/* <Blogs /> */}
      </div>
      <Booking doctor={doctor} />
    </div>
  );
};

export default page;
