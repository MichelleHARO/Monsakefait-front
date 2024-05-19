import React from "react";

function Collection({title, content}) {
    return <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked/>
        <div className="collapse-title text-xl font-medium">
            {title}
        </div>
        <div className="collapse-content">
            <p>{content}</p>
        </div>
    </div>;
}

export default Collection;