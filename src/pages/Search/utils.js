const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

export const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

export const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};

export const mock = [{
  id: 1,
  day: "2020-11-07T16:37:40.000Z",
  seats: 1,
  price: 1500,
  driverId: 1,
  fromId: 57,
  toId: 28,
  driver: {
      id: 1,
      firstName: "Madiyar",
      lastName: "Bolatov",
      phone: "87772223344",
      password: "12345",
      avatar: "https://picsum.photos/seed/1/200/200"
  },
  from: {
      id: 57,
      name: "Абай",
      region: "Қарағанды облысы",
      map: "https://yandex.kz/map-widget/v1/-/CCUQIMDucB"
  },
  to: {
      id: 28,
      name: "Алға",
      region: "Ақтөбе облысы",
      map: "https://yandex.kz/map-widget/v1/-/CCUQIIEYWB"
  },
  passengers: [{
      id: 2,
      firstName: "Еркін",
      lastName: "Багдатов",
      phone: "87776568726",
      password: "12345",
      avatar: "https://picsum.photos/seed/2/200/200"
  }]
}, {
  id: 2,
  day: "2021-03-13T00:00:00.000Z",
  seats: 4,
  price: 2000,
  driverId: 5,
  fromId: 2,
  toId: 1,
  driver: {
      id: 5,
      firstName: "Ербол",
      lastName: "Жанабаев",
      phone: "87057057575",
      password: "12345",
      avatar: "https://picsum.photos/seed/5/200/200"
  },
  from: {
      id: 2,
      name: "Талдықорған",
      region: "Алматы облысы",
      map: "https://yandex.kz/map-widget/v1/-/CCUQIEB8SD"
  },
  to: {
      id: 1,
      name: "Алматы",
      region: "Алматы облысы",
      map: "https://yandex.kz/map-widget/v1/-/CCUQIEqH8A"
  },
  passengers: []
}, {
  id: 3,
  day: "2021-01-31T00:00:00.000Z",
  seats: 1,
  price: 2000,
  driverId: 5,
  fromId: 1,
  toId: 11,
  driver: {
      id: 5,
      firstName: "Ербол",
      lastName: "Жанабаев",
      phone: "87057057575",
      password: "12345",
      avatar: "https://picsum.photos/seed/5/200/200"
  },
  from: {
      id: 1,
      name: "Алматы",
      region: "Алматы облысы",
      map: "https://yandex.kz/map-widget/v1/-/CCUQIEqH8A"
  },
  to: {
      id: 11,
      name: "Сарқанд",
      region: "Алматы облысы",
      map: "https://yandex.kz/map-widget/v1/-/CCUQIEWRdC"
  },
  passengers: []
}];