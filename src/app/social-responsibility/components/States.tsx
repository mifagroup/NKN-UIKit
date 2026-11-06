// Placeholders shown while the list is loading or unavailable, sized like the
// real Hero and Content so the footer does not jump up into the page.

const sectionClassName =
  "lg:mt-[57px] flex flex-col gap-y-8 lg:pb-[57px] pb-[46px] lg:border-b border-b-[#ACACAC]";

const actionButtonClassName =
  "text-sm text-[#696969] bg-[#f2f2f2] sm:w-[360px] w-full rounded-[11px] h-[52px] flex items-center justify-center";

export const PageTitle = () => (
  <div className="flex-col items-center gap-y-1 lg:flex hidden">
    <h1 className="text-xl leading-[33px] font-semibold text-center">
      نیکان و مسئولیت اجتماعی
    </h1>
  </div>
);

export const LoadingState = () => (
  <div role="status" aria-live="polite">
    <span className="sr-only">در حال بارگذاری…</span>
    <div className={sectionClassName}>
      <PageTitle />
      <div className="animate-pulse bg-[#E5E5E5] lg:h-[346px] h-[456px] w-full" />
    </div>
    {[0, 1].map((index) => (
      <div
        key={index}
        className="lg:mt-16 flex flex-col lg:gap-y-7 gap-y-3 pb-[34px] animate-pulse"
      >
        <div className="bg-[#E5E5E5] h-[310px] w-full" />
        <div className="flex flex-col gap-y-5 lg:px-0 px-4">
          <div className="bg-[#E5E5E5] h-6 w-2/3 sm:w-1/3 rounded" />
          <div className="bg-[#EEEEEE] h-4 w-5/6 sm:w-1/2 rounded" />
        </div>
      </div>
    ))}
  </div>
);

const MessageBox = ({
  message,
  onRetry,
}: {
  message: string;
  onRetry?: () => void;
}) => (
  <div className={sectionClassName}>
    <PageTitle />
    <div className="min-h-[400px] flex flex-col items-center justify-center gap-y-6 px-4 text-center">
      <p className="text-base text-[#3F3F3F]">{message}</p>
      {onRetry && (
        <button type="button" onClick={onRetry} className={actionButtonClassName}>
          تلاش دوباره
        </button>
      )}
    </div>
  </div>
);

export const ErrorState = ({ onRetry }: { onRetry: () => void }) => (
  <MessageBox
    message="دریافت گزارش‌های مسئولیت اجتماعی انجام نشد. دوباره تلاش کنید."
    onRetry={onRetry}
  />
);

export const EmptyState = () => (
  <MessageBox message="هنوز گزارشی منتشر نشده است. به‌زودی گزارش‌های جدید را اینجا می‌بینید." />
);

export const LoadMoreError = ({ onRetry }: { onRetry: () => void }) => (
  <div className="flex flex-col items-center gap-y-4 mt-9 mb-16 lg:mx-0 mx-4 text-center">
    <p className="text-sm text-[#3F3F3F]">
      دریافت موارد بیشتر انجام نشد. دوباره تلاش کنید.
    </p>
    <button type="button" onClick={onRetry} className={actionButtonClassName}>
      تلاش دوباره
    </button>
  </div>
);
