


import FoodCard from './FoodCard';

import UseFoods from '../../Hooks/useFoods';



const FoodContainer = ({ categories ,match}) => {
    const [food] = UseFoods()

    let filterFood = []


    if (categories) {

        filterFood = food.filter((e) => e.type == categories)

        // console.log("filterfood", filterFood);
    }
    if (match.length) {

        filterFood = [...match]

        // console.log("filterfood", filterFood);
    }

    else {
        filterFood = food
    }

    return (




        <div>




            <div className='container px-4 my-3' id='foodContainer'>
                <div className=" row justify-content-evenly  overflow-hidden">
                    
                    {match.length ? <p> by Search found <span className="fw-bold">{match.length}</span></p>: " "}


                    {
                        filterFood.length ?
                            filterFood?.map((food) => <FoodCard key={food.id} food={food}></FoodCard>) :
                            <div className="text-center " style={{ width: "100%", height: "100vh" }}>
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                    }







                </div>
            </div>

        </div >
    )

};

export default FoodContainer;
