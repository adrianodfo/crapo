import React from "react";

const draggingStyle = {
    opacity: 1
}

const Drag = props => {
    const [isDragging, setIsDragging] = React.useState(false);
    const DragStart = evnt => {
        setIsDragging(true);
        evnt.dataTransfer.setData("text/plain", JSON.stringify(props.dataItem));
    }
    const DragEnd = () => setIsDragging(false);
    return (
        <div
            style={isDragging ? draggingStyle : {}}
            draggable
            onDragStart={DragStart}
            onDragEnd={DragEnd}>
            {props.children}
        </div>
    )
}

export default Drag;