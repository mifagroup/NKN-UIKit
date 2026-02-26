import { components } from "@/lib/api/v1";
import Image from "next/image";
import Link from "next/link";

interface ContentProps {
  data: components["schemas"]["BlogResource"][];
  hasNextPage: boolean;
  handleLoadMore: any;
}

const Content = ({
  data = [],
  hasNextPage = false,
  handleLoadMore,
}: ContentProps) => {
  return (
    <>
      {data.map((item, index) => (
        <div
          className={`lg:mt-16 flex flex-col lg:gap-y-7 gap-y-3 pb-[34px] ${
            index !== data.length - 1 && "lg:border-b border-[#ACACAC]"
          }`}
          key={item.id || index}
        >
          <Image
              unoptimized
            src={item.main_image?.original_url}
            alt={item.title || ""}
            width={1103}
            height={310}
            className="h-[310px] !important object-cover"
          />
          <div className="flex justify-between items-center lg:px-0 px-4">
            <div className="flex flex-col ggap-y-2">
              <span className="text-xl font-semibold">{item.title}</span>
              <span className="text-sm font-light mt-5">
                {item.sub_title?.length > 100
                  ? `${item.sub_title.slice(0, 100).replace(/\s+\S*$/, "")}...`
                  : item.sub_title}
              </span>
            </div>
            <div className="items-center gap-x-2 lg:flex hidden">
              <Image
                src={"/images/share-icon.png"}
                alt=""
                width={20}
                height={18}
                className={"object-cover"}
              />
              <Link
                href={`/social-responsibility/${item.slug}`}
                className="text-xl font-semibold"
              >
                گزارش کامل رویداد
              </Link>
            </div>
          </div>
          {/*    <div
            dangerouslySetInnerHTML={{ __html: item?.description ?? "" }}
            className="text-sm font-light leading-[24px] lg:px-0 px-4"
          /> */}

          <div className="self-end lg:px-0 px-4 flex items-center gap-x-2.5 lg:hidden">
            <Image
              src={"/images/share-icon.png"}
              alt=""
              width={20}
              height={18}
            />
            <Link
              href={`/social-responsibility/${item.slug}`}
              className="text-sm font-semibold bg-[#F0F0F0] rounded-md p-2"
            >
              گزارش کامل رویداد
            </Link>
          </div>
        </div>
      ))}

      {hasNextPage && (
        <div className="flex justify-center mt-9 mb-16 lg:mx-0 mx-4">
          <button
            onClick={handleLoadMore}
            className="text-sm text-[#696969] bg-[#f2f2f2] sm:w-[360px] w-full rounded-[11px] h-[52px] flex items-center justify-center"
          >
            موارد بیشتر
          </button>
        </div>
      )}
    </>
  );
};

export default Content;
