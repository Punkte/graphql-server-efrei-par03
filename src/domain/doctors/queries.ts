import { QueryResolvers, Speciality } from "../../types.js";
import { WithRequired } from "../../utils/mapped-types";

const doctorsData = [
  {
    name: 'Samia Mekame',
    speciality: Speciality.Ophtalmologist,
  },
  {
    name: 'Catherine Bedoy',
    speciality: Speciality.Psychologist,
  },
];


type DoctorQueries = WithRequired<QueryResolvers, 'doctors'>

export const doctorQueries: DoctorQueries = {
  doctors: (_, {specialities}) => specialities ? doctorsData.filter(doctor => specialities.includes(doctor.speciality)) : doctorsData,
}
