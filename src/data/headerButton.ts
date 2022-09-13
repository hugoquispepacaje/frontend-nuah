import HeaderButton from "../models/HeaderButton";

const HeaderButtons:HeaderButton[] = [
  {
    id: 1,
    title: 'Products',
    url: '/',
    hasIcon: false,
  },
  {
    id: 2,
    title: 'My Cart',
    url: '/cart',
    hasIcon: true,
    icon: 'pi pi-shopping-cart',
  },
];

export default HeaderButtons;