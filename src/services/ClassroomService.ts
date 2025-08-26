import { AxiosRequestConfig } from 'axios'
import BaseService from './BaseService'

class ClassroomService extends BaseService {
    
  constructor() {
    super()
  }

  async getClassrooms(config?: AxiosRequestConfig) {
    return this.handleRequest(
      this.AxiosInstance.get(`${this.path}/classroom`, config)
    )
  }

  async getClassroomById(id: string, config?: AxiosRequestConfig) {
    return this.handleRequest(
      this.AxiosInstance.get(`${this.path}/classroom/${id}`, config)
    )
  }

  async createClassroom(data: any, config?: AxiosRequestConfig) {
    return this.handleRequest(
      this.AxiosInstance.post(`${this.path}/classroom`, data, config)
    )
  }

  async updateClassroom(id: string, data: any, config?: AxiosRequestConfig) {
    return this.handleRequest(
      this.AxiosInstance.put(`${this.path}/classroom/${id}`, data, config)
    )
  }

  async deleteClassroom(id: string, config?: AxiosRequestConfig) {
    return this.handleRequest(
      this.AxiosInstance.delete(`${this.path}/classroom/${id}`, config)
    )
  }

  async getClassroomStudents(classroomId: string, config?: AxiosRequestConfig) {
    return this.handleRequest(
      this.AxiosInstance.get(
        `${this.path}/classroom/${classroomId}/students`,
        config
      )
    )
  }

  async addStudentToClassroom(
    classroomId: string,
    studentIds: string,
    config?: AxiosRequestConfig
  ) {
    return this.handleRequest(
      this.AxiosInstance.post(
        `${this.path}/classroom/${classroomId}/students/${studentIds}`,
        {},
        config
      )
    )
  }

  async removeStudentFromClassroom(
    classroomId: string,
    studentId: string,
    config?: AxiosRequestConfig
  ) {
    return this.handleRequest(
      this.AxiosInstance.delete(
        `${this.path}/classroom/${classroomId}/students/${studentId}`,
        config
      )
    )
  }

  async getClassroomTeachers(classroomId: string, config?: AxiosRequestConfig) {
    return this.handleRequest(
      this.AxiosInstance.get(
        `${this.path}/classroom/${classroomId}/teachers`,
        config
      )
    )
  }

  async addTeacherToClassroom(
    classroomId: string,
    teacherId: string,
    config?: AxiosRequestConfig
  ) {
    return this.handleRequest(
      this.AxiosInstance.post(
        `${this.path}/classroom/${classroomId}/teachers/${teacherId}`,
        {},
        config
      )
    )
  }

  async removeTeacherFromClassroom(
    classroomId: string,
    teacherId: string,
    config?: AxiosRequestConfig
  ) {
    return this.handleRequest(
      this.AxiosInstance.delete(
        `${this.path}/classroom/${classroomId}/teachers/${teacherId}`,
        config
      )
    )
  }
}

export default ClassroomService.getInstance()
