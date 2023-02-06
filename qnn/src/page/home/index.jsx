import { Menu } from "../../components/menu";
import Rev from '../../assets/mainPhoto.jpg'
import './style.scss'
export const Home = () =>{
    return (
        <div>
            <Menu/>
            <div className="info">
               
                
                <div className="info_img">
                    <img src={Rev} alt="Revik Keveyan" />
                </div>
                <div className="info_text">
                  <h2>Revik Keveyan</h2>
                  <p>Email - rkeveyan23@gmail.com</p>
                  <p><a href="https://github.com/">GitHub</a></p>
                </div>
            </div>
        </div>
    );
}