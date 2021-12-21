const Drag = props => {
    const startDrag = evnt => {
        evnt.dataTransfer.setData("drag-item", props.dataItem);
    }
    return (
        <div draggable onDragStart={startDrag}>
            {props.children}
        </div>
    )
}

export default Drag;