import { Form } from './contact.entity';
import { ContactsService } from './contacts.service';
export declare class ContactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
    createForm(response: any, form: Form): Promise<any>;
    fetchAll(response: any): Promise<any>;
    findById(response: any, id: any): Promise<any>;
}
