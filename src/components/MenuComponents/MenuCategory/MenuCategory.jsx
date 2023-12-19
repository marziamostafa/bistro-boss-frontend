import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div>
            {title && <Cover
                bgImg={coverImg}
                title="Our menu"
            />}
            <div className="grid md:grid-cols-2 gap-10 ">

                {
                    items.map(item => (
                        <MenuItem
                            key={item._id}
                            item={item}
                        />
                    ))
                }

            </div>
        </div>
    );
};

export default MenuCategory;