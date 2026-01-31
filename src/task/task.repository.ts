import { Injectable } from "@nestjs/common";
import { Task } from "generated/prisma/browser";
import { PrismaService } from "src/prisma/prisma.service";



@Injectable()
export class TaskRepository {
  constructor(private prisma: PrismaService) {}

  async getAllTask(): Promise<Task[]> {
    return await this.prisma.task.findMany()
  }

  async getTaskById(id: string): Promise<Task | null> {
    return await this.prisma.task.findUnique( {where: {id}})
  }

   async createTask(data: Task): Promise<Task> {
    return await this.prisma.task.create({data})
  }

  async updateTask(id: string, data: Task): Promise<Task> {
    return await this.prisma.task.update( {where: {id}, data})
  }

  async deleteTask(id: string): Promise<Task>{
    return await this.prisma.task.delete({where: {id}})
  }
}