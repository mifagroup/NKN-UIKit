"use client";
import React from "react";
import toast from "react-hot-toast";
import { useFetch } from "@/utils/clientRequest";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const GENERIC_ERROR = "ثبت ایمیل با خطا مواجه شد، لطفا دوباره تلاش کنید";
const NETWORK_ERROR = "ارتباط با سرور برقرار نشد، لطفا دوباره تلاش کنید";

/**
 * openapi-react-query throws the parsed error body for non-2xx responses
 * and an Error for network failures. On 422 the specific Persian text is in
 * `errors.email[0]` (top-level `message` is generic); 429 only has `message`.
 */
const errorMessage = (error: unknown) => {
  if (error instanceof Error) return NETWORK_ERROR;
  const body = error as {
    message?: unknown;
    errors?: { email?: unknown[] };
  } | null;
  const fieldError = body?.errors?.email?.[0];
  if (typeof fieldError === "string" && fieldError) return fieldError;
  return typeof body?.message === "string" && body.message
    ? body.message
    : GENERIC_ERROR;
};

type Props = {
  /** stacked: input above button. inline: side by side on lg screens, stacked below. */
  variant?: "stacked" | "inline";
};

const NewsletterForm = ({ variant = "stacked" }: Props) => {
  const [email, setEmail] = React.useState("");
  const { mutateAsync, isPending: isSubmitting } = useFetch().useMutation(
    "post",
    "/newsletter"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const value = email.trim();
    if (!value) {
      toast.error("لطفا ایمیل خود را وارد کنید");
      return;
    }
    if (!EMAIL_PATTERN.test(value)) {
      toast.error("ایمیل نامعتبر است");
      return;
    }

    try {
      const data = await mutateAsync({ body: { email: value } });
      toast.success(data?.message || "ایمیل شما با موفقیت ثبت شد");
      setEmail("");
    } catch (error) {
      toast.error(errorMessage(error));
    }
  };

  const isInline = variant === "inline";
  const cx = (...classes: (string | false)[]) => classes.filter(Boolean).join(" ");

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className={cx(
        "flex flex-col gap-y-1.5",
        isInline && "lg:flex-row lg:gap-x-2.5"
      )}
    >
      <input
        type="email"
        name="email"
        autoComplete="email"
        dir="ltr"
        aria-label="ایمیل"
        placeholder="ایمیل خود را وارد کنید"
        className={cx(
          "bg-[#e1e1e1] w-full py-2 text-center rounded-[7px] text-[14px] placeholder:text-[14px] focus-visible:outline-none focus-visible:border-[#F56F95] border border-transparent",
          isInline && "lg:w-[280px]"
        )}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isSubmitting}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className={cx(
          "text-white bg-[#F56F95] w-full py-2.5 rounded-[7px] text-[14px] disabled:opacity-60 disabled:cursor-not-allowed",
          isInline && "lg:w-[215px]"
        )}
      >
        {isSubmitting ? "در حال ثبت..." : "عضویت در خبرنامه"}
      </button>
    </form>
  );
};

export default NewsletterForm;
