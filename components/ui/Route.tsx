
import Link from "next/link"
import clsx from "clsx"


interface routeProps{
    route: string;
    label: string;
    isActive?: boolean;
    onClick?: ()=> void;
}


const route = ({route,label,isActive,onClick}: routeProps) => {
  return (
    <div>
        <Link 
        href={route}
        onClick={onClick}
        className={clsx(isActive && "text-primary")}
         >
        {label}
        </Link>
    </div>
  )
}

export default route