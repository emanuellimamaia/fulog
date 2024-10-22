import { Test, TestingModule } from '@nestjs/testing';
import { IndexLogsController } from './index-logs.controller';

describe('IndexLogsController', () => {
  let controller: IndexLogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IndexLogsController],
    }).compile();

    controller = module.get<IndexLogsController>(IndexLogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
