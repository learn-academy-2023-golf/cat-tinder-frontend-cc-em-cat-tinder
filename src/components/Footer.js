const Footer = () => {
  return (
    <footer className="w-100 m-auto position-fixed bottom-0 end-0">
      <small className="p-4 bg-secondary d-block text-center text-white">
        &copy; Cat Tinder | {new Date().getFullYear()}
      </small>
    </footer>
  );
};

export default Footer;
