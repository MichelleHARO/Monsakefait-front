import React from "react";

function Collection({id}) {
    return (<div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked/>
            <div className="collapse-title text-xl font-medium">
                Nom de la collection : {id}
            </div>
            <div className="collapse-content">
{/*                <Carousel />*/}
            </div>
        </div>);
}

export default Collection;
