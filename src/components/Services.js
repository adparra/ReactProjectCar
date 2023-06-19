import useFormContext from "../hook/useFormContext"

const Services = () => {
    const { isChecked, handleCheck } = useFormContext()

    const content = (
        <>
            <label htmlFor="cambioAceite">
                <input type="checkbox" id="cambioAceite" name="cambioAceite" checked={isChecked.cambioAceite} onChange={handleCheck} />
                Cambio de aceite
            </label>
            <label htmlFor="cambioFrenos">
                <input type="checkbox" id="cambioFrenos" name="cambioFrenos" checked={isChecked.cambioFrenos} onChange={handleCheck} />
                Cambio de frenos
            </label>
            <label htmlFor="alineacionBalanceo">
                <input type="checkbox" id="alineacionBalanceo" name="alineacionBalanceo" checked={isChecked.alineacionBalanceo} onChange={handleCheck} />
                Alineación y balanceo
            </label>
            <label htmlFor="diagnosticoGeneral">
                <input type="checkbox" id="diagnosticoGeneral" name="diagnosticoGeneral" checked={isChecked.diagnosticoGeneral} onChange={handleCheck} />
                Diagnóstico general
            </label>
            <label htmlFor="revisionElectrico">
                <input type="checkbox" id="revisionElectrico" name="revisionElectrico" checked={isChecked.revisionElectrico} onChange={handleCheck} />
                Revisión de sistema eléctrico
            </label>
        </>
    )

    return content
}
export default Services