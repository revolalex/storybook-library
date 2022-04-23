import './DeleteButton.css'

const DeleteButton = () => {
    const handleClick =(e)=>{
        e.preventDefault();
        const button = document.querySelector(".button-delete")
        if(!button.classList.contains('delete')) {
            button.classList.add('delete');
            setTimeout(() => button.classList.remove('delete'), 3200);
        }
    }


    return (
        <button className="button-delete" onClick={handleClick}>
            <div className="trash-delete">
                <div className="top-delete">
                    <div className="paper-delete"></div>
                </div>
                <div className="box-delete"></div>
                <div className="check-delete">
                    <svg viewBox="0 0 8 6">
                        <polyline points="1 3.4 2.71428571 5 7 1"></polyline>
                    </svg>
                </div>
            </div>
            <span>Delete Item</span>
        </button>
    )
}
export default DeleteButton;