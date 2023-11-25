const InitialData = () => [
  {
    id: 1,
    title: "Menerima Uang",
    date: "9 Juni 2023",
    balance: 100000,
    income: true,
  },
  {
    id: 2,
    title: "Beli Bensin",
    date: "9 Juni 2023",
    balance: 20000,
    income: false,
  },
  {
    id: 3,
    title: "Beli Nasi",
    date: "9 Juni 2023",
    balance: 10000,
    income: false,
  },
  {
    id: 4,
    title: "Beli Nasi",
    date: "9 Juni 2023",
    balance: 10000,
    income: false,
  },
];

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { InitialData, showFormattedDate };
