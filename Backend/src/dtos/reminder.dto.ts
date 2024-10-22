import { IsString, IsDateString, IsNotEmpty, IsOptional } from 'class-validator';

export class ReminderDto {
    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsString()
    description!: string;

    @IsDateString()  
    date!: string;   

    @IsString()
    @IsOptional()
    time!: string;

    @IsString()
    @IsOptional()
    color!: string;
}
