import { createContext, useState } from "react"

const FormContext = createContext({})

export const FormProvider = ({ children }) => {

    const title = {
        0: 'Información del cliente',
        1: 'Información del vehículo',
        2: 'Servicios',
        3: 'CheckOut'
    }

    const [page, setPage] = useState(0)

    const [data, setData] = useState({
        clienteNombre: "",
        clienteApellido: "",
        clienteMail: "",
        clienteNumero: "",
        clienteTipoID: "",
        clienteId: "",
        vehicleMarca: "",
        vehicleModelo: "",
        vehiclePlaca: "",
        vehicleGas: "",
        vehicleComment: ""
    })

    const [isChecked,setIsChecked] = useState({
        cambioAceite: false,
        cambioFrenos: false,
        alineacionBalance: false,
        diagnosticoGeneral: false,
        revisionElectrico: false
    })

    const handleCheck = e =>{
        const name = e.target.name
        e.target.checked 
        ? setIsChecked(prevCheck => ({
            ...prevCheck, [name]:true
        }))
        :setIsChecked(prevCheck => ({
            ...prevCheck, [name]:false
        }))
    }


    const handleChange = e => {
        const value = e.target.value
        const name = e.target.name

        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const canSubmit = [...Object.values(data)].every(Boolean) && page === Object.keys(title).length - 1

    const canNextPage1 = Object.keys(data)
        .filter(key => key.startsWith('cliente'))
        .map(key => data[key])
        .every(Boolean)

    const canNextPage2 = Object.keys(data)
        .filter(key => key.startsWith('vehicle'))
        .map(key => data[key])
        .every(Boolean)

    const disablePrev = page === 0

    const disableNext =
        (page === Object.keys(title).length - 1)
        || (page === 0 && !canNextPage1)
        || (page === 1 && !canNextPage2)

    const prevHide = page === 0 && "remove-button"

    const nextHide = page === Object.keys(title).length - 1 && "remove-button"

    const submitHide = page !== Object.keys(title).length - 1 && "remove-button"

    return (
        <FormContext.Provider value={{ title, page, setPage, data, setData, isChecked, setIsChecked, handleCheck, canSubmit, handleChange, disablePrev, disableNext, prevHide, nextHide, submitHide }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext 