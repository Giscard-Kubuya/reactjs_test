const plantList = [
    'Banane','avocat','mangue','pomme','fraise'
];

function ShoppingList(){
    return (
        <ul>
            {
                plantList.map((plant,index)=>(
                    <li key={`${plant}-${index}`}>{plant}</li>
                ))
            }
        </ul>
    );
}

export default ShoppingList;