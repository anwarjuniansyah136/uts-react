const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Anwar Juniansyah Harahap. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Built with <a href="https://reactjs.org/" className="underline">React</a> and <a href="https://tailwindcss.com/" className="underline">Tailwind CSS</a>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
