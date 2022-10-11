import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TestService } from './test.service';
import { CreateTestInput } from './dto/create-test.input';
import { UpdateTestInput } from './dto/update-test.input';

@Resolver('Test')
export class TestResolver {
  constructor(private readonly testService: TestService) {}

  @Mutation('createTest')
  create(@Args('createTestInput') createTestInput: CreateTestInput) {
    return this.testService.create(createTestInput);
  }

  @Query('test')
  findAll() {
    return this.testService.findAll();
  }

  @Query('test')
  findOne(@Args('id') id: number) {
    return this.testService.findOne(id);
  }

  @Mutation('updateTest')
  update(@Args('updateTestInput') updateTestInput: UpdateTestInput) {
    return this.testService.update(updateTestInput.id, updateTestInput);
  }

  @Mutation('removeTest')
  remove(@Args('id') id: number) {
    return this.testService.remove(id);
  }
}
