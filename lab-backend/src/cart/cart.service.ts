import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from 'src/entities/cart.entity';

@Injectable()
export class CartService {

  constructor(
    @InjectRepository(Cart) private readonly CurtRepository: Repository<Cart>,
    
  ) {
  }
  async create(createCartDto: CreateCartDto) {
    const reg = await this.CurtRepository.create({...createCartDto,});
    return await this.CurtRepository.save(reg);
  }
  async findAll() {
    return await this.CurtRepository.find({});
  }
  async findOne(id: number) {
    return await this.CurtRepository.findOne({ where: { id: id } })
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    return await this.CurtRepository.update(id,updateCartDto);
  }

  async remove(id: number) {
    const Product =  await this.CurtRepository.findOneBy({
      id: id
    });
    await this.CurtRepository.remove(Product)
  }
  
}
