import { Controller, Get, Post, Req, Body } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { CreateLeadDto } from "./dto/leads.create";

@Controller('leads')
export class LeadsController {
    constructor(private readonly leadsService: LeadsService) {}

    @Get()
    async findAll(@Req() request: Request): Promise<object> {
        try {
            return await this.leadsService.fetchAll();
        } catch (e) {
            return {
                status: false,
                message: e.message
            }
        }
    }

    @Post()
    async create(@Body() body: CreateLeadDto): Promise<object> {
        try {
            if (!body.name) throw new Error('name is required');
            return await this.leadsService.create(`${body.name} ${Date.now()}`);
        } catch (e) {
            return {
                status: false,
                message: e.message
            }
        }
    }
}
