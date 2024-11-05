const FooterItem = ({value}: {
  value: String
}) => {
  return (
    <li>
      <a href="#" className="hover:underline me-4 md:me-6 text-gray-400 hover:text-gray-500 tracking-widest">{value}</a>
    </li>
  )
  
}

export default FooterItem;