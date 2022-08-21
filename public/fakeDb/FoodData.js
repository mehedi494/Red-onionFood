const obj = [
    // breakfast 
    {
        id: 101,
        name: "Begal And Cream Cheese",
        caption: "How we dream about our future",
        description: "How do you describe food Delicious meals are tasty, appetizing, scrumptious, yummy, luscious, delectable, mouth- watering, fit for a king, delightful, lovely, wonderful, pleasant, enjoyable, appealing, enchanting, charming",
        img: "https://i.ibb.co/dD5fgnP/breakfast1.png",
        price: 23.99,
        type: "brakfast",
    },
    {
        id: 102,
        name: "Breakfast sandwich",
        caption: "How we dream about our future",
        description: "How do you describe food Delicious meals are tasty, appetizing, scrumptious, yummy, luscious, delectable, mouth- watering, fit for a king, delightful, lovely, wonderful, pleasant, enjoyable, appealing, enchanting, charming",
        img: "https://i.ibb.co/r7cm7Jw/breakfast2.png",
        price: 9.99,
        type: "brakfast",
    },
    {
        id: 103,
        name: "Baked Chiken",
        caption: "How we dream about our future",
        description: "How do you describe food Delicious meals are tasty, appetizing, scrumptious, yummy, luscious, delectable, mouth- watering, fit for a king, delightful, lovely, wonderful, pleasant, enjoyable, appealing, enchanting, charming",
        img: "https://i.ibb.co/9bLT0Dn/breakfast3.png",
        price: 6.92,
        type: "brakfast",
    },
    {
        id: 104,
        name: "Eggs Benedict",
        caption: "How we dream about our future",
        "description": "How do you describe food Delicious meals are tasty, appetizing, scrumptious, yummy, luscious, delectable, mouth- watering, fit for a king, delightful, lovely, wonderful, pleasant, enjoyable, appealing, enchanting, charming",
        img: "https://i.ibb.co/9Hmpjdz/breakfast4.png",
        price: 8.51,
        type: "brakfast",
    },
    {
        id: 105,
        name: "Toast Crossiant Fired Egg",
        caption: "How we dream about our future",
        description: "How do you describe food Delicious meals are tasty, appetizing, scrumptious, yummy, luscious, delectable, mouth- watering, fit for a king, delightful, lovely, wonderful, pleasant, enjoyable, appealing, enchanting charming",
        img: "https://i.ibb.co/WvrG04w/breakfast5.png",
        price: 15.24,
        type: "brakfast",
    },
    {
        id: 106,
        name: "Full Breakfast Egg Toast Brunch",
        "caption": "How we dream about our future",
        description: "How do you describe food Delicious meals are tasty, appetizing, scrumptious, yummy, luscious, delectable, mouth- watering, fit for a king, delightful, lovely, wonderful, pleasant, enjoyable, appealing, enchanting, charming",
        img: "https://i.ibb.co/4WY9qjG/breakfast6.png",
        price: 7.89,
        type: "brakfast",
    },
    {
        id: 201,
        name: "Healthy Meal Plan",
        caption: "How we dream about our future",
        description: "How do you describe food Delicious meals are tasty, appetizing, scrumptious, yummy, luscious, delectable, mouth- watering, fit for a king, delightful, lovely, wonderful, pleasant, enjoyable, appealing, enchanting, charming",
        img: "https://i.ibb.co/WWwsnps/lunch1.png",
        price: 7.89,
        type: "lunce"
    },
    {
        id: 202,
        name: "Fired Chicken Bento",
        caption: "How we dream about our future",
        description: "How do you describe food Delicious meals are tasty, appetizing, scrumptious, yummy, luscious, delectable, mouth- watering, fit for a king, delightful, lovely, wonderful, pleasant, enjoyable, appealing, enchanting, charming",
        img: "https://i.ibb.co/WWwsnps/lunch2.png",
        price: 7.89,
        type: "lunce"
    },
    {
        id: 203,
        name: "Tarragone-Rubbed-Salmon",
        caption: "How we dream about our future",
        description: "How do you describe food Delicious meals are tasty, appetizing, scrumptious, yummy, luscious, delectable, mouth- watering, fit for a king, delightful, lovely, wonderful, pleasant, enjoyable, appealing, enchanting, charming",
        img: "https://i.ibb.co/WWwsnps/lunch3.png",
        price: 7.89,
        type: "lunce"
    },
    {
        id: 204,
        name: "Indian Lunce",
        caption: "How we dream about our future",
        description: "How do you describe food Delicious meals are tasty, appetizing, scrumptious, yummy, luscious, delectable, mouth- watering, fit for a king, delightful, lovely, wonderful, pleasant, enjoyable, appealing, enchanting, charming",
        img: "https://i.ibb.co/WWwsnps/lunch4.png",
        price: 7.89,
        type: "lunce"
    },
    {
        id: 205,
        name: "Beef Steak",
        caption: "How we dream about our future",
        description: "How do you describe food Delicious meals are tasty, appetizing, scrumptious, yummy, luscious, delectable, mouth- watering, fit for a king, delightful, lovely, wonderful, pleasant, enjoyable, appealing, enchanting, charming",
        img: "https://i.ibb.co/WWwsnps/lunch5.png",
        price: 7.89,
        type: "lunce"
    },
    {
        id: 206,
        name: "Honey-Soy-Glazed Salmon with Peppers",
        caption: "How we dream about our future",
        description: "How do you describe food Delicious meals are tasty, appetizing, scrumptious, yummy, luscious, delectable, mouth- watering, fit for a king, delightful, lovely, wonderful, pleasant, enjoyable, appealing, enchanting, charming",
        img: "https://i.ibb.co/WWwsnps/lunch6.png",
        price: 7.89,
        type: "lunce"
    },
    {
        id: 301,
        name: "Salmon with Grapfruit and Lentil Salad",
        caption: "How we dream about our future",
        description: "How do you describe food Delicious meals are tasty, appetizing, scrumptious, yummy, luscious, delectable, mouth- watering, fit for a king, delightful, lovely, wonderful, pleasant, enjoyable, appealing, enchanting, charming",
        img: "https://i.ibb.co/C8ptxLC/dinner1.png",
        price: 52.89,
        type:"dinner"

    },
    {
        id: 302,
        name: "Lemony Salmon Piccata",
        caption: "How we dream about our future",
        description: "How do you describe food Delicious meals are tasty, appetizing, scrumptious, yummy, luscious, delectable, mouth- watering, fit for a king, delightful, lovely, wonderful, pleasant, enjoyable, appealing, enchanting, charming",
        img: "https://i.ibb.co/C8ptxLC/dinner2.png",
        price: 52.89,
        type: "dinner"

    },
    {
        id: 303,
        name: "Pork Tenderloin With Quinao Pilaf",
        caption: "How we dream about our future",
        description: "How do you describe food Delicious meals are tasty, appetizing, scrumptious, yummy, luscious, delectable, mouth- watering, fit for a king, delightful, lovely, wonderful, pleasant, enjoyable, appealing, enchanting, charming",
        img: "https://i.ibb.co/C8ptxLC/dinner3.png",
        price: 52.89,
        type: "dinner"

    },
    {
        id: 304,
        name: "French Fries With Cheese",
        caption: "How we dream about our future",
        description: "How do you describe food Delicious meals are tasty, appetizing, scrumptious, yummy, luscious, delectable, mouth- watering, fit for a king, delightful, lovely, wonderful, pleasant, enjoyable, appealing, enchanting, charming",
        img: "https://i.ibb.co/WWwsnps/lunch4.png",
        price: 52.89,
        type: "dinner"

    },
    {
        id: 305,
        name: "Garlic Butter  Baked Salmon",
        caption: "How we dream about our future",
        description: "How do you describe food Delicious meals are tasty, appetizing, scrumptious, yummy, luscious, delectable, mouth- watering, fit for a king, delightful, lovely, wonderful, pleasant, enjoyable, appealing, enchanting, charming",
        img: "https://i.ibb.co/Hgs1wZ6/dinner5.png",
        price: 52.89,
        type: "dinner"

    },
    {
        id: 306,
        name: "Baked Chicken",
        caption: "How we dream about our future",
        description: "How do you describe food Delicious meals are tasty, appetizing, scrumptious, yummy, luscious, delectable, mouth- watering, fit for a king, delightful, lovely, wonderful, pleasant, enjoyable, appealing, enchanting, charming",
        img: "https://i.ibb.co/Hgs1wZ6/dinner6.png",
        price: 52.89,
        type: "dinner"

    }

]