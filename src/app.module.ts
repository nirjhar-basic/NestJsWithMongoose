import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { UserRegisterModule } from './user-register/user-register.module';
import { LoginModule } from './login/login.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [CoursesModule, UserRegisterModule, LoginModule, ForgotPasswordModule,MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
