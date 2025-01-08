import { Test, TestingModule } from '@nestjs/testing';
import { ChangeStatusAccountService } from './change-status-account.service';

describe('ChangeStatusAccountService', () => {
  let service: ChangeStatusAccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChangeStatusAccountService],
    }).compile();

    service = module.get<ChangeStatusAccountService>(ChangeStatusAccountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
