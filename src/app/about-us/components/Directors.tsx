import Image from "next/image";

const items = [
    {
        id: 1,
        name: 'دکتر رضا نبی ئی',
        pos: 'رئیس هیئت مدیره',
        avatar: '/images/directors/01.jpg'
    },
    {
        id: 2,
        name: 'دکتر سیروس تابش',
        pos: 'مدیر عامل',
        avatar: '/images/directors/02.jpg'
    },
    {
        id: 3,
        name: 'دکتر رضا تقدیر',
        pos: 'نایب رئیس هیئت مدیره',
        avatar: '/images/directors/03.jpg'
    },
    {
        id: 4,
        name: 'دکتر حمید رضا زمانی',
        pos: 'عضو هیئت مدیره',
        avatar: '/images/directors/04.jpg'
    },
    {
        id: 5,
        name: 'مهندس نجم الدین آهوئی',
        pos: 'عضو هیئت مدیره',
        avatar: '/images/directors/05.jpg'
    },
    {
        id: 6,
        name: 'مهندس سعید تابش',
        pos: 'عضو هیئت مدیره',
        avatar: '/images/directors/06.jpg'
    },
    {
        id: 7,
        name: 'مهندس مسعود ضیائی',
        pos: 'عضو هیئت مدیره',
        avatar: '/images/directors/07.jpg'
    },
    {
        id: 8,
        name: 'دکترمهرداد میرمعصومی',
        pos: 'عضو هیئت مدیره',
        avatar: '/images/directors/08.jpg'
    },
    {
        id: 9,
        name: 'دکتر مصطفی مداح',
        pos: 'عضو هیئت مدیره',
        avatar: '/images/directors/09.jpg'
    },
    {
        id: 10,
        name: 'دکتر عدنان خسروی',
        pos: 'عضو هیئت مدیره',
        avatar: '/images/directors/10.jpg'
    }
];
const Directors = () => {
    return (
        <div className="lg:pt-[146px] pt-[100px] lg:pb-[142px] pb-[30px] max-w-[1091px] container">
            <div className="flex flex-col lg:gap-y-10 gap-y-6 lg:px-0 px-5">
                <p className="text-[24px] w-full font-black text-[#626262]  text-center">
                    هیئت مدیره گروه درمانی نیکان
                </p>
                <div
                    className="sm:flex grid grid-cols-2 items-center justify-center flex-wrap justify-items-center gap-[22px]">
                    {items.map((item) => (
                        <div className="flex flex-col w-[163px] gap-y-[25px]" key={item.id}>
                            <Image
                                unoptimized
                                src={item.avatar}
                                alt={item.name}
                                width={163}
                                height={272}
                                className="border-b-[4px] border-primary-main"
                            />
                            <div className="flex flex-col gap-y-1">
                                <span className="text-[14px] font-black text-[#626262] text-center">
                                    {item.name}
                                </span>
                                <span className="text-[14px] font-extralight text-[#626262] text-center">
                                  {item.pos}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Directors;
