export class ExampleDto {
    name: string;
    age: number;
    example2: any;

    constructor(example) {
        this.name = example.name;
        this.age = example.age;
        this.example2 = example.example2;
    }
}