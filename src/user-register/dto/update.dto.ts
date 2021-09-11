import { PartialType } from '@nestjs/mapped-types';
import {CreateRegisterDto} from './register.dto';
export class UpdateRegisterDto extends PartialType(CreateRegisterDto){}