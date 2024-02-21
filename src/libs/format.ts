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

export const calculateToMonths = (dateString: string) => {
  const [startDateString, endDateString] = dateString.split("-");
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);
  const yearDiff = endDate.getFullYear() - startDate.getFullYear();
  const monthDiff = endDate.getMonth() - startDate.getMonth();
  const dayDiff = endDate.getDate() - startDate.getDate();

  // 결과 계산
  const months =
    dayDiff < 0 ? yearDiff * 12 + monthDiff + 1 : yearDiff * 12 + monthDiff;

  return months;
};
