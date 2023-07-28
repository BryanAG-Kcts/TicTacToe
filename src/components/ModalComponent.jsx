export const ModalWinner = ({winner, resetGame}) => {

    if(!winner) {
        return null
    }

    return(
        <div className="modalWinner absolute w-full h-full top-0 left-0 grid place-content-center">
            <div className="flex flex-col gap-5 items-center justify-center w-64 h-64 bg-dark-beige border-4 rounded border-black">
                <p>
                    {
                        winner == "?" ? "EMPATE" : "GANADOR"
                    }
                </p>
                <span className="w-20 h-20 grid place-content-center text-3xl rounded border-4 border-black bg-light-beige">
                    {winner}
                </span>
                <button onClick={resetGame} className="px-5 py-2 border-2 border-black rounded bg-light-beige">¿Empezar de nuevo?</button>
            </div>
        </div>
    )
}