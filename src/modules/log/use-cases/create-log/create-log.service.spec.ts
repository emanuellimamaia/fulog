import { Test, TestingModule } from '@nestjs/testing';
import { CreateLogService } from './create-log.service';

describe('CreateLogService', () => {
  let service: CreateLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateLogService],
    }).compile();

    service = module.get<CreateLogService>(CreateLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
