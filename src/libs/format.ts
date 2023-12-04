const defaultOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
};

export const dateFormat = (
  createdTime: string,
  locales?: "ko-KR" | "en-US",
  options?: Intl.DateTimeFormatOptions,
) => {
  return new Date(createdTime).toLocaleDateString(
    locales ?? "ko-KR",
    options ?? defaultOptions,
  );
};
