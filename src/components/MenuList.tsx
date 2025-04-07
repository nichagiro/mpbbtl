import Link from "next/link";

interface Data {
  name: string;
  url: string;
}

interface MenuListProps {
  data: Data[];
}
const MenuList = ({ data = [] }: MenuListProps) => {
  return (
    <div className="services-details__services-list">
      <ul className="services-details__services list-unstyled">
        {
          data.map((item, index) =>
            <li key={index}>
              <Link href={item.url} title={item.name}>
                {item.name}
              </Link>
            </li>
          )
        }
      </ul>
    </div >
  )
}

export default MenuList