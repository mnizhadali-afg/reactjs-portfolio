import NavData from '../data.js';

function Navigation() {
  return (
    <nav className='py-8 sticky top-0 left-0 right-0 bg-farbe1-50 z-50 glassy-bg'>
      <div className='container mt-0 mx-auto'>
        <ul className='flex justify-between'>
          {NavData.map((nav) => (
            <li key={nav.label}>
              <a
                href={nav.href}
                className='text-sm uppercase tracking-[.125rem] font-semibold text-farbe1-600 active:text-farbe1-950 hover:text-farbe1-950'
              >
                {nav.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
export default Navigation;
