import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { LeadsController } from './leads/leads.controller';
import { ContactsController } from './contacts/contacts.controller';
import { CompaniesController } from './companies/companies.controller';
import { LeadsService } from './leads/leads.service';
import { CompaniesService } from "./companies/companies.service";
import { ContactsService } from "./contacts/contacts.service";

@Module({
  imports: [],
  controllers: [AppController, LeadsController, ContactsController, CompaniesController],
  providers: [AppService, LeadsService, CompaniesService, ContactsService],
})
export class AppModule {}
