import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {

  constructor(@InjectRepository(Task) private readonly taskRepository: Repository<Task>) {

  }
  create({ name, description }: CreateTaskDto) {
    const newTask = new Task(name, description);
    return this.taskRepository.save(newTask);
  }

  findAll() {
    return this.taskRepository.find();
  }

  async findOne(id: number) {
    const task = await this.taskRepository.findOne(id);

    if (!task) {
      throw new NotFoundException({
        status: 404,
        message: `Task with id: ${id} not found!`
      });
    };

    return task;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  async remove(id: number) {
    const task = await this.taskRepository.findOne(id);

    if (!task) {
      throw new NotFoundException({
        status: 404,
        message: `Task with id: ${id} not found!`
      });
    };

    return this.taskRepository.delete(id);
  }
}
