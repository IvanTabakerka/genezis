import { Controller, Get, Post, Req, Body } from '@nestjs/common';
import {CreateCompaniesDto} from "./dto/companies.create";
import {CompaniesService} from "./companies.service";

@Controller('companies')
export class CompaniesController {
    constructor(private readonly companiesService: CompaniesService) {}

    @Get()
    async findAll(@Req() request: Request): Promise<object> {
        try {
            return await this.companiesService.fetchAll();
        } catch (e) {
            return {
                status: false,
                message: e.message
            }
        }
    }

    @Post()
    async create(@Body() body: CreateCompaniesDto): Promise<object> {
        try {
            if (!body.name) throw new Error('name is required');
            return await this.companiesService.create(`${body.name} ${Date.now()}`);
        } catch (e) {
            return {
                status: false,
                message: e.message
            }
        }
    }
}
