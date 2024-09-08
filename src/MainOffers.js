
let product = {
    name: 'Product Name',
    imageUrl: 'https://mediaslide-us.storage.googleapis.com/imgmodels/pictures/684/111965/large-1724862614-741f9600886b7f0ad92cf8f4488d0b32.jpg',
    catchPhrase: 'Save up to 30%',
}

function body () {
    return ( 
        <> 
        <div className="container">
            <div className="container-item">
                <img src={product.imageUrl} alt=''></img>
                <p>{product.catchPhrase}</p>
            </div>
            <div className="container-item">
                <img src={product.imageUrl} alt=''></img>
                <p>{product.catchPhrase}</p>
            </div>
            <div className="container-item">
                <img src={product.imageUrl} alt=''></img>
                <p>{product.catchPhrase}</p>
            </div>
            <div className="container-item">
                <img src={product.imageUrl} alt=''></img>
                <p>{product.catchPhrase}</p>
            </div>
            <div className="container-item">
                <img src={product.imageUrl} alt=''></img>
                <p>{product.catchPhrase}</p>
            </div>
            <div className="container-item">
                <img src={product.imageUrl} alt=''></img>
                <p>{product.catchPhrase}</p>
            </div>
        </div>
        </>
    )
}



export default body;    

/* Later will add filling the data fields with the 
actual data from the database / admin input */