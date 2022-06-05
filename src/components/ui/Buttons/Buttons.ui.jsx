import classes from "./Buttons.ui.module.scss";

const Buttons = ({ children, type, ...props }) => {

  const { Btn, Primary, Secondary } = classes;
  const classList = [ Btn, ];
  const typeList = {
    'Primary': Primary,
    'Secondary': Secondary,
  };

  Object.keys(typeList).forEach((elem => elem === type && classList.push(typeList[elem])));


  return (
    <button className={ classList.join(' ') } { ...props }>
      { children }
    </button>
  );
};

export default Buttons;