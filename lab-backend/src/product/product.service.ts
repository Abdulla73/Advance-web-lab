import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product) private readonly ProductRepository: Repository<Product>,
    
  ) {
  }
  async create(createProductDto: CreateProductDto) : Promise<Product>{
    const reg = await this.ProductRepository.create({...createProductDto,});
    return await this.ProductRepository.save(reg);
  }
  

  async findAll() {
    return await this.ProductRepository.find({});
  }

  async findOne(id: number) {
    return await this.ProductRepository.findOne({ where: { id: id } })
  }

  async update(id: number, UpdateProductDto: UpdateProductDto) {
    return await this.ProductRepository.update(id,UpdateProductDto);
  }

  async remove(id: number) {
    const Product =  await this.ProductRepository.findOneBy({
      id: id
    });
    await this.ProductRepository.remove(Product)
  }
}
