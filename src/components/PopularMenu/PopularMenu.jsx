import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === "popular")
                setMenu(popularItems)
            })

    }, [])

    console.log(menu)

    return (
        <section>
            <SectionTitle
                heading="From our menu"
                subHeading="Popolar Items"
            />
            <div>
                {
                    menu.map(item => (
                        <MenuItem
                            key={item._id}
                            item={item}
                        />
                    ))
                }

            </div>
        </section>
    );
};

export default PopularMenu;