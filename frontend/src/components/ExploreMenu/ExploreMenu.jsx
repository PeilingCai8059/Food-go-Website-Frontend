import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

function ExploreMenu ({category, setCategory}) {
    
    function chooseCategory(item){
        setCategory( prev => (
            prev === item.menu_name ?"All" : item.menu_name
        )
        )
    }
    return (
        <div >
            <div className="explore-menu" id = 'explore-menu'>
                <h1>Explore our menu</h1>
                <p className='explore-menu-text'>Choose from a diverse menu</p>
                <div className="explore-menu-list">
                    {menu_list.map((item, index) => {
                        return (
                            <div onClick={()=> chooseCategory(item)} key={index} className="explore-menu-list-item">
                                <img className={category === item.menu_name? "active" :""} src={item.menu_image} alt={item.menu_name} />
                                <p>{item.menu_name}</p>
                            </div>
                        )
                    })}
                </div>
                <hr />
            </div>

        </div>

    )
}

export default ExploreMenu