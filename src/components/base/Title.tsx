const Title = ({ className, ...props }: React.ComponentProps<"h1">) => {
  return (
    <h1
      {...props}
      className={`mb-4 text-2xl font-extrabold ${className ?? ""}`}
    />
  );
};

export default Title;
