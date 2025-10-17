import DropDownStyles from './DropDown.module.scss';
const DropdownComponent = (props: any) => {
  const { dropdownOpen, setDropdownOpen, options, renderDropDown } = props;
  console.log(dropdownOpen, setDropdownOpen);

  return (
    <div id={'options'} className={DropDownStyles?.dropdown}>
      <ul className={DropDownStyles?.dropdownMenu}>
        {renderDropDown
          ? renderDropDown(options)
          : options?.map((optionItem: any) => (
              <li key={optionItem.label}>{optionItem?.label}</li>
            ))}
      </ul>
    </div>
  );
};

export default DropdownComponent;
