
import { Injectable ,NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Register} from './schemas/register.schemas';
import {UpdateRegisterDto} from './dto/update.dto'

@Injectable()
export class UserRegisterService {

    constructor(@InjectModel(Register.name) private readonly registerModel: Model<Register>) {}

    async findAll(): Promise<any> {
        return await this.registerModel.find().exec();
      }
      public async update(
        userId: string,
        updateCustomerDto: UpdateRegisterDto,
      ): Promise<any> {
        const existingUser = await this.registerModel.findByIdAndUpdate(
          { _id: userId },
          updateCustomerDto,
        );
    
        if (!existingUser) {
          throw new NotFoundException(`Customer #${userId} not found`);
        }
    
        return existingUser;
      }
    


    public async create(createRegisterDto){
        const newRegsiter=await new this.registerModel(createRegisterDto);
        return newRegsiter.save();
    }
    async delete(id: string): Promise<any> {
        return await this.registerModel.findByIdAndDelete(id).exec();
      }
}
