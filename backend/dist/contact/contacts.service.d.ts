import { Repository } from 'typeorm';
import { Form } from './contact.entity';
export declare class ContactsService {
    private formRepository;
    constructor(formRepository: Repository<Form>);
    findAll(): Promise<Form[]>;
    findOne(id: number): Promise<Form>;
    createForm(form: Form): Promise<Form>;
}
