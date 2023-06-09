import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <nav
        className='container-fluid'
        style={{
          position: 'sticky',
          zIndex: 99,
          top: 0,
          backgroundColor: '#11191f',
          boxShadow: 'rgba(115, 130, 140, 0.2) 0px 1px 0px 0px',
        }}
      >
        <ul>
          <li style={{ padding: '2px' }}>
            <img
              alt='logo'
              src={`/logo.png`}
              style={{
                width: '48px',
                imageRendering: 'pixelated',
              }}
            />
          </li>
          <li>
            <h2 style={{ margin: 0 }}>Kupoapo</h2>
          </li>
        </ul>
        <ul>
          <li>
            <details role='list' dir='rtl'>
              <summary aria-haspopup='listbox' role='link'>
                Navigator
              </summary>
              <ul role='listbox'>
                <li style={{ backgroundColor: 'var(--mark-color)' }}>
                  Minecraft
                </li>
                <li>
                  <a href='/minecraft/commands'>Commands</a>
                </li>
                <li>
                  <a href='/minecraft/recipes'>Recipes</a>
                </li>
                <li>
                  <a href='/minecraft/textures'>Textures</a>
                </li>
                <li>
                  <a href='/minecraft/startup'>Startup</a>
                </li>
                <li style={{ backgroundColor: 'var(--mark-color)' }}>Misc</li>
                <li>
                  <a href='/misc/japanese'>Japanese</a>
                </li>
                <li>
                  <a href='/misc/finance'>Finance</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>
      <main className='container'>
        <Outlet />
      </main>
    </>
  );
}
