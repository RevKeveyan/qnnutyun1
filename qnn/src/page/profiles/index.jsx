import { useEffect, useState } from "react"
import { Menu } from "../../components/menu";
import { GetUsers } from "../../Platform/Api"

import './style.scss'

export const Profile = () =>{

    const [user, setUser] = useState([])

    useEffect(() => {
        Get()
    }, []);


    const Get = async () =>{
        const result = await GetUsers()

        if(result){
           setUser([...user, ...result.data])
           
        }
     
    }


    return(<>
    <Menu/>
    <div className="wrapper">
        {user.map((elem,i)=>{
            
       return <div className="profile" key={i}>
            <div className="profile_img">
                <img src={elem.file} alt={elem.name} />
            </div>
            <div className="profile_info">
                <p className="name"><span>{elem.name}</span></p>
                <p className="mail">email - <span>{elem.email}</span></p>
            </div>
        </div>
        })}
        </div>
    </>
    );
}