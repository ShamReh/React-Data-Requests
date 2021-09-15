import {Link, useParams} from 'react-router-dom';

 const Users = () => {
     const {id} = useParams(); 
     return(
         <>  
             <h1>Users</h1>
             <strong>Who is the best? (*Select Sham)</strong>
             <ul>
                 <li>
                     <Link to="/users/1">Sham</Link>
                 </li>
                 <li>
                     <Link to="/users/2">Sam</Link>
                 </li>
                 <li>
                     <Link to="/users/3">Chris</Link>
                 </li>
                 <li>
                     <Link to="/users/4">Tom</Link>
                 </li>
                 <li>
                     <Link to="/users/5">Emily</Link>
                 </li>
             </ul>
             <p><strong>{id}</strong></p>
         </>
     );
 }
 export default Users;