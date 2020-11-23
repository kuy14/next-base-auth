export default [
  {
    id: 14,
    title: "Today",
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
  {
    id: 15,
    title: "Meeting Event",
    start: new Date(2020, 10, 18, 7, 0, 0),
    end: new Date(2020, 10, 20, 19, 30, 0),
  },
];
