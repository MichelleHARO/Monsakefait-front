import React from "react";
import BagCard from "./BagCard.jsx";

const sacs = [{id: 1, name: 'Mon sac', color: 'grey', items: [{id: 1, name: "zizi"}, {id: 2, name: "caca"}]}, {
    id: 2,
    name: 'Mon sac 2',
    color: 'violet',
    items: [{id: 1, name: "test1"}, {id: 2, name: "test2"}]
}, {id: 2, name: 'Mon sac 3', color: 'jaune', items: [{id: 1, name: "test5"}, {id: 2, name: "test6"}]}];

function Collection({id}) {
    return (<div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked/>
            <div className="collapse-title text-xl font-medium">             Nom de la collection : {id}
            </div>
            <div className="collapse-content">
                <div className={"flex flex-wrap"}>
                    {sacs.map((sac, index) => (<BagCard key={index} sac={sac}/>))}
                </div>
            </div>
        </div>);
}

export default Collection;
