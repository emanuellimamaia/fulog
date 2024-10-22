import { Test, TestingModule } from '@nestjs/testing';
import { CreateLogController } from './create-log.controller';

describe('CreateLogController', () => {
  let controller: CreateLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateLogController],
    }).compile();

    controller = module.get<CreateLogController>(CreateLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
