import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { UserRegisterService } from './user-register.service';
import { UserRegisterController } from './user-register.controller';
import {Register,RegisterSchema} from './schemas/register.schemas';

@Module({
  imports:[MongooseModule.forFeature([
    {name:Register.name,schema:RegisterSchema}
  ])],
  providers: [UserRegisterService],
  controllers: [UserRegisterController]
})
export class UserRegisterModule {}
