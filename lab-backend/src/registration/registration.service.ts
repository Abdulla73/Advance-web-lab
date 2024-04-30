import { Injectable } from '@nestjs/common';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { Registration } from 'src/entities/registration.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectRepository(Registration) private readonly RegistrationRepository: Repository<Registration>,
    
  ) {
  }
  async create(createRegistrationDto: CreateRegistrationDto): Promise<Registration> {
    const reg = await this.RegistrationRepository.create({...createRegistrationDto,});
    return await this.RegistrationRepository.save(reg);
  }

  findAll() {
    return `This action returns all registration`;
  }

  async findOne(Email:string) {
    return await this.RegistrationRepository.findOne({ where: { Email: Email } });
  }

  update(id: number, updateRegistrationDto: UpdateRegistrationDto) {
    return `This action updates a #${id} registration`;
  }

  remove(id: number) {
    return `This action removes a #${id} registration`;
  }
}
