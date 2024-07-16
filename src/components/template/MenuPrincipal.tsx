import { TbHexagonNumber1, TbLayout2, } from "react-icons/tb";
import { IoMdAppstore } from "react-icons/io";
import { BsListCheck } from "react-icons/bs";
import MenuItem from './MenuItem'

export default function MenuPrincipal() {
    return (
        <aside className="w-80 bg-zinc-900">
            <nav className="flex flex-col p-5">
                <MenuItem link="/primeiro">
                    <TbHexagonNumber1 />
                    <span>Primeiro Componente</span>
                </MenuItem>
                <MenuItem link="/flexbox">
                   <TbLayout2 />
                    <span>Flexbox</span>
                </MenuItem>
                <MenuItem link="/pagina">
                    <IoMdAppstore />
                    <span>Componente Página</span>
                </MenuItem>
                <MenuItem link="/estado">
                    <BsListCheck />
                    <span>Componente com Estado</span>
                </MenuItem>
            </nav>
        </aside>
    )
}