import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsString, MinLength} from "class-validator";

export class CreateMessageRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    message: string;
}
