import './CompleteOrderButton.css'

const CompleteOrderButton = () => {

    const handleClick = ()=>{
        let button = document.getElementById('complete-order-button')

        if(!button.classList.contains('delete')) {
            button.classList.add('animate')
            setTimeout(() => {
                button.classList.remove('animate');
            }, 10000);
        }
    }
    return (

        <button id="complete-order-button" className="order" onClick={handleClick}>
            <span className="default">Complete Order</span>
            <span className="success">Order Placed
                <svg viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
            </span>
            <div className="box"></div>
            <div className="truck">
                <div className="back"></div>
                <div className="front">
                    <div className="window"></div>
                </div>
                <div className="light top"></div>
                <div className="light bottom"></div>
            </div>
            <div className="lines"></div>
        </button>

    )
}

export default CompleteOrderButton;