import { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";
import { toast } from "react-toastify";
import { usePatientStore } from "../store";

type PatientDetailsProps = {
  patient: Patient;
};

const PatientDetails = ({ patient }: PatientDetailsProps) => {
  const { id, name, caretaker, email,date,symptoms } = patient;

  const deletePatient = usePatientStore((state) => state.deletePatient);
  const getPatientById = usePatientStore((state) => state.getPatientById);

  const handleClick = () => {
    deletePatient(id)
    toast('Paciente Eliminado',{
        type:"error"
  })

  }

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="ID" data={id} />

      <PatientDetailItem label="Nombre" data={name} />

      <PatientDetailItem label="Propietario" data={caretaker} />

      <PatientDetailItem label="Email" data={email} />

      <PatientDetailItem label="Fecha" data={date.toString()} />

      <PatientDetailItem label="Sintomas" data={symptoms} />

      <div className="flex flex-col lg:flex-row gap-3 justify-between  mt-10">

            <button
            onClick={() => getPatientById(id) }
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg" type="button">Editar</button>

            <button
            onClick={handleClick}
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg" type="button">Eliminar</button>

      </div>

    </div>
  );
};

export default PatientDetails;