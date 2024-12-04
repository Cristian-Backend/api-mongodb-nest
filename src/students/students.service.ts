import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './schema/student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentsService {

  constructor(
    @InjectModel(Student.name) private StudentModel: Model<Student>
  ){}

  async create(createStudentDto: CreateStudentDto) {
    const createdStudent = new this.StudentModel(createStudentDto);
    return await createdStudent.save();
  }

  async findAll() {
    return this.StudentModel.find().exec(); 
  }

  async findOne(id: string) {
    return this.StudentModel.findById(id).exec();  // traigo por id
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    return this.StudentModel.findByIdAndUpdate(id, updateStudentDto).exec(); 
  }

  async remove(id: string) {
    return this.StudentModel.findById(id).exec();
  }
}
