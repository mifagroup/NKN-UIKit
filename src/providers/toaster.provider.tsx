import { Toaster } from "react-hot-toast";

const ToasterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

export default ToasterProvider;
