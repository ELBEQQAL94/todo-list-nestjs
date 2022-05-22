import { IsString, Max, Min, min } from "class-validator";

export class CreateTaskDto {
    @IsString()
    name: string;

    @IsString()
    description: string;
}
