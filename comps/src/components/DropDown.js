import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";


function DropDown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const divElement = useRef();
    useEffect(() => {
        const handler = (event) => {
            
            if(!divElement.current){
                return;
            }
            if(!divElement.current.contains(event.target)){
                setIsOpen(false);
            }
        }
    
        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler);
        }
    },[])

    const handleClick = () =>{
        // setIsOpen((currentIsOpen) => !currentIsOpen);
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option) =>{
        // Close Dropdown
        setIsOpen(false);
        //What option did user selects??
        onChange(option);

    }

    const renderedOptions = options.map((option) => {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
    });

    // let content = 'Select...';
    // if(selection){
    //     content = selection.label;
    // }
    return (
        <div ref={divElement} className="w-48 relative">
            <Panel 
                className="flex justify-between items-center cursor-pointer" 
                onClick={handleClick}>{value?.label || 'Select...'} 
                <GoChevronDown className="text-lg" />
            </Panel>
            {isOpen && (
            <Panel className="absolute top-full">
                {renderedOptions}
            </Panel>
            )}
        </div> 
    )    
}

export default DropDown;









/* How would user describe using tis step by step
    Clicking the DropDown -- > event
    List of option Appears---> state
    Clicks on option---> event
    List of option diapperas---> state
    Item clicked appres on the box.--> state
-------------------------------------------------------
  Combine Steps, Remove Duplicates, Rewrite Description 
   Clicking the DropDown -- > event 

   Clicks on option---> event

   List of option Appears---> state
   List of option diapperas---> state

   Item clicked appres on the box.--> state
==================================================
   Clicking the DropDown -- > event --> handleSelect
   Clicks on option---> event--> handleToggleOpen or handleClick

   Menu opens/closes --> state-->isOpen--> boolean

   An item can be selected--> state--> selected-->Option|null

*/