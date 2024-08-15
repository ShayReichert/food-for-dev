const Header = () => {
  return (
    <header className="bg-gray-100 shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        <div className="absolute left-1/2 transform -translate-x-1/2">
          {/* Placeholder for Logo */}
          <span>Logo</span>
        </div>
        <div className="ml-auto">
          {/* Placeholder for Profile Icon */}
          <span>Profile Icon</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
