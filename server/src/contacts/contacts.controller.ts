import { Controller, Get, Post, Req, Body } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactsDto } from "./dto/contacts.create";

@Controller('contacts')
export class ContactsController {
    constructor(private readonly contactsService: ContactsService) {}

    @Get()
    async findAll(@Req() request: Request): Promise<object> {
        try {
            return await this.contactsService.fetchAll();
        } catch (e) {
            return {
                status: false,
                message: e.message
            }
        }
    }

    @Post()
    async create(@Body() body: CreateContactsDto): Promise<object> {
        try {
            if (!body.name) throw new Error('name is required');
            return await this.contactsService.create(`${body.name} ${Date.now()}`);
        } catch (e) {
            return {
                status: false,
                message: e.message
            }
        }
    }
}
