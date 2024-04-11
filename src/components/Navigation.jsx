import NavData from '../data.js';

function Navigation() {
  return (
    <nav className='py-6 absolute top-0 left-0 right-0 bg-farbe1-50 z-50'>
      <div className='container mt-0 mx-auto'>
        <ul className='flex justify-between'>
          {NavData.map((nav) => (
            <li key={nav.label}>
              <a href={nav.href}>{nav.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
export default Navigation;
