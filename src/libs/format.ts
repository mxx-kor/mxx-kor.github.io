export const formatFullDate = (createdTime: string) => {
  return createdTime.slice(0, 10).replaceAll("-", ".");
};

export const formatShortDate = (createdTime: string) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [month, date] = createdTime.slice(5, 10).split("-");
  return `${months[parseInt(month) - 1]} ${date}`;
};
