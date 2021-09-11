import { HttpException, Injectable } from '@nestjs/common';
import {COURSES} from './courses.mock';
import {data} from './create_data.mock';

@Injectable()
export class CoursesService {
courses=COURSES;
data=data;

getCourses(): Promise<any> {
    return new Promise(resolve => {
        resolve(this.courses);
    });
}

getCourse(courseId): Promise<any> {
    let id = Number(courseId);
    return new Promise(resolve => {
        const course = this.courses.find(course => course.id === id);
        if (!course) {
            throw new HttpException('Course does not exist', 404)
        }
        resolve(course);
    });
}

addCourse(course): Promise<any> {
    return new Promise(resolve => {
        this.data.push(course);
        resolve(this.data);
    });
}
deleteCourse(courseId): Promise<any> {
    let id = Number(courseId);
    return new Promise(resolve => {
        let index = this.courses.findIndex(course => course.id === id);
        if (index === -1) {
            throw new HttpException('Course does not exist', 404);
        }
        this.courses.splice(index, 1);
        resolve(this.courses);
    });
}
}
