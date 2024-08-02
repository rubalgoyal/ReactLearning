import DropDown from "./components/DropDown";
import { useState } from "react";
function App (){
    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {  //newly seleected option
        setSelection(option); //ipdating selection piece of state
    }
    const options = [
        {label: 'Red', value: 'red'},
        {label: 'Green', value: 'green'},
        {label: 'Blue', value: 'blue'},
    ]
   return (
        <div className="flex">
        <DropDown options={options} value={selection} onChange={handleSelect} />
        <DropDown options={options} value={selection} onChange={handleSelect} />
        </div>
    );
 
}

export default App;

