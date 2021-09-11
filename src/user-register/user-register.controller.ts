import {
    Controller,
    Get,
    Res,
    HttpStatus,
    Post,
    Body,
    Put,
    NotFoundException,
    Delete,
    Param,
    Query,
  } from '@nestjs/common';


  import {UserRegisterService} from './user-register.service';
  import {CreateRegisterDto} from './dto/register.dto';
  import {UpdateRegisterDto} from './dto/update.dto'
@Controller('user-register')
export class UserRegisterController {
    constructor(private userService:UserRegisterService){}
    @Get()
  async index() {
    return await this.userService.findAll();
  }
         

    @Post()
    public async newUser(@Res() res,@Body() createRegisterDto:CreateRegisterDto){
        try{
         const user=await this.userService.create(createRegisterDto);
         return res.status(HttpStatus.OK).json({
            message: 'User has been Registered successfully',
            user,
          });
        }
        catch(err){
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Error: User not registered!',
                status: 400,
              });
        }
    }

    @Put('/:id')
  public async updateUser(
    @Res() res,
    @Param('id') customerId: string,
    @Body() updateCustomerDto: UpdateRegisterDto,
  ) {
    try {
      const customer = await this.userService.update(
        customerId,
        updateCustomerDto,
      );
      if (!customer) {
        throw new NotFoundException('User does not exist!');
      }
      return res.status(HttpStatus.OK).json({
        message: 'User has been successfully updated',
        customer,
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error:User not updated!',
        status: 400,
      });
    }
  }

    @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.userService.delete(id);
  }
}
