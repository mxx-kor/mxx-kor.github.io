const options = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
} as const;

type LocalesType = "en-US" | "ko-KR";
interface DateOptionsProps {
  month: "numeric" | "2-digit" | "long" | "short" | "narrow";
  day: "numeric" | "2-digit";
  year?: "numeric" | "2-digit";
}

export const dateFormat = (
  createdTime: string,
  locales?: LocalesType,
  dateOptions?: DateOptionsProps,
) => {
  const date = new Date(createdTime);
  return new Intl.DateTimeFormat(
    locales ?? "ko-KR",
    dateOptions ?? options,
  ).format(date);
};
