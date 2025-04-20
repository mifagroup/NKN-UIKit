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
    <div className="flex gap-x-2.5">
      <input
        type="text"
        placeholder="ایمیل خود را وارد کنید"
        className="text-center w-[280px] text-[#AAAAAA] bg-[#E1E1E1] text-[14px] h-[33px] rounded-[7px] focus-visible:outline-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleSendEmail();
          }
        }}
      />
      <button
        className="text-center text-[14px] text-white rounded-[7px] h-[33px] bg-[#F56F95] w-[215px]"
        onClick={handleSendEmail}
      >
        عضویت در خبرنامه
      </button>
    </div>
  );
};

export default MagazineForm;
