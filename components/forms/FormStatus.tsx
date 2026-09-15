type FormStatusProps = {
  message: string;
  status: "idle" | "success" | "error";
};

const FormStatus = ({ message, status }: FormStatusProps) => {
  if (!message) return null;

  const isSuccess = status === "success";

  return (
    <div
      className={`mt-6 border-l-2 px-4 py-3 text-sm leading-6 ${isSuccess ? "border-(--success) bg-[#edf3e9] text-(--success)" : "border-(--error) bg-[#f8ecee] text-(--error)"}`}
      role={status === "error" ? "alert" : "status"}
      aria-live="polite"
    >
      {message}
    </div>
  );
};

export default FormStatus;
