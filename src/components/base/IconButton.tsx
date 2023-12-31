import { cn } from "@/libs/core";

const IconButton = ({
  className,
  type = "button",
  ...props
}: React.ComponentProps<"button">) => {
  return (
    <button
      aria-label="icon-button"
      type={type}
      className={cn(
        "hover:bg-secondary flex h-9 w-9 items-center justify-center rounded-lg transition-all",
        className,
      )}
      {...props}
    />
  );
};

export default IconButton;
