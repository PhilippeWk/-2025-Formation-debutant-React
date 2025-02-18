import s from "./style.module.css"
import { Search as SearchIcon} from "react-bootstrap-icons";

export function SearchBar({onSubmit}){

    function submit(e)
    {
        if( e.key === "Enter" && e.target.value.trim() !== ""){
            console.log(e.target.value);
            onSubmit(e.target.value);
        }
    }
    return (
        <>
            <SearchIcon size={15} className={s.icon}/>
            <input 
                type="text" 
                onKeyUp={submit}
                placeholder="Search a TV show you may like"
                className={s.input}
            />
        </>
    );
}