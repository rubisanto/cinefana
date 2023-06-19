import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      {/* header with link to acces to home, articles, catalogue, forum */}
      <nav className="bg-gray-800 p-2 mt-0 w-full"> {/* ajoutez ici des classes pour définir la couleur d'arrière-plan, l'espacement et la largeur */}
    <div className="container mx-auto flex flex-wrap items-center"> 
        
        <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
            <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                <li className="mr-3">
                    <a className="inline-block py-2 px-4 text-white no-underline" href="/">Home</a>
                </li>
                <li className="mr-3">
                    <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="/articles">Articles</a>
                </li>
                <li className="mr-3">
                    <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="/catalogue">Catalogue</a>
                </li>
                <li className="mr-3">
                    <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="/forum">Forum</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
      
    </header>
  );
}

export default Header;