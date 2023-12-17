import MenuItem from "../../Shared/MenuItem/MenuItem";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";


const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular")


    return (
        <section className="mb-12">
            <SectionTitle
                heading="From our menu"
                subHeading="Popolar Items"
            />
            <div className="grid md:grid-cols-2 gap-10 ">
                {
                    popular.map(item => (
                        <MenuItem
                            key={item._id}
                            item={item}
                        />
                    ))
                }

            </div>
            <div className="flex justify-center">
                <button className="btn btn-outline border-0 border-b-4">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;