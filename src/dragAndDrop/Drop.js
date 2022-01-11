const Drop = props => {
    const dragOver = evnt => {
        evnt.preventDefault();
    };
    const drop = evnt => {
        const dragData = JSON.parse(evnt.dataTransfer.getData("text/plain"));
        if (dragData) {
            props.onDropped(dragData);
        }
    };
    return (
        <div
            onDragOver={dragOver}
            onDrop={drop}
        >
            {props.children}
        </div>
    );
};

export default Drop;
