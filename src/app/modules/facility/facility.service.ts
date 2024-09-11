import { TFacility } from "./facility.interface";
import { Facility } from "./facility.model";



const createFacilityInDB = async (studentData: TFacility) => {
  // Create a new student record in the database
  const result = await Facility.create(studentData);
  return result;
};

const getAllFacilityInDb = async () => {
  const result = await Facility.find();
  return result;
};


export const FacilityService = {
  createFacilityInDB,
  getAllFacilityInDb,
  
};
