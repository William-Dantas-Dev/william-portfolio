import FooterItem from './FooterItem';

const Footer = ({}: {
}) => {
  const Menus = [
    { title: "About", id: 1, src: "#"},
    { title: "Projects", id: 2, src: "#"},
    { title: "Contact", id: 3, src: "#"},
  ]

  return (
    <>
      <footer className="shadow mt-4 w-full p-4 px-10 flex md:items-center justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400 tracking-widest">© 2024
          <a href="#" className="hover:underline"> William Santos Dantas. </a>All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center text-sm text-gray-400 hover:text-gray-500">
          {/* {Menus.map((menu) => (
            <FooterItem key={menu.id} value={menu.title}/>
          ))} */}
        </ul>
      </footer>
    </>
  )
  
}

export default Footer;