import {SchemaFactory,Schema,Prop} from '@nestjs/mongoose';
import {Document,Types} from 'mongoose';

@Schema()

export class Register extends Document{
    @Prop()
    firstName:string


    @Prop({ unique: true })
    lastName: string;
  
    @Prop({ unique: true })
    email: string;
  
    @Prop()
    phone: string;
  
    @Prop()
    address: string;
  
    @Prop()
    description: string;

}
export const RegisterSchema=SchemaFactory.createForClass(Register);