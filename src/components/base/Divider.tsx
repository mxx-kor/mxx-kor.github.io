import { cn } from "@/libs/core";

interface DividerProps extends React.ComponentProps<"hr"> {
  type: "horizontal" | "vertical";
}

const Divider = ({
  type = "horizontal",
  className,
  ...props
}: DividerProps) => {
  const dividerStyle =
    type === "vertical"
      ? "relative inline-block align-middle border-l-2 w-px h-5 mx-2"
      : "border-1 w-full";
  return <hr {...props} className={cn(dividerStyle, className)} />;
};

export default Divider;
