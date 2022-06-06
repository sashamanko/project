// Imports | Module classes
// __________________________________________________
import classes from "./Buttons.ui.module.scss";

const Buttons = ({ children, type, ...props }) => {

  const { Btn, Primary, Secondary } = classes;
  const classList = [ Btn, ];
  const typeList = {
    'primary': Primary,
    'secondary': Secondary,
  };

  // * Object.keys() - Трансформация обэкт в список с ключами обэкта
  Object.keys(typeList).find(elem => elem === type && classList.push(typeList[elem]));


  return (
    <button className={ classList.join(' ') } { ...props } type="button">
      { children }
    </button>
  );
};

export default Buttons;