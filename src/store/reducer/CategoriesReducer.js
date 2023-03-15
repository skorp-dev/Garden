const CATEGORIES_LOAD = "CATEGORIES_LOAD";

const defCategories = [
  {
    id: 1,
    title: "Annuals",
    image: "https://t3.ftcdn.net/jpg/00/22/88/20/360_F_22882073_pVvgidMRgCHF8WnYxdCUqd7sRiOvGwzv.jpg",
  },
  {
    id: 2,
    title: "Garden Art",
    image: "https://t3.ftcdn.net/jpg/00/22/88/20/360_F_22882073_pVvgidMRgCHF8WnYxdCUqd7sRiOvGwzv.jpg",
  },
  {
    id: 3,
    title: "Plant Care",
    image: "https://t3.ftcdn.net/jpg/00/22/88/20/360_F_22882073_pVvgidMRgCHF8WnYxdCUqd7sRiOvGwzv.jpg",
  },
  {
    id: 4,
    title: "Seasonal",
    image: "https://t3.ftcdn.net/jpg/00/22/88/20/360_F_22882073_pVvgidMRgCHF8WnYxdCUqd7sRiOvGwzv.jpg",
  },
  {
    id: 5,
    title: "Nursery",
    image: "https://t3.ftcdn.net/jpg/00/22/88/20/360_F_22882073_pVvgidMRgCHF8WnYxdCUqd7sRiOvGwzv.jpg",
  },
];

export const loadCategoriesAction = (payload) => ({
  type: CATEGORIES_LOAD,
  payload,
});

export const CategoriesReducer = (state = defCategories, action) => {
  if (action.type === CATEGORIES_LOAD) {
    return action.payload;
  }

  return state;
};
