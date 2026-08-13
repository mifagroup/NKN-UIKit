import { components } from "@/lib/api/v1";

type HospitalDetail = Pick<
  components["schemas"]["HospitalResource"],
  | "id"
  | "name"
  | "full_name"
  | "address"
  | "fax"
  | "address_link"
  | "website_link"
  | "thumbnail"
>;

type DoctorHospital = components["schemas"]["TermResource"] & {
  hospital_details?: HospitalDetail[];
};

const HOSPITAL_THEMES = [
  {
    keywords: ["سپید"],
    background: "#FBF8F0",
    accent: "#F4DE63",
  },
  {
    keywords: ["اقدسیه"],
    background: "#FFF5F9",
    accent: "#E43C7F",
  },
  {
    keywords: ["غرب"],
    background: "#E7F4FA",
    accent: "#4CB1DD",
  },
  {
    keywords: ["جراحی محدود"],
    background: "#EFFBF9",
    accent: "#31D1B0",
  },
] as const;

const DEFAULT_THEME = {
  background: "#F0FBF9",
  accent: "#22CDA8",
};

const getHospitalTheme = (hospitalName: string) =>
  HOSPITAL_THEMES.find(({ keywords }) =>
    keywords.some((keyword) => hospitalName.includes(keyword))
  ) ?? DEFAULT_THEME;

const Booking = ({
  doctor,
}: {
  doctor: components["schemas"]["DoctorResource"];
}) => {
  const hospitals = (doctor.hospitals ?? []) as DoctorHospital[];
  const bookingLocations = hospitals.flatMap((hospital) =>
    (hospital.hospital_details ?? []).map((details) => ({
      details,
      termTitle: hospital.title ?? "",
    }))
  );

  if (!bookingLocations.length) return null;

  return (
    <section
      className="container mb-[109px] max-w-[990px] px-4 lg:px-0"
      aria-label={`مراکز نوبت‌دهی حضوری ${doctor.full_name}`}
    >
      <div className="flex flex-col gap-5">
        {bookingLocations.map(({ details, termTitle }) => {
          const hospitalName = details.name || termTitle;
          const hospitalFullName = details.full_name || hospitalName;
          const theme = getHospitalTheme(`${hospitalName} ${termTitle}`);
          const thumbnailUrl = details.thumbnail?.original_url;

          return (
            <article
              key={`${termTitle}-${details.id}`}
              className="flex min-h-[156px] overflow-hidden rounded-[14px] lg:min-h-[200px]"
              style={{ backgroundColor: theme.background }}
            >
              <div
                className="flex min-w-0 flex-1 flex-col justify-center border-l-2  px-4 py-5 sm:px-7 lg:px-9 lg:py-7"
                style={{ borderColor: theme.accent }}
              >
                <h2 className="text-[15px] font-bold leading-7 text-[#545454] sm:text-[17px] lg:text-[20px]">
                  نوبت حضوری {doctor.full_name} در {hospitalFullName}
                </h2>

                {details.address && (
                  <p className="mt-1 text-[11px] font-light leading-6 text-[#7D7D7D] sm:text-[12px] lg:text-[13px]">
                    {details.address}
                  </p>
                )}

                <div
                  className="my-3 h-px w-full opacity-15 lg:my-4"
                  style={{ backgroundColor: theme.accent }}
                />

                {details.fax && (
                  <div className="flex items-center gap-3 text-[11px] font-medium text-[#5B5B5B] sm:text-[12px] lg:text-[13px]">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: theme.accent }}
                    />
                    <span>شماره‌های تماس: {details.fax}</span>
                  </div>
                )}
              </div>

              <div className="flex w-[105px] shrink-0 flex-col items-center justify-center gap-2.5 px-3 sm:w-[145px] lg:w-[193px]">
                {thumbnailUrl && (
                  // The API can return the local backend host in development, so a
                  // native image keeps this runtime URL independent of Next image config.
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={thumbnailUrl}
                    alt={`نشان ${hospitalName}`}
                    width={112}
                    height={92}
                    className="h-[62px] w-auto object-contain brightness-0 opacity-40 sm:h-[74px] lg:h-[92px]"
                  />
                )}
                <span
                  className="max-w-full rounded-[4px] px-3 py-1 text-center text-[9px] font-medium leading-4 text-white lg:text-[11px]"
                  style={{ backgroundColor: theme.accent }}
                >
                  {hospitalName}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Booking;
