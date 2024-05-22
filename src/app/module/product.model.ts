import { Schema, model, connect } from "mongoose";
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from "./student/student.interface";

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const GuardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const LocalGuardian = new Schema<LocalGuardian>({
  Name: { type: String, required: true },
  Occupation: { type: String, required: true },
  ContactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String,
        unique:true 
   },
  name: {
    type:userNameSchema,
    required:true
  },
  gender:{
    type:String, 
    enum:{
      values:["male", "female", "others"],
      message:'value must be :["male", "female", "others"]'
    },
  required:true},
  dateOfBirth: { type: String },
  email: { type: String, required: true, unique:true},
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type:String ,
    enum:["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
    message:'blood group must be :["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]'
  },
  presentAddress: { type: String },
  permanentAddress: { type: String },
  guardian: {
    type:GuardianSchema,
    required:true
  },
  localGuardian: {
    type:LocalGuardian,
    required:true
  },
  profileImg: { type: String },
  isActive: {
    type:String,
    enum:["active", "block"],
    default:'active'},
});

export const StudentModel = model<Student>("Student", studentSchema);
