"use client";
import React from "react";
import toast from "react-hot-toast";

const MagazineForm = () => {
  const [email, setEmail] = React.useState<string>("");

  const handleSendEmail = () => {
    if (!email.length) {
      toast.error("لطفا ایمیل خود را وارد کنید");
    } else if (!email.includes("@")) {
      toast.error("ایمیل نامعتبر است");
    } else {
      toast.success("ایمیل شما با موفقیت ثبت شد");
      setEmail("");
    }
  };

  return (
    <div className="flex flex-col gap-y-1.5">
      <input
        type="text"
        placeholder="ایمیل خود را وارد کنید"
        className="bg-[#e1e1e1] w-full py-2 text-center rounded-[7px] text-[14px] placeholder:text-[14px] focus-visible:outline-none focus-visible:border-[#F56F95] border border-transparent"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleSendEmail();
          }
        }}
      />
      <button
        className="text-white bg-[#F56F95] w-full py-2.5 rounded-[7px] text-[14px]"
        onClick={handleSendEmail}
      >
        عضویت در خبرنامه
      </button>
    </div>
  );
};

export default MagazineForm;
