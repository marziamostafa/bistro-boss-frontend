import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";


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
                        console.log(item)
                    ))
                }

            </div>
        </section>
    );
};

export default PopularMenu;