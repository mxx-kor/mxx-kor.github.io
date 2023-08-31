const options = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
} as const;

export const dateFormat = (createdTime: string) => {
  const date = new Date(createdTime);
  return new Intl.DateTimeFormat("ko-KR", options)
    .format(date)
    .replaceAll(" ", "")
    .slice(0, -1);
};
