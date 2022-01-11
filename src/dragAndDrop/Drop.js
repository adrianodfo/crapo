const Drop = props => {
    const dragOver = evnt => {
        evnt.preventDefault();
    };
    const drop = evnt => {
        const droppedItem = evnt.dataTransfer.getData("drag-item");
        if (droppedItem) {
            props.onDropped(droppedItem);
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
