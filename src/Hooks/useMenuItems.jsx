import useMenu from "./useMenu";


const useMenuItems = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const salad = menu.filter(item => item.category === "salad")
    const pizza = menu.filter(item => item.category === "pizza")
    const offered = menu.filter(item => item.category === "offered")
    return [dessert, salad, pizza, soup, offered];
};

export default useMenuItems;