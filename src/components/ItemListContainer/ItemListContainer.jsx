const ItemListContainer = ({greeting}) => {
    const greetingStyle = {
        fontSize: '6rem',
        textAlign: 'center',
        color: 'black',
        backgroundColor: 'green',
    


    }
    return (
        <div style={greetingStyle}>
            {greeting}
        </div>
    )
}

export default ItemListContainer;