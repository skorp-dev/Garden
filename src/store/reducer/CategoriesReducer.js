const CATEGORIES_LOAD = "CATEGORIES_LOAD";

const defCategories =[
  {
    title:"Annuals",
    image:"/category_img/1.jpeg",
  },
  {
    title:"Garden Art",
    image:"/category_img/1.jpeg",
  },
  {
    title:"Plant Care",
    image:"/category_img/1.jpeg",
  },
  {
    title:"Seasonal",
    image:"/category_img/1.jpeg",
  },
  {
    title:"Nursery",
    image:"/category_img/1.jpeg",
  },
]

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