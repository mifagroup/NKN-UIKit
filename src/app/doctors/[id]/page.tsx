import Page from "../page";
import type { Metadata } from "next";
import qs from "qs";

export async function generateMetadata({
                                         params,
                                         searchParams,
                                       }: {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
  try {
    const awaitedParams = await params;
    const awaitedSearchParams = await searchParams;

    const formattedParams = qs.stringify({
      filter: {
        search: awaitedSearchParams?.search,
        gender: awaitedSearchParams?.gender,
        terms: awaitedSearchParams?.terms,
        hospital: awaitedSearchParams?.hospital,
        slug: awaitedParams.id,
      },
      page: awaitedSearchParams?.page,
      per_page: 6,
    });

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/doctors?${formattedParams}`,
        { cache: "no-cache" }
    );
    const data = await res.json();

    return {
      title: data?.seo?.title || "فهرست کامل پزشکان و متخصصان مجموعه درمانی نیکان تهران",
      description: data?.seo?.description || "جستجو و نوبت‌دهی آنلاین با بهترین متخصصان و فوق‌تخصص‌های بیمارستان نیکان (غرب و اقدسیه). همین حالا نوبت بگیرید.",
    };
  } catch {
    return {
      title: "فهرست کامل پزشکان و متخصصان مجموعه درمانی نیکان تهران",
      description: "جستجو و نوبت‌دهی آنلاین با بهترین متخصصان و فوق‌تخصص‌های بیمارستان نیکان (غرب و اقدسیه). همین حالا نوبت بگیرید.",
    };
  }
}
const DoctorsList = async (props: {
  params: Promise<{ id: string }>;
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const searchParams = props.searchParams || {};
  const params = await props.params;
  const id = params.id;
  return (
    <div>
      <Page searchParams={Promise.resolve(searchParams)} slug={encodeURI(id)} />
    </div>
  );
};

export default DoctorsList;
