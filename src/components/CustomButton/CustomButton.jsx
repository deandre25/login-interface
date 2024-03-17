const CustomButton = ({title, handleClick, imageUrl}) => {
  return (
    <button onClick={handleClick} className='auth-buttons_btn'>
      <img src={imageUrl} alt={`${title} icon`} />
      <p>{title}</p>
    </button>
  );
};

export default CustomButton;