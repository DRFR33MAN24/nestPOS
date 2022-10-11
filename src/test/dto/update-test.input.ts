import { CreateTestInput } from './create-test.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateTestInput extends PartialType(CreateTestInput) {
  id: number;
}
