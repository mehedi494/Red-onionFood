


import FoodCard from './FoodCard';





const FoodContainer = ({ content }) => {


    return (

        <div>

            <div className='container px-4 my-3' id='foodContainer'>
                <div className=" row justify-content-evenly  overflow-hidden">

                    {content.length ? <p> by Search found <span className="fw-bold">{content.length}</span></p> : " "}
                    {
                        content.length ? content.map((food) => <FoodCard key={food.id} food={food}></FoodCard>) :
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
