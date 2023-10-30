import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { withRoomConsumer } from '../Context'
import Loading from './Loading'

//Using higher order component
function RoomContainer({context}){
  const {loading, sortedRooms, rooms} = context
        if(loading)
          return <Loading/>
        
        return (
          <div>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
          </div>
        )
}

export default withRoomConsumer(RoomContainer);

//Normal way using arrow function
// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {value => {
//         console.log(value);
//         const {loading, sortedRooms, rooms} = value
//         if(loading)
//           return <Loading/>
        
//         return (
//           <div>
//             <RoomsFilter rooms={rooms}/>
//             <RoomsList rooms={sortedRooms}/>
//           </div>
//         )
//       }}
//     </RoomConsumer>
//   )
// }
