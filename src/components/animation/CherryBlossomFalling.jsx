import '@styles/animation/cherryBlossom.scss'

const CherryBlossomFalling = () => {
    return (
        <div id="leaves">
            {Array.from({ length: 30 }, (_, index) => (
                <i className='leaf' key={index} />
            ))}
        </div>
    )
}

export default CherryBlossomFalling;