import { Test, TestingModule } from '@nestjs/testing';
import { UpdateKilometersService } from './update-kilometers.service';

describe('UpdateKilometersService', () => {
  let service: UpdateKilometersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateKilometersService],
    }).compile();

    service = module.get<UpdateKilometersService>(UpdateKilometersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
