import ExampleRepository from '../repository/example.repository';
import { ExampleDto } from '../dto/example.dto';
import { ExampleRequestDto } from "../dto/example.request-dto";

export class ExampleService {
    private readonly exampleRepository: ExampleRepository = new ExampleRepository();

    async findMany(): Promise<ExampleDto[]> {
        const list = await this.exampleRepository.findMany();

        return list.map(example => new ExampleDto(example));
    }

    findUnique(name: string) {
        return this.exampleRepository.findUnique(name);
    }

    findFirst(name: string) {
        return this.exampleRepository.findFirst(name);
    }

    create(dto: ExampleRequestDto) {
        return this.exampleRepository.create(dto);
    }

    update(dto: ExampleRequestDto) {
        return this.exampleRepository.update(dto);
    }

    upsert(dto: ExampleRequestDto) {
        return this.exampleRepository.upsert(dto);
    }

    delete(name: string) {
        return this.exampleRepository.delete(name);
    }
}