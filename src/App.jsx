function App() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen space-y-10"> 
      <h1 className="text-5xl font-extrabold text-center">
        <a href="" className="text-[#61dbfb] hover:text-[#56c8e5] transition-colors">
          React
        </a> + <a href="" className="text-sky-400 hover:text-sky-500 transition-colors">
          TailwindCSS
        </a> + <a href="" className="text-violet-500 hover:text-violet-600 transition-colors">
          Vite
        </a> starter
      </h1>
      <a
        href="https://github.com/ifalfahri/react-tailwind-starter"
        target="_blank"
        className="bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-black hover:shadow-lg transition-all duration-300"
      >
        ⭐️ on GitHub
      </a>
    </main>
  );
}

export default App;
