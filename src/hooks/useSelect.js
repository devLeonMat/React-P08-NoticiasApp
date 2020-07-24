import React, {useState} from "react";

const useSelect = (stateInicial, opciones) => {

    // state del custom hook
    const [state, actualizarState] = useState(stateInicial);

    const SelectNoticias = () => (
        <select className="browser-default"
                value={state}
                onChange={e => actualizarState(e.target.value)}
        >

            {opciones.map(opc => (
                <option key={opc.value} value={opc.value}>{opc.label}</option>
            ))}

        </select>
    );

    return [state, SelectNoticias];
};

export default useSelect;
