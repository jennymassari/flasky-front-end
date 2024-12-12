import Cat from './Cat';
import PropTypes from  'prop-types';
const CatList = ({catData, onPetCat}) => {
    const catComponents = catData.map((cat) => {
        return (
            <Cat
            id={cat.id}
            name={cat.name}
            personality={cat.personality}
            color={cat.color}
            caretaker={cat.caretaker}
            petCount={cat.petCount}
            onPetCat={onPetCat}
            key={cat.id}
            /> );
    });
    return (
        <>
            <h2> Cat List </h2>
            <ul>
              {catComponents}
            </ul>
        </>
    );
}

CatList.propTypes = {
    catData: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        caretaker: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        personality: PropTypes.string.isRequired,
        petCount: PropTypes.number.isRequired,
    })).isRequired,
    onPetCat: PropTypes.func.isRequired,
};

export default CatList;

// const CatList = () => {
//     return (
//         <>
//             <h2> Cat List </h2>
//             <ul>
//                 <li>
//                     <h3>Name of Cat</h3>
//                     <p>🐈</p> 
//                     <button>Pet Cat</button>
//                 </li>
//             </ul>
//         </>
//     );
// }