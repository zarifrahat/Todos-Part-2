import React from 'react';


export default ({todos =[], receiveTodo}) => {
    const allLiTodos = todos.map((todo, idx)=>{
        
        return <li key={idx}>{todo[Object.keys(todo)[0]]['title']}</li>
    })

        return (<> 
                    <ul>{allLiTodos}</ul>
                </>
            )

}  


// const InventoryList = ({ inventory = [], addToCart }) => {
//     return (
//       <div>
//         <ul className="list">
//           <h4>Stuff For Sale</h4>
//           {inventory.map(item => (
//             <li className="inventory-item" key={item.id}>
//               <p>{item.name}:</p>
//               <p>{item.price}</p>
//               <button onClick={(e) => addToCart(item.id)}>Add To Cart</button>
//             </li>
//           ))}
//         </ul>
//         <AddItemFormContainer />
//       </div>
//     );
//   };
// export default InventoryList;